
var itineraire = function(pointDepart, pointArrive){

	var pointDepart = nomToObject(pointDepart).identifiant;
	var pointArrive = nomToObject(pointArrive).identifiant;

	var carte = planMetro()();

	var indiceDepart = 0;

	var s1 = pointDepart.split("/")[0];
	var s2 = pointArrive.split("/")[0];
	for(var a in carte){
		if(a == pointDepart){
			for(var b in carte[a]){
				if(b.split("/")[0] == s1){
					carte[a][b] = 0;
				}
			}
		}
		if(a == pointArrive){
			for(var b in carte[a]){
				if(b.split("/")[0] == s2){
					carte[a][b] = 0;
				}
			}
		}
	}

	
	var graph = new Graph(carte);
	var res = graph.findShortestPath(pointDepart, pointArrive);
	var tabs = [];
	if(res != null && res.length > 1){
		for(var i=0; i < res.length ;i++){
			spl = res[i].split("/");
			obj = idToObject(res[i]);
			tabs.push([obj, obj.ligne, spl[1]]);
		}

		if(tabs[0][0].nom == tabs[1][0].nom) tabs.shift();
		
		var depart = tabs[0][0].nom;
		var ligneTexte = tabs[0][1].nom;
		var ligne = tabs[0][2];
		var sens = direction(ligne, depart, tabs[1][0]).nom;
		var etape = 0;

		var resultat = [[ligneTexte,sens]];

		//var str = "Prendre la ligne " + ligneTexte + " vers " + sens + ", jusqu'à ";

		for(var i=1; i < tabs.length-1 ;i++){
			if(ligne != tabs[i][2]){
				ligneTexte = tabs[i][1].nom;
				ligne = tabs[i][2];
				sens = direction(ligne, tabs[i][0], tabs[i+1][0]).nom;
				resultat[etape].push(tabs[i-1][0]);
				resultat.push([ligneTexte,sens]);
				//str += tabs[i-1][0] + "\nPrendre la ligne " + ligneTexte + " vers " + sens + ", jusqu'à ";
				etape++;
			}
		}
		str += tabs[tabs.length-1][0] + "\n";
		resultat[resultat.length-1].push(tabs[tabs.length-1][0]);

		//console.log(str);
		//console.log(resultat + "");

		return [resultat, tabs];
	}else{
		return [];
	}
}