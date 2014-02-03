// CONSTRUCTEUR STATION

function Station(identifiant, nom, ligne, voisins){
	this.identifiant = identifiant;
	this.nom = nom;
	this.ligne = ligne;
	this.voisins = voisins;
}

// NOMS COMPLET DES STATIONS

var la_defense = "La Défense";
var esplanade_de_la_defense = "Esplanade de La Défense";
var pont_de_neuilly = "Pont de Neuilly";
var les_sablons = "Les Sablons";
var porte_maillot = "Porte Maillot";
var argentine = "Argentine";
var charles_de_gaulle_etoile = "Charles de Gaulle - Étoile";
var georges_v = "Georges V";
var franklin_d_roosevelt = "Franklin D. Roosevelt";
var champs_elysees_clemenceau = "Champs-Élysées - Clemenceau";
var concorde = "Concorde";
var tuileries = "Tuileries";
var palais_royal_musee_du_louvre = "Palais Royal - Musée du Louvre";
var louvre_rivoli = "Louvre - Rivoli";
var chatelet = "Châtelet";
var hotel_de_ville = "Hôtel de Ville";
var saint_paul = "Saint-Paul";
var bastille = "Bastille";
var gare_de_lyon = "Gare de Lyon";
var reuilly_diderot = "Reuilly - Diderot";
var nation = "Nation";
var porte_de_vincennes = "Porte de Vincennes";
var saint_mande = "Saint-Mandé";
var berault = "Bérault";
var chateau_de_vincennes = "Château de Vincennes";
var porte_dauphine = "Porte Dauphine";
var victor_hugo = "Victor Hugo";
var ternes = "Ternes";
var courcelles = "Courcelles";
var monceau = "Monceau";
var villiers = "Villiers";
var rome = "Rome";
var place_de_clichy = "Place de Clichy";
var blanche = "Blanche";
var pigalle = "Pigalle";
var anvers = "Anvers";
var barbes_rochechouart = "Barbès - Rochechouart";
var la_chapelle = "La Chapelle";
var stalingrad = "Stalingrad";
var jaures = "Jaurès";
var colonel_fabien = "Colonel Fabien";
var belleville = "Belleville";
var couronnes = "Couronnes";
var menilmontant = "Ménilmontant";
var pere_lachaise = "Père Lachaise";
var philippe_auguste = "Philippe Auguste";
var alexandre_dumas = "Alexandre Dumas";
var avron = "Avron";
var pont_de_levallois_becon = "Pont de Levallois - Bécon";
var anatole_france = "Anatole France";
var louise_michel = "Louise Michel";
var porte_de_champerret = "Porte de Champerret";
var pereire = "Pereire";
var wagram = "Wagram";
var malesherbes = "Malesherbes";
var europe = "Europe";
var saint_lazare = "Saint-Lazare";
var havre_caumartin = "Havre - Caumartin";
var opera = "Opéra";
var quatre_septembre = "Quatre-Septembre";
var bourse = "Bourse";
var sentier = "Sentier";
var reaumur_sebastopol = "Réaumur - Sébastopol";
var arts_et_metiers = "Arts et Métiers";
var temple = "Temple";
var republique = "République";
var parmentier = "Parmentier";
var rue_saint_maur = "Rue Saint-Maur";
var gambetta = "Gambetta";
var porte_de_bagnolet = "Porte de Bagnolet";
var gallieni = "Gallieni";
var pelleport = "Pelleport";
var saint_fargeau = "Saint-Fargeau";
var porte_des_lilas = "Porte des Lilas";
var porte_de_clignancourt = "Porte de Clignancourt";
var simplon = "Simplon";
var marcadet_poissonniers = "Marcadet - Poissonniers";
var chateau_rouge = "Château Rouge";
var gare_du_nord = "Gare du Nord";
var gare_de_l_est = "Gare de l'Est";
var chateau_d_eau = "Château d'Eau";
var strasbourg_saint_denis = "Strasbourg - Saint-Denis";
var etienne_marcel = "Étienne Marcel";
var les_halles = "Les Halles";
var cite = "Cité";
var saint_michel = "Saint-Michel";
var odeon = "Odéon";
var saint_germain_des_pres = "Saint-Germain-des-Prés";
var saint_sulpice = "Saint-Sulpice";
var saint_placide = "Saint-Placide";
var montparnasse_bienvenue = "Montparnasse - Bienvenüe";
var valvin = "Vavin";
var raspail = "Raspail";
var denfert_rochereau = "Denfert-Rochereau";
var mouton_duvernet = "Mouton-Duvernet";
var alesia = "Alésia";
var porte_d_orleans = "Porte d'Orléans";
var mairie_de_montrouge = "Mairie de Montrouge";
var bobigny_pablo_picasso = "Bobigny - Pablo Picasso";
var bobigny_pantin_raymond_queneau = "Bobigny - Pantin - Raymond Queneau";
var eglise_de_pantin = "Église de Pantin";
var hoche = "Hoche";
var porte_de_pantin = "Porte de Pantin";
var ourcq = "Ourcq";
var laumiere = "Laumière";
var jacques_bonsergent = "Jacques Bonsergent";
var oberkampf = "Oberkampf";
var richard_lenoir = "Richard-Lenoir";
var breguet_sabin = "Bréguet - Sabin";
var quai_de_la_rapee = "Quai de la Rapée";
var gare_d_austerlitz = "Gare d'Austerlitz";
var saint_marcel = "Saint-Marcel";
var campo_formio = "Campo-Formio";
var place_d_italie = "Place d'Italie";
var kleber = "Kléber";
var boissiere = "Boissière";
var passy = "Passy";
var bir_hakeim = "Bir-Hakeim";
var dupleix = "Dupleix";
var la_motte_picquet_grenelle = "La Motte-Picquet - Grenelle";
var cambronne = "Cambronne";
var sevres_lecourbe = "Sèvres - Lecourbe";
var pasteur = "Pasteur";
var edgar_quinet = "Edgar Quinet";
var saint_jacques = "Saint-Jacques";
var glaciere = "Glacière";
var corvisart = "Corvisart";
var nationale = "Nationale";
var quai_de_la_gare = "Quai de la Gare";
var bercy = "Bercy";
var dugommier = "Dugommier";
var daumesnil = "Daumesnil";
var bel_air = "Bel-Air";
var picpus = "Picpus";
var la_courneuve_8_mai_1945 = "La Courneuve - 8 Mai 1945";
var fort_d_aubervilliers = "Fort d'Aubervilliers";
var aubervilliers_pantin_quatre_chemins = "Aubervilliers - Pantin - Quatre Chemins";
var porte_de_la_villette = "Porte de la Villette";
var corentin_cariou = "Corentin Cariou";
var crimee = "Crimée";
var riquet = "Riquet";
var louis_blanc = "Louis Blanc";
var chateau_landon = "Château-Landon";
var poissonniere = "Poissonnière";
var cadet = "Cadet";
var le_peletier = "Le Peletier";
var chaussee_d_antin_la_fayette = "Chaussée d'Antin - La Fayette";
var pyramides = "Pyramides";
var pont_neuf = "Pont Neuf";
var pont_marie = "Pont Marie";
var sully_morland = "Sully - Morland";
var jussieu = "Jussieu";
var place_monge = "Place Monge";
var censier_daubenton = "Censier - Daubenton";
var les_gobelins = "Les Gobelins";
var tolbiac = "Tolbiac";
var maison_blanche = "Maison Blanche";
var le_kremlin_bicetre = "Le Kremlin-Bicêtre";
var villejuif_leo_lagrange = "Villejuif - Léo Lagrange";
var villejuif_paul_vaillant_couturier = "Villejuif - Paul Vaillant-Couturier";
var villejuif_louis_aragon = "Villejuif - Louis Aragon";
var porte_d_italie = "Porte d'Italie";
var porte_de_choisy = "Porte de Choisy";
var porte_d_ivry = "Porte d'Ivry";
var pierre_et_marie_curie = "Pierre et Marie Curie";
var mairie_d_ivry = "Mairie d'Ivry";
var bolivar = "Bolivar";
var buttes_chaumont = "Buttes Chaumont";
var botzaris = "Botzaris";
var place_des_fetes = "Place des Fêtes";
var pre_saint_gervais = "Pré Saint-Gervais";
var danube = "Danube";
var balard = "Balard";
var lourmel = "Lourmel";
var boucicaut = "Boucicaut";
var felix_faure = "Félix Faure";
var commerce = "Commerce";
var ecole_militaire = "École Militaire";
var la_tour_maubourg = "La Tour-Maubourg";
var invalides = "Invalides";
var madeleine = "Madeleine";
var richelieu_drouot = "Richelieu - Drouot";
var grands_boulevards = "Grands Boulevards";
var bonne_nouvelle = "Bonne-Nouvelle";
var filles_du_calvaire = "Filles du Calvaire";
var saint_sebastien_froissart = "Saint-Sébastien - Froissart";
var chemin_vert = "Chemin Vert";
var ledru_rollin = "Ledru-Rollin";
var faidherbe_chaligny = "Faidherbe - Chaligny";
var montgallet = "Montgallet";
var michel_bizot = "Michel Bizot";
var porte_doree = "Porte Dorée";
var porte_de_charenton = "Porte de Charenton";
var liberte = "Liberté";
var charenton_ecoles = "Charenton - Écoles";
var ecole_veterinaire_de_maisons_alfort = "École vétérinaire de Maisons-Alfort";
var maisons_alfort_stade = "Maisons-Alfort - Stade";
var maisons_alfort_les_juilliottes = "Maisons-Alfort - Les Juilliottes";
var creteil_l_echat = "Créteil - L'Échat";
var creteil_universite = "Créteil - Université";
var creteil_prefecture = "Créteil - Préfecture";
var pointe_du_lac = "Pointe du Lac";
var pont_de_sevres = "Pont de Sèvres";
var billancourt = "Billancourt";
var marcel_sembat = "Marcel Sembat";
var porte_de_saint_cloud = "Porte de Saint-Cloud";
var exelmans = "Exelmans";
var michel_ange_molitor = "Michel-Ange - Molitor";
var michel_ange_auteuil = "Michel-Ange - Auteuil";
var jasmin = "Jasmin";
var ranelagh = "Ranelagh";
var la_muette = "La Muette";
var rue_de_la_pompe = "Rue de la Pompe";
var trocadero = "Trocadéro";
var iena = "Iéna";
var alma_marceau = "Alma - Marceau";
var saint_philippe_du_roule = "Saint-Philippe du Roule";
var miromesnil = "Miromesnil";
var saint_augustin = "Saint-Augustin";
var havre_caumartin = "Havre - Caumartin";
var saint_ambroise = "Saint-Ambroise";
var voltaire = "Voltaire";
var charonne = "Charonne";
var rue_des_boulets = "Rue des Boulets";
var buzenval = "Buzenval";
var maraichers = "Maraîchers";
var porte_de_montreuil = "Porte de Montreuil";
var robespierre = "Robespierre";
var croix_de_chavaux = "Croix de Chavaux";
var mairie_de_montreuil = "Mairie de Montreuil";
var boulogne_pont_de_saint_cloud = "Boulogne - Pont de Saint-Cloud";
var boulogne_jean_jaures = "Boulogne - Jean Jaurès";
var chardon_lagache = "Chardon-Lagache";
var mirabeau = "Mirabeau";
var javel_andre_citroen = "Javel - André Citroën";
var charles_michels = "Charles Michels";
var avenue_emile_zola = "Avenue Émile-Zola";
var segur = "Ségur";
var duroc = "Duroc";
var vaneau = "Vaneau";
var sevres_babylone = "Sèvres - Babylone";
var mabillon = "Mabillon";
var cluny_la_sorbonne = "Cluny - La Sorbonne";
var maubert_mutualite = "Maubert - Mutualité";
var cardinal_lemoine = "Cardinal Lemoine";
var porte_d_auteuil = "Porte d'Auteuil";
var eglise_d_auteuil = "Église d'Auteuil";
var rambuteau = "Rambuteau";
var goncourt = "Goncourt";
var pyrenees = "Pyrénées";
var jourdain = "Jourdain";
var telegraphe = "Télégraphe";
var porte_des_lilas = "Porte des Lilas";
var mairie_des_lilas = "Mairie des Lilas";
var front_populaire = "Front Populaire";
var porte_de_la_chapelle = "Porte de la Chapelle";
var marx_dormoy = "Marx Dormoy";
var jules_joffrin = "Jules Joffrin";
var lamarck_caulaincourt = "Lamarck - Caulaincourt";
var abbesses = "Abbesses";
var saint_georges = "Saint-Georges";
var notre_dame_de_lorette = "Notre-Dame-de-Lorette";
var trinite_d_estienne_d_orves = "Trinité - d'Estienne d'Orves";
var assemblee_nationale = "Assemblée nationale";
var solferino = "Solférino";
var rue_du_bac = "Rue du Bac";
var rennes = "Rennes";
var notre_dame_des_champs = "Notre-Dame-des-Champs";
var falguiere = "Falguière";
var volontaires = "Volontaires";
var vaugirard = "Vaugirard";
var convention = "Convention";
var porte_de_versailles = "Porte de Versailles";
var corentin_celton = "Corentin Celton";
var mairie_d_issy = "Mairie d'Issy";
var asnieres_gennevilliers_les_courtilles = "Asnières - Gennevilliers - Les Courtilles";
var les_agnettes = "Les Agnettes";
var gabriel_peri = "Gabriel Péri";
var mairie_de_clichy = "Mairie de Clichy";
var porte_de_clichy = "Porte de Clichy";
var brochant = "Brochant";
var la_fourche = "La Fourche";
var liege = "Liège";
var varenne = "Varenne";
var saint_francois_xavier = "Saint-François-Xavier";
var gaite = "Gaîté";
var pernety = "Pernety";
var plaisance = "Plaisance";
var porte_de_vanves = "Porte de Vanves";
var malakoff_plateau_de_vanves = "Malakoff - Plateau de Vanves";
var malakoff_rue_etienne_dolet = "Malakoff - Rue Étienne-Dolet";
var chatillon_montrouge = "Châtillon - Montrouge";
var saint_denis_universite = "Saint-Denis - Université";
var basilique_de_saint_denis = "Basilique de Saint-Denis";
var saint_denis_porte_de_paris = "Saint-Denis - Porte de Paris";
var carrefour_pleyel = "Carrefour Pleyel";
var mairie_de_saint_ouen = "Mairie de Saint-Ouen";
var garibaldi = "Garibaldi";
var porte_de_saint_ouen = "Porte de Saint-Ouen";
var guy_moquet = "Guy Môquet";
var cour_saint_emilion = "Cour Saint-Émilion";
var bibliotheque_francois_mitterrand = "Bibliothèque François-Mitterrand";
var olympiades = "Olympiades";
var chevaleret = "Chevaleret";

// NOM COMPLET DES LIGNES

var l1 = "1";
var l2 = "2";
var l3 = "3";
var l3bis = "3 bis";
var l4 = "4";
var l5 = "5";
var l6 = "6";
var l7 = "7";
var l7bis = "7 bis";
var l8 = "8";
var l9 = "9";
var l10 = "10";
var l11 = "11";
var l12 = "12";
var l13 = "13";
var l14 = "14";

// LIGNES DE METRO

var m1 = [la_defense, esplanade_de_la_defense, pont_de_neuilly, les_sablons, porte_maillot, argentine, charles_de_gaulle_etoile, georges_v, franklin_d_roosevelt, champs_elysees_clemenceau, concorde, tuileries, palais_royal_musee_du_louvre, louvre_rivoli, chatelet, hotel_de_ville, saint_paul, bastille, gare_de_lyon, reuilly_diderot, nation, porte_de_vincennes, saint_mande, berault, chateau_de_vincennes]
var m2 = [porte_dauphine, victor_hugo, charles_de_gaulle_etoile, ternes, courcelles, monceau, villiers, rome, place_de_clichy, blanche, pigalle, anvers, barbes_rochechouart, la_chapelle, stalingrad, jaures, colonel_fabien, belleville, couronnes, menilmontant, pere_lachaise, philippe_auguste, alexandre_dumas, avron, nation];
var m3 = [pont_de_levallois_becon, anatole_france, louise_michel, porte_de_champerret, pereire, wagram, malesherbes, villiers, europe, saint_lazare, havre_caumartin, opera, quatre_septembre, bourse, sentier, reaumur_sebastopol, arts_et_metiers, temple, republique, parmentier, rue_saint_maur, pere_lachaise, gambetta, porte_de_bagnolet, gallieni];
var m3bis = [gambetta, pelleport, saint_fargeau, porte_des_lilas];
var m4 = [porte_de_clignancourt, simplon, marcadet_poissonniers, chateau_rouge, barbes_rochechouart, gare_du_nord, gare_de_l_est, chateau_d_eau, strasbourg_saint_denis, reaumur_sebastopol, etienne_marcel, les_halles, chatelet, cite, saint_michel, odeon, saint_germain_des_pres, saint_sulpice, saint_placide, montparnasse_bienvenue, valvin, raspail, denfert_rochereau, mouton_duvernet, alesia, porte_d_orleans, mairie_de_montrouge];
var m5 = [bobigny_pablo_picasso, bobigny_pantin_raymond_queneau, eglise_de_pantin, hoche, porte_de_pantin, ourcq, laumiere, jaures, stalingrad, gare_du_nord, gare_de_l_est, jacques_bonsergent, republique, oberkampf, richard_lenoir, breguet_sabin, bastille, quai_de_la_rapee, gare_d_austerlitz, saint_marcel, campo_formio, place_d_italie];
var m6 = [charles_de_gaulle_etoile, kleber, boissiere, trocadero, passy, bir_hakeim, dupleix, la_motte_picquet_grenelle, cambronne, sevres_lecourbe, pasteur, montparnasse_bienvenue, edgar_quinet, raspail, denfert_rochereau, saint_jacques, glaciere, corvisart, place_d_italie, nationale, chevaleret, quai_de_la_gare, bercy, dugommier, daumesnil, bel_air, picpus, nation];
var m7a = [la_courneuve_8_mai_1945, fort_d_aubervilliers, aubervilliers_pantin_quatre_chemins, porte_de_la_villette, corentin_cariou, crimee, riquet, stalingrad, louis_blanc, chateau_landon, gare_de_l_est, poissonniere, cadet, le_peletier, chaussee_d_antin_la_fayette, opera, pyramides, palais_royal_musee_du_louvre, pont_neuf, chatelet, pont_marie, sully_morland, jussieu, place_monge, censier_daubenton, les_gobelins, place_d_italie, tolbiac, maison_blanche, le_kremlin_bicetre, villejuif_leo_lagrange, villejuif_paul_vaillant_couturier, villejuif_louis_aragon];
var m7b = [la_courneuve_8_mai_1945, fort_d_aubervilliers, aubervilliers_pantin_quatre_chemins, porte_de_la_villette, corentin_cariou, crimee, riquet, stalingrad, louis_blanc, chateau_landon, gare_de_l_est, poissonniere, cadet, le_peletier, chaussee_d_antin_la_fayette, opera, pyramides, palais_royal_musee_du_louvre, pont_neuf, chatelet, pont_marie, sully_morland, jussieu, place_monge, censier_daubenton, les_gobelins, place_d_italie, tolbiac, maison_blanche, porte_d_italie, porte_de_choisy, porte_d_ivry, pierre_et_marie_curie, mairie_d_ivry];
var m7bisa = [louis_blanc, jaures, bolivar, buttes_chaumont, botzaris, place_des_fetes, pre_saint_gervais];
var m7bisb = [louis_blanc, jaures, bolivar, buttes_chaumont, botzaris, danube, pre_saint_gervais];
var m8 = [balard, lourmel, boucicaut, felix_faure, commerce, la_motte_picquet_grenelle, ecole_militaire, la_tour_maubourg, invalides, concorde, madeleine, opera, richelieu_drouot, grands_boulevards, bonne_nouvelle, strasbourg_saint_denis, republique, filles_du_calvaire, saint_sebastien_froissart, chemin_vert, bastille, ledru_rollin, faidherbe_chaligny, reuilly_diderot, montgallet, daumesnil, michel_bizot, porte_doree, porte_de_charenton, liberte, charenton_ecoles, ecole_veterinaire_de_maisons_alfort, maisons_alfort_stade, maisons_alfort_les_juilliottes, creteil_l_echat, creteil_universite, creteil_prefecture, pointe_du_lac];
var m9 = [pont_de_sevres, billancourt, marcel_sembat, porte_de_saint_cloud, exelmans, michel_ange_molitor, michel_ange_auteuil, jasmin, ranelagh, la_muette, rue_de_la_pompe, trocadero, iena, alma_marceau, franklin_d_roosevelt, saint_philippe_du_roule, miromesnil, saint_augustin, havre_caumartin, chaussee_d_antin_la_fayette, richelieu_drouot, grands_boulevards, bonne_nouvelle, strasbourg_saint_denis, republique, oberkampf, saint_ambroise, voltaire, charonne, rue_des_boulets, nation, buzenval, maraichers, porte_de_montreuil, robespierre, croix_de_chavaux, mairie_de_montreuil];
var m10a = [boulogne_pont_de_saint_cloud, boulogne_jean_jaures, michel_ange_molitor, chardon_lagache, mirabeau, javel_andre_citroen, charles_michels, avenue_emile_zola, la_motte_picquet_grenelle, segur, duroc, vaneau, sevres_babylone, mabillon, odeon, cluny_la_sorbonne, maubert_mutualite, cardinal_lemoine, jussieu, gare_d_austerlitz];
var m10b = [boulogne_pont_de_saint_cloud, boulogne_jean_jaures, porte_d_auteuil, michel_ange_auteuil, eglise_d_auteuil, javel_andre_citroen, charles_michels, avenue_emile_zola, la_motte_picquet_grenelle, segur, duroc, vaneau, sevres_babylone, mabillon, odeon, cluny_la_sorbonne, maubert_mutualite, cardinal_lemoine, jussieu, gare_d_austerlitz];
var m11 = [chatelet, hotel_de_ville, rambuteau, arts_et_metiers, republique, goncourt, belleville, pyrenees, jourdain, place_des_fetes, telegraphe, porte_des_lilas, mairie_des_lilas];
var m12 = [front_populaire, porte_de_la_chapelle, marx_dormoy, marcadet_poissonniers, jules_joffrin, lamarck_caulaincourt, abbesses, pigalle, saint_georges, notre_dame_de_lorette, trinite_d_estienne_d_orves, saint_lazare, madeleine, concorde, assemblee_nationale, solferino, rue_du_bac, sevres_babylone, rennes, notre_dame_des_champs, montparnasse_bienvenue, falguiere, pasteur, volontaires, vaugirard, convention, porte_de_versailles, corentin_celton, mairie_d_issy];
var m13a = [asnieres_gennevilliers_les_courtilles, les_agnettes, gabriel_peri, mairie_de_clichy, porte_de_clichy, brochant, la_fourche, place_de_clichy, liege, saint_lazare, miromesnil, champs_elysees_clemenceau, invalides, varenne, saint_francois_xavier, duroc, montparnasse_bienvenue, gaite, pernety, plaisance, porte_de_vanves, malakoff_plateau_de_vanves, malakoff_rue_etienne_dolet, chatillon_montrouge];
var m13b = [saint_denis_universite, basilique_de_saint_denis, saint_denis_porte_de_paris, carrefour_pleyel, mairie_de_saint_ouen, garibaldi, porte_de_saint_ouen, guy_moquet, la_fourche, place_de_clichy, liege, saint_lazare, miromesnil, champs_elysees_clemenceau, invalides, varenne, saint_francois_xavier, duroc, montparnasse_bienvenue, gaite, pernety, plaisance, porte_de_vanves, malakoff_plateau_de_vanves, malakoff_rue_etienne_dolet, chatillon_montrouge];
var m14 = [saint_lazare, madeleine, pyramides, chatelet, gare_de_lyon, bercy, cour_saint_emilion, bibliotheque_francois_mitterrand, olympiades];

// COUT DES DEPLACEMENTS ENTRE STATIONS

var DIR = 1;
var COR = 5;
var CORL = 10;

// CREATION DES OBJETS STATIONS (ID, NOM COMPLET, LIGNE)

var la_defense_m1 = new Station("la_defense/M1", la_defense, l1);
var esplanade_de_la_defense_m1 = new Station("esplanade_de_la_defense/M1", esplanade_de_la_defense, l1);
var pont_de_neuilly_m1 = new Station("pont_de_neuilly/M1", pont_de_neuilly, l1);
var les_sablons_m1 = new Station("les_sablons/M1", les_sablons, l1);
var porte_maillot_m1 = new Station("porte_maillot/M1", porte_maillot, l1);
var argentine_m1 = new Station("argentine/M1", argentine, l1);
var charles_de_gaulle_etoile_m1 = new Station("charles_de_gaulle_etoile/M1", charles_de_gaulle_etoile, l1);
var georges_v_m1 = new Station("georges_v/M1", georges_v, l1);
var franklin_d_roosevelt_m1 = new Station("franklin_d_roosevelt/M1", franklin_d_roosevelt, l1);
var champs_elysees_clemenceau_m1 = new Station("champs_elysees_clemenceau/M1", champs_elysees_clemenceau, l1);
var concorde_m1 = new Station("concorde/M1", concorde, l1);
var tuileries_m1 = new Station("tuileries/M1", tuileries, l1);
var palais_royal_musee_du_louvre_m1 = new Station("palais_royal_musee_du_louvre/M1", palais_royal_musee_du_louvre, l1);
var louvre_rivoli_m1 = new Station("louvre_rivoli/M1", louvre_rivoli, l1);
var chatelet_m1 = new Station("chatelet/M1", chatelet, l1);
var hotel_de_ville_m1 = new Station("hotel_de_ville/M1", hotel_de_ville, l1);
var saint_paul_m1 = new Station("saint_paul/M1", saint_paul, l1);
var bastille_m1 = new Station("bastille/M1", bastille, l1);
var gare_de_lyon_m1 = new Station("gare_de_lyon/M1", gare_de_lyon, l1);
var reuilly_diderot_m1 = new Station("reuilly_diderot/M1", reuilly_diderot, l1);
var nation_m1 = new Station("nation/M1", nation, l1);
var porte_de_vincennes_m1 = new Station("porte_de_vincennes/M1", porte_de_vincennes, l1);
var saint_mande_m1 = new Station("saint_mande/M1", saint_mande, l1);
var berault_m1 = new Station("berault/M1", berault, l1);
var chateau_de_vincennes_m1 = new Station("chateau_de_vincennes/M1", chateau_de_vincennes, l1);

var porte_dauphine_m2 = new Station("porte_dauphine/M2", porte_dauphine, l2);
var victor_hugo_m2 = new Station("victor_hugo/M2", victor_hugo, l2);
var charles_de_gaulle_etoile_m2 = new Station("charles_de_gaulle_etoile/M2", charles_de_gaulle_etoile, l2);
var ternes_m2 = new Station("ternes/M2", ternes, l2);
var courcelles_m2 = new Station("courcelles/M2", courcelles, l2);
var monceau_m2 = new Station("monceau/M2", monceau, l2);
var villiers_m2 = new Station("villiers/M2", villiers, l2);
var rome_m2 = new Station("rome/M2", rome, l2);
var place_de_clichy_m2 = new Station("place_de_clichy/M2", place_de_clichy, l2);
var blanche_m2 = new Station("blanche/M2", blanche, l2);
var pigalle_m2 = new Station("pigalle/M2", pigalle, l2);
var anvers_m2 = new Station("anvers/M2", anvers, l2);
var barbes_rochechouart_m2 = new Station("barbes_rochechouart/M2", barbes_rochechouart, l2);
var la_chapelle_m2 = new Station("la_chapelle/M2", la_chapelle, l2);
var stalingrad_m2 = new Station("stalingrad/M2", stalingrad, l2);
var jaures_m2 = new Station("jaures/M2", jaures, l2);
var colonel_fabien_m2 = new Station("colonel_fabien/M2", colonel_fabien, l2);
var belleville_m2 = new Station("belleville/M2", belleville, l2);
var couronnes_m2 = new Station("couronnes/M2", couronnes, l2);
var menilmontant_m2 = new Station("menilmontant/M2", menilmontant, l2);
var pere_lachaise_m2 = new Station("pere_lachaise/M2", pere_lachaise, l2);
var philippe_auguste_m2 = new Station("philippe_auguste/M2", philippe_auguste, l2);
var alexandre_dumas_m2 = new Station("alexandre_dumas/M2", alexandre_dumas, l2);
var avron_m2 = new Station("avron/M2", avron, l2);
var nation_m2 = new Station("nation/M2", nation, l2);

var pont_de_levallois_becon_m3 = new Station("pont_de_levallois_becon/M3", pont_de_levallois_becon, l3);
var anatole_france_m3 = new Station("anatole_france/M3", anatole_france, l3);
var louise_michel_m3 = new Station("louise_michel/M3", louise_michel, l3);
var porte_de_champerret_m3 = new Station("porte_de_champerret/M3", porte_de_champerret, l3);
var pereire_m3 = new Station("pereire/M3", pereire, l3);
var wagram_m3 = new Station("wagram/M3", wagram, l3);
var malesherbes_m3 = new Station("malesherbes/M3", malesherbes, l3);
var villiers_m3 = new Station("villiers/M3", villiers, l3);
var europe_m3 = new Station("europe/M3", europe, l3);
var saint_lazare_m3 = new Station("saint_lazare/M3", saint_lazare, l3);
var havre_caumartin_m3 = new Station("havre_caumartin/M3", havre_caumartin, l3);
var opera_m3 = new Station("opera/M3", opera, l3);
var quatre_septembre_m3 = new Station("quatre_septembre/M3", quatre_septembre, l3);
var bourse_m3 = new Station("bourse/M3", bourse, l3);
var sentier_m3 = new Station("sentier/M3", sentier, l3);
var reaumur_sebastopol_m3 = new Station("reaumur_sebastopol/M3", reaumur_sebastopol, l3);
var arts_et_metiers_m3 = new Station("arts_et_metiers/M3", arts_et_metiers, l3);
var temple_m3 = new Station("temple/M3", temple, l3);
var republique_m3 = new Station("republique/M3", republique, l3);
var parmentier_m3 = new Station("parmentier/M3", parmentier, l3);
var rue_saint_maur_m3 = new Station("rue_saint_maur/M3", rue_saint_maur, l3);
var pere_lachaise_m3 = new Station("pere_lachaise/M3", pere_lachaise, l3);
var gambetta_m3 = new Station("gambetta/M3", gambetta, l3);
var porte_de_bagnolet_m3 = new Station("porte_de_bagnolet/M3", porte_de_bagnolet, l3);
var gallieni_m3 = new Station("gallieni/M3", gallieni, l3);

var gambetta_m3b = new Station("gambetta/M3bis", gambetta, l3bis);
var pelleport_m3b = new Station("pelleport/M3bis", pelleport, l3bis);
var saint_fargeau_m3b = new Station("saint_fargeau/M3bis", saint_fargeau, l3bis);
var porte_des_lilas_m3b = new Station("porte_des_lilas/M3bis", porte_des_lilas, l3bis);

var porte_de_clignancourt_m4 = new Station("porte_de_clignancourt/M4", porte_de_clignancourt, l4);
var simplon_m4 = new Station("simplon/M4", simplon, l4);
var marcadet_poissonniers_m4 = new Station("marcadet_poissonniers/M4", marcadet_poissonniers, l4);
var chateau_rouge_m4 = new Station("chateau_rouge/M4", chateau_rouge, l4);
var barbes_rochechouart_m4 = new Station("barbes_rochechouart/M4", barbes_rochechouart, l4);
var gare_du_nord_m4 = new Station("gare_du_nord/M4", gare_du_nord, l4);
var gare_de_l_est_m4 = new Station("gare_de_l_est/M4", gare_de_l_est, l4);
var chateau_d_eau_m4 = new Station("chateau_d_eau/M4", chateau_d_eau, l4);
var strasbourg_saint_denis_m4 = new Station("strasbourg_saint_denis/M4", strasbourg_saint_denis, l4);
var reaumur_sebastopol_m4 = new Station("reaumur_sebastopol/M4", reaumur_sebastopol, l4);
var etienne_marcel_m4 = new Station("etienne_marcel/M4", etienne_marcel, l4);
var les_halles_m4 = new Station("les_halles/M4", les_halles, l4);
var chatelet_m4 = new Station("chatelet/M4", chatelet, l4);
var cite_m4 = new Station("cite/M4", cite, l4);
var saint_michel_m4 = new Station("saint_michel/M4", saint_michel, l4);
var odeon_m4 = new Station("odeon/M4", odeon, l4);
var saint_germain_des_pres_m4 = new Station("saint_germain_des_pres/M4", saint_germain_des_pres, l4);
var saint_sulpice_m4 = new Station("saint_sulpice/M4", saint_sulpice, l4);
var saint_placide_m4 = new Station("saint_placide/M4", saint_placide, l4);
var montparnasse_bienvenue_m4 = new Station("montparnasse_bienvenue/M4", montparnasse_bienvenue, l4);
var valvin_m4 = new Station("valvin/M4", valvin, l4);
var raspail_m4 = new Station("raspail/M4", raspail, l4);
var denfert_rochereau_m4 = new Station("denfert_rochereau/M4", denfert_rochereau, l4);
var mouton_duvernet_m4 = new Station("mouton_duvernet/M4", mouton_duvernet, l4);
var alesia_m4 = new Station("alesia/M4", alesia, l4);
var porte_d_orleans_m4 = new Station("porte_d_orleans/M4", porte_d_orleans, l4);
var mairie_de_montrouge_m4 = new Station("mairie_de_montrouge/M4", mairie_de_montrouge, l4);

var bobigny_pablo_picasso_m5 = new Station("bobigny_pablo_picasso/M5", bobigny_pablo_picasso, l5);
var bobigny_pantin_raymond_queneau_m5 = new Station("bobigny_pantin_raymond_queneau/M5", bobigny_pantin_raymond_queneau, l5);
var eglise_de_pantin_m5 = new Station("eglise_de_pantin/M5", eglise_de_pantin, l5);
var hoche_m5 = new Station("hoche/M5", hoche, l5);
var porte_de_pantin_m5 = new Station("porte_de_pantin/M5", porte_de_pantin, l5);
var ourcq_m5 = new Station("ourcq/M5", ourcq, l5);
var laumiere_m5 = new Station("laumiere/M5", laumiere, l5);
var jaures_m5 = new Station("jaures/M5", jaures, l5);
var stalingrad_m5 = new Station("stalingrad/M5", stalingrad, l5);
var gare_du_nord_m5 = new Station("gare_du_nord/M5", gare_du_nord, l5);
var gare_de_l_est_m5 = new Station("gare_de_l_est/M5", gare_de_l_est, l5);
var jacques_bonsergent_m5 = new Station("jacques_bonsergent/M5", jacques_bonsergent, l5);
var republique_m5 = new Station("republique/M5", republique, l5);
var oberkampf_m5 = new Station("oberkampf/M5", oberkampf, l5);
var richard_lenoir_m5 = new Station("richard_lenoir/M5", richard_lenoir, l5);
var breguet_sabin_m5 = new Station("breguet_sabin/M5", breguet_sabin, l5);
var bastille_m5 = new Station("bastille/M5", bastille, l5);
var quai_de_la_rapee_m5 = new Station("quai_de_la_rapee/M5", quai_de_la_rapee, l5);
var gare_d_austerlitz_m5 = new Station("gare_d_austerlitz/M5", gare_d_austerlitz, l5);
var saint_marcel_m5 = new Station("saint_marcel/M5", saint_marcel, l5);
var campo_formio_m5 = new Station("campo_formio/M5", campo_formio, l5);
var place_d_italie_m5 = new Station("place_d_italie/M5", place_d_italie, l5);

var charles_de_gaulle_etoile_m6 = new Station("charles_de_gaulle_etoile/M6", charles_de_gaulle_etoile, l6);
var kleber_m6 = new Station("kleber/M6", kleber, l6);
var boissiere_m6 = new Station("boissiere/M6", boissiere, l6);
var trocadero_m6 = new Station("trocadero/M6", trocadero, l6);
var passy_m6 = new Station("passy/M6", passy, l6);
var bir_hakeim_m6 = new Station("bir_hakeim/M6", bir_hakeim, l6);
var dupleix_m6 = new Station("dupleix/M6", dupleix, l6);
var la_motte_picquet_grenelle_m6 = new Station("la_motte_picquet_grenelle/M6", la_motte_picquet_grenelle, l6);
var cambronne_m6 = new Station("cambronne/M6", cambronne, l6);
var sevres_lecourbe_m6 = new Station("sevres_lecourbe/M6", sevres_lecourbe, l6);
var pasteur_m6 = new Station("pasteur/M6", pasteur, l6);
var montparnasse_bienvenue_m6 = new Station("montparnasse_bienvenue/M6", montparnasse_bienvenue, l6);
var edgar_quinet_m6 = new Station("edgar_quinet/M6", edgar_quinet, l6);
var raspail_m6 = new Station("raspail/M6", raspail, l6);
var denfert_rochereau_m6 = new Station("denfert_rochereau/M6", denfert_rochereau, l6);
var saint_jacques_m6 = new Station("saint_jacques/M6", saint_jacques, l6);
var glaciere_m6 = new Station("glaciere/M6", glaciere, l6);
var corvisart_m6 = new Station("corvisart/M6", corvisart, l6);
var place_d_italie_m6 = new Station("place_d_italie/M6", place_d_italie, l6);
var nationale_m6 = new Station("nationale/M6", nationale, l6);
var chevaleret_m6 = new Station("chevaleret/M6", chevaleret, l6);
var quai_de_la_gare_m6 = new Station("quai_de_la_gare/M6", quai_de_la_gare, l6);
var bercy_m6 = new Station("bercy/M6", bercy, l6);
var dugommier_m6 = new Station("dugommier/M6", dugommier, l6);
var daumesnil_m6 = new Station("daumesnil/M6", daumesnil, l6);
var bel_air_m6 = new Station("bel_air/M6", bel_air, l6);
var picpus_m6 = new Station("picpus/M6", picpus, l6);
var nation_m6 = new Station("nation/M6", nation, l6);

var la_courneuve_8_mai_1945_m7a = new Station("la_courneuve_8_mai_1945/M7A", la_courneuve_8_mai_1945, l7);
var fort_d_aubervilliers_m7a = new Station("fort_d_aubervilliers/M7A", fort_d_aubervilliers, l7);
var aubervilliers_pantin_quatre_chemins_m7a = new Station("aubervilliers_pantin_quatre_chemins/M7A", aubervilliers_pantin_quatre_chemins, l7);
var porte_de_la_villette_m7a = new Station("porte_de_la_villette/M7A", porte_de_la_villette, l7);
var corentin_cariou_m7a = new Station("corentin_cariou/M7A", corentin_cariou, l7);
var crimee_m7a = new Station("crimee/M7A", crimee, l7);
var riquet_m7a = new Station("riquet/M7A", riquet, l7);
var stalingrad_m7a = new Station("stalingrad/M7A", stalingrad, l7);
var louis_blanc_m7a = new Station("louis_blanc/M7A", louis_blanc, l7);
var chateau_landon_m7a = new Station("chateau_landon/M7A", chateau_landon, l7);
var gare_de_l_est_m7a = new Station("gare_de_l_est/M7A", gare_de_l_est, l7);
var poissonniere_m7a = new Station("poissonniere/M7A", poissonniere, l7);
var cadet_m7a = new Station("cadet/M7A", cadet, l7);
var le_peletier_m7a = new Station("le_peletier/M7A", le_peletier, l7);
var chaussee_d_antin_la_fayette_m7a = new Station("chaussee_d_antin_la_fayette/M7A", chaussee_d_antin_la_fayette, l7);
var opera_m7a = new Station("opera/M7A", opera, l7);
var pyramides_m7a = new Station("pyramides/M7A", pyramides, l7);
var palais_royal_musee_du_louvre_m7a = new Station("palais_royal_musee_du_louvre/M7A", palais_royal_musee_du_louvre, l7);
var pont_neuf_m7a = new Station("pont_neuf/M7A", pont_neuf, l7);
var chatelet_m7a = new Station("chatelet/M7A", chatelet, l7);
var pont_marie_m7a = new Station("pont_marie/M7A", pont_marie, l7);
var sully_morland_m7a = new Station("sully_morland/M7A", sully_morland, l7);
var jussieu_m7a = new Station("jussieu/M7A", jussieu, l7);
var place_monge_m7a = new Station("place_monge/M7A", place_monge, l7);
var censier_daubenton_m7a = new Station("censier_daubenton/M7A", censier_daubenton, l7);
var les_gobelins_m7a = new Station("les_gobelins/M7A", les_gobelins, l7);
var place_d_italie_m7a = new Station("place_d_italie/M7A", place_d_italie, l7);
var tolbiac_m7a = new Station("tolbiac/M7A", tolbiac, l7);
var maison_blanche_m7a = new Station("maison_blanche/M7A", maison_blanche, l7);
var le_kremlin_bicetre_m7a = new Station("le_kremlin_bicetre/M7A", le_kremlin_bicetre, l7);
var villejuif_leo_lagrange_m7a = new Station("villejuif_leo_lagrange/M7A", villejuif_leo_lagrange, l7);
var villejuif_paul_vaillant_couturier_m7a = new Station("villejuif_paul_vaillant_couturier/M7A", villejuif_paul_vaillant_couturier, l7);
var villejuif_louis_aragon_m7a = new Station("villejuif_louis_aragon/M7A", villejuif_louis_aragon, l7);

var la_courneuve_8_mai_1945_m7b = new Station("la_courneuve_8_mai_1945/M7B", la_courneuve_8_mai_1945, l7);
var fort_d_aubervilliers_m7b = new Station("fort_d_aubervilliers/M7B", fort_d_aubervilliers, l7);
var aubervilliers_pantin_quatre_chemins_m7b = new Station("aubervilliers_pantin_quatre_chemins/M7B", aubervilliers_pantin_quatre_chemins, l7);
var porte_de_la_villette_m7b = new Station("porte_de_la_villette/M7B", porte_de_la_villette, l7);
var corentin_cariou_m7b = new Station("corentin_cariou/M7B", corentin_cariou, l7);
var crimee_m7b = new Station("crimee/M7B", crimee, l7);
var riquet_m7b = new Station("riquet/M7B", riquet, l7);
var stalingrad_m7b = new Station("stalingrad/M7B", stalingrad, l7);
var louis_blanc_m7b = new Station("louis_blanc/M7B", louis_blanc, l7);
var chateau_landon_m7b = new Station("chateau_landon/M7B", chateau_landon, l7);
var gare_de_l_est_m7b = new Station("gare_de_l_est/M7B", gare_de_l_est, l7);
var poissonniere_m7b = new Station("poissonniere/M7B", poissonniere, l7);
var cadet_m7b = new Station("cadet/M7B", cadet, l7);
var le_peletier_m7b = new Station("le_peletier/M7B", le_peletier, l7);
var chaussee_d_antin_la_fayette_m7b = new Station("chaussee_d_antin_la_fayette/M7B", chaussee_d_antin_la_fayette, l7);
var opera_m7b = new Station("opera/M7B", opera, l7);
var pyramides_m7b = new Station("pyramides/M7B", pyramides, l7);
var palais_royal_musee_du_louvre_m7b = new Station("palais_royal_musee_du_louvre/M7B", palais_royal_musee_du_louvre, l7);
var pont_neuf_m7b = new Station("pont_neuf/M7B", pont_neuf, l7);
var chatelet_m7b = new Station("chatelet/M7B", chatelet, l7);
var pont_marie_m7b = new Station("pont_marie/M7B", pont_marie, l7);
var sully_morland_m7b = new Station("sully_morland/M7B", sully_morland, l7);
var jussieu_m7b = new Station("jussieu/M7B", jussieu, l7);
var place_monge_m7b = new Station("place_monge/M7B", place_monge, l7);
var censier_daubenton_m7b = new Station("censier_daubenton/M7B", censier_daubenton, l7);
var les_gobelins_m7b = new Station("les_gobelins/M7B", les_gobelins, l7);
var place_d_italie_m7b = new Station("place_d_italie/M7B", place_d_italie, l7);
var tolbiac_m7b = new Station("tolbiac/M7B", tolbiac, l7);
var maison_blanche_m7b = new Station("maison_blanche/M7B", maison_blanche, l7);
var porte_d_italie_m7b = new Station("porte_d_italie/M7B", porte_d_italie, l7);
var porte_de_choisy_m7b = new Station("porte_de_choisy/M7B", porte_de_choisy, l7);
var porte_d_ivry_m7b = new Station("porte_d_ivry/M7B", porte_d_ivry, l7);
var pierre_et_marie_curie_m7b = new Station("pierre_et_marie_curie/M7B", pierre_et_marie_curie, l7);
var mairie_d_ivry_m7b = new Station("mairie_d_ivry/M7B", mairie_d_ivry, l7);

var louis_blanc_m7bisa = new Station("louis_blanc/M7bisA", louis_blanc, l7bis);
var jaures_m7bisa = new Station("jaures/M7bisA", jaures, l7bis);
var bolivar_m7bisa = new Station("bolivar/M7bisA", bolivar, l7bis);
var buttes_chaumont_m7bisa = new Station("buttes_chaumont/M7bisA", buttes_chaumont, l7bis);
var botzaris_m7bisa = new Station("botzaris/M7bisA", botzaris, l7bis);
var place_des_fetes_m7bisa = new Station("place_des_fetes/M7bisA", place_des_fetes, l7bis);
var pre_saint_gervais_m7bisa = new Station("pre_saint_gervais/M7bisA", pre_saint_gervais, l7bis);

var louis_blanc_m7bisb = new Station("louis_blanc/M7bisB", louis_blanc, l7bis);
var jaures_m7bisb = new Station("jaures/M7bisB", jaures, l7bis);
var bolivar_m7bisb = new Station("bolivar/M7bisB", bolivar, l7bis);
var buttes_chaumont_m7bisb = new Station("buttes_chaumont/M7bisB", buttes_chaumont, l7bis);
var botzaris_m7bisb = new Station("botzaris/M7bisB", botzaris, l7bis);
var danube_m7bisb = new Station("danube/M7bisB", danube, l7bis);
var pre_saint_gervais_m7bisb = new Station("pre_saint_gervais/M7bisB", pre_saint_gervais, l7bis);

var balard_m8 = new Station("balard/M8", balard, l8);
var lourmel_m8 = new Station("lourmel/M8", lourmel, l8);
var boucicaut_m8 = new Station("boucicaut/M8", boucicaut, l8);
var felix_faure_m8 = new Station("felix_faure/M8", felix_faure, l8);
var commerce_m8 = new Station("commerce/M8", commerce, l8);
var la_motte_picquet_grenelle_m8 = new Station("la_motte_picquet_grenelle/M8", la_motte_picquet_grenelle, l8);
var ecole_militaire_m8 = new Station("ecole_militaire/M8", ecole_militaire, l8);
var la_tour_maubourg_m8 = new Station("la_tour_maubourg/M8", la_tour_maubourg, l8);
var invalides_m8 = new Station("invalides/M8", invalides, l8);
var concorde_m8 = new Station("concorde/M8", concorde, l8);
var madeleine_m8 = new Station("madeleine/M8", madeleine, l8);
var opera_m8 = new Station("opera/M8", opera, l8);
var richelieu_drouot_m8 = new Station("richelieu_drouot/M8", richelieu_drouot, l8);
var grands_boulevards_m8 = new Station("grands_boulevards/M8", grands_boulevards, l8);
var bonne_nouvelle_m8 = new Station("bonne_nouvelle/M8", bonne_nouvelle, l8);
var strasbourg_saint_denis_m8 = new Station("strasbourg_saint_denis/M8", strasbourg_saint_denis, l8);
var republique_m8 = new Station("republique/M8", republique, l8);
var filles_du_calvaire_m8 = new Station("filles_du_calvaire/M8", filles_du_calvaire, l8);
var saint_sebastien_froissart_m8 = new Station("saint_sebastien_froissart/M8", saint_sebastien_froissart, l8);
var chemin_vert_m8 = new Station("chemin_vert/M8", chemin_vert, l8);
var bastille_m8 = new Station("bastille/M8", bastille, l8);
var ledru_rollin_m8 = new Station("ledru_rollin/M8", ledru_rollin, l8);
var faidherbe_chaligny_m8 = new Station("faidherbe_chaligny/M8", faidherbe_chaligny, l8);
var reuilly_diderot_m8 = new Station("reuilly_diderot/M8", reuilly_diderot, l8);
var montgallet_m8 = new Station("montgallet/M8", montgallet, l8);
var daumesnil_m8 = new Station("daumesnil/M8", daumesnil, l8);
var michel_bizot_m8 = new Station("michel_bizot/M8", michel_bizot, l8);
var porte_doree_m8 = new Station("porte_doree/M8", porte_doree, l8);
var porte_de_charenton_m8 = new Station("porte_de_charenton/M8", porte_de_charenton, l8);
var liberte_m8 = new Station("liberte/M8", liberte, l8);
var charenton_ecoles_m8 = new Station("charenton_ecoles/M8", charenton_ecoles, l8);
var ecole_veterinaire_de_maisons_alfort_m8 = new Station("ecole_veterinaire_de_maisons_alfort/M8", ecole_veterinaire_de_maisons_alfort, l8);
var maisons_alfort_stade_m8 = new Station("maisons_alfort_stade/M8", maisons_alfort_stade, l8);
var maisons_alfort_les_juilliottes_m8 = new Station("maisons_alfort_les_juilliottes/M8", maisons_alfort_les_juilliottes, l8);
var creteil_l_echat_m8 = new Station("creteil_l_echat/M8", creteil_l_echat, l8);
var creteil_universite_m8 = new Station("creteil_universite/M8", creteil_universite, l8);
var creteil_prefecture_m8 = new Station("creteil_prefecture/M8", creteil_prefecture, l8);
var pointe_du_lac_m8 = new Station("pointe_du_lac/M8", pointe_du_lac, l8);

var pont_de_sevres_m9 = new Station("pont_de_sevres/M9", pont_de_sevres, l9);
var billancourt_m9 = new Station("billancourt/M9", billancourt, l9);
var marcel_sembat_m9 = new Station("marcel_sembat/M9", marcel_sembat, l9);
var porte_de_saint_cloud_m9 = new Station("porte_de_saint_cloud/M9", porte_de_saint_cloud, l9);
var exelmans_m9 = new Station("exelmans/M9", exelmans, l9);
var michel_ange_molitor_m9 = new Station("michel_ange_molitor/M9", michel_ange_molitor, l9);
var michel_ange_auteuil_m9 = new Station("michel_ange_auteuil/M9", michel_ange_auteuil, l9);
var jasmin_m9 = new Station("jasmin/M9", jasmin, l9);
var ranelagh_m9 = new Station("ranelagh/M9", ranelagh, l9);
var la_muette_m9 = new Station("la_muette/M9", la_muette, l9);
var rue_de_la_pompe_m9 = new Station("rue_de_la_pompe/M9", rue_de_la_pompe, l9);
var trocadero_m9 = new Station("trocadero/M9", trocadero, l9);
var iena_m9 = new Station("iena/M9", iena, l9);
var alma_marceau_m9 = new Station("alma_marceau/M9", alma_marceau, l9);
var franklin_d_roosevelt_m9 = new Station("franklin_d_roosevelt/M9", franklin_d_roosevelt, l9);
var saint_philippe_du_roule_m9 = new Station("saint_philippe_du_roule/M9", saint_philippe_du_roule, l9);
var miromesnil_m9 = new Station("miromesnil/M9", miromesnil, l9);
var saint_augustin_m9 = new Station("saint_augustin/M9", saint_augustin, l9);
var havre_caumartin_m9 = new Station("havre_caumartin/M9", havre_caumartin, l9);
var chaussee_d_antin_la_fayette_m9 = new Station("chaussee_d_antin_la_fayette/M9", chaussee_d_antin_la_fayette, l9);
var richelieu_drouot_m9 = new Station("richelieu_drouot/M9", richelieu_drouot, l9);
var grands_boulevards_m9 = new Station("grands_boulevards/M9", grands_boulevards, l9);
var bonne_nouvelle_m9 = new Station("bonne_nouvelle/M9", bonne_nouvelle, l9);
var strasbourg_saint_denis_m9 = new Station("strasbourg_saint_denis/M9", strasbourg_saint_denis, l9);
var republique_m9 = new Station("republique/M9", republique, l9);
var oberkampf_m9 = new Station("oberkampf/M9", oberkampf, l9);
var saint_ambroise_m9 = new Station("saint_ambroise/M9", saint_ambroise, l9);
var voltaire_m9 = new Station("voltaire/M9", voltaire, l9);
var charonne_m9 = new Station("charonne/M9", charonne, l9);
var rue_des_boulets_m9 = new Station("rue_des_boulets/M9", rue_des_boulets, l9);
var nation_m9 = new Station("nation/M9", nation, l9);
var buzenval_m9 = new Station("buzenval/M9", buzenval, l9);
var maraichers_m9 = new Station("maraichers/M9", maraichers, l9);
var porte_de_montreuil_m9 = new Station("porte_de_montreuil/M9", porte_de_montreuil, l9);
var robespierre_m9 = new Station("robespierre/M9", robespierre, l9);
var croix_de_chavaux_m9 = new Station("croix_de_chavaux/M9", croix_de_chavaux, l9);
var mairie_de_montreuil_m9 = new Station("mairie_de_montreuil/M9", mairie_de_montreuil, l9);

var boulogne_pont_de_saint_cloud_m10a = new Station("boulogne_pont_de_saint_cloud/M10A", boulogne_pont_de_saint_cloud, l10);
var boulogne_jean_jaures_m10a = new Station("boulogne_jean_jaures/M10A", boulogne_jean_jaures, l10);
var michel_ange_molitor_m10a = new Station("michel_ange_molitor/M10A", michel_ange_molitor, l10);
var chardon_lagache_m10a = new Station("chardon_lagache/M10A", chardon_lagache, l10);
var mirabeau_m10a = new Station("mirabeau/M10A", mirabeau, l10);
var javel_andre_citroen_m10a = new Station("javel_andre_citroen/M10A", javel_andre_citroen, l10);
var charles_michels_m10a = new Station("charles_michels/M10A", charles_michels, l10);
var avenue_emile_zola_m10a = new Station("avenue_emile_zola/M10A", avenue_emile_zola, l10);
var la_motte_picquet_grenelle_m10a = new Station("la_motte_picquet_grenelle/M10A", la_motte_picquet_grenelle, l10);
var segur_m10a = new Station("segur/M10A", segur, l10);
var duroc_m10a = new Station("duroc/M10A", duroc, l10);
var vaneau_m10a = new Station("vaneau/M10A", vaneau, l10);
var sevres_babylone_m10a = new Station("sevres_babylone/M10A", sevres_babylone, l10);
var mabillon_m10a = new Station("mabillon/M10A", mabillon, l10);
var odeon_m10a = new Station("odeon/M10A", odeon, l10);
var cluny_la_sorbonne_m10a = new Station("cluny_la_sorbonne/M10A", cluny_la_sorbonne, l10);
var maubert_mutualite_m10a = new Station("maubert_mutualite/M10A", maubert_mutualite, l10);
var cardinal_lemoine_m10a = new Station("cardinal_lemoine/M10A", cardinal_lemoine, l10);
var jussieu_m10a = new Station("jussieu/M10A", jussieu, l10);
var gare_d_austerlitz_m10a = new Station("gare_d_austerlitz/M10A", gare_d_austerlitz, l10);

var boulogne_pont_de_saint_cloud_m10b = new Station("boulogne_pont_de_saint_cloud/M10B", boulogne_pont_de_saint_cloud, l10);
var boulogne_jean_jaures_m10b = new Station("boulogne_jean_jaures/M10B", boulogne_jean_jaures, l10);
var porte_d_auteuil_m10b = new Station("porte_d_auteuil/M10B", porte_d_auteuil, l10);
var michel_ange_auteuil_m10b = new Station("michel_ange_auteuil/M10B", michel_ange_auteuil, l10);
var eglise_d_auteuil_m10b = new Station("eglise_d_auteuil/M10B", eglise_d_auteuil, l10);
var javel_andre_citroen_m10b = new Station("javel_andre_citroen/M10B", javel_andre_citroen, l10);
var charles_michels_m10b = new Station("charles_michels/M10B", charles_michels, l10);
var avenue_emile_zola_m10b = new Station("avenue_emile_zola/M10B", avenue_emile_zola, l10);
var la_motte_picquet_grenelle_m10b = new Station("la_motte_picquet_grenelle/M10B", la_motte_picquet_grenelle, l10);
var segur_m10b = new Station("segur/M10B", segur, l10);
var duroc_m10b = new Station("duroc/M10B", duroc, l10);
var vaneau_m10b = new Station("vaneau/M10B", vaneau, l10);
var sevres_babylone_m10b = new Station("sevres_babylone/M10B", sevres_babylone, l10);
var mabillon_m10b = new Station("mabillon/M10B", mabillon, l10);
var odeon_m10b = new Station("odeon/M10B", odeon, l10);
var cluny_la_sorbonne_m10b = new Station("cluny_la_sorbonne/M10B", cluny_la_sorbonne, l10);
var maubert_mutualite_m10b = new Station("maubert_mutualite/M10B", maubert_mutualite, l10);
var cardinal_lemoine_m10b = new Station("cardinal_lemoine/M10B", cardinal_lemoine, l10);
var jussieu_m10b = new Station("jussieu/M10B", jussieu, l10);
var gare_d_austerlitz_m10b = new Station("gare_d_austerlitz/M10B", gare_d_austerlitz, l10);

var chatelet_m11 = new Station("chatelet/M11", chatelet, l11);
var hotel_de_ville_m11 = new Station("hotel_de_ville/M11", hotel_de_ville, l11);
var rambuteau_m11 = new Station("rambuteau/M11", rambuteau, l11);
var arts_et_metiers_m11 = new Station("arts_et_metiers/M11", arts_et_metiers, l11);
var republique_m11 = new Station("republique/M11", republique, l11);
var goncourt_m11 = new Station("goncourt/M11", goncourt, l11);
var belleville_m11 = new Station("belleville/M11", belleville, l11);
var pyrenees_m11 = new Station("pyrenees/M11", pyrenees, l11);
var jourdain_m11 = new Station("jourdain/M11", jourdain, l11);
var place_des_fetes_m11 = new Station("place_des_fetes/M11", place_des_fetes, l11);
var telegraphe_m11 = new Station("telegraphe/M11", telegraphe, l11);
var porte_des_lilas_m11 = new Station("porte_des_lilas/M11", porte_des_lilas, l11);
var mairie_des_lilas_m11 = new Station("mairie_des_lilas/M11", mairie_des_lilas, l11);

var front_populaire_m12 = new Station("front_populaire/M12", front_populaire, l12);
var porte_de_la_chapelle_m12 = new Station("porte_de_la_chapelle/M12", porte_de_la_chapelle, l12);
var marx_dormoy_m12 = new Station("marx_dormoy/M12", marx_dormoy, l12);
var marcadet_poissonniers_m12 = new Station("marcadet_poissonniers/M12", marcadet_poissonniers, l12);
var jules_joffrin_m12 = new Station("jules_joffrin/M12", jules_joffrin, l12);
var lamarck_caulaincourt_m12 = new Station("lamarck_caulaincourt/M12", lamarck_caulaincourt, l12);
var abbesses_m12 = new Station("abbesses/M12", abbesses, l12);
var pigalle_m12 = new Station("pigalle/M12", pigalle, l12);
var saint_georges_m12 = new Station("saint_georges/M12", saint_georges, l12);
var notre_dame_de_lorette_m12 = new Station("notre_dame_de_lorette/M12", notre_dame_de_lorette, l12);
var trinite_d_estienne_d_orves_m12 = new Station("trinite_d_estienne_d_orves/M12", trinite_d_estienne_d_orves, l12);
var saint_lazare_m12 = new Station("saint_lazare/M12", saint_lazare, l12);
var madeleine_m12 = new Station("madeleine/M12", madeleine, l12);
var concorde_m12 = new Station("concorde/M12", concorde, l12);
var assemblee_nationale_m12 = new Station("assemblee_nationale/M12", assemblee_nationale, l12);
var solferino_m12 = new Station("solferino/M12", solferino, l12);
var rue_du_bac_m12 = new Station("rue_du_bac/M12", rue_du_bac, l12);
var sevres_babylone_m12 = new Station("sevres_babylone/M12", sevres_babylone, l12);
var rennes_m12 = new Station("rennes/M12", rennes, l12);
var notre_dame_des_champs_m12 = new Station("notre_dame_des_champs/M12", notre_dame_des_champs, l12);
var montparnasse_bienvenue_m12 = new Station("montparnasse_bienvenue/M12", montparnasse_bienvenue, l12);
var falguiere_m12 = new Station("falguiere/M12", falguiere, l12);
var pasteur_m12 = new Station("pasteur/M12", pasteur, l12);
var volontaires_m12 = new Station("volontaires/M12", volontaires, l12);
var vaugirard_m12 = new Station("vaugirard/M12", vaugirard, l12);
var convention_m12 = new Station("convention/M12", convention, l12);
var porte_de_versailles_m12 = new Station("porte_de_versailles/M12", porte_de_versailles, l12);
var corentin_celton_m12 = new Station("corentin_celton/M12", corentin_celton, l12);
var mairie_d_issy_m12 = new Station("mairie_d_issy/M12", mairie_d_issy, l12);

var asnieres_gennevilliers_les_courtilles_m13a = new Station("asnieres_gennevilliers_les_courtilles/M13A", asnieres_gennevilliers_les_courtilles, l13);
var les_agnettes_m13a = new Station("les_agnettes/M13A", les_agnettes, l13);
var gabriel_peri_m13a = new Station("gabriel_peri/M13A", gabriel_peri, l13);
var mairie_de_clichy_m13a = new Station("mairie_de_clichy/M13A", mairie_de_clichy, l13);
var porte_de_clichy_m13a = new Station("porte_de_clichy/M13A", porte_de_clichy, l13);
var brochant_m13a = new Station("brochant/M13A", brochant, l13);
var la_fourche_m13a = new Station("la_fourche/M13A", la_fourche, l13);
var place_de_clichy_m13a = new Station("place_de_clichy/M13A", place_de_clichy, l13);
var liege_m13a = new Station("liege/M13A", liege, l13);
var saint_lazare_m13a = new Station("saint_lazare/M13A", saint_lazare, l13);
var miromesnil_m13a = new Station("miromesnil/M13A", miromesnil, l13);
var champs_elysees_clemenceau_m13a = new Station("champs_elysees_clemenceau/M13A", champs_elysees_clemenceau, l13);
var invalides_m13a = new Station("invalides/M13A", invalides, l13);
var varenne_m13a = new Station("varenne/M13A", varenne, l13);
var saint_francois_xavier_m13a = new Station("saint_francois_xavier/M13A", saint_francois_xavier, l13);
var duroc_m13a = new Station("duroc/M13A", duroc, l13);
var montparnasse_bienvenue_m13a = new Station("montparnasse_bienvenue/M13A", montparnasse_bienvenue, l13);
var gaite_m13a = new Station("gaite/M13A", gaite, l13);
var pernety_m13a = new Station("pernety/M13A", pernety, l13);
var plaisance_m13a = new Station("plaisance/M13A", plaisance, l13);
var porte_de_vanves_m13a = new Station("porte_de_vanves/M13A", porte_de_vanves, l13);
var malakoff_plateau_de_vanves_m13a = new Station("malakoff_plateau_de_vanves/M13A", malakoff_plateau_de_vanves, l13);
var malakoff_rue_etienne_dolet_m13a = new Station("malakoff_rue_etienne_dolet/M13A", malakoff_rue_etienne_dolet, l13);
var chatillon_montrouge_m13a = new Station("chatillon_montrouge/M13A", chatillon_montrouge, l13);

var saint_denis_universite_m13b = new Station("saint_denis_universite/M13B", saint_denis_universite, l13);
var basilique_de_saint_denis_m13b = new Station("basilique_de_saint_denis/M13B", basilique_de_saint_denis, l13);
var saint_denis_porte_de_paris_m13b = new Station("saint_denis_porte_de_paris/M13B", saint_denis_porte_de_paris, l13);
var carrefour_pleyel_m13b = new Station("carrefour_pleyel/M13B", carrefour_pleyel, l13);
var mairie_de_saint_ouen_m13b = new Station("mairie_de_saint_ouen/M13B", mairie_de_saint_ouen, l13);
var garibaldi_m13b = new Station("garibaldi/M13B", garibaldi, l13);
var porte_de_saint_ouen_m13b = new Station("porte_de_saint_ouen/M13B", porte_de_saint_ouen, l13);
var guy_moquet_m13b = new Station("guy_moquet/M13B", guy_moquet, l13);
var la_fourche_m13b = new Station("la_fourche/M13B", la_fourche, l13);
var place_de_clichy_m13b = new Station("place_de_clichy/M13B", place_de_clichy, l13);
var liege_m13b = new Station("liege/M13B", liege, l13);
var saint_lazare_m13b = new Station("saint_lazare/M13B", saint_lazare, l13);
var miromesnil_m13b = new Station("miromesnil/M13B", miromesnil, l13);
var champs_elysees_clemenceau_m13b = new Station("champs_elysees_clemenceau/M13B", champs_elysees_clemenceau, l13);
var invalides_m13b = new Station("invalides/M13B", invalides, l13);
var varenne_m13b = new Station("varenne/M13B", varenne, l13);
var saint_francois_xavier_m13b = new Station("saint_francois_xavier/M13B", saint_francois_xavier, l13);
var duroc_m13b = new Station("duroc/M13B", duroc, l13);
var montparnasse_bienvenue_m13b = new Station("montparnasse_bienvenue/M13B", montparnasse_bienvenue, l13);
var gaite_m13b = new Station("gaite/M13B", gaite, l13);
var pernety_m13b = new Station("pernety/M13B", pernety, l13);
var plaisance_m13b = new Station("plaisance/M13B", plaisance, l13);
var porte_de_vanves_m13b = new Station("porte_de_vanves/M13B", porte_de_vanves, l13);
var malakoff_plateau_de_vanves_m13b = new Station("malakoff_plateau_de_vanves/M13B", malakoff_plateau_de_vanves, l13);
var malakoff_rue_etienne_dolet_m13b = new Station("malakoff_rue_etienne_dolet/M13B", malakoff_rue_etienne_dolet, l13);
var chatillon_montrouge_m13b = new Station("chatillon_montrouge/M13B", chatillon_montrouge, l13);

var saint_lazare_m14 = new Station("saint_lazare/M14", saint_lazare, l14);
var madeleine_m14 = new Station("madeleine/M14", madeleine, l14);
var pyramides_m14 = new Station("pyramides/M14", pyramides, l14);
var chatelet_m14 = new Station("chatelet/M14", chatelet, l14);
var gare_de_lyon_m14 = new Station("gare_de_lyon/M14", gare_de_lyon, l14);
var bercy_m14 = new Station("bercy/M14", bercy, l14);
var cour_saint_emilion_m14 = new Station("cour_saint_emilion/M14", cour_saint_emilion, l14);
var bibliotheque_francois_mitterrand_m14 = new Station("bibliotheque_francois_mitterrand/M14", bibliotheque_francois_mitterrand, l14);
var olympiades_m14 = new Station("olympiades/M14", olympiades, l14);




// VOISINS DE CHAQUE STATION ET LEURS COUTS : 
// DIR pour les voisins directs de même ligne
// COR pour les correspondances rapides
// CORL pour les correspondances longues ou faut marcher un bon moment


la_defense_m1.voisins = {"esplanade_de_la_defense/M1":DIR, /* Corresp ---> */      };
esplanade_de_la_defense_m1.voisins = {"la_defense/M1":DIR, "pont_de_neuilly/M1":DIR, /* Corresp ---> */      };
pont_de_neuilly_m1.voisins = {"esplanade_de_la_defense/M1":DIR, "les_sablons/M1":DIR, /* Corresp ---> */      };
les_sablons_m1.voisins = {"pont_de_neuilly/M1":DIR, "porte_maillot/M1":DIR, /* Corresp ---> */      };
porte_maillot_m1.voisins = {"les_sablons/M1":DIR, "argentine/M1":DIR, /* Corresp ---> */      };
argentine_m1.voisins = {"porte_maillot/M1":DIR, "charles_de_gaulle_etoile/M1":DIR, /* Corresp ---> */      };
charles_de_gaulle_etoile_m1.voisins = {"argentine/M1":DIR, "georges_v/M1":DIR, /* Corresp ---> */ "charles_de_gaulle_etoile/M2":COR, "charles_de_gaulle_etoile/M6":COR };
georges_v_m1.voisins = {"charles_de_gaulle_etoile/M1":DIR, "franklin_d_roosevelt/M1":DIR, /* Corresp ---> */      };
franklin_d_roosevelt_m1.voisins = {"georges_v/M1":DIR, "champs_elysees_clemenceau/M1":DIR, /* Corresp ---> */ "franklin_d_roosevelt/M9":COR };
champs_elysees_clemenceau_m1.voisins = {"franklin_d_roosevelt/M1":DIR, "concorde/M1":DIR, /* Corresp ---> */ "champs_elysees_clemenceau/M13A":COR, "champs_elysees_clemenceau/M13B":COR };
concorde_m1.voisins = {"champs_elysees_clemenceau/M1":DIR, "tuileries/M1":DIR, /* Corresp ---> */ "concorde/M8":COR, "concorde/M12":COR };
tuileries_m1.voisins = {"concorde/M1":DIR, "palais_royal_musee_du_louvre/M1":DIR, /* Corresp ---> */  };
palais_royal_musee_du_louvre_m1.voisins = {"tuileries/M1":DIR, "louvre_rivoli/M1":DIR, /* Corresp ---> */ "palais_royal_musee_du_louvre/M7A":COR, "palais_royal_musee_du_louvre/M7B":COR };
louvre_rivoli_m1.voisins = {"palais_royal_musee_du_louvre/M1":DIR, "chatelet/M1":DIR, /* Corresp ---> */ };
chatelet_m1.voisins = {"louvre_rivoli/M1":DIR, "hotel_de_ville/M1":DIR, /* Corresp ---> */ "chatelet/M4":COR, "chatelet/M7A":COR, "chatelet/M7B":COR, "chatelet/M11":COR, "chatelet/m14":COR, "les_halles/M4":CORL };
hotel_de_ville_m1.voisins = {"chatelet/M1":DIR, "saint_paul/M1":DIR, /* Corresp ---> */ "hotel_de_ville/M11":COR };
saint_paul_m1.voisins = {"hotel_de_ville/M1":DIR, "bastille/M1":DIR, /* Corresp ---> */  };
bastille_m1.voisins = {"saint_paul/M1":DIR, "gare_de_lyon/M1":DIR, /* Corresp ---> */ "bastille/M5":COR, "bastille/M8":COR };
gare_de_lyon_m1.voisins = {"bastille/M1":DIR, "reuilly_diderot/M1":DIR, /* Corresp ---> */ "gare_de_lyon/M14":COR };
reuilly_diderot_m1.voisins = {"gare_de_lyon/M1":DIR, "nation/M1":DIR, /* Corresp ---> */ "reuilly_diderot/M8":COR };
nation_m1.voisins = {"reuilly_diderot/M1":DIR, "porte_de_vincennes/M1":DIR, /* Corresp ---> */ "nation/M2":COR, "nation/M6":COR, "nation/M9":COR };
porte_de_vincennes_m1.voisins = {"nation/M1":DIR, "saint_mande/M1":DIR, /* Corresp ---> */  };
saint_mande_m1.voisins = {"porte_de_vincennes/M1":DIR, "berault/M1":DIR, /* Corresp ---> */      };
berault_m1.voisins = {"saint_mande/M1":DIR, "chateau_de_vincennes/M1":DIR, /* Corresp ---> */      };
chateau_de_vincennes_m1.voisins = {"berault/M1":DIR, /* Corresp ---> */      };

porte_dauphine_m2.voisins = {"victor_hugo/M2":DIR, /* Corresp ---> */  };
victor_hugo_m2.voisins = {"porte_dauphine/M2":DIR, "charles_de_gaulle_etoile/M2":DIR, /* Corresp ---> */  };
charles_de_gaulle_etoile_m2.voisins = {"victor_hugo/M2":DIR, "ternes/M2":DIR, /* Corresp ---> */ "charles_de_gaulle_etoile/M1":COR, "charles_de_gaulle_etoile/M6":COR };
ternes_m2.voisins = {"charles_de_gaulle_etoile/M2":DIR, "courcelles/M2":DIR, /* Corresp ---> */  };
courcelles_m2.voisins = {"ternes/M2":DIR, "monceau/M2":DIR, /* Corresp ---> */  };
monceau_m2.voisins = {"courcelles/M2":DIR, "villiers/M2":DIR, /* Corresp ---> */  };
villiers_m2.voisins = {"monceau/M2":DIR, "rome/M2":DIR, /* Corresp ---> */ "villiers/M3":COR };
rome_m2.voisins = {"villiers/M2":DIR, "place_de_clichy/M2":DIR, /* Corresp ---> */  };
place_de_clichy_m2.voisins = {"rome/M2":DIR, "blanche/M2":DIR, /* Corresp ---> */ "place_de_clichy/M13A":COR, "place_de_clichy/M13B":COR };
blanche_m2.voisins = {"place_de_clichy/M2":DIR, "pigalle/M2":DIR, /* Corresp ---> */  };
pigalle_m2.voisins = {"blanche/M2":DIR, "anvers/M2":DIR, /* Corresp ---> */ "pigalle/M12":COR };
anvers_m2.voisins = {"pigalle/M2":DIR, "barbes_rochechouart/M2":DIR, /* Corresp ---> */  };
barbes_rochechouart_m2.voisins = {"anvers/M2":DIR, "la_chapelle/M2":DIR, /* Corresp ---> */ "barbes_rochechouart/M4":COR };
la_chapelle_m2.voisins = {"barbes_rochechouart/M2":DIR, "stalingrad/M2":DIR, /* Corresp ---> */ "gare_du_nord/M4":CORL, "gare_du_nord/M5":CORL };
stalingrad_m2.voisins = {"la_chapelle/M2":DIR, "jaures/M2":DIR, /* Corresp ---> */ "stalingrad/M5":COR, "stalingrad/M7A":COR, "stalingrad/M7B":COR };
jaures_m2.voisins = {"stalingrad/M2":DIR, "colonel_fabien/M2":DIR, /* Corresp ---> */ "jaures/M5":COR, "jaures/M7bisA":COR, "jaures/M7bisB":COR };
colonel_fabien_m2.voisins = {"jaures/M2":DIR, "belleville/M2":DIR, /* Corresp ---> */  };
belleville_m2.voisins = {"colonel_fabien/M2":DIR, "couronnes/M2":DIR, /* Corresp ---> */ "belleville/M11":COR };
couronnes_m2.voisins = {"belleville/M2":DIR, "menilmontant/M2":DIR, /* Corresp ---> */  };
menilmontant_m2.voisins = {"couronnes/M2":DIR, "pere_lachaise/M2":DIR, /* Corresp ---> */  };
pere_lachaise_m2.voisins = {"menilmontant/M2":DIR, "philippe_auguste/M2":DIR, /* Corresp ---> */ "pere_lachaise/M3":COR };
philippe_auguste_m2.voisins = {"pere_lachaise/M2":DIR, "alexandre_dumas/M2":DIR, /* Corresp ---> */  };
alexandre_dumas_m2.voisins = {"philippe_auguste/M2":DIR, "avron/M2":DIR, /* Corresp ---> */  };
avron_m2.voisins = {"alexandre_dumas/M2":DIR, "nation/M2":DIR, /* Corresp ---> */  };
nation_m2.voisins = {"avron/M2":DIR, /* Corresp ---> */ "nation/M1":COR, "nation/M6":COR, "nation/M9":COR };

pont_de_levallois_becon_m3.voisins = {"anatole_france/M3":DIR, /* Corresp ---> */  };
anatole_france_m3.voisins = {"pont_de_levallois_becon/M3":DIR, "louise_michel/M3":DIR, /* Corresp ---> */  };
louise_michel_m3.voisins = {"anatole_france/M3":DIR, "porte_de_champerret/M3":DIR, /* Corresp ---> */  };
porte_de_champerret_m3.voisins = {"louise_michel/M3":DIR, "pereire/M3":DIR, /* Corresp ---> */  };
pereire_m3.voisins = {"porte_de_champerret/M3":DIR, "wagram/M3":DIR, /* Corresp ---> */  };
wagram_m3.voisins = {"pereire/M3":DIR, "malesherbes/M3":DIR, /* Corresp ---> */  };
malesherbes_m3.voisins = {"wagram/M3":DIR, "villiers/M3":DIR, /* Corresp ---> */  };
villiers_m3.voisins = {"malesherbes/M3":DIR, "europe/M3":DIR, /* Corresp ---> */ "villiers/M2":COR };
europe_m3.voisins = {"villiers/M3":DIR, "saint_lazare/M3":DIR, /* Corresp ---> */  };
saint_lazare_m3.voisins = {"europe/M3":DIR, "havre_caumartin/M3":DIR, /* Corresp ---> */ "saint_lazare/M12":COR, "saint_lazare/M14":COR, "saint_lazare/M13A":COR, "saint_lazare/M13B":COR, "saint_augustin/M9":CORL, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
havre_caumartin_m3.voisins = {"saint_lazare/M3":DIR, "opera/M3":DIR, /* Corresp ---> */ "havre_caumartin/M9":COR, "saint_lazare/M3":CORL, "saint_lazare/M12":CORL, "saint_lazare/M13A":CORL, "saint_lazare/M13B":CORL, "saint_lazare/M14":CORL, "opera/M3":CORL, "opera/M8":CORL, "opera/M7A":CORL, "opera/M7B":CORL };
opera_m3.voisins = {"havre_caumartin/M3":DIR, "quatre_septembre/M3":DIR, /* Corresp ---> */ "opera/M7A":COR, "opera/M7B":COR, "opera/M8":COR, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
quatre_septembre_m3.voisins = {"opera/M3":DIR, "bourse/M3":DIR, /* Corresp ---> */  };
bourse_m3.voisins = {"quatre_septembre/M3":DIR, "sentier/M3":DIR, /* Corresp ---> */  };
sentier_m3.voisins = {"bourse/M3":DIR, "reaumur_sebastopol/M3":DIR, /* Corresp ---> */  };
reaumur_sebastopol_m3.voisins = {"sentier/M3":DIR, "arts_et_metiers/M3":DIR, /* Corresp ---> */ "reaumur_sebastopol/M4":COR };
arts_et_metiers_m3.voisins = {"reaumur_sebastopol/M3":DIR, "temple/M3":DIR, /* Corresp ---> */ "arts_et_metiers/M11":COR };
temple_m3.voisins = {"arts_et_metiers/M3":DIR, "republique/M3":DIR, /* Corresp ---> */  };
republique_m3.voisins = {"temple/M3":DIR, "parmentier/M3":DIR, /* Corresp ---> */ "republique/M5":COR, "republique/M8":COR, "republique/M9":COR, "republique/M11":COR };
parmentier_m3.voisins = {"republique/M3":DIR, "rue_saint_maur/M3":DIR, /* Corresp ---> */  };
rue_saint_maur_m3.voisins = {"parmentier/M3":DIR, "pere_lachaise/M3":DIR, /* Corresp ---> */  };
pere_lachaise_m3.voisins = {"rue_saint_maur/M3":DIR, "gambetta/M3":DIR, /* Corresp ---> */ "pere_lachaise/M2":COR };
gambetta_m3.voisins = {"pere_lachaise/M3":DIR, "porte_de_bagnolet/M3":DIR, /* Corresp ---> */ "gambetta/M3bis":COR };
porte_de_bagnolet_m3.voisins = {"gambetta/M3":DIR, "gallieni/M3":DIR, /* Corresp ---> */  };
gallieni_m3.voisins = {"porte_de_bagnolet/M3":DIR, /* Corresp ---> */  };

gambetta_m3b.voisins = {"pelleport/M3bis":DIR, /* Corresp ---> */ "gambetta/M3":COR };
pelleport_m3b.voisins = {"gambetta/M3bis":DIR, "saint_fargeau/M3bis":DIR, /* Corresp ---> */  };
saint_fargeau_m3b.voisins = {"pelleport/M3bis":DIR, "porte_des_lilas/M3bis":DIR, /* Corresp ---> */  };
porte_des_lilas_m3b.voisins = {"saint_fargeau/M3bis":DIR, /* Corresp ---> */ "porte_des_lilas/M11":COR };

porte_de_clignancourt_m4.voisins = {"simplon/M4":DIR, /* Corresp ---> */  };
simplon_m4.voisins = {"porte_de_clignancourt/M4":DIR, "marcadet_poissonniers/M4":DIR, /* Corresp ---> */  };
marcadet_poissonniers_m4.voisins = {"simplon/M4":DIR, "chateau_rouge/M4":DIR, /* Corresp ---> */ "marcadet_poissonniers/M12":COR };
chateau_rouge_m4.voisins = {"marcadet_poissonniers/M4":DIR, "barbes_rochechouart/M4":DIR, /* Corresp ---> */  };
barbes_rochechouart_m4.voisins = {"chateau_rouge/M4":DIR, "gare_du_nord/M4":DIR, /* Corresp ---> */ "barbes_rochechouart/M2":COR };
gare_du_nord_m4.voisins = {"barbes_rochechouart/M4":DIR, "gare_de_l_est/M4":DIR, /* Corresp ---> */ "gare_du_nord/M5":COR, "la_chapelle/M2":CORL };
gare_de_l_est_m4.voisins = {"gare_du_nord/M4":DIR, "chateau_d_eau/M4":DIR, /* Corresp ---> */ "gare_de_l_est/M5":COR, "gare_de_l_est/M7A":COR, "gare_de_l_est/M7B":COR, "chateau_landon_m7a":CORL, "chateau_landon_m7b":CORL };
chateau_d_eau_m4.voisins = {"gare_de_l_est/M4":DIR, "strasbourg_saint_denis/M4":DIR, /* Corresp ---> */  };
strasbourg_saint_denis_m4.voisins = {"chateau_d_eau/M4":DIR, "reaumur_sebastopol/M4":DIR, /* Corresp ---> */ "strasbourg_saint_denis/M8":COR, "strasbourg_saint_denis/M9":COR };
reaumur_sebastopol_m4.voisins = {"strasbourg_saint_denis/M4":DIR, "etienne_marcel/M4":DIR, /* Corresp ---> */ "reaumur_sebastopol/M3":COR };
etienne_marcel_m4.voisins = {"reaumur_sebastopol/M4":DIR, "les_halles/M4":DIR, /* Corresp ---> */  };
les_halles_m4.voisins = {"etienne_marcel/M4":DIR, "chatelet/M4":DIR, /* Corresp ---> */ "chatelet/M4":CORL, "chatelet/M1":CORL, "chatelet/M7A":CORL, "chatelet/M7B":CORL, "chatelet/M11":CORL, "chatelet/M14":CORL };
chatelet_m4.voisins = {"les_halles/M4":DIR, "cite/M4":DIR, /* Corresp ---> */ "chatelet/M1":COR, "chatelet/M7A":COR, "chatelet/M7B":COR, "chatelet/M11":COR, "chatelet/M14":COR, "les_halles/M4":CORL  };
cite_m4.voisins = {"chatelet/M4":DIR, "saint_michel/M4":DIR, /* Corresp ---> */  };
saint_michel_m4.voisins = {"cite/M4":DIR, "odeon/M4":DIR, /* Corresp ---> */ "cluny_la_sorbonne/M10A":CORL, "cluny_la_sorbonne/M10B":CORL };
odeon_m4.voisins = {"saint_michel/M4":DIR, "saint_germain_des_pres/M4":DIR, /* Corresp ---> */ "odeon/M10A":COR, "odeon/M10B":COR };
saint_germain_des_pres_m4.voisins = {"odeon/M4":DIR, "saint_sulpice/M4":DIR, /* Corresp ---> */  };
saint_sulpice_m4.voisins = {"saint_germain_des_pres/M4":DIR, "saint_placide/M4":DIR, /* Corresp ---> */  };
saint_placide_m4.voisins = {"saint_sulpice/M4":DIR, "montparnasse_bienvenue/M4":DIR, /* Corresp ---> */  };
montparnasse_bienvenue_m4.voisins = {"saint_placide/M4":DIR, "valvin/M4":DIR, /* Corresp ---> */ "montparnasse_bienvenue/M6":COR, "montparnasse_bienvenue/M12":COR, "montparnasse_bienvenue/M13A":COR, "montparnasse_bienvenue/M13B":COR };
valvin_m4.voisins = {"montparnasse_bienvenue/M4":DIR, "raspail/M4":DIR, /* Corresp ---> */  };
raspail_m4.voisins = {"valvin/M4":DIR, "denfert_rochereau/M4":DIR, /* Corresp ---> */ "raspail/M6":COR };
denfert_rochereau_m4.voisins = {"raspail/M4":DIR, "mouton_duvernet/M4":DIR, /* Corresp ---> */ "denfert_rochereau/M6":COR };
mouton_duvernet_m4.voisins = {"denfert_rochereau/M4":DIR, "alesia/M4":DIR, /* Corresp ---> */  };
alesia_m4.voisins = {"mouton_duvernet/M4":DIR, "porte_d_orleans/M4":DIR, /* Corresp ---> */  };
porte_d_orleans_m4.voisins = {"alesia/M4":DIR, "mairie_de_montrouge/M4":DIR, /* Corresp ---> */  };
mairie_de_montrouge_m4.voisins = {"porte_d_orleans/M4":DIR, /* Corresp ---> */  };

bobigny_pablo_picasso_m5.voisins = {"bobigny_pantin_raymond_queneau/M5":DIR, /* Corresp ---> */  };
bobigny_pantin_raymond_queneau_m5.voisins = {"bobigny_pablo_picasso/M5":DIR, "eglise_de_pantin/M5":DIR, /* Corresp ---> */  };
eglise_de_pantin_m5.voisins = {"bobigny_pantin_raymond_queneau/M5":DIR, "hoche/M5":DIR, /* Corresp ---> */  };
hoche_m5.voisins = {"eglise_de_pantin/M5":DIR, "porte_de_pantin/M5":DIR, /* Corresp ---> */  };
porte_de_pantin_m5.voisins = {"hoche/M5":DIR, "ourcq/M5":DIR, /* Corresp ---> */  };
ourcq_m5.voisins = {"porte_de_pantin/M5":DIR, "laumiere/M5":DIR, /* Corresp ---> */  };
laumiere_m5.voisins = {"ourcq/M5":DIR, "jaures/M5":DIR, /* Corresp ---> */  };
jaures_m5.voisins = {"laumiere/M5":DIR, "stalingrad/M5":DIR, /* Corresp ---> */ "jaures/M2":COR, "jaures/M7bisA":COR, "jaures/M7bisB":COR };
stalingrad_m5.voisins = {"jaures/M5":DIR, "gare_du_nord/M5":DIR, /* Corresp ---> */ "stalingrad/M2":COR, "stalingrad/M7A":COR, "stalingrad/M7B":COR };
gare_du_nord_m5.voisins = {"stalingrad/M5":DIR, "gare_de_l_est/M5":DIR, /* Corresp ---> */ "gare_du_nord/M4":COR, "la_chapelle/M2":CORL };
gare_de_l_est_m5.voisins = {"gare_du_nord/M5":DIR, "jacques_bonsergent/M5":DIR, /* Corresp ---> */ "gare_de_l_est/M4":COR, "gare_de_l_est/M7A":COR, "gare_de_l_est/M7B":COR, "chateau_landon/M7A":CORL, "chateau_landon/M7B":CORL };
jacques_bonsergent_m5.voisins = {"gare_de_l_est/M5":DIR, "republique/M5":DIR, /* Corresp ---> */  };
republique_m5.voisins = {"jacques_bonsergent/M5":DIR, "oberkampf/M5":DIR, /* Corresp ---> */ "republique/M3":COR, "republique/M8":COR, "republique/M9":COR, "republique/M11":COR };
oberkampf_m5.voisins = {"republique/M5":DIR, "richard_lenoir/M5":DIR, /* Corresp ---> */ "oberkampf/M9":COR };
richard_lenoir_m5.voisins = {"oberkampf/M5":DIR, "breguet_sabin/M5":DIR, /* Corresp ---> */  };
breguet_sabin_m5.voisins = {"richard_lenoir/M5":DIR, "bastille/M5":DIR, /* Corresp ---> */  };
bastille_m5.voisins = {"breguet_sabin/M5":DIR, "quai_de_la_rapee/M5":DIR, /* Corresp ---> */ "bastille/M1":COR, "bastille/M8":COR };
quai_de_la_rapee_m5.voisins = {"bastille/M5":DIR, "gare_d_austerlitz/M5":DIR, /* Corresp ---> */  };
gare_d_austerlitz_m5.voisins = {"quai_de_la_rapee/M5":DIR, "saint_marcel/M5":DIR, /* Corresp ---> */ "gare_d_austerlitz/M10A":COR, "gare_d_austerlitz/M10B":COR };
saint_marcel_m5.voisins = {"gare_d_austerlitz/M5":DIR, "campo_formio/M5":DIR, /* Corresp ---> */  };
campo_formio_m5.voisins = {"saint_marcel/M5":DIR, "place_d_italie/M5":DIR, /* Corresp ---> */  };
place_d_italie_m5.voisins = {"campo_formio/M5":DIR, /* Corresp ---> */ "place_d_italie/M6":COR, "place_d_italie/M7A":COR, "place_d_italie/M7B":COR };

charles_de_gaulle_etoile_m6.voisins = {"kleber/M6":DIR, /* Corresp ---> */ "charles_de_gaulle_etoile/M1":COR, "charles_de_gaulle_etoile/M2":COR };
kleber_m6.voisins = {"charles_de_gaulle_etoile/M6":DIR, "boissiere/M6":DIR, /* Corresp ---> */  };
boissiere_m6.voisins = {"kleber/M6":DIR, "trocadero/M6":DIR, /* Corresp ---> */  };
trocadero_m6.voisins = {"boissiere/M6":DIR, "passy/M6":DIR, /* Corresp ---> */ "trocadero/M9":COR };
passy_m6.voisins = {"trocadero/M6":DIR, "bir_hakeim/M6":DIR, /* Corresp ---> */  };
bir_hakeim_m6.voisins = {"passy/M6":DIR, "dupleix/M6":DIR, /* Corresp ---> */  };
dupleix_m6.voisins = {"bir_hakeim/M6":DIR, "la_motte_picquet_grenelle/M6":DIR, /* Corresp ---> */  };
la_motte_picquet_grenelle_m6.voisins = {"dupleix/M6":DIR, "cambronne/M6":DIR, /* Corresp ---> */ "la_motte_picquet_grenelle/M8":COR, "la_motte_picquet_grenelle/M10A":COR, "la_motte_picquet_grenelle/M10B":COR };
cambronne_m6.voisins = {"la_motte_picquet_grenelle/M6":DIR, "sevres_lecourbe/M6":DIR, /* Corresp ---> */  };
sevres_lecourbe_m6.voisins = {"cambronne/M6":DIR, "pasteur/M6":DIR, /* Corresp ---> */  };
pasteur_m6.voisins = {"sevres_lecourbe/M6":DIR, "montparnasse_bienvenue/M6":DIR, /* Corresp ---> */ "pasteur/M12":COR };
montparnasse_bienvenue_m6.voisins = {"pasteur/M6":DIR, "edgar_quinet/M6":DIR, /* Corresp ---> */ "montparnasse_bienvenue/M4":COR, "montparnasse_bienvenue/M12":COR, "montparnasse_bienvenue/M13A":COR, "montparnasse_bienvenue/M13B":COR };
edgar_quinet_m6.voisins = {"montparnasse_bienvenue/M6":DIR, "raspail/M6":DIR, /* Corresp ---> */  };
raspail_m6.voisins = {"edgar_quinet/M6":DIR, "denfert_rochereau/M6":DIR, /* Corresp ---> */ "raspail/M4":COR };
denfert_rochereau_m6.voisins = {"raspail/M6":DIR, "saint_jacques/M6":DIR, /* Corresp ---> */ "denfert_rochereau/M4":COR };
saint_jacques_m6.voisins = {"denfert_rochereau/M6":DIR, "glaciere/M6":DIR, /* Corresp ---> */  };
glaciere_m6.voisins = {"saint_jacques/M6":DIR, "corvisart/M6":DIR, /* Corresp ---> */  };
corvisart_m6.voisins = {"glaciere/M6":DIR, "place_d_italie/M6":DIR, /* Corresp ---> */  };
place_d_italie_m6.voisins = {"corvisart/M6":DIR, "nationale/M6":DIR, /* Corresp ---> */ "place_d_italie/M5":COR, "place_d_italie/M7A":COR, "place_d_italie/M7B":COR };
nationale_m6.voisins = {"place_d_italie/M6":DIR, "chevaleret/M6":DIR, /* Corresp ---> */  };
chevaleret_m6.voisins = {"nationale/M6":DIR, "quai_de_la_gare/M6":DIR, /* Corresp ---> */  };
quai_de_la_gare_m6.voisins = {"chevaleret/M6":DIR, "bercy/M6":DIR, /* Corresp ---> */  };
bercy_m6.voisins = {"quai_de_la_gare/M6":DIR, "dugommier/M6":DIR, /* Corresp ---> */ "bercy/M14":COR };
dugommier_m6.voisins = {"bercy/M6":DIR, "daumesnil/M6":DIR, /* Corresp ---> */  };
daumesnil_m6.voisins = {"dugommier/M6":DIR, "bel_air/M6":DIR, /* Corresp ---> */ "daumesnil/M8":COR };
bel_air_m6.voisins = {"daumesnil/M6":DIR, "picpus/M6":DIR, /* Corresp ---> */  };
picpus_m6.voisins = {"bel_air/M6":DIR, "nation/M6":DIR, /* Corresp ---> */  };
nation_m6.voisins = {"picpus/M6":DIR, /* Corresp ---> */ "nation/M1":COR, "nation/M2":COR, "nation/M9":COR };

la_courneuve_8_mai_1945_m7a.voisins = {"fort_d_aubervilliers/M7A":DIR, /* Corresp ---> */  };
fort_d_aubervilliers_m7a.voisins = {"la_courneuve_8_mai_1945/M7A":DIR, "aubervilliers_pantin_quatre_chemins/M7A":DIR, /* Corresp ---> */  };
aubervilliers_pantin_quatre_chemins_m7a.voisins = {"fort_d_aubervilliers/M7A":DIR, "porte_de_la_villette/M7A":DIR, /* Corresp ---> */  };
porte_de_la_villette_m7a.voisins = {"aubervilliers_pantin_quatre_chemins/M7A":DIR, "corentin_cariou/M7A":DIR, /* Corresp ---> */  };
corentin_cariou_m7a.voisins = {"porte_de_la_villette/M7A":DIR, "crimee/M7A":DIR, /* Corresp ---> */  };
crimee_m7a.voisins = {"corentin_cariou/M7A":DIR, "riquet/M7A":DIR, /* Corresp ---> */  };
riquet_m7a.voisins = {"crimee/M7A":DIR, "stalingrad/M7A":DIR, /* Corresp ---> */  };
stalingrad_m7a.voisins = {"riquet/M7A":DIR, "louis_blanc/M7A":DIR, /* Corresp ---> */ "stalingrad/M2":COR, "stalingrad/M5":COR };
louis_blanc_m7a.voisins = {"stalingrad/M7A":DIR, "chateau_landon/M7A":DIR, /* Corresp ---> */ "louis_blanc/M7bisA":COR, "louis_blanc/M7bisB":COR };
chateau_landon_m7a.voisins = {"louis_blanc/M7A":DIR, "gare_de_l_est/M7A":DIR, /* Corresp ---> */ "gare_de_l_est/M7A":CORL, "gare_de_l_est/M7B":CORL, "gare_de_l_est/M4":CORL, "gare_de_l_est/M5":CORL };
gare_de_l_est_m7a.voisins = {"chateau_landon/M7A":DIR, "poissonniere/M7A":DIR, /* Corresp ---> */ "gare_de_l_est/M4":COR, "gare_de_l_est/M5":COR, "chateau_landon/M7A":CORL, "chateau_landon/M7B":CORL };
poissonniere_m7a.voisins = {"gare_de_l_est/M7A":DIR, "cadet/M7A":DIR, /* Corresp ---> */  };
cadet_m7a.voisins = {"poissonniere/M7A":DIR, "le_peletier/M7A":DIR, /* Corresp ---> */  };
le_peletier_m7a.voisins = {"cadet/M7A":DIR, "chaussee_d_antin_la_fayette/M7A":DIR, /* Corresp ---> */  };
chaussee_d_antin_la_fayette_m7a.voisins = {"le_peletier/M7A":DIR, "opera/M7A":DIR, /* Corresp ---> */ "chaussee_d_antin_la_fayette/M9":COR };
opera_m7a.voisins = {"chaussee_d_antin_la_fayette/M7A":DIR, "pyramides/M7A":DIR, /* Corresp ---> */ "opera/M3":COR, "opera/M8":COR, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
pyramides_m7a.voisins = {"opera/M7A":DIR, "palais_royal_musee_du_louvre/M7A":DIR, /* Corresp ---> */ "pyramides/M14":COR };
palais_royal_musee_du_louvre_m7a.voisins = {"pyramides/M7A":DIR, "pont_neuf/M7A":DIR, /* Corresp ---> */ "palais_royal_musee_du_louvre/M1":COR };
pont_neuf_m7a.voisins = {"palais_royal_musee_du_louvre/M7A":DIR, "chatelet/M7A":DIR, /* Corresp ---> */  };
chatelet_m7a.voisins = {"pont_neuf/M7A":DIR, "pont_marie/M7A":DIR, /* Corresp ---> */ "chatelet/M1":COR, "chatelet/M4":COR, "chatelet/M11":COR, "chatelet/M14":COR, "les_halles/M4":CORL };
pont_marie_m7a.voisins = {"chatelet/M7A":DIR, "sully_morland/M7A":DIR, /* Corresp ---> */  };
sully_morland_m7a.voisins = {"pont_marie/M7A":DIR, "jussieu/M7A":DIR, /* Corresp ---> */  };
jussieu_m7a.voisins = {"sully_morland/M7A":DIR, "place_monge/M7A":DIR, /* Corresp ---> */ "jussieu/M10A":COR, "jussieu/M10B":COR };
place_monge_m7a.voisins = {"jussieu/M7A":DIR, "censier_daubenton/M7A":DIR, /* Corresp ---> */  };
censier_daubenton_m7a.voisins = {"place_monge/M7A":DIR, "les_gobelins/M7A":DIR, /* Corresp ---> */  };
les_gobelins_m7a.voisins = {"censier_daubenton/M7A":DIR, "place_d_italie/M7A":DIR, /* Corresp ---> */  };
place_d_italie_m7a.voisins = {"les_gobelins/M7A":DIR, "tolbiac/M7A":DIR, /* Corresp ---> */ "place_d_italie/M5":COR, "place_d_italie/M6":COR };
tolbiac_m7a.voisins = {"place_d_italie/M7A":DIR, "maison_blanche/M7A":DIR, /* Corresp ---> */  };
maison_blanche_m7a.voisins = {"tolbiac/M7A":DIR, "le_kremlin_bicetre/M7A":DIR, /* Corresp ---> */  };
le_kremlin_bicetre_m7a.voisins = {"maison_blanche/M7A":DIR, "villejuif_leo_lagrange/M7A":DIR, /* Corresp ---> */  };
villejuif_leo_lagrange_m7a.voisins = {"le_kremlin_bicetre/M7A":DIR, "villejuif_paul_vaillant_couturier/M7A":DIR, /* Corresp ---> */  };
villejuif_paul_vaillant_couturier_m7a.voisins = {"villejuif_leo_lagrange/M7A":DIR, "villejuif_louis_aragon/M7A":DIR, /* Corresp ---> */  };
villejuif_louis_aragon_m7a.voisins = {"villejuif_paul_vaillant_couturier/M7A":DIR, /* Corresp ---> */  };

la_courneuve_8_mai_1945_m7b.voisins = {"fort_d_aubervilliers/M7B":DIR, /* Corresp ---> */  };
fort_d_aubervilliers_m7b.voisins = {"la_courneuve_8_mai_1945/M7B":DIR, "aubervilliers_pantin_quatre_chemins/M7B":DIR, /* Corresp ---> */  };
aubervilliers_pantin_quatre_chemins_m7b.voisins = {"fort_d_aubervilliers/M7B":DIR, "porte_de_la_villette/M7B":DIR, /* Corresp ---> */  };
porte_de_la_villette_m7b.voisins = {"aubervilliers_pantin_quatre_chemins/M7B":DIR, "corentin_cariou/M7B":DIR, /* Corresp ---> */  };
corentin_cariou_m7b.voisins = {"porte_de_la_villette/M7B":DIR, "crimee/M7B":DIR, /* Corresp ---> */  };
crimee_m7b.voisins = {"corentin_cariou/M7B":DIR, "riquet/M7B":DIR, /* Corresp ---> */  };
riquet_m7b.voisins = {"crimee/M7B":DIR, "stalingrad/M7B":DIR, /* Corresp ---> */  };
stalingrad_m7b.voisins = {"riquet/M7B":DIR, "louis_blanc/M7B":DIR, /* Corresp ---> */ "stalingrad/M2":COR, "stalingrad/M5":COR };
louis_blanc_m7b.voisins = {"stalingrad/M7B":DIR, "chateau_landon/M7B":DIR, /* Corresp ---> */ "louis_blanc/M7bisA":COR, "louis_blanc/M7bisB":COR };
chateau_landon_m7b.voisins = {"louis_blanc/M7B":DIR, "gare_de_l_est/M7B":DIR, /* Corresp ---> */ "gare_de_l_est/M7A":CORL, "gare_de_l_est/M7B":CORL, "gare_de_l_est/M4":CORL, "gare_de_l_est/M5":CORL };
gare_de_l_est_m7b.voisins = {"chateau_landon/M7B":DIR, "poissonniere/M7B":DIR, /* Corresp ---> */ "gare_de_l_est/M4":COR, "gare_de_l_est/M5":COR, "chateau_landon/M7A":CORL, "chateau_landon/M7B":CORL };
poissonniere_m7b.voisins = {"gare_de_l_est/M7B":DIR, "cadet/M7B":DIR, /* Corresp ---> */  };
cadet_m7b.voisins = {"poissonniere/M7B":DIR, "le_peletier/M7B":DIR, /* Corresp ---> */  };
le_peletier_m7b.voisins = {"cadet/M7B":DIR, "chaussee_d_antin_la_fayette/M7B":DIR, /* Corresp ---> */  };
chaussee_d_antin_la_fayette_m7b.voisins = {"le_peletier/M7B":DIR, "opera/M7B":DIR, /* Corresp ---> */ "chaussee_d_antin_la_fayette/M9":COR };
opera_m7b.voisins = {"chaussee_d_antin_la_fayette/M7B":DIR, "pyramides/M7B":DIR, /* Corresp ---> */ "opera/M3":COR, "opera/M8":COR, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
pyramides_m7b.voisins = {"opera/M7B":DIR, "palais_royal_musee_du_louvre/M7B":DIR, /* Corresp ---> */ "pyramides/M14":COR };
palais_royal_musee_du_louvre_m7b.voisins = {"pyramides/M7B":DIR, "pont_neuf/M7B":DIR, /* Corresp ---> */ "palais_royal_musee_du_louvre/M1":COR };
pont_neuf_m7b.voisins = {"palais_royal_musee_du_louvre/M7B":DIR, "chatelet/M7B":DIR, /* Corresp ---> */  };
chatelet_m7b.voisins = {"pont_neuf/M7B":DIR, "pont_marie/M7B":DIR, /* Corresp ---> */ "chatelet/M1":COR, "chatelet/M4":COR, "chatelet/M11":COR, "chatelet/M14":COR, "les_halles/M4":CORL };
pont_marie_m7b.voisins = {"chatelet/M7B":DIR, "sully_morland/M7B":DIR, /* Corresp ---> */  };
sully_morland_m7b.voisins = {"pont_marie/M7B":DIR, "jussieu/M7B":DIR, /* Corresp ---> */  };
jussieu_m7b.voisins = {"sully_morland/M7B":DIR, "place_monge/M7B":DIR, /* Corresp ---> */ "jussieu/M10A":COR, "jussieu/M10B":COR };
place_monge_m7b.voisins = {"jussieu/M7B":DIR, "censier_daubenton/M7B":DIR, /* Corresp ---> */  };
censier_daubenton_m7b.voisins = {"place_monge/M7B":DIR, "les_gobelins/M7B":DIR, /* Corresp ---> */  };
les_gobelins_m7b.voisins = {"censier_daubenton/M7B":DIR, "place_d_italie/M7B":DIR, /* Corresp ---> */  };
place_d_italie_m7b.voisins = {"les_gobelins/M7B":DIR, "tolbiac/M7B":DIR, /* Corresp ---> */ "place_d_italie/M5":COR, "place_d_italie/M6":COR };
tolbiac_m7b.voisins = {"place_d_italie/M7B":DIR, "maison_blanche/M7B":DIR, /* Corresp ---> */  };
maison_blanche_m7b.voisins = {"tolbiac/M7B":DIR, "porte_d_italie/M7B":DIR, /* Corresp ---> */  };
porte_d_italie_m7b.voisins = {"maison_blanche/M7B":DIR, "porte_de_choisy/M7B":DIR, /* Corresp ---> */  };
porte_de_choisy_m7b.voisins = {"porte_d_italie/M7B":DIR, "porte_d_ivry/M7B":DIR, /* Corresp ---> */  };
porte_d_ivry_m7b.voisins = {"porte_de_choisy/M7B":DIR, "pierre_et_marie_curie/M7B":DIR, /* Corresp ---> */  };
pierre_et_marie_curie_m7b.voisins = {"porte_d_ivry/M7B":DIR, "mairie_d_ivry/M7B":DIR, /* Corresp ---> */  };
mairie_d_ivry_m7b.voisins = {"pierre_et_marie_curie/M7B":DIR, /* Corresp ---> */  };

louis_blanc_m7bisa.voisins = {"jaures/M7bisA":DIR, /* Corresp ---> */ "louis_blanc/M7A":COR, "louis_blanc/M7B":COR };
jaures_m7bisa.voisins = {"louis_blanc/M7bisA":DIR, "bolivar/M7bisA":DIR, /* Corresp ---> */ "jaures/M2":COR, "jaures/M5":COR };
bolivar_m7bisa.voisins = {"jaures/M7bisA":DIR, "buttes_chaumont/M7bisA":DIR, /* Corresp ---> */  };
buttes_chaumont_m7bisa.voisins = {"bolivar/M7bisA":DIR, "botzaris/M7bisA":DIR, /* Corresp ---> */  };
botzaris_m7bisa.voisins = {"buttes_chaumont/M7bisA":DIR, "place_des_fetes/M7bisA":DIR, /* Corresp ---> */  };
place_des_fetes_m7bisa.voisins = {"botzaris/M7bisA":DIR, "pre_saint_gervais/M7bisA":DIR, /* Corresp ---> */ "place_des_fetes/M11":COR };
pre_saint_gervais_m7bisa.voisins = {"place_des_fetes/M7bisA":DIR, /* Corresp ---> */  };

louis_blanc_m7bisb.voisins = {"jaures/M7bisB":DIR, /* Corresp ---> */ "louis_blanc/M7A":COR, "louis_blanc/M7B":COR };
jaures_m7bisb.voisins = {"louis_blanc/M7bisB":DIR, "bolivar/M7bisB":DIR, /* Corresp ---> */ "jaures/M2":COR, "jaures/M5":COR };
bolivar_m7bisb.voisins = {"jaures/M7bisB":DIR, "buttes_chaumont/M7bisB":DIR, /* Corresp ---> */  };
buttes_chaumont_m7bisb.voisins = {"bolivar/M7bisB":DIR, "botzaris/M7bisB":DIR, /* Corresp ---> */  };
botzaris_m7bisb.voisins = {"buttes_chaumont/M7bisB":DIR, "danube/M7bisB":DIR, /* Corresp ---> */  };
danube_m7bisb.voisins = {"botzaris/M7bisB":DIR, "pre_saint_gervais/M7bisB":DIR, /* Corresp ---> */  };
pre_saint_gervais_m7bisb.voisins = {"danube/M7bisB":DIR, /* Corresp ---> */  };

balard_m8.voisins = {"lourmel/M8":DIR, /* Corresp ---> */  };
lourmel_m8.voisins = {"balard/M8":DIR, "boucicaut/M8":DIR, /* Corresp ---> */  };
boucicaut_m8.voisins = {"lourmel/M8":DIR, "felix_faure/M8":DIR, /* Corresp ---> */  };
felix_faure_m8.voisins = {"boucicaut/M8":DIR, "commerce/M8":DIR, /* Corresp ---> */  };
commerce_m8.voisins = {"felix_faure/M8":DIR, "la_motte_picquet_grenelle/M8":DIR, /* Corresp ---> */  };
la_motte_picquet_grenelle_m8.voisins = {"commerce/M8":DIR, "ecole_militaire/M8":DIR, /* Corresp ---> */ "la_motte_picquet_grenelle/M6":COR, "la_motte_picquet_grenelle/M10A":COR, "la_motte_picquet_grenelle/M10B":COR };
ecole_militaire_m8.voisins = {"la_motte_picquet_grenelle/M8":DIR, "la_tour_maubourg/M8":DIR, /* Corresp ---> */  };
la_tour_maubourg_m8.voisins = {"ecole_militaire/M8":DIR, "invalides/M8":DIR, /* Corresp ---> */  };
invalides_m8.voisins = {"la_tour_maubourg/M8":DIR, "concorde/M8":DIR, /* Corresp ---> */ "invalides/M13A":COR, "invalides/M13B":COR };
concorde_m8.voisins = {"invalides/M8":DIR, "madeleine/M8":DIR, /* Corresp ---> */ "concorde/M1":COR, "concorde/M12":COR };
madeleine_m8.voisins = {"concorde/M8":DIR, "opera/M8":DIR, /* Corresp ---> */ "madeleine/M12":COR, "madeleine/M14":COR };
opera_m8.voisins = {"madeleine/M8":DIR, "richelieu_drouot/M8":DIR, /* Corresp ---> */ "opera/M3":COR, "opera/M7A":COR, "opera/M7B":COR, "havre_caumartin_m3":CORL, "havre_caumartin_m9":CORL };
richelieu_drouot_m8.voisins = {"opera/M8":DIR, "grands_boulevards/M8":DIR, /* Corresp ---> */ "richelieu_drouot/M9":COR };
grands_boulevards_m8.voisins = {"richelieu_drouot/M8":DIR, "bonne_nouvelle/M8":DIR, /* Corresp ---> */ "grands_boulevards/M9":COR };
bonne_nouvelle_m8.voisins = {"grands_boulevards/M8":DIR, "strasbourg_saint_denis/M8":DIR, /* Corresp ---> */ "bonne_nouvelle/M9":COR };
strasbourg_saint_denis_m8.voisins = {"bonne_nouvelle/M8":DIR, "republique/M8":DIR, /* Corresp ---> */ "strasbourg_saint_denis/M4":COR, "strasbourg_saint_denis/M9":COR };
republique_m8.voisins = {"strasbourg_saint_denis/M8":DIR, "filles_du_calvaire/M8":DIR, /* Corresp ---> */ "republique/M3":COR, "republique/M5":COR, "republique/M9":COR, "republique/M11":COR };
filles_du_calvaire_m8.voisins = {"republique/M8":DIR, "saint_sebastien_froissart/M8":DIR, /* Corresp ---> */  };
saint_sebastien_froissart_m8.voisins = {"filles_du_calvaire/M8":DIR, "chemin_vert/M8":DIR, /* Corresp ---> */  };
chemin_vert_m8.voisins = {"saint_sebastien_froissart/M8":DIR, "bastille/M8":DIR, /* Corresp ---> */  };
bastille_m8.voisins = {"chemin_vert/M8":DIR, "ledru_rollin/M8":DIR, /* Corresp ---> */ "bastille/M1":COR, "bastille/M5":COR };
ledru_rollin_m8.voisins = {"bastille/M8":DIR, "faidherbe_chaligny/M8":DIR, /* Corresp ---> */  };
faidherbe_chaligny_m8.voisins = {"ledru_rollin/M8":DIR, "reuilly_diderot/M8":DIR, /* Corresp ---> */  };
reuilly_diderot_m8.voisins = {"faidherbe_chaligny/M8":DIR, "montgallet/M8":DIR, /* Corresp ---> */ "reuilly_diderot/M1":COR };
montgallet_m8.voisins = {"reuilly_diderot/M8":DIR, "daumesnil/M8":DIR, /* Corresp ---> */  };
daumesnil_m8.voisins = {"montgallet/M8":DIR, "michel_bizot/M8":DIR, /* Corresp ---> */ "daumesnil/M6":COR };
michel_bizot_m8.voisins = {"daumesnil/M8":DIR, "porte_doree/M8":DIR, /* Corresp ---> */  };
porte_doree_m8.voisins = {"michel_bizot/M8":DIR, "porte_de_charenton/M8":DIR, /* Corresp ---> */  };
porte_de_charenton_m8.voisins = {"porte_doree/M8":DIR, "liberte/M8":DIR, /* Corresp ---> */  };
liberte_m8.voisins = {"porte_de_charenton/M8":DIR, "charenton_ecoles/M8":DIR, /* Corresp ---> */  };
charenton_ecoles_m8.voisins = {"liberte/M8":DIR, "ecole_veterinaire_de_maisons_alfort/M8":DIR, /* Corresp ---> */  };
ecole_veterinaire_de_maisons_alfort_m8.voisins = {"charenton_ecoles/M8":DIR, "maisons_alfort_stade/M8":DIR, /* Corresp ---> */  };
maisons_alfort_stade_m8.voisins = {"ecole_veterinaire_de_maisons_alfort/M8":DIR, "maisons_alfort_les_juilliottes/M8":DIR, /* Corresp ---> */  };
maisons_alfort_les_juilliottes_m8.voisins = {"maisons_alfort_stade/M8":DIR, "creteil_l_echat/M8":DIR, /* Corresp ---> */  };
creteil_l_echat_m8.voisins = {"maisons_alfort_les_juilliottes/M8":DIR, "creteil_universite/M8":DIR, /* Corresp ---> */  };
creteil_universite_m8.voisins = {"creteil_l_echat/M8":DIR, "creteil_prefecture/M8":DIR, /* Corresp ---> */  };
creteil_prefecture_m8.voisins = {"creteil_universite/M8":DIR, "pointe_du_lac/M8":DIR, /* Corresp ---> */  };
pointe_du_lac_m8.voisins = {"creteil_prefecture/M8":DIR, /* Corresp ---> */  };

pont_de_sevres_m9.voisins = {"billancourt/M9":DIR, /* Corresp ---> */  };
billancourt_m9.voisins = {"pont_de_sevres/M9":DIR, "marcel_sembat/M9":DIR, /* Corresp ---> */  };
marcel_sembat_m9.voisins = {"billancourt/M9":DIR, "porte_de_saint_cloud/M9":DIR, /* Corresp ---> */  };
porte_de_saint_cloud_m9.voisins = {"marcel_sembat/M9":DIR, "exelmans/M9":DIR, /* Corresp ---> */  };
exelmans_m9.voisins = {"porte_de_saint_cloud/M9":DIR, "michel_ange_molitor/M9":DIR, /* Corresp ---> */  };
michel_ange_molitor_m9.voisins = {"exelmans/M9":DIR, "michel_ange_auteuil/M9":DIR, /* Corresp ---> */ "michel_ange_molitor/M10A":COR };
michel_ange_auteuil_m9.voisins = {"michel_ange_molitor/M9":DIR, "jasmin/M9":DIR, /* Corresp ---> */ "michel_ange_auteuil/M10B":COR };
jasmin_m9.voisins = {"michel_ange_auteuil/M9":DIR, "ranelagh/M9":DIR, /* Corresp ---> */  };
ranelagh_m9.voisins = {"jasmin/M9":DIR, "la_muette/M9":DIR, /* Corresp ---> */  };
la_muette_m9.voisins = {"ranelagh/M9":DIR, "rue_de_la_pompe/M9":DIR, /* Corresp ---> */  };
rue_de_la_pompe_m9.voisins = {"la_muette/M9":DIR, "trocadero/M9":DIR, /* Corresp ---> */  };
trocadero_m9.voisins = {"rue_de_la_pompe/M9":DIR, "iena/M9":DIR, /* Corresp ---> */ "trocadero/M6":COR };
iena_m9.voisins = {"trocadero/M9":DIR, "alma_marceau/M9":DIR, /* Corresp ---> */  };
alma_marceau_m9.voisins = {"iena/M9":DIR, "franklin_d_roosevelt/M9":DIR, /* Corresp ---> */  };
franklin_d_roosevelt_m9.voisins = {"alma_marceau/M9":DIR, "saint_philippe_du_roule/M9":DIR, /* Corresp ---> */ "franklin_d_roosevelt/M1":COR };
saint_philippe_du_roule_m9.voisins = {"franklin_d_roosevelt/M9":DIR, "miromesnil/M9":DIR, /* Corresp ---> */  };
miromesnil_m9.voisins = {"saint_philippe_du_roule/M9":DIR, "saint_augustin/M9":DIR, /* Corresp ---> */ "miromesnil/M13A":COR, "miromesnil/M13B":COR };
saint_augustin_m9.voisins = {"miromesnil/M9":DIR, "havre_caumartin/M9":DIR, /* Corresp ---> */ "saint_lazare/M3":CORL, "saint_lazare/M12":CORL, "saint_lazare/M13A":CORL, "saint_lazare/M13B":CORL, "saint_lazare/M14":CORL };
havre_caumartin_m9.voisins = {"saint_augustin/M9":DIR, "chaussee_d_antin_la_fayette/M9":DIR, /* Corresp ---> */ "havre_caumartin/M3":COR, "opera_m3":CORL, "opera/M7A":CORL, "opera/M7B":CORL, "opera/M8":CORL, "saint_lazare/M3":CORL, "saint_lazare/M12":CORL, "saint_lazare/M13A":CORL, "saint_lazare/M13B":CORL, "saint_lazare/M14":CORL };
chaussee_d_antin_la_fayette_m9.voisins = {"havre_caumartin/M9":DIR, "richelieu_drouot/M9":DIR, /* Corresp ---> */ "chaussee_d_antin_la_fayette/M7A":COR, "chaussee_d_antin_la_fayette/M7B":COR };
richelieu_drouot_m9.voisins = {"chaussee_d_antin_la_fayette/M9":DIR, "grands_boulevards/M9":DIR, /* Corresp ---> */ "richelieu_drouot/M8":COR };
grands_boulevards_m9.voisins = {"richelieu_drouot/M9":DIR, "bonne_nouvelle/M9":DIR, /* Corresp ---> */ "grands_boulevards/M8":COR };
bonne_nouvelle_m9.voisins = {"grands_boulevards/M9":DIR, "strasbourg_saint_denis/M9":DIR, /* Corresp ---> */ "bonne_nouvelle/M8":COR };
strasbourg_saint_denis_m9.voisins = {"bonne_nouvelle/M9":DIR, "republique/M9":DIR, /* Corresp ---> */ "strasbourg_saint_denis/M4":COR, "strasbourg_saint_denis/M8":COR };
republique_m9.voisins = {"strasbourg_saint_denis/M9":DIR, "oberkampf/M9":DIR, /* Corresp ---> */ "republique/M3":COR, "republique/M5":COR, "republique/M8":COR, "republique/M11":COR };
oberkampf_m9.voisins = {"republique/M9":DIR, "saint_ambroise/M9":DIR, /* Corresp ---> */ "oberkampf/M5":COR };
saint_ambroise_m9.voisins = {"oberkampf/M9":DIR, "voltaire/M9":DIR, /* Corresp ---> */  };
voltaire_m9.voisins = {"saint_ambroise/M9":DIR, "charonne/M9":DIR, /* Corresp ---> */  };
charonne_m9.voisins = {"voltaire/M9":DIR, "rue_des_boulets/M9":DIR, /* Corresp ---> */  };
rue_des_boulets_m9.voisins = {"charonne/M9":DIR, "nation/M9":DIR, /* Corresp ---> */  };
nation_m9.voisins = {"rue_des_boulets/M9":DIR, "buzenval/M9":DIR, /* Corresp ---> */ "nation/M1":COR, "nation/M2":COR, "nation/M6":COR };
buzenval_m9.voisins = {"nation/M9":DIR, "maraichers/M9":DIR, /* Corresp ---> */  };
maraichers_m9.voisins = {"buzenval/M9":DIR, "porte_de_montreuil/M9":DIR, /* Corresp ---> */  };
porte_de_montreuil_m9.voisins = {"maraichers/M9":DIR, "robespierre/M9":DIR, /* Corresp ---> */  };
robespierre_m9.voisins = {"porte_de_montreuil/M9":DIR, "croix_de_chavaux/M9":DIR, /* Corresp ---> */  };
croix_de_chavaux_m9.voisins = {"robespierre/M9":DIR, "mairie_de_montreuil/M9":DIR, /* Corresp ---> */  };
mairie_de_montreuil_m9.voisins = {"croix_de_chavaux/M9":DIR, /* Corresp ---> */  };

boulogne_pont_de_saint_cloud_m10a.voisins = {"boulogne_jean_jaures/M10A":DIR, /* Corresp ---> */  };
boulogne_jean_jaures_m10a.voisins = {"boulogne_pont_de_saint_cloud/M10A":DIR, "michel_ange_molitor/M10A":DIR, /* Corresp ---> */  };
michel_ange_molitor_m10a.voisins = {"boulogne_jean_jaures/M10A":DIR, "chardon_lagache/M10A":DIR, /* Corresp ---> */ "michel_ange_molitor/M9":COR };
chardon_lagache_m10a.voisins = {"michel_ange_molitor/M10A":DIR, "mirabeau/M10A":DIR, /* Corresp ---> */  };
mirabeau_m10a.voisins = {"chardon_lagache/M10A":DIR, "javel_andre_citroen/M10A":DIR, /* Corresp ---> */  };
javel_andre_citroen_m10a.voisins = {"mirabeau/M10A":DIR, "charles_michels/M10A":DIR, /* Corresp ---> */  };
charles_michels_m10a.voisins = {"javel_andre_citroen/M10A":DIR, "avenue_emile_zola/M10A":DIR, /* Corresp ---> */  };
avenue_emile_zola_m10a.voisins = {"charles_michels/M10A":DIR, "la_motte_picquet_grenelle/M10A":DIR, /* Corresp ---> */  };
la_motte_picquet_grenelle_m10a.voisins = {"avenue_emile_zola/M10A":DIR, "segur/M10A":DIR, /* Corresp ---> */ "la_motte_picquet_grenelle/M6":COR, "la_motte_picquet_grenelle/M8":COR };
segur_m10a.voisins = {"la_motte_picquet_grenelle/M10A":DIR, "duroc/M10A":DIR, /* Corresp ---> */  };
duroc_m10a.voisins = {"segur/M10A":DIR, "vaneau/M10A":DIR, /* Corresp ---> */ "duroc/M13A":COR, "duroc/M13B":COR };
vaneau_m10a.voisins = {"duroc/M10A":DIR, "sevres_babylone/M10A":DIR, /* Corresp ---> */  };
sevres_babylone_m10a.voisins = {"vaneau/M10A":DIR, "mabillon/M10A":DIR, /* Corresp ---> */ "sevres_babylone/M12":COR };
mabillon_m10a.voisins = {"sevres_babylone/M10A":DIR, "odeon/M10A":DIR, /* Corresp ---> */  };
odeon_m10a.voisins = {"mabillon/M10A":DIR, "cluny_la_sorbonne/M10A":DIR, /* Corresp ---> */ "odeon/M4":COR };
cluny_la_sorbonne_m10a.voisins = {"odeon/M10A":DIR, "maubert_mutualite/M10A":DIR, /* Corresp ---> */ "saint_michel/M4":CORL };
maubert_mutualite_m10a.voisins = {"cluny_la_sorbonne/M10A":DIR, "cardinal_lemoine/M10A":DIR, /* Corresp ---> */  };
cardinal_lemoine_m10a.voisins = {"maubert_mutualite/M10A":DIR, "jussieu/M10A":DIR, /* Corresp ---> */  };
jussieu_m10a.voisins = {"cardinal_lemoine/M10A":DIR, "gare_d_austerlitz/M10A":DIR, /* Corresp ---> */ "jussieu/M7A":COR, "jussieu/M7B":COR };
gare_d_austerlitz_m10a.voisins = {"jussieu/M10A":DIR, /* Corresp ---> */ "gare_d_austerlitz/M5":COR };

boulogne_pont_de_saint_cloud_m10b.voisins = {"boulogne_jean_jaures/M10B":DIR, /* Corresp ---> */  };
boulogne_jean_jaures_m10b.voisins = {"boulogne_pont_de_saint_cloud/M10B":DIR, "porte_d_auteuil/M10B":DIR, /* Corresp ---> */  };
porte_d_auteuil_m10b.voisins = {"boulogne_jean_jaures/M10B":DIR, "michel_ange_auteuil/M10B":DIR, /* Corresp ---> */  };
michel_ange_auteuil_m10b.voisins = {"porte_d_auteuil/M10B":DIR, "eglise_d_auteuil/M10B":DIR, /* Corresp ---> */ "michel_ange_auteuil/M9":COR };
eglise_d_auteuil_m10b.voisins = {"michel_ange_auteuil/M10B":DIR, "javel_andre_citroen/M10B":DIR, /* Corresp ---> */  };
javel_andre_citroen_m10b.voisins = {"eglise_d_auteuil/M10B":DIR, "charles_michels/M10B":DIR, /* Corresp ---> */  };
charles_michels_m10b.voisins = {"javel_andre_citroen/M10B":DIR, "avenue_emile_zola/M10B":DIR, /* Corresp ---> */  };
avenue_emile_zola_m10b.voisins = {"charles_michels/M10B":DIR, "la_motte_picquet_grenelle/M10B":DIR, /* Corresp ---> */  };
la_motte_picquet_grenelle_m10b.voisins = {"avenue_emile_zola/M10B":DIR, "segur/M10B":DIR, /* Corresp ---> */ "la_motte_picquet_grenelle/M6":COR, "la_motte_picquet_grenelle/M8":COR };
segur_m10b.voisins = {"la_motte_picquet_grenelle/M10B":DIR, "duroc/M10B":DIR, /* Corresp ---> */  };
duroc_m10b.voisins = {"segur/M10B":DIR, "vaneau/M10B":DIR, /* Corresp ---> */ "duroc/M13A":COR, "duroc/M13B":COR };
vaneau_m10b.voisins = {"duroc/M10B":DIR, "sevres_babylone/M10B":DIR, /* Corresp ---> */  };
sevres_babylone_m10b.voisins = {"vaneau/M10B":DIR, "mabillon/M10B":DIR, /* Corresp ---> */ "sevres_babylone/M12":COR };
mabillon_m10b.voisins = {"sevres_babylone/M10B":DIR, "odeon/M10B":DIR, /* Corresp ---> */  };
odeon_m10b.voisins = {"mabillon/M10B":DIR, "cluny_la_sorbonne/M10B":DIR, /* Corresp ---> */ "odeon/M4":COR };
cluny_la_sorbonne_m10b.voisins = {"odeon/M10B":DIR, "maubert_mutualite/M10B":DIR, /* Corresp ---> */ "saint_michel/M4":CORL };
maubert_mutualite_m10b.voisins = {"cluny_la_sorbonne/M10B":DIR, "cardinal_lemoine/M10B":DIR, /* Corresp ---> */  };
cardinal_lemoine_m10b.voisins = {"maubert_mutualite/M10B":DIR, "jussieu/M10B":DIR, /* Corresp ---> */  };
jussieu_m10b.voisins = {"cardinal_lemoine/M10B":DIR, "gare_d_austerlitz/M10B":DIR, /* Corresp ---> */ "jussieu/M7A":COR, "jussieu/M7B":COR };
gare_d_austerlitz_m10b.voisins = {"jussieu/M10B":DIR, /* Corresp ---> */ "gare_d_austerlitz/M5":COR };

chatelet_m11.voisins = {"hotel_de_ville/M11":DIR, /* Corresp ---> */ "chatelet/M1":COR, "chatelet/M4":COR, "chatelet/M7A":COR, "chatelet/M7B":COR, "chatelet/M14":COR, "les_halles/M4":CORL };
hotel_de_ville_m11.voisins = {"chatelet/M11":DIR, "rambuteau/M11":DIR, /* Corresp ---> */ "hotel_de_ville/M1":COR };
rambuteau_m11.voisins = {"hotel_de_ville/M11":DIR, "arts_et_metiers/M11":DIR, /* Corresp ---> */  };
arts_et_metiers_m11.voisins = {"rambuteau/M11":DIR, "republique/M11":DIR, /* Corresp ---> */ "arts_et_metiers/M3":COR };
republique_m11.voisins = {"arts_et_metiers/M11":DIR, "goncourt/M11":DIR, /* Corresp ---> */ "republique/M3":COR, "republique/M5":COR, "republique/M8":COR, "republique/M9":COR };
goncourt_m11.voisins = {"republique/M11":DIR, "belleville/M11":DIR, /* Corresp ---> */  };
belleville_m11.voisins = {"goncourt/M11":DIR, "pyrenees/M11":DIR, /* Corresp ---> */ "belleville/M2":COR };
pyrenees_m11.voisins = {"belleville/M11":DIR, "jourdain/M11":DIR, /* Corresp ---> */  };
jourdain_m11.voisins = {"pyrenees/M11":DIR, "place_des_fetes/M11":DIR, /* Corresp ---> */  };
place_des_fetes_m11.voisins = {"jourdain/M11":DIR, "telegraphe/M11":DIR, /* Corresp ---> */ "place_des_fetes/M7bisA":COR };
telegraphe_m11.voisins = {"place_des_fetes/M11":DIR, "porte_des_lilas/M11":DIR, /* Corresp ---> */  };
porte_des_lilas_m11.voisins = {"telegraphe/M11":DIR, "mairie_des_lilas/M11":DIR, /* Corresp ---> */ "porte_des_lilas/M3bis":COR };
mairie_des_lilas_m11.voisins = {"porte_des_lilas/M11":DIR, /* Corresp ---> */  };

front_populaire_m12.voisins = {"porte_de_la_chapelle/M12":DIR, /* Corresp ---> */  };
porte_de_la_chapelle_m12.voisins = {"front_populaire/M12":DIR, "marx_dormoy/M12":DIR, /* Corresp ---> */  };
marx_dormoy_m12.voisins = {"porte_de_la_chapelle/M12":DIR, "marcadet_poissonniers/M12":DIR, /* Corresp ---> */  };
marcadet_poissonniers_m12.voisins = {"marx_dormoy/M12":DIR, "jules_joffrin/M12":DIR, /* Corresp ---> */ "marcadet_poissonniers/M4":COR };
jules_joffrin_m12.voisins = {"marcadet_poissonniers/M12":DIR, "lamarck_caulaincourt/M12":DIR, /* Corresp ---> */  };
lamarck_caulaincourt_m12.voisins = {"jules_joffrin/M12":DIR, "abbesses/M12":DIR, /* Corresp ---> */  };
abbesses_m12.voisins = {"lamarck_caulaincourt/M12":DIR, "pigalle/M12":DIR, /* Corresp ---> */  };
pigalle_m12.voisins = {"abbesses/M12":DIR, "saint_georges/M12":DIR, /* Corresp ---> */ "pigalle/M2":COR };
saint_georges_m12.voisins = {"pigalle/M12":DIR, "notre_dame_de_lorette/M12":DIR, /* Corresp ---> */  };
notre_dame_de_lorette_m12.voisins = {"saint_georges/M12":DIR, "trinite_d_estienne_d_orves/M12":DIR, /* Corresp ---> */  };
trinite_d_estienne_d_orves_m12.voisins = {"notre_dame_de_lorette/M12":DIR, "saint_lazare/M12":DIR, /* Corresp ---> */  };
saint_lazare_m12.voisins = {"trinite_d_estienne_d_orves/M12":DIR, "madeleine/M12":DIR, /* Corresp ---> */ "saint_lazare/M3":COR, "saint_lazare/M13A":COR, "saint_lazare/M13B":COR, "saint_lazare/M14":COR, "saint_augustin/M9":CORL, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
madeleine_m12.voisins = {"saint_lazare/M12":DIR, "concorde/M12":DIR, /* Corresp ---> */ "madeleine/M8":COR, "madeleine/M14":COR };
concorde_m12.voisins = {"madeleine/M12":DIR, "assemblee_nationale/M12":DIR, /* Corresp ---> */ "concorde/M1":COR, "concorde/M8":COR };
assemblee_nationale_m12.voisins = {"concorde/M12":DIR, "solferino/M12":DIR, /* Corresp ---> */  };
solferino_m12.voisins = {"assemblee_nationale/M12":DIR, "rue_du_bac/M12":DIR, /* Corresp ---> */  };
rue_du_bac_m12.voisins = {"solferino/M12":DIR, "sevres_babylone/M12":DIR, /* Corresp ---> */  };
sevres_babylone_m12.voisins = {"rue_du_bac/M12":DIR, "rennes/M12":DIR, /* Corresp ---> */ "sevres_babylone/M10A":COR, "sevres_babylone/M10B":COR };
rennes_m12.voisins = {"sevres_babylone/M12":DIR, "notre_dame_des_champs/M12":DIR, /* Corresp ---> */  };
notre_dame_des_champs_m12.voisins = {"rennes/M12":DIR, "montparnasse_bienvenue/M12":DIR, /* Corresp ---> */  };
montparnasse_bienvenue_m12.voisins = {"notre_dame_des_champs/M12":DIR, "falguiere/M12":DIR, /* Corresp ---> */ "montparnasse_bienvenue/M4":COR, "montparnasse_bienvenue/M6":COR, "montparnasse_bienvenue/M13A":COR, "montparnasse_bienvenue/M13B":COR };
falguiere_m12.voisins = {"montparnasse_bienvenue/M12":DIR, "pasteur/M12":DIR, /* Corresp ---> */  };
pasteur_m12.voisins = {"falguiere/M12":DIR, "volontaires/M12":DIR, /* Corresp ---> */ "pasteur/M6":COR };
volontaires_m12.voisins = {"pasteur/M12":DIR, "vaugirard/M12":DIR, /* Corresp ---> */  };
vaugirard_m12.voisins = {"volontaires/M12":DIR, "convention/M12":DIR, /* Corresp ---> */  };
convention_m12.voisins = {"vaugirard/M12":DIR, "porte_de_versailles/M12":DIR, /* Corresp ---> */  };
porte_de_versailles_m12.voisins = {"convention/M12":DIR, "corentin_celton/M12":DIR, /* Corresp ---> */  };
corentin_celton_m12.voisins = {"porte_de_versailles/M12":DIR, "mairie_d_issy/M12":DIR, /* Corresp ---> */  };
mairie_d_issy_m12.voisins = {"corentin_celton/M12":DIR, /* Corresp ---> */  };

asnieres_gennevilliers_les_courtilles_m13a.voisins = {"les_agnettes/M13A":DIR, /* Corresp ---> */  };
les_agnettes_m13a.voisins = {"asnieres_gennevilliers_les_courtilles/M13A":DIR, "gabriel_peri/M13A":DIR, /* Corresp ---> */  };
gabriel_peri_m13a.voisins = {"les_agnettes/M13A":DIR, "mairie_de_clichy/M13A":DIR, /* Corresp ---> */  };
mairie_de_clichy_m13a.voisins = {"gabriel_peri/M13A":DIR, "porte_de_clichy/M13A":DIR, /* Corresp ---> */  };
porte_de_clichy_m13a.voisins = {"mairie_de_clichy/M13A":DIR, "brochant/M13A":DIR, /* Corresp ---> */  };
brochant_m13a.voisins = {"porte_de_clichy/M13A":DIR, "la_fourche/M13A":DIR, /* Corresp ---> */  };
la_fourche_m13a.voisins = {"brochant/M13A":DIR, "place_de_clichy/M13A":DIR, /* Corresp ---> */  };
place_de_clichy_m13a.voisins = {"la_fourche/M13A":DIR, "liege/M13A":DIR, /* Corresp ---> */ "place_de_clichy/M2":COR };
liege_m13a.voisins = {"place_de_clichy/M13A":DIR, "saint_lazare/M13A":DIR, /* Corresp ---> */  };
saint_lazare_m13a.voisins = {"liege/M13A":DIR, "miromesnil/M13A":DIR, /* Corresp ---> */ "saint_lazare/M3":COR, "saint_lazare/M12":COR, "saint_lazare/M14":COR, "saint_augustin/M9":CORL, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
miromesnil_m13a.voisins = {"saint_lazare/M13A":DIR, "champs_elysees_clemenceau/M13A":DIR, /* Corresp ---> */ "miromesnil/M9":COR };
champs_elysees_clemenceau_m13a.voisins = {"miromesnil/M13A":DIR, "invalides/M13A":DIR, /* Corresp ---> */ "champs_elysees_clemenceau/M1":COR };
invalides_m13a.voisins = {"champs_elysees_clemenceau/M13A":DIR, "varenne/M13A":DIR, /* Corresp ---> */ "invalides/M8":COR };
varenne_m13a.voisins = {"invalides/M13A":DIR, "saint_francois_xavier/M13A":DIR, /* Corresp ---> */  };
saint_francois_xavier_m13a.voisins = {"varenne/M13A":DIR, "duroc/M13A":DIR, /* Corresp ---> */  };
duroc_m13a.voisins = {"saint_francois_xavier/M13A":DIR, "montparnasse_bienvenue/M13A":DIR, /* Corresp ---> */ "duroc/M10A":COR, "duroc/M10B":COR };
montparnasse_bienvenue_m13a.voisins = {"duroc/M13A":DIR, "gaite/M13A":DIR, /* Corresp ---> */ "montparnasse_bienvenue/M4":COR, "montparnasse_bienvenue/M6":COR, "montparnasse_bienvenue/M12":COR };
gaite_m13a.voisins = {"montparnasse_bienvenue/M13A":DIR, "pernety/M13A":DIR, /* Corresp ---> */  };
pernety_m13a.voisins = {"gaite/M13A":DIR, "plaisance/M13A":DIR, /* Corresp ---> */  };
plaisance_m13a.voisins = {"pernety/M13A":DIR, "porte_de_vanves/M13A":DIR, /* Corresp ---> */  };
porte_de_vanves_m13a.voisins = {"plaisance/M13A":DIR, "malakoff_plateau_de_vanves/M13A":DIR, /* Corresp ---> */  };
malakoff_plateau_de_vanves_m13a.voisins = {"porte_de_vanves/M13A":DIR, "malakoff_rue_etienne_dolet/M13A":DIR, /* Corresp ---> */  };
malakoff_rue_etienne_dolet_m13a.voisins = {"malakoff_plateau_de_vanves/M13A":DIR, "chatillon_montrouge/M13A":DIR, /* Corresp ---> */  };
chatillon_montrouge_m13a.voisins = {"malakoff_rue_etienne_dolet/M13A":DIR, /* Corresp ---> */  };

saint_denis_universite_m13b.voisins = {"basilique_de_saint_denis/M13B":DIR, /* Corresp ---> */ };
basilique_de_saint_denis_m13b.voisins = {"saint_denis_universite/M13B":DIR, "saint_denis_porte_de_paris/M13B":DIR, /* Corresp ---> */  };
saint_denis_porte_de_paris_m13b.voisins = {"basilique_de_saint_denis/M13B":DIR, "carrefour_pleyel/M13B":DIR, /* Corresp ---> */  };
carrefour_pleyel_m13b.voisins = {"saint_denis_porte_de_paris/M13B":DIR, "mairie_de_saint_ouen/M13B":DIR, /* Corresp ---> */  };
mairie_de_saint_ouen_m13b.voisins = {"carrefour_pleyel/M13B":DIR, "garibaldi/M13B":DIR, /* Corresp ---> */  };
garibaldi_m13b.voisins = {"mairie_de_saint_ouen/M13B":DIR, "porte_de_saint_ouen/M13B":DIR, /* Corresp ---> */  };
porte_de_saint_ouen_m13b.voisins = {"garibaldi/M13B":DIR, "guy_moquet/M13B":DIR, /* Corresp ---> */  };
guy_moquet_m13b.voisins = {"porte_de_saint_ouen/M13B":DIR, "la_fourche/M13B":DIR, /* Corresp ---> */  };
la_fourche_m13b.voisins = {"guy_moquet/M13B":DIR, "place_de_clichy/M13B":DIR, /* Corresp ---> */ "place_de_clichy/M2":COR };
place_de_clichy_m13b.voisins = {"la_fourche/M13B":DIR, "liege/M13B":DIR, /* Corresp ---> */  };
liege_m13b.voisins = {"place_de_clichy/M13B":DIR, "saint_lazare/M13B":DIR, /* Corresp ---> */  };
saint_lazare_m13b.voisins = {"liege/M13B":DIR, "miromesnil/M13B":DIR, /* Corresp ---> */ "saint_lazare/M3":COR, "saint_lazare/M12":COR, "saint_lazare/M14":COR, "saint_augustin/M9":CORL, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
miromesnil_m13b.voisins = {"saint_lazare/M13B":DIR, "champs_elysees_clemenceau/M13B":DIR, /* Corresp ---> */ "miromesnil/M9":COR };
champs_elysees_clemenceau_m13b.voisins = {"miromesnil/M13B":DIR, "invalides/M13B":DIR, /* Corresp ---> */ "champs_elysees_clemenceau/M1":COR };
invalides_m13b.voisins = {"champs_elysees_clemenceau/M13B":DIR, "varenne/M13B":DIR, /* Corresp ---> */ "invalides/M8":COR };
varenne_m13b.voisins = {"invalides/M13B":DIR, "saint_francois_xavier/M13B":DIR, /* Corresp ---> */  };
saint_francois_xavier_m13b.voisins = {"varenne/M13B":DIR, "duroc/M13B":DIR, /* Corresp ---> */  };
duroc_m13b.voisins = {"saint_francois_xavier/M13B":DIR, "montparnasse_bienvenue/M13B":DIR, /* Corresp ---> */ "duroc/M10A":COR, "duroc/M10B":COR };
montparnasse_bienvenue_m13b.voisins = {"duroc/M13B":DIR, "gaite/M13B":DIR, /* Corresp ---> */ "montparnasse_bienvenue/M4":COR, "montparnasse_bienvenue/M6":COR, "montparnasse_bienvenue/M12":COR };
gaite_m13b.voisins = {"montparnasse_bienvenue/M13B":DIR, "pernety/M13B":DIR, /* Corresp ---> */  };
pernety_m13b.voisins = {"gaite/M13B":DIR, "plaisance/M13B":DIR, /* Corresp ---> */  };
plaisance_m13b.voisins = {"pernety/M13B":DIR, "porte_de_vanves/M13B":DIR, /* Corresp ---> */  };
porte_de_vanves_m13b.voisins = {"plaisance/M13B":DIR, "malakoff_plateau_de_vanves/M13B":DIR, /* Corresp ---> */  };
malakoff_plateau_de_vanves_m13b.voisins = {"porte_de_vanves/M13B":DIR, "malakoff_rue_etienne_dolet/M13B":DIR, /* Corresp ---> */  };
malakoff_rue_etienne_dolet_m13b.voisins = {"malakoff_plateau_de_vanves/M13B":DIR, "chatillon_montrouge/M13B":DIR, /* Corresp ---> */  };
chatillon_montrouge_m13b.voisins = {"malakoff_rue_etienne_dolet/M13B":DIR, /* Corresp ---> */  };

saint_lazare_m14.voisins = {"madeleine/M14":DIR, /* Corresp ---> */ "saint_lazare/M3":COR, "saint_lazare/M12":COR, "saint_lazare/M13A":COR, "saint_lazare/M13B":COR, "saint_augustin/M9":CORL, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
madeleine_m14.voisins = {"saint_lazare/M14":DIR, "pyramides/M14":DIR, /* Corresp ---> */ "madeleine/M8":COR, "madeleine/M12":COR };
pyramides_m14.voisins = {"madeleine/M14":DIR, "chatelet/M14":DIR, /* Corresp ---> */ "pyramides/M7A":COR, "pyramides/M7B":COR };
chatelet_m14.voisins = {"pyramides/M14":DIR, "gare_de_lyon/M14":DIR, /* Corresp ---> */ "chatelet/M1":COR, "chatelet/M4":COR, "chatelet/M7A":COR, "chatelet/M7B":COR, "chatelet/M11":COR, "les_halles/M4":CORL };
gare_de_lyon_m14.voisins = {"chatelet/M14":DIR, "bercy/M14":DIR, /* Corresp ---> */ "gare_de_lyon/M1":COR };
bercy_m14.voisins = {"gare_de_lyon/M14":DIR, "cour_saint_emilion/M14":DIR, /* Corresp ---> */ "bercy/M6":COR };
cour_saint_emilion_m14.voisins = {"bercy/M14":DIR, "bibliotheque_francois_mitterrand/M14":DIR, /* Corresp ---> */  };
bibliotheque_francois_mitterrand_m14.voisins = {"cour_saint_emilion/M14":DIR, "olympiades/M14":DIR, /* Corresp ---> */  };
olympiades_m14.voisin = {"bibliotheque_francois_mitterrand/M14":DIR, /* Corresp ---> */  };

var listeStations = [
	la_defense_m1,esplanade_de_la_defense_m1,pont_de_neuilly_m1,les_sablons_m1,porte_maillot_m1,argentine_m1,charles_de_gaulle_etoile_m1,georges_v_m1,franklin_d_roosevelt_m1,champs_elysees_clemenceau_m1,concorde_m1,tuileries_m1,palais_royal_musee_du_louvre_m1,louvre_rivoli_m1,chatelet_m1,hotel_de_ville_m1,saint_paul_m1,bastille_m1,gare_de_lyon_m1,reuilly_diderot_m1,nation_m1,porte_de_vincennes_m1,saint_mande_m1,berault_m1,chateau_de_vincennes_m1,
	porte_dauphine_m2,victor_hugo_m2,charles_de_gaulle_etoile_m2,ternes_m2,courcelles_m2,monceau_m2,villiers_m2,rome_m2,place_de_clichy_m2,blanche_m2,pigalle_m2,anvers_m2,barbes_rochechouart_m2,la_chapelle_m2,stalingrad_m2,jaures_m2,colonel_fabien_m2,belleville_m2,couronnes_m2,menilmontant_m2,pere_lachaise_m2,philippe_auguste_m2,alexandre_dumas_m2,avron_m2,nation_m2,
	pont_de_levallois_becon_m3,anatole_france_m3,louise_michel_m3,porte_de_champerret_m3,pereire_m3,wagram_m3,malesherbes_m3,villiers_m3,europe_m3,saint_lazare_m3,havre_caumartin_m3,opera_m3,quatre_septembre_m3,bourse_m3,sentier_m3,reaumur_sebastopol_m3,arts_et_metiers_m3,temple_m3,republique_m3,parmentier_m3,rue_saint_maur_m3,pere_lachaise_m3,gambetta_m3,porte_de_bagnolet_m3,gallieni_m3,
	gambetta_m3b,pelleport_m3b,saint_fargeau_m3b,porte_des_lilas_m3b,
	porte_de_clignancourt_m4, simplon_m4,marcadet_poissonniers_m4,chateau_rouge_m4,barbes_rochechouart_m4,gare_du_nord_m4,gare_de_l_est_m4,chateau_d_eau_m4,strasbourg_saint_denis_m4,reaumur_sebastopol_m4,etienne_marcel_m4,les_halles_m4,chatelet_m4,cite_m4,saint_michel_m4,odeon_m4,saint_germain_des_pres_m4,saint_sulpice_m4,saint_placide_m4,montparnasse_bienvenue_m4,valvin_m4,raspail_m4,denfert_rochereau_m4,mouton_duvernet_m4,alesia_m4,porte_d_orleans_m4,mairie_de_montrouge_m4,
	bobigny_pablo_picasso_m5,bobigny_pantin_raymond_queneau_m5,eglise_de_pantin_m5,hoche_m5,porte_de_pantin_m5,ourcq_m5,laumiere_m5,jaures_m5,stalingrad_m5,gare_du_nord_m5,gare_de_l_est_m5,jacques_bonsergent_m5,republique_m5,oberkampf_m5,richard_lenoir_m5,breguet_sabin_m5,bastille_m5,quai_de_la_rapee_m5,gare_d_austerlitz_m5,saint_marcel_m5,campo_formio_m5,place_d_italie_m5,
	charles_de_gaulle_etoile_m6,kleber_m6,boissiere_m6,trocadero_m6,passy_m6,bir_hakeim_m6,dupleix_m6,la_motte_picquet_grenelle_m6,cambronne_m6,sevres_lecourbe_m6,pasteur_m6,montparnasse_bienvenue_m6,edgar_quinet_m6,raspail_m6,denfert_rochereau_m6,saint_jacques_m6,glaciere_m6,corvisart_m6,place_d_italie_m6,nationale_m6,chevaleret_m6,quai_de_la_gare_m6,bercy_m6,dugommier_m6,daumesnil_m6,bel_air_m6,picpus_m6,nation_m6,
	la_courneuve_8_mai_1945_m7a,fort_d_aubervilliers_m7a,aubervilliers_pantin_quatre_chemins_m7a,porte_de_la_villette_m7a,corentin_cariou_m7a,crimee_m7a,riquet_m7a,stalingrad_m7a,louis_blanc_m7a,chateau_landon_m7a,gare_de_l_est_m7a,poissonniere_m7a,cadet_m7a,le_peletier_m7a,chaussee_d_antin_la_fayette_m7a,opera_m7a,pyramides_m7a,palais_royal_musee_du_louvre_m7a,pont_neuf_m7a,chatelet_m7a,pont_marie_m7a,sully_morland_m7a,jussieu_m7a,place_monge_m7a,censier_daubenton_m7a,les_gobelins_m7a,place_d_italie_m7a,tolbiac_m7a,maison_blanche_m7a,le_kremlin_bicetre_m7a,villejuif_leo_lagrange_m7a,villejuif_paul_vaillant_couturier_m7a,villejuif_louis_aragon_m7a,
	la_courneuve_8_mai_1945_m7b,fort_d_aubervilliers_m7b,aubervilliers_pantin_quatre_chemins_m7b,porte_de_la_villette_m7b,corentin_cariou_m7b,crimee_m7b,riquet_m7b,stalingrad_m7b,louis_blanc_m7b,chateau_landon_m7b,gare_de_l_est_m7b,poissonniere_m7b,cadet_m7b,le_peletier_m7b,chaussee_d_antin_la_fayette_m7b,opera_m7b,pyramides_m7b,palais_royal_musee_du_louvre_m7b,pont_neuf_m7b,chatelet_m7b,pont_marie_m7b,sully_morland_m7b,jussieu_m7b,place_monge_m7b,censier_daubenton_m7b,les_gobelins_m7b,place_d_italie_m7b,tolbiac_m7b,maison_blanche_m7b,porte_d_italie_m7b,porte_de_choisy_m7b,porte_d_ivry_m7b,pierre_et_marie_curie_m7b,mairie_d_ivry_m7b,
	louis_blanc_m7bisa,jaures_m7bisa,bolivar_m7bisa,buttes_chaumont_m7bisa,botzaris_m7bisa,place_des_fetes_m7bisa,pre_saint_gervais_m7bisa,
	louis_blanc_m7bisb,jaures_m7bisb,bolivar_m7bisb,buttes_chaumont_m7bisb,botzaris_m7bisb,danube_m7bisb,pre_saint_gervais_m7bisb,
	balard_m8,lourmel_m8,boucicaut_m8,felix_faure_m8,commerce_m8,la_motte_picquet_grenelle_m8,ecole_militaire_m8,la_tour_maubourg_m8,invalides_m8,concorde_m8,madeleine_m8,opera_m8,richelieu_drouot_m8,grands_boulevards_m8,bonne_nouvelle_m8,strasbourg_saint_denis_m8,republique_m8,filles_du_calvaire_m8,saint_sebastien_froissart_m8,chemin_vert_m8,bastille_m8,ledru_rollin_m8,faidherbe_chaligny_m8,reuilly_diderot_m8,montgallet_m8,daumesnil_m8,michel_bizot_m8,porte_doree_m8,porte_de_charenton_m8,liberte_m8,charenton_ecoles_m8,ecole_veterinaire_de_maisons_alfort_m8,maisons_alfort_stade_m8,maisons_alfort_les_juilliottes_m8,creteil_l_echat_m8,creteil_universite_m8,creteil_prefecture_m8,pointe_du_lac_m8,
	pont_de_sevres_m9,billancourt_m9,marcel_sembat_m9,porte_de_saint_cloud_m9,exelmans_m9,michel_ange_molitor_m9,michel_ange_auteuil_m9,jasmin_m9,ranelagh_m9,la_muette_m9,rue_de_la_pompe_m9,trocadero_m9,iena_m9,alma_marceau_m9,franklin_d_roosevelt_m9,saint_philippe_du_roule_m9,miromesnil_m9,saint_augustin_m9,havre_caumartin_m9,chaussee_d_antin_la_fayette_m9,richelieu_drouot_m9,grands_boulevards_m9,bonne_nouvelle_m9,strasbourg_saint_denis_m9,republique_m9,oberkampf_m9,saint_ambroise_m9,voltaire_m9,charonne_m9,rue_des_boulets_m9,nation_m9,buzenval_m9,maraichers_m9,porte_de_montreuil_m9,robespierre_m9,croix_de_chavaux_m9,mairie_de_montreuil_m9,
	boulogne_pont_de_saint_cloud_m10a,boulogne_jean_jaures_m10a,michel_ange_molitor_m10a,chardon_lagache_m10a,mirabeau_m10a,javel_andre_citroen_m10a,charles_michels_m10a,avenue_emile_zola_m10a,la_motte_picquet_grenelle_m10a,segur_m10a,duroc_m10a,vaneau_m10a,sevres_babylone_m10a,mabillon_m10a,odeon_m10a,cluny_la_sorbonne_m10a,maubert_mutualite_m10a,cardinal_lemoine_m10a,jussieu_m10a,gare_d_austerlitz_m10a,
	boulogne_pont_de_saint_cloud_m10b,boulogne_jean_jaures_m10b,porte_d_auteuil_m10b,michel_ange_auteuil_m10b,eglise_d_auteuil_m10b,javel_andre_citroen_m10b,charles_michels_m10b,avenue_emile_zola_m10b,la_motte_picquet_grenelle_m10b,segur_m10b,duroc_m10b,vaneau_m10b,sevres_babylone_m10b,mabillon_m10b,odeon_m10b,cluny_la_sorbonne_m10b,maubert_mutualite_m10b,cardinal_lemoine_m10b,jussieu_m10b,gare_d_austerlitz_m10b,
	chatelet_m11,hotel_de_ville_m11,rambuteau_m11,arts_et_metiers_m11,republique_m11,goncourt_m11,belleville_m11,pyrenees_m11,jourdain_m11,place_des_fetes_m11,telegraphe_m11,porte_des_lilas_m11,mairie_des_lilas_m11,
	front_populaire_m12,porte_de_la_chapelle_m12,marx_dormoy_m12,marcadet_poissonniers_m12,jules_joffrin_m12,lamarck_caulaincourt_m12,abbesses_m12,pigalle_m12,saint_georges_m12,notre_dame_de_lorette_m12,trinite_d_estienne_d_orves_m12,saint_lazare_m12,madeleine_m12,concorde_m12,assemblee_nationale_m12,solferino_m12,rue_du_bac_m12,sevres_babylone_m12,rennes_m12,notre_dame_des_champs_m12,montparnasse_bienvenue_m12,falguiere_m12,pasteur_m12,volontaires_m12,vaugirard_m12,convention_m12,porte_de_versailles_m12,corentin_celton_m12,mairie_d_issy_m12,
	asnieres_gennevilliers_les_courtilles_m13a,les_agnettes_m13a,gabriel_peri_m13a,mairie_de_clichy_m13a,porte_de_clichy_m13a,brochant_m13a,la_fourche_m13a,place_de_clichy_m13a,liege_m13a,saint_lazare_m13a,miromesnil_m13a,champs_elysees_clemenceau_m13a,invalides_m13a,varenne_m13a,saint_francois_xavier_m13a,duroc_m13a,montparnasse_bienvenue_m13a,gaite_m13a,pernety_m13a,plaisance_m13a,porte_de_vanves_m13a,malakoff_plateau_de_vanves_m13a,malakoff_rue_etienne_dolet_m13a,chatillon_montrouge_m13a,
	saint_denis_universite_m13b,basilique_de_saint_denis_m13b,saint_denis_porte_de_paris_m13b,carrefour_pleyel_m13b,mairie_de_saint_ouen_m13b,garibaldi_m13b,porte_de_saint_ouen_m13b,guy_moquet_m13b,la_fourche_m13b,place_de_clichy_m13b,liege_m13b,saint_lazare_m13b,miromesnil_m13b,champs_elysees_clemenceau_m13b,invalides_m13b,varenne_m13b,saint_francois_xavier_m13b,duroc_m13b,montparnasse_bienvenue_m13b,gaite_m13b,pernety_m13b,plaisance_m13b,porte_de_vanves_m13b,malakoff_plateau_de_vanves_m13b,malakoff_rue_etienne_dolet_m13b,chatillon_montrouge_m13b,
	saint_lazare_m14,madeleine_m14,pyramides_m14,chatelet_m14,gare_de_lyon_m14,bercy_m14,cour_saint_emilion_m14,bibliotheque_francois_mitterrand_m14,olympiades_m14
];

var nomToObject = function(nom){
	for (i in listeStations){
		if(listeStations[i].nom.toLowerCase() == nom.toLowerCase()){
			return listeStations[i];
		}
	}
	return null;
}

var idToObject = function(id){
	for (i in listeStations){
		if(listeStations[i].identifiant == id){
			return listeStations[i];
		}
	}
	return null;
}


var planMetro = function(){
	var graphe = {
		"la_defense/M1" : la_defense_m1.voisins,
		"esplanade_de_la_defense/M1" : esplanade_de_la_defense_m1.voisins,
		"pont_de_neuilly/M1" : pont_de_neuilly_m1.voisins,
		"les_sablons/M1" : les_sablons_m1.voisins,
		"porte_maillot/M1" : porte_maillot_m1.voisins,
		"argentine/M1" : argentine_m1.voisins,
		"charles_de_gaulle_etoile/M1" : charles_de_gaulle_etoile_m1.voisins,
		"georges_v/M1" : georges_v_m1.voisins,
		"franklin_d_roosevelt/M1" : franklin_d_roosevelt_m1.voisins,
		"champs_elysees_clemenceau/M1" : champs_elysees_clemenceau_m1.voisins,
		"concorde/M1" : concorde_m1.voisins,
		"tuileries/M1" : tuileries_m1.voisins,
		"palais_royal_musee_du_louvre/M1" : palais_royal_musee_du_louvre_m1.voisins,
		"louvre_rivoli/M1" : louvre_rivoli_m1.voisins,
		"chatelet/M1" : chatelet_m1.voisins,
		"hotel_de_ville/M1" : hotel_de_ville_m1.voisins,
		"saint_paul/M1" : saint_paul_m1.voisins,
		"bastille/M1" : bastille_m1.voisins,
		"gare_de_lyon/M1" : gare_de_lyon_m1.voisins,
		"reuilly_diderot/M1" : reuilly_diderot_m1.voisins,
		"nation/M1" : nation_m1.voisins,
		"porte_de_vincennes/M1" : porte_de_vincennes_m1.voisins,
		"saint_mande/M1" : saint_mande_m1.voisins,
		"berault/M1" : berault_m1.voisins,
		"chateau_de_vincennes/M1" : chateau_de_vincennes_m1.voisins,
		"porte_dauphine/M2" : porte_dauphine_m2.voisins,
		"victor_hugo/M2" : victor_hugo_m2.voisins,
		"charles_de_gaulle_etoile/M2" : charles_de_gaulle_etoile_m2.voisins,
		"ternes/M2" : ternes_m2.voisins,
		"courcelles/M2" : courcelles_m2.voisins,
		"monceau/M2" : monceau_m2.voisins,
		"villiers/M2" : villiers_m2.voisins,
		"rome/M2" : rome_m2.voisins,
		"place_de_clichy/M2" : place_de_clichy_m2.voisins,
		"blanche/M2" : blanche_m2.voisins,
		"pigalle/M2" : pigalle_m2.voisins,
		"anvers/M2" : anvers_m2.voisins,
		"barbes_rochechouart/M2" : barbes_rochechouart_m2.voisins,
		"la_chapelle/M2" : la_chapelle_m2.voisins,
		"stalingrad/M2" : stalingrad_m2.voisins,
		"jaures/M2" : jaures_m2.voisins,
		"colonel_fabien/M2" : colonel_fabien_m2.voisins,
		"belleville/M2" : belleville_m2.voisins,
		"couronnes/M2" : couronnes_m2.voisins,
		"menilmontant/M2" : menilmontant_m2.voisins,
		"pere_lachaise/M2" : pere_lachaise_m2.voisins,
		"philippe_auguste/M2" : philippe_auguste_m2.voisins,
		"alexandre_dumas/M2" : alexandre_dumas_m2.voisins,
		"avron/M2" : avron_m2.voisins,
		"nation/M2" : nation_m2.voisins,
		"pont_de_levallois_becon/M3" : pont_de_levallois_becon_m3.voisins,
		"anatole_france/M3" : anatole_france_m3.voisins,
		"louise_michel/M3" : louise_michel_m3.voisins,
		"porte_de_champerret/M3" : porte_de_champerret_m3.voisins,
		"pereire/M3" : pereire_m3.voisins,
		"wagram/M3" : wagram_m3.voisins,
		"malesherbes/M3" : malesherbes_m3.voisins,
		"villiers/M3" : villiers_m3.voisins,
		"europe/M3" : europe_m3.voisins,
		"saint_lazare/M3" : saint_lazare_m3.voisins,
		"havre_caumartin/M3" : havre_caumartin_m3.voisins,
		"opera/M3" : opera_m3.voisins,
		"quatre_septembre/M3" : quatre_septembre_m3.voisins,
		"bourse/M3" : bourse_m3.voisins,
		"sentier/M3" : sentier_m3.voisins,
		"reaumur_sebastopol/M3" : reaumur_sebastopol_m3.voisins,
		"arts_et_metiers/M3" : arts_et_metiers_m3.voisins,
		"temple/M3" : temple_m3.voisins,
		"republique/M3" : republique_m3.voisins,
		"parmentier/M3" : parmentier_m3.voisins,
		"rue_saint_maur/M3" : rue_saint_maur_m3.voisins,
		"pere_lachaise/M3" : pere_lachaise_m3.voisins,
		"gambetta/M3" : gambetta_m3.voisins,
		"porte_de_bagnolet/M3" : porte_de_bagnolet_m3.voisins,
		"gallieni/M3" : gallieni_m3.voisins,
		"gambetta/M3bis" : gambetta_m3b.voisins,
		"pelleport/M3bis" : pelleport_m3b.voisins,
		"saint_fargeau/M3bis" : saint_fargeau_m3b.voisins,
		"porte_des_lilas/M3bis" : porte_des_lilas_m3b.voisins,
		"porte_de_clignancourt/M4" : porte_de_clignancourt_m4.voisins,
		"simplon/M4" : simplon_m4.voisins,
		"marcadet_poissonniers/M4" : marcadet_poissonniers_m4.voisins,
		"chateau_rouge/M4" : chateau_rouge_m4.voisins,
		"barbes_rochechouart/M4" : barbes_rochechouart_m4.voisins,
		"gare_du_nord/M4" : gare_du_nord_m4.voisins,
		"gare_de_l_est/M4" : gare_de_l_est_m4.voisins,
		"chateau_d_eau/M4" : chateau_d_eau_m4.voisins,
		"strasbourg_saint_denis/M4" : strasbourg_saint_denis_m4.voisins,
		"reaumur_sebastopol/M4" : reaumur_sebastopol_m4.voisins,
		"etienne_marcel/M4" : etienne_marcel_m4.voisins,
		"les_halles/M4" : les_halles_m4.voisins,
		"chatelet/M4" : chatelet_m4.voisins,
		"cite/M4" : cite_m4.voisins,
		"saint_michel/M4" : saint_michel_m4.voisins,
		"odeon/M4" : odeon_m4.voisins,
		"saint_germain_des_pres/M4" : saint_germain_des_pres_m4.voisins,
		"saint_sulpice/M4" : saint_sulpice_m4.voisins,
		"saint_placide/M4" : saint_placide_m4.voisins,
		"montparnasse_bienvenue/M4" : montparnasse_bienvenue_m4.voisins,
		"valvin/M4" : valvin_m4.voisins,
		"raspail/M4" : raspail_m4.voisins,
		"denfert_rochereau/M4" : denfert_rochereau_m4.voisins,
		"mouton_duvernet/M4" : mouton_duvernet_m4.voisins,
		"alesia/M4" : alesia_m4.voisins,
		"porte_d_orleans/M4" : porte_d_orleans_m4.voisins,
		"mairie_de_montrouge/M4" : mairie_de_montrouge_m4.voisins,
		"bobigny_pablo_picasso/M5" : bobigny_pablo_picasso_m5.voisins,
		"bobigny_pantin_raymond_queneau/M5" : bobigny_pantin_raymond_queneau_m5.voisins,
		"eglise_de_pantin/M5" : eglise_de_pantin_m5.voisins,
		"hoche/M5" : hoche_m5.voisins,
		"porte_de_pantin/M5" : porte_de_pantin_m5.voisins,
		"ourcq/M5" : ourcq_m5.voisins,
		"laumiere/M5" : laumiere_m5.voisins,
		"jaures/M5" : jaures_m5.voisins,
		"stalingrad/M5" : stalingrad_m5.voisins,
		"gare_du_nord/M5" : gare_du_nord_m5.voisins,
		"gare_de_l_est/M5" : gare_de_l_est_m5.voisins,
		"jacques_bonsergent/M5" : jacques_bonsergent_m5.voisins,
		"republique/M5" : republique_m5.voisins,
		"oberkampf/M5" : oberkampf_m5.voisins,
		"richard_lenoir/M5" : richard_lenoir_m5.voisins,
		"breguet_sabin/M5" : breguet_sabin_m5.voisins,
		"bastille/M5" : bastille_m5.voisins,
		"quai_de_la_rapee/M5" : quai_de_la_rapee_m5.voisins,
		"gare_d_austerlitz/M5" : gare_d_austerlitz_m5.voisins,
		"saint_marcel/M5" : saint_marcel_m5.voisins,
		"campo_formio/M5" : campo_formio_m5.voisins,
		"place_d_italie/M5" : place_d_italie_m5.voisins,
		"charles_de_gaulle_etoile/M6" : charles_de_gaulle_etoile_m6.voisins,
		"kleber/M6" : kleber_m6.voisins,
		"boissiere/M6" : boissiere_m6.voisins,
		"trocadero/M6" : trocadero_m6.voisins,
		"passy/M6" : passy_m6.voisins,
		"bir_hakeim/M6" : bir_hakeim_m6.voisins,
		"dupleix/M6" : dupleix_m6.voisins,
		"la_motte_picquet_grenelle/M6" : la_motte_picquet_grenelle_m6.voisins,
		"cambronne/M6" : cambronne_m6.voisins,
		"sevres_lecourbe/M6" : sevres_lecourbe_m6.voisins,
		"pasteur/M6" : pasteur_m6.voisins,
		"montparnasse_bienvenue/M6" : montparnasse_bienvenue_m6.voisins,
		"edgar_quinet/M6" : edgar_quinet_m6.voisins,
		"raspail/M6" : raspail_m6.voisins,
		"denfert_rochereau/M6" : denfert_rochereau_m6.voisins,
		"saint_jacques/M6" : saint_jacques_m6.voisins,
		"glaciere/M6" : glaciere_m6.voisins,
		"corvisart/M6" : corvisart_m6.voisins,
		"place_d_italie/M6" : place_d_italie_m6.voisins,
		"nationale/M6" : nationale_m6.voisins,
		"chevaleret/M6" : chevaleret_m6.voisins,
		"quai_de_la_gare/M6" : quai_de_la_gare_m6.voisins,
		"bercy/M6" : bercy_m6.voisins,
		"dugommier/M6" : dugommier_m6.voisins,
		"daumesnil/M6" : daumesnil_m6.voisins,
		"bel_air/M6" : bel_air_m6.voisins,
		"picpus/M6" : picpus_m6.voisins,
		"nation/M6" : nation_m6.voisins,
		"la_courneuve_8_mai_1945/M7A" : la_courneuve_8_mai_1945_m7a.voisins,
		"fort_d_aubervilliers/M7A" : fort_d_aubervilliers_m7a.voisins,
		"aubervilliers_pantin_quatre_chemins/M7A" : aubervilliers_pantin_quatre_chemins_m7a.voisins,
		"porte_de_la_villette/M7A" : porte_de_la_villette_m7a.voisins,
		"corentin_cariou/M7A" : corentin_cariou_m7a.voisins,
		"crimee/M7A" : crimee_m7a.voisins,
		"riquet/M7A" : riquet_m7a.voisins,
		"stalingrad/M7A" : stalingrad_m7a.voisins,
		"louis_blanc/M7A" : louis_blanc_m7a.voisins,
		"chateau_landon/M7A" : chateau_landon_m7a.voisins,
		"gare_de_l_est/M7A" : gare_de_l_est_m7a.voisins,
		"poissonniere/M7A" : poissonniere_m7a.voisins,
		"cadet/M7A" : cadet_m7a.voisins,
		"le_peletier/M7A" : le_peletier_m7a.voisins,
		"chaussee_d_antin_la_fayette/M7A" : chaussee_d_antin_la_fayette_m7a.voisins,
		"opera/M7A" : opera_m7a.voisins,
		"pyramides/M7A" : pyramides_m7a.voisins,
		"palais_royal_musee_du_louvre/M7A" : palais_royal_musee_du_louvre_m7a.voisins,
		"pont_neuf/M7A" : pont_neuf_m7a.voisins,
		"chatelet/M7A" : chatelet_m7a.voisins,
		"pont_marie/M7A" : pont_marie_m7a.voisins,
		"sully_morland/M7A" : sully_morland_m7a.voisins,
		"jussieu/M7A" : jussieu_m7a.voisins,
		"place_monge/M7A" : place_monge_m7a.voisins,
		"censier_daubenton/M7A" : censier_daubenton_m7a.voisins,
		"les_gobelins/M7A" : les_gobelins_m7a.voisins,
		"place_d_italie/M7A" : place_d_italie_m7a.voisins,
		"tolbiac/M7A" : tolbiac_m7a.voisins,
		"maison_blanche/M7A" : maison_blanche_m7a.voisins,
		"le_kremlin_bicetre/M7A" : le_kremlin_bicetre_m7a.voisins,
		"villejuif_leo_lagrange/M7A" : villejuif_leo_lagrange_m7a.voisins,
		"villejuif_paul_vaillant_couturier/M7A" : villejuif_paul_vaillant_couturier_m7a.voisins,
		"villejuif_louis_aragon/M7A" : villejuif_louis_aragon_m7a.voisins,
		"la_courneuve_8_mai_1945/M7B" : la_courneuve_8_mai_1945_m7b.voisins,
		"fort_d_aubervilliers/M7B" : fort_d_aubervilliers_m7b.voisins,
		"aubervilliers_pantin_quatre_chemins/M7B" : aubervilliers_pantin_quatre_chemins_m7b.voisins,
		"porte_de_la_villette/M7B" : porte_de_la_villette_m7b.voisins,
		"corentin_cariou/M7B" : corentin_cariou_m7b.voisins,
		"crimee/M7B" : crimee_m7b.voisins,
		"riquet/M7B" : riquet_m7b.voisins,
		"stalingrad/M7B" : stalingrad_m7b.voisins,
		"louis_blanc/M7B" : louis_blanc_m7b.voisins,
		"chateau_landon/M7B" : chateau_landon_m7b.voisins,
		"gare_de_l_est/M7B" : gare_de_l_est_m7b.voisins,
		"poissonniere/M7B" : poissonniere_m7b.voisins,
		"cadet/M7B" : cadet_m7b.voisins,
		"le_peletier/M7B" : le_peletier_m7b.voisins,
		"chaussee_d_antin_la_fayette/M7B" : chaussee_d_antin_la_fayette_m7b.voisins,
		"opera/M7B" : opera_m7b.voisins,
		"pyramides/M7B" : pyramides_m7b.voisins,
		"palais_royal_musee_du_louvre/M7B" : palais_royal_musee_du_louvre_m7b.voisins,
		"pont_neuf/M7B" : pont_neuf_m7b.voisins,
		"chatelet/M7B" : chatelet_m7b.voisins,
		"pont_marie/M7B" : pont_marie_m7b.voisins,
		"sully_morland/M7B" : sully_morland_m7b.voisins,
		"jussieu/M7B" : jussieu_m7b.voisins,
		"place_monge/M7B" : place_monge_m7b.voisins,
		"censier_daubenton/M7B" : censier_daubenton_m7b.voisins,
		"les_gobelins/M7B" : les_gobelins_m7b.voisins,
		"place_d_italie/M7B" : place_d_italie_m7b.voisins,
		"tolbiac/M7B" : tolbiac_m7b.voisins,
		"maison_blanche/M7B" : maison_blanche_m7b.voisins,
		"porte_d_italie/M7B" : porte_d_italie_m7b.voisins,
		"porte_de_choisy/M7B" : porte_de_choisy_m7b.voisins,
		"porte_d_ivry/M7B" : porte_d_ivry_m7b.voisins,
		"pierre_et_marie_curie/M7B" : pierre_et_marie_curie_m7b.voisins,
		"mairie_d_ivry/M7B" : mairie_d_ivry_m7b.voisins,
		"louis_blanc/M7bisA" : louis_blanc_m7bisa.voisins,
		"jaures/M7bisA" : jaures_m7bisa.voisins,
		"bolivar/M7bisA" : bolivar_m7bisa.voisins,
		"buttes_chaumont/M7bisA" : buttes_chaumont_m7bisa.voisins,
		"botzaris/M7bisA" : botzaris_m7bisa.voisins,
		"place_des_fetes/M7bisA" : place_des_fetes_m7bisa.voisins,
		"pre_saint_gervais/M7bisA" : pre_saint_gervais_m7bisa.voisins,
		"louis_blanc/M7bisB" : louis_blanc_m7bisb.voisins,
		"jaures/M7bisB" : jaures_m7bisb.voisins,
		"bolivar/M7bisB" : bolivar_m7bisb.voisins,
		"buttes_chaumont/M7bisB" : buttes_chaumont_m7bisb.voisins,
		"botzaris/M7bisB" : botzaris_m7bisb.voisins,
		"danube/M7bisB" : danube_m7bisb.voisins,
		"pre_saint_gervais/M7bisB" : pre_saint_gervais_m7bisb.voisins,
		"balard/M8" : balard_m8.voisins,
		"lourmel/M8" : lourmel_m8.voisins,
		"boucicaut/M8" : boucicaut_m8.voisins,
		"felix_faure/M8" : felix_faure_m8.voisins,
		"commerce/M8" : commerce_m8.voisins,
		"la_motte_picquet_grenelle/M8" : la_motte_picquet_grenelle_m8.voisins,
		"ecole_militaire/M8" : ecole_militaire_m8.voisins,
		"la_tour_maubourg/M8" : la_tour_maubourg_m8.voisins,
		"invalides/M8" : invalides_m8.voisins,
		"concorde/M8" : concorde_m8.voisins,
		"madeleine/M8" : madeleine_m8.voisins,
		"opera/M8" : opera_m8.voisins,
		"richelieu_drouot/M8" : richelieu_drouot_m8.voisins,
		"grands_boulevards/M8" : grands_boulevards_m8.voisins,
		"bonne_nouvelle/M8" : bonne_nouvelle_m8.voisins,
		"strasbourg_saint_denis/M8" : strasbourg_saint_denis_m8.voisins,
		"republique/M8" : republique_m8.voisins,
		"filles_du_calvaire/M8" : filles_du_calvaire_m8.voisins,
		"saint_sebastien_froissart/M8" : saint_sebastien_froissart_m8.voisins,
		"chemin_vert/M8" : chemin_vert_m8.voisins,
		"bastille/M8" : bastille_m8.voisins,
		"ledru_rollin/M8" : ledru_rollin_m8.voisins,
		"faidherbe_chaligny/M8" : faidherbe_chaligny_m8.voisins,
		"reuilly_diderot/M8" : reuilly_diderot_m8.voisins,
		"montgallet/M8" : montgallet_m8.voisins,
		"daumesnil/M8" : daumesnil_m8.voisins,
		"michel_bizot/M8" : michel_bizot_m8.voisins,
		"porte_doree/M8" : porte_doree_m8.voisins,
		"porte_de_charenton/M8" : porte_de_charenton_m8.voisins,
		"liberte/M8" : liberte_m8.voisins,
		"charenton_ecoles/M8" : charenton_ecoles_m8.voisins,
		"ecole_veterinaire_de_maisons_alfort/M8" : ecole_veterinaire_de_maisons_alfort_m8.voisins,
		"maisons_alfort_stade/M8" : maisons_alfort_stade_m8.voisins,
		"maisons_alfort_les_juilliottes/M8" : maisons_alfort_les_juilliottes_m8.voisins,
		"creteil_l_echat/M8" : creteil_l_echat_m8.voisins,
		"creteil_universite/M8" : creteil_universite_m8.voisins,
		"creteil_prefecture/M8" : creteil_prefecture_m8.voisins,
		"pointe_du_lac/M8" : pointe_du_lac_m8.voisins,
		"pont_de_sevres/M9" : pont_de_sevres_m9.voisins,
		"billancourt/M9" : billancourt_m9.voisins,
		"marcel_sembat/M9" : marcel_sembat_m9.voisins,
		"porte_de_saint_cloud/M9" : porte_de_saint_cloud_m9.voisins,
		"exelmans/M9" : exelmans_m9.voisins,
		"michel_ange_molitor/M9" : michel_ange_molitor_m9.voisins,
		"michel_ange_auteuil/M9" : michel_ange_auteuil_m9.voisins,
		"jasmin/M9" : jasmin_m9.voisins,
		"ranelagh/M9" : ranelagh_m9.voisins,
		"la_muette/M9" : la_muette_m9.voisins,
		"rue_de_la_pompe/M9" : rue_de_la_pompe_m9.voisins,
		"trocadero/M9" : trocadero_m9.voisins,
		"iena/M9" : iena_m9.voisins,
		"alma_marceau/M9" : alma_marceau_m9.voisins,
		"franklin_d_roosevelt/M9" : franklin_d_roosevelt_m9.voisins,
		"saint_philippe_du_roule/M9" : saint_philippe_du_roule_m9.voisins,
		"miromesnil/M9" : miromesnil_m9.voisins,
		"saint_augustin/M9" : saint_augustin_m9.voisins,
		"havre_caumartin/M9" : havre_caumartin_m9.voisins,
		"chaussee_d_antin_la_fayette/M9" : chaussee_d_antin_la_fayette_m9.voisins,
		"richelieu_drouot/M9" : richelieu_drouot_m9.voisins,
		"grands_boulevards/M9" : grands_boulevards_m9.voisins,
		"bonne_nouvelle/M9" : bonne_nouvelle_m9.voisins,
		"strasbourg_saint_denis/M9" : strasbourg_saint_denis_m9.voisins,
		"republique/M9" : republique_m9.voisins,
		"oberkampf/M9" : oberkampf_m9.voisins,
		"saint_ambroise/M9" : saint_ambroise_m9.voisins,
		"voltaire/M9" : voltaire_m9.voisins,
		"charonne/M9" : charonne_m9.voisins,
		"rue_des_boulets/M9" : rue_des_boulets_m9.voisins,
		"nation/M9" : nation_m9.voisins,
		"buzenval/M9" : buzenval_m9.voisins,
		"maraichers/M9" : maraichers_m9.voisins,
		"porte_de_montreuil/M9" : porte_de_montreuil_m9.voisins,
		"robespierre/M9" : robespierre_m9.voisins,
		"croix_de_chavaux/M9" : croix_de_chavaux_m9.voisins,
		"mairie_de_montreuil/M9" : mairie_de_montreuil_m9.voisins,
		"boulogne_pont_de_saint_cloud/M10A" : boulogne_pont_de_saint_cloud_m10a.voisins,
		"boulogne_jean_jaures/M10A" : boulogne_jean_jaures_m10a.voisins,
		"michel_ange_molitor/M10A" : michel_ange_molitor_m10a.voisins,
		"chardon_lagache/M10A" : chardon_lagache_m10a.voisins,
		"mirabeau/M10A" : mirabeau_m10a.voisins,
		"javel_andre_citroen/M10A" : javel_andre_citroen_m10a.voisins,
		"charles_michels/M10A" : charles_michels_m10a.voisins,
		"avenue_emile_zola/M10A" : avenue_emile_zola_m10a.voisins,
		"la_motte_picquet_grenelle/M10A" : la_motte_picquet_grenelle_m10a.voisins,
		"segur/M10A" : segur_m10a.voisins,
		"duroc/M10A" : duroc_m10a.voisins,
		"vaneau/M10A" : vaneau_m10a.voisins,
		"sevres_babylone/M10A" : sevres_babylone_m10a.voisins,
		"mabillon/M10A" : mabillon_m10a.voisins,
		"odeon/M10A" : odeon_m10a.voisins,
		"cluny_la_sorbonne/M10A" : cluny_la_sorbonne_m10a.voisins,
		"maubert_mutualite/M10A" : maubert_mutualite_m10a.voisins,
		"cardinal_lemoine/M10A" : cardinal_lemoine_m10a.voisins,
		"jussieu/M10A" : jussieu_m10a.voisins,
		"gare_d_austerlitz/M10A" : gare_d_austerlitz_m10a.voisins,
		"boulogne_pont_de_saint_cloud/M10B" : boulogne_pont_de_saint_cloud_m10b.voisins,
		"boulogne_jean_jaures/M10B" : boulogne_jean_jaures_m10b.voisins,
		"porte_d_auteuil/M10B" : porte_d_auteuil_m10b.voisins,
		"michel_ange_auteuil/M10B" : michel_ange_auteuil_m10b.voisins,
		"eglise_d_auteuil/M10B" : eglise_d_auteuil_m10b.voisins,
		"javel_andre_citroen/M10B" : javel_andre_citroen_m10b.voisins,
		"charles_michels/M10B" : charles_michels_m10b.voisins,
		"avenue_emile_zola/M10B" : avenue_emile_zola_m10b.voisins,
		"la_motte_picquet_grenelle/M10B" : la_motte_picquet_grenelle_m10b.voisins,
		"segur/M10B" : segur_m10b.voisins,
		"duroc/M10B" : duroc_m10b.voisins,
		"vaneau/M10B" : vaneau_m10b.voisins,
		"sevres_babylone/M10B" : sevres_babylone_m10b.voisins,
		"mabillon/M10B" : mabillon_m10b.voisins,
		"odeon/M10B" : odeon_m10b.voisins,
		"cluny_la_sorbonne/M10B" : cluny_la_sorbonne_m10b.voisins,
		"maubert_mutualite/M10B" : maubert_mutualite_m10b.voisins,
		"cardinal_lemoine/M10B" : cardinal_lemoine_m10b.voisins,
		"jussieu/M10B" : jussieu_m10b.voisins,
		"gare_d_austerlitz/M10B" : gare_d_austerlitz_m10b.voisins,
		"chatelet/M11" : chatelet_m11.voisins,
		"hotel_de_ville/M11" : hotel_de_ville_m11.voisins,
		"rambuteau/M11" : rambuteau_m11.voisins,
		"arts_et_metiers/M11" : arts_et_metiers_m11.voisins,
		"republique/M11" : republique_m11.voisins,
		"goncourt/M11" : goncourt_m11.voisins,
		"belleville/M11" : belleville_m11.voisins,
		"pyrenees/M11" : pyrenees_m11.voisins,
		"jourdain/M11" : jourdain_m11.voisins,
		"place_des_fetes/M11" : place_des_fetes_m11.voisins,
		"telegraphe/M11" : telegraphe_m11.voisins,
		"porte_des_lilas/M11" : porte_des_lilas_m11.voisins,
		"mairie_des_lilas/M11" : mairie_des_lilas_m11.voisins,
		"front_populaire/M12" : front_populaire_m12.voisins,
		"porte_de_la_chapelle/M12" : porte_de_la_chapelle_m12.voisins,
		"marx_dormoy/M12" : marx_dormoy_m12.voisins,
		"marcadet_poissonniers/M12" : marcadet_poissonniers_m12.voisins,
		"jules_joffrin/M12" : jules_joffrin_m12.voisins,
		"lamarck_caulaincourt/M12" : lamarck_caulaincourt_m12.voisins,
		"abbesses/M12" : abbesses_m12.voisins,
		"pigalle/M12" : pigalle_m12.voisins,
		"saint_georges/M12" : saint_georges_m12.voisins,
		"notre_dame_de_lorette/M12" : notre_dame_de_lorette_m12.voisins,
		"trinite_d_estienne_d_orves/M12" : trinite_d_estienne_d_orves_m12.voisins,
		"saint_lazare/M12" : saint_lazare_m12.voisins,
		"madeleine/M12" : madeleine_m12.voisins,
		"concorde/M12" : concorde_m12.voisins,
		"assemblee_nationale/M12" : assemblee_nationale_m12.voisins,
		"solferino/M12" : solferino_m12.voisins,
		"rue_du_bac/M12" : rue_du_bac_m12.voisins,
		"sevres_babylone/M12" : sevres_babylone_m12.voisins,
		"rennes/M12" : rennes_m12.voisins,
		"notre_dame_des_champs/M12" : notre_dame_des_champs_m12.voisins,
		"montparnasse_bienvenue/M12" : montparnasse_bienvenue_m12.voisins,
		"falguiere/M12" : falguiere_m12.voisins,
		"pasteur/M12" : pasteur_m12.voisins,
		"volontaires/M12" : volontaires_m12.voisins,
		"vaugirard/M12" : vaugirard_m12.voisins,
		"convention/M12" : convention_m12.voisins,
		"porte_de_versailles/M12" : porte_de_versailles_m12.voisins,
		"corentin_celton/M12" : corentin_celton_m12.voisins,
		"mairie_d_issy/M12" : mairie_d_issy_m12.voisins,
		"asnieres_gennevilliers_les_courtilles/M13A" : asnieres_gennevilliers_les_courtilles_m13a.voisins,
		"les_agnettes/M13A" : les_agnettes_m13a.voisins,
		"gabriel_peri/M13A" : gabriel_peri_m13a.voisins,
		"mairie_de_clichy/M13A" : mairie_de_clichy_m13a.voisins,
		"porte_de_clichy/M13A" : porte_de_clichy_m13a.voisins,
		"brochant/M13A" : brochant_m13a.voisins,
		"la_fourche/M13A" : la_fourche_m13a.voisins,
		"place_de_clichy/M13A" : place_de_clichy_m13a.voisins,
		"liege/M13A" : liege_m13a.voisins,
		"saint_lazare/M13A" : saint_lazare_m13a.voisins,
		"miromesnil/M13A" : miromesnil_m13a.voisins,
		"champs_elysees_clemenceau/M13A" : champs_elysees_clemenceau_m13a.voisins,
		"invalides/M13A" : invalides_m13a.voisins,
		"varenne/M13A" : varenne_m13a.voisins,
		"saint_francois_xavier/M13A" : saint_francois_xavier_m13a.voisins,
		"duroc/M13A" : duroc_m13a.voisins,
		"montparnasse_bienvenue/M13A" : montparnasse_bienvenue_m13a.voisins,
		"gaite/M13A" : gaite_m13a.voisins,
		"pernety/M13A" : pernety_m13a.voisins,
		"plaisance/M13A" : plaisance_m13a.voisins,
		"porte_de_vanves/M13A" : porte_de_vanves_m13a.voisins,
		"malakoff_plateau_de_vanves/M13A" : malakoff_plateau_de_vanves_m13a.voisins,
		"malakoff_rue_etienne_dolet/M13A" : malakoff_rue_etienne_dolet_m13a.voisins,
		"chatillon_montrouge/M13A" : chatillon_montrouge_m13a.voisins,
		"saint_denis_universite/M13B" : saint_denis_universite_m13b.voisins,
		"basilique_de_saint_denis/M13B" : basilique_de_saint_denis_m13b.voisins,
		"saint_denis_porte_de_paris/M13B" : saint_denis_porte_de_paris_m13b.voisins,
		"carrefour_pleyel/M13B" : carrefour_pleyel_m13b.voisins,
		"mairie_de_saint_ouen/M13B" : mairie_de_saint_ouen_m13b.voisins,
		"garibaldi/M13B" : garibaldi_m13b.voisins,
		"porte_de_saint_ouen/M13B" : porte_de_saint_ouen_m13b.voisins,
		"guy_moquet/M13B" : guy_moquet_m13b.voisins,
		"la_fourche/M13B" : la_fourche_m13b.voisins,
		"place_de_clichy/M13B" : place_de_clichy_m13b.voisins,
		"liege/M13B" : liege_m13b.voisins,
		"saint_lazare/M13B" : saint_lazare_m13b.voisins,
		"miromesnil/M13B" : miromesnil_m13b.voisins,
		"champs_elysees_clemenceau/M13B" : champs_elysees_clemenceau_m13b.voisins,
		"invalides/M13B" : invalides_m13b.voisins,
		"varenne/M13B" : varenne_m13b.voisins,
		"saint_francois_xavier/M13B" : saint_francois_xavier_m13b.voisins,
		"duroc/M13B" : duroc_m13b.voisins,
		"montparnasse_bienvenue/M13B" : montparnasse_bienvenue_m13b.voisins,
		"gaite/M13B" : gaite_m13b.voisins,
		"pernety/M13B" : pernety_m13b.voisins,
		"plaisance/M13B" : plaisance_m13b.voisins,
		"porte_de_vanves/M13B" : porte_de_vanves_m13b.voisins,
		"malakoff_plateau_de_vanves/M13B" : malakoff_plateau_de_vanves_m13b.voisins,
		"malakoff_rue_etienne_dolet/M13B" : malakoff_rue_etienne_dolet_m13b.voisins,
		"chatillon_montrouge/M13B" : chatillon_montrouge_m13b.voisins,
		"saint_lazare/M14" : saint_lazare_m14.voisins,
		"madeleine/M14" : madeleine_m14.voisins,
		"pyramides/M14" : pyramides_m14.voisins,
		"chatelet/M14" : chatelet_m14.voisins,
		"gare_de_lyon/M14" : gare_de_lyon_m14.voisins,
		"bercy/M14" : bercy_m14.voisins,
		"cour_saint_emilion/M14" : cour_saint_emilion_m14.voisins,
		"bibliotheque_francois_mitterrand/M14" : bibliotheque_francois_mitterrand_m14.voisins,
		"olympiades/M14" : olympiades_m14.voisin,
	};
	return function(){
		return graphe;
	}
}

// FONCTIONS

var direction = function(ligne, depart, suivant){
	var lig = [];
	switch(ligne){
		case "M1" : lig = m1; break;
		case "M2" : lig = m2; break;
		case "M3" : lig = m3; break;
		case "M3bis" : lig = m3bis; break;
		case "M4" : lig = m4; break;
		case "M5" : lig = m5; break;
		case "M6" : lig = m6; break;
		case "M7A" : lig = m7a; break;
		case "M7B" : lig = m7b; break;
		case "M7bisA" : lig = m7bisa; break;
		case "M7bisB" : lig = m7bisb; break;
		case "M8" : lig = m8; break;
		case "M9" : lig = m9; break;
		case "M10A" : lig = m10a; break;
		case "M10B" : lig = m10b; break;
		case "M11" : lig = m11; break;
		case "M12" : lig = m12; break;
		case "M13A" : lig = m13a; break;
		case "M13B" : lig = m13b; break;
		case "M14" : lig = m14; break;
	}
	var dep = lig.indexOf(depart);
	var sui = lig.indexOf(suivant);
	var res = dep - sui;
	if(res < 0)
		return lig[lig.length-1];
	else
		return lig[0];
}