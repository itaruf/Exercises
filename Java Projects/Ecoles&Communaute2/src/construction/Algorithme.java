package construction;
import java.io.FileNotFoundException;
import java.util.Arrays;

/**
 *Classe qui permet de creer un algorithme visant trouver une solution approchee ou optimale tout en respectant les contraintes d'accessibilite.
 **/
public class Algorithme {

	/**
	 * <p>Tableau de type boolean qui permet de determiner si une ville a l'indice lui correspondant dans le tableau a acces a une ecole ou non.</p>
	 * <ul><li>"true" : la ville a acces a une ecole.
	 * 	   <li>"false" : la ville n'a pas acces a une ecole.
	 * </ul> 
	 * */
	private boolean[] acces;
	
	/**
	 * Attribut de type boolean qui va permettre de determiner si la contrainte d'accessibilite est respectee par une communaute decrite ou non.
	 * */
	private boolean accessibilite;
	
	/**
	 * <p>Tableau de type boolean de taille egale au nombre de villes et qui permet de determiner si une ville adjacente a acces ou non a une ecole via une autre ville.</p>
	 * <ul><li>"true" : acces a une ecole.</li>
	 * 	   <li>"false" : pas acces a une ecole.</li>
	 * </ul>
	 */
	private boolean[] villeSansAcces;
	
	/**
	 * <p>Tableau de type boolean de taille egale au nombre de villes adjacentes d'une ville qui permet determiner l'acces a une ecole des villes adjacentes.</p>
	 * <ul><li>"true" : la ville a l'indice correspond a acces a une ecole.</li>
	 * 	   <li>"false" : la ville a l'indice correspondant n'a pas acces a une ecole.</li>
	 * </ul>
	 */
	private boolean[] newAcces;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner l'issu du cas 1 : "la ville concernee par le retrait n'est adjacente a aucune ville".
	 */
	private boolean cas1;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner l'issu du cas 2 : "la ville concernee par le retrait n'est adjacente qu'a une seule ville".
	 */
	private boolean cas2;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner l'issu du cas 3 : "la ville concernee par le retrait n'est adjacente qu'à des villes sans ecole".
	 */
	private boolean cas3;
	
	/**
	* Attribut de type int qui va nous servir a stocker l'indice d'une ville etudiee.
	*/
	private int indexVille;
	
	/**
	* Attribut de type int qui va nous servir a stocker l'indice d'une ville adjacente etudiee.
	*/
	private int indexVilleAdjacente;
	
	/**
	 * <p>Tableau de type int de taille egale au nombre de villes adjacentes d'une ville qui permet de determiner les indices de ces villes.</p>
	 */
	private int[] tabIndVillesAdj;
	
	/**
	 * <p>Tableau de type int de taille egale au nombre de villes adjacentes d'une ville qui permet de determiner les indices de ces villes.</p>
	 * <ul><li>Sert specifiquement a la comparaison.</li>
	 * </ul>
	 */
	private int[] tabIndVillesAdjComp;
	
	/**
	 * <p>Tableau de type int de taille egale au nombre de villes adjacentes d'une ville qui permet de determiner les indices de ces villes.</p>
	 * <ul><li>Sert specifiquement a la comparaison.</li>
	 * </ul>
	 */
	private int[] tabIndVillesAdjComp2;
	
	/**
	 * <p>Tableau de type int de taille egale au nombre de villes sans ecole qui permet de stocker leurs indices.</p>
	 */
	private int[] newIndNomDesVilles;
	
	/**
	 * <p>Tableau de type int de taille egale au nombre de villes de la communaute qui permet de marquer les villes au fur et a mesure qu'elles ont acces a une ecole.</p>
	 * <ul><li></li>
	 * </ul>
	 */
	private int[] villesMarquees;
	
	private int[] tabInd;
	/**
	 * <p>Tableau de type int de taille egale au nombre de villes adjacentes d'une ville et qui permet de recuperer leurs indices.</p>
	 */
	private int[] tabIndAdj;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner si le retrait de l'ecole de la ville concernee est possible.
	 */
	private boolean retirerEcole;
	
	/**
	 * <p>Tableau de type int de taille egale au nombre de villes de la communaute qui permet de compter les degres (nombre de villes adjacentes) d'une ville.</p>
	 * <ul><li>l'indice 0 correspond a la premiere ville du tableau "nomDesVilles" et son contenu est son degre.</li>
	 * </ul>
	 */	
	private int[] nombreDeVoisins;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner l'acces a une ecole d'une ville.
	 */
	private boolean accesVerif1;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner l'acces a une ecole d'une ville.
	 */
	private boolean accesVerif2;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner l'acces a une ecole d'une ville.
	 */
	private boolean accesVerif3;	
	
	/**
	 * <p>Tableau de type String de taille egale au nombre de villes verifiant une certaine contrainte et qui contient leurs noms.</p>
	 *
	 */
	private String[] newNomDesVilles;
	
	/**
	 * <p>Tableau de type String de taille egale au nombre de villes verifiant une certaine contrainte qui contient et qui permet de determiner si ces villes ont une ecole ou non.</p>
	 *
	 */
	private String[] newEcoles;
	
	/**
	 * Attribut de int qui va nous servir a determiner le nombre de villes adjacentes d'une premiere ville.
	 */
	private int degre1;
	
	/**
	 * Attribut de int qui va nous servir a determiner le nombre de villes adjacentes d'une deuxieme ville.
	 */
	private int degre2;
	
	/**
	 * Tableau de type String[] de taille egale au nombre de villes de la communaute et qui est une "sauvegarde" d'une premiere solution approchee.
 	 */
	private String[] ecolesCopie;
	
	/**
	 * Attribut de type int qui va permettre de calculer le nombre de villes ayant une ecole dans une premiere configuration de la communaute.
 	 */
	private int score1;
	
	/**
	 * Attribut de type int qui va permettre de calculer le nombre de villes ayant une ecole dans une deuxieme configuration de la communaute.
	 */
	private int score2;
	
	/**
	 * Tableau de type String qui contient les noms des villes lues dans le fichier decrivant la communaute.
	 **/
	private String[] nomDesVilles;

	/**
	 * Attribut de type boolean qui permet d'indiquer si une ville a acces a une ecole ou non
	 **/
	private boolean accesEcole;

	/**
	 * Attribut de type int qui permet de contenir une valeur
	 **/
	private int compte;

	/**
	 * Attribut de type boolean qui permet d'indiquer si une operation est conforme par la valeur "true" ou non par la valeur "false"
	 **/
	private boolean valide;

	/**
	 * Attribut de type int qui permet de contenir une valeur
	 **/
	private int compte2;
	
	/**
	 * Tableau de type String[] de taille egale au nombre de villes de la communaute et qui est une "sauvegarde" d'une premiere solution approchee.
 	 */
	
	private String[] ecolesCopie1;

	/*Attribut de type int qui contient l'indice de la ville ayant le degre max a l'iteration precedente*/
	private int pred;
	
	/**
	 * <p>Sert a declarer et initialiser le tableau de String "nomDesVilles".</p>
	 * @param nomDesVilles : Tableau de type String qui contient les noms des villes lues dans le fichier decrivant la communaute.
	 */
	public Algorithme(String[] nomDesVilles) {
		
		this.nomDesVilles = nomDesVilles;
	}

	 /**
	 *<ul><li>Permet d'afficher a l'ecran les villes dans lesquelles se trouvent une ecole.<br></li> 
	 * </ul>
	 * @param ecoles : tableau contenant les situations (ecole/sans ecole) des villes d'une communaute.
	 */
	public void afficherEcoles(String[] ecoles) {
		
		System.out.print("\nListe des villes ou se trouvent une ecole : ");
		for (int m=0; m<ecoles.length; m++) { 
			if (ecoles[m].contains("E")) { // Si la ville a l'indice m correspondante contient une ecole alors on l'affiche
				System.out.print(""+nomDesVilles[m]+" ");
			}	
		}
		System.out.println("\n");
	}
	
	 /**
	 *<ul><li>Permet de calculer separemment le nombre d'ecoles contenus pour deux configurations d'une meme communaute.<br></li> 
	 * <li> Apelle la methode "afficherEcoles()" de la classe "Algorithme" pour afficher le resultat de la configuration ayant le plus bas score.<br></li>
	 * </ul>
	 * @param tabEcoles1 : tableau contenant les situations (ecole/sans ecole) des villes d'une premiere configuration de la communaute.
	 * @param tabEcoles2 : tableau contenant les situations (ecole/sans ecole) des villes d'une deuxieme configuration de la communaute.
	 * @return tabEcoles1 : premier tableau contenant la meilleure configuration ou tabEcoles2 :tableau contenant la meilleure configuration.
	 */
	public String[] comparerScore(String[] tabEcoles1, String[] tabEcoles2) {
		
		score1=0;
		score2=0;
		for (int i=0; i<tabEcoles1.length; i++) {
			if (tabEcoles1[i].contains("E")) {
				score1+=1;
			}
		}	
		for (int i=0; i<tabEcoles2.length; i++) {
			if (tabEcoles2[i].contains("E")) {
				score2+=1;
			}
		}
		if  (score1>score2) {
			afficherEcoles(tabEcoles2);	
			return(tabEcoles2);
		}
		else if (score2>score1) {
			afficherEcoles(tabEcoles1);	
			return(tabEcoles1);
		}
		else {
			afficherEcoles(tabEcoles1);	
			return(tabEcoles1);
		}
	}
	
	public String[] creerAlgorithme(String[] nomDesVilles, String[] ecoles, boolean[][] matriceAdjacence) throws FileNotFoundException {
			
		ecolesCopie1 = new String[ecoles.length];
		Arrays.copyOf(ecoles, ecolesCopie1.length);
		ConstructionCommu CC = new ConstructionCommu();
		Operations O = new Operations();	
		nombreDeVoisins = new int[nomDesVilles.length];
		for (int i=0; i<nomDesVilles.length; i++) { // Pour chacune des villes de la communaute, on compte son nombre de voisins(degre) et on stock cette valeur a la case correspondante
			nombreDeVoisins[i] = O.compterNbVillesAdj(matriceAdjacence, i); // On appelle la methode "compterNbVillesAdj" pour se faire
		}
		for (int i=0; i<ecoles.length; i++) { 
			/*Initialisation des attributs pour chaque iteration i*/
			villeSansAcces = new boolean[nomDesVilles.length];
			acces = new boolean[nomDesVilles.length];
			for (int a=0; a<acces.length; a++) {
				acces[a] = true;
			}
			cas1 = false; 
			cas2 = false; 
			cas3 = false; 
			retirerEcole = false;
			for (int a=0; a<villeSansAcces.length; a++) {
				villeSansAcces[a] = true;
			}		
			retirerEcole = true;
			indexVille = i;
			/*Fin Initialisation*/
			if (ecoles[i].contains("E")) {
				// CAS 1 : Si la ville concernee n'est reliee a aucune autre ville.					
				for  (int a=0; a<ecoles.length; a++) {		
					if (Boolean.TRUE.equals(matriceAdjacence[indexVille][a])) {	// On verifie si la ville concernee est reliee a au moins une autre ville grace au tableau "matriceAdjacence"		
						cas1 = false;
						break; // On quitte la boucle a la premiere ville adjacente trouvee.
					}
					else cas1 = true;
				}							
				// FIN CAS 1.	
				// CAS 2 : Si la ville concernee n'est reliee qu'a une seule ville.				
				if (Boolean.FALSE.equals(cas1)) { // Si le cas de la ville concernee ne fait pas parti du cas precedent alors...						
					if (nombreDeVoisins[i] == 1) {	
						indexVilleAdjacente = O.indexVilleAdjacente(matriceAdjacence, i);	
						if (ecoles[indexVilleAdjacente].contains("E")) { // Si cette ville adjacente contient une ecole
							ecoles[indexVille] = "P";
							acces[indexVille] = true;
							acces[indexVilleAdjacente] = true;
							cas2 = true;	
						}							
						else if (ecoles[indexVilleAdjacente].contains("P")) { // Sinon si cette ville adjacente ne contient pas une ecole
							ecoles[indexVille] = "P";
							ecoles[indexVilleAdjacente] = "E";
							acces[indexVille] = true;
							acces[indexVilleAdjacente] = true;
							cas2 = true;
						} 
					}	
					else cas2 = false;
				}
				// FIN CAS 2		
				// CAS 3 : La ville concernee n'est reliee qu'a des villes qui n'ont pas d'ecole.			
				if (Boolean.FALSE.equals(cas1) && Boolean.FALSE.equals(cas2)) { // Si le cas de la ville concernee ne fait pas parti des deux cas precedents alors...	
					for (int a=0; a<ecoles.length; a++) { // Pour chaque ville contenue dans le tableau nomDesVilles
						if (Boolean.TRUE.equals(matriceAdjacence[indexVille][a])) {	// On verifie si la ville concernee est reliee a au moins une autre ville grace au tableau "matriceAdjacence"	
							villeSansAcces[a] = true;
							if (ecoles[a].contains("E")) { // On verifie si une ville adjacente a une ecole 
								cas3 = false;
								break; // On quitte la boucle a la premiere ecole trouvee dans une ville adjacente
							}
						}
					}	
				}
				// FIN CAS 3.			
				// CAS 4 : La ville concernee est reliee a d'autres villes dont au moins une contient une ecole		
				if (Boolean.FALSE.equals(cas1) && Boolean.FALSE.equals(cas2) && Boolean.FALSE.equals(cas3)) { // Si le cas de la ville concernee ne fait pas parti des trois cas precedents alors...						
					for (int a=0; a<nomDesVilles.length; a++) { // Pour chaque ville contenue dans le tableau nomDesVilles					
						if (Boolean.TRUE.equals(matriceAdjacence[indexVille][a])) { // On cherche si la ville a l'indice correspondant est adjacente a la ville concernee grace au tableau "matriceAdjacence"
							indexVilleAdjacente = a; // Si la ville à l'indice i correspondante est adjacente, on recupere son indice									
							if (ecoles[indexVilleAdjacente].contains("E")) { // Si la ville adjacente contient une ecole 	
								retirerEcole = true; // Alors le retrait est possible pour l'instant						
							} 																	
							else { // Si la ville adjacente n'a pas d'ecole								
								for (int j=0; j<nomDesVilles.length; j++) { // Pour chaque ville contenue dans le tableau nomDesVilles							
									if (Boolean.TRUE.equals(matriceAdjacence[indexVilleAdjacente][j]) && indexVille!=j) { // On cherche si la ville a l'indice correspondant est reliee a la ville adjacente grace au tableau "matriceAdjacence" tout en excluant la ville concernee par le retrait										
										if (ecoles[j].contains("E")) { // Si la ville a l'indice j correspondante contient une ecole								
											retirerEcole = true; // Alors le retrait est possible pour l'instant
											villeSansAcces[indexVilleAdjacente] = true;
											break; //On quitte la boucle et on passe a ville suivante dans le tableau nomDesVilles
										}									
										else if (ecoles[j].contains("P")) { // Si la ville a l'indice j correspondant ne contient pas d'ecole
											retirerEcole = false; // Alors le retrait est impossible pour l'instant
											villeSansAcces[indexVilleAdjacente] = false;
										} 
									} 				
									else { // si la ville a l'indice j correspondant n'est pas reliee a la ville adjacente
										retirerEcole = false; // Alors le retrait est impossible pour l'instant		
										villeSansAcces[indexVilleAdjacente] = false;
									}
								}	
							}						
						}  			
					}				
				}			
				// FIN CAS 4			
				if (Boolean.TRUE.equals(retirerEcole)) { // S'il existe au moins une seule ville adjacente qui n'a pas d'acces a une ecole alors le retrait de l'ecole de la ville concernee devient impossible
					for (int a=0; a<nomDesVilles.length; a++) {
						if (Boolean.FALSE.equals(villeSansAcces[a])) {				
							retirerEcole = false;
							break;
						} 
					}					
				}				
				if (Boolean.TRUE.equals(retirerEcole)) { // Si apres avoir fait toutes les verifications sur les villes adjacentes, le retrait est possible	
					ecoles[indexVille] = "P"; // Alors on affecte "P" a l'indice correspondant a la ville concernee dans le tableau ecoles
				}		
			} // FIN IF 2
		} // FIN FOR 1
		/*CE PARCOURS RECHERCHE DES VILLES SANS ACCES A UNE ECOLE ET RAJOUTE UNE ECOLE DANS LA VILLE LE CAS ECHEANT*/
		for (int i=0; i<ecoles.length; i++) {		
			if (ecoles[i].contains("P")) { // Sinon on verifie toutes les villes adjacentes a la ville etudiee	
				for (int j=0; j<ecoles.length; j++) { 					
					if (Boolean.TRUE.equals(matriceAdjacence[i][j])) {	
						if (ecoles[j].contains("E")) { // Si au moins une ville adjacente a la ville etudiee possede une ecol e alors on passe a la ville suivante
							acces[i] = true;
							break; // On passe a la ville suivante // important avec les villes (B),(E),(H)
						}	
						if (ecoles[j].contains("P")) {
							for (int k=0; k<ecoles.length; k++) {
								if (Boolean.TRUE.equals(matriceAdjacence[j][k]) && k!=i) {				
									if (ecoles[k].contains("E")) { // Si la ville a l'indice j correspondante contient une ecole								
										acces[k] = true; // Alors le retrait est possible pour l'instant
									}													
									else if (ecoles[j].contains("P")) { // Si la ville a l'indice j correspondant ne contient pas d'ecole
										acces[k] = false; 
									} 
								} 			
								else { // si la ville a l'indice j correspondant n'est pas reliee a la ville adjacente
									acces[k] = false; // Alors le retrait est impossible pour l'instant					
								}
							}
						}	
						else acces[i] = false;// Si la ville adjacente n'a pas d'ecole alors on met "acces" a "false"					
					}	
					else acces[i] = false;// Si la ville j n'est pas adjacente a la ville i alors on met "acces" a "false"					
				}	
				if (Boolean.FALSE.equals(acces[i])) { // Si apres avoir verifie toutes les villes adjacentes a la ville etudiee, aucune ecole n'est accessible
					ecoles[i] = "E"; // On applique la solution naive
				}			
			}
		}
		/*FIN PARCOURS*/	
		/*CE PARCOURS EMPECHE LE RETRAIT DE L'ECOLE D'UNE VILLE RELIEE A PLUSIEURS VILLES DONT AU MOINS UNE AVEC ECOLE ET AU MOINS UNE AUTRE SANS ECOLE (EX : VILLE DE DEGRE 1 ET SANS ECOLE).*/
		for (int i=0; i<ecoles.length; i++) {
			accesVerif1 = false;
			accesVerif2 = false;
			if (ecoles[i].contains("E")) {
				for (int j=0; j<ecoles.length; j++) {
					if (Boolean.TRUE.equals(matriceAdjacence[i][j])) {
						if (ecoles[j].contains("E")) {
							accesVerif1 = true; // la ville i a acces a au moins une ecole via une autre ville j
							break;
						}
					}
				}
				if (Boolean.TRUE.equals(accesVerif1)) {
					for (int j=0; j<ecoles.length; j++) {
						if (Boolean.TRUE.equals(matriceAdjacence[i][j]) && nombreDeVoisins[j] == 1) { // Si au moins une ville adjacente a la ville i n'a acces a une ecole que grace a i alors on arrete le parcours
							accesVerif2 = false; // le retrait de la ville i devient alors impossible
							break;
						}				
					}
				}
			}
			if (Boolean.TRUE.equals(accesVerif1) && Boolean.TRUE.equals(accesVerif2)) {
				ecoles[i] = "P";
			}
		}
		/*FIN PARCOURS*/	
		/* CE PARCOURS PERMET LE RETRAIT DE L'ECOLE D'UNE VILLE i RELIEE A PLUSIEURS VILLES DONT AU MOINS UNE AVEC ECOLE ET AU MOINS UNE AUTRE SANS ECOLE
		 * SI ET SEULEMENT SI TOUTES LES VILLES ADJACENTES j ONT ACCES A UNE ECOLE OU UNE ECOLE DANS LEUR VILLE.
		 * */
		for (int i=0; i<ecoles.length; i++) {
			/*Initialisation des attributs pour chaque iteration i*/
			accesVerif1 = false;
			accesVerif2 = false;
			accesVerif3 = false;
			/*Fin Initialisation des attributs pour chaque iteration i*/
			if (ecoles[i].contains("E")) {
				for (int j=0; j<ecoles.length; j++) {
					if (Boolean.TRUE.equals(matriceAdjacence[i][j])) {
						if (ecoles[j].contains("E")) {
							accesVerif1 = true; // la ville i a acces a au moins une ecole via une autre ville j, on passe a la ville i suivante
							break;
						}
					}
				}
				if (Boolean.TRUE.equals(accesVerif1)) {
					for (int j=0; j<ecoles.length; j++) {
						if (Boolean.TRUE.equals(matriceAdjacence[i][j]) && nombreDeVoisins[j] == 1) { // Si au moins une ville adjacente a la ville i n'a acces a une ecole que grace a i alors on arrete le parcours
							accesVerif2 = false; // le retrait de la ville i devient alors impossible
							break;
						}
						if (Boolean.TRUE.equals(matriceAdjacence[i][j] && nombreDeVoisins[j] > 1)) { // On regarde les villes adjacentes j a la ville i (les villes j ayant plusieurs routes)
							if (ecoles[j].contains("E")) { // la ville adjacente j etudiee a une ecole
								accesVerif2 = true;
								continue;
							} 
							for (int k=0; k<ecoles.length; k++) {
								if (Boolean.TRUE.equals(matriceAdjacence[j][k] && k!=i)) { // On regarde les ECOLES des villes adjacentes k a la ville j adjacente a la ville i
									if (ecoles[k].contains("E")) {
										accesVerif3 = true;
										break;
									}
								}
							}				
						}
					}
				}
				if (Boolean.TRUE.equals(accesVerif1) && Boolean.TRUE.equals(accesVerif2) && Boolean.TRUE.equals(accesVerif3)) { // Si toutes ces verifications sont valides, alors le retrait de la ville i est possible
					ecoles[i] = "P";
				}
			}
		}
		for (int i=0; i<nomDesVilles.length; i++) { // Pour chaque ville contenue dans le tableau nomDesVilles
			/*Initialisation des attributs pour chaque iteration i*/
			accesEcole = false;
			compte = O.compterNbVillesAdj(matriceAdjacence, i);
			tabInd = new int[compte];
			tabInd = O.indiceVillesAdj(matriceAdjacence, i);
			/*Initialisation des attributs*/
			for (int j=0; j<tabInd.length; j++) {
				if (ecoles[tabInd[j]].contains("E")) {
					accesEcole = true;
					break;
				}
			}
			if (Boolean.FALSE.equals(accesEcole)) {
				ecoles[i] = "E";
			}
		}
		for (int i=0; i<nomDesVilles.length; i++) {
			/*Affectation d'attributs pour chaque iteration de i*/
			accesEcole = true;
			if (ecoles[i].contains("E")) {
				compte = O.compterNbVillesAdj(matriceAdjacence, i);
				tabInd = new int[compte];
				tabInd = O.indiceVillesAdj(matriceAdjacence, i);
				/*Fin Affectation d'attributs*/
				for (int j=0; j<tabInd.length; j++) {
					if (ecoles[tabInd[j]].contains("P")) {
						accesEcole = false;
						break;
					}
				}
				if (Boolean.TRUE.equals(accesEcole)) {
					ecoles[i] = "P";
				}
			}
		}
		/*Initialisation d'attributs*/
		compte=0;
		degre1=0;
		degre2=0;
		/*Fin Initialisation d'attributs*/
		for (int i=0; i<nomDesVilles.length; i++) { // On cherche a creer une liste de villes dont les degres sont > 1 et qui ne sont relies a des villes dont les degres sont <= 1  
			/*Affectation d'attributs pour chaque iteration de i*/
			indexVille = i;
			valide = true;
			degre1 = O.compterNbVillesAdj(matriceAdjacence, i); // On determine le degre de la ville etudiee
			tabInd =  Arrays.copyOf(O.indiceVillesAdj(matriceAdjacence, i), (O.indiceVillesAdj(matriceAdjacence, i)).length); // On etablit la liste des indices des villes adjacentes de cette ville
			/*Fin Affectation d'attributs*/
			for (int k=0; k<tabInd.length; k++) { // Pour chacune de ces villes adjacentes
				if (O.compterNbVillesAdj(matriceAdjacence, tabInd[k]) <= 1) { // On cherche leurs degres : si le degre est <= a 1
					valide = false; // alors on n'inclura pas cette ville dans la liste
					break;
				}
			}
			if (Boolean.FALSE.equals(valide)) {
				continue;
			}
			if (degre1>1 && Boolean.TRUE.equals(valide)) { // Si les criteres sont respectees, on incremente de 1 le compte de villes conformes
				compte += 1;
			}
		}
		/*Initialisation d'attributs*/
		newNomDesVilles = new String[compte]; 
		newIndNomDesVilles = new int[compte];
		newEcoles = new String[compte];
		newAcces = new boolean[compte];
		int a=0;
		/*Fin Initialisation d'attributs*/
		for (int i=0; i<nomDesVilles.length; i++) {
			/*Affectation d'attributs pouur chaque iteration de i*/
			indexVille = i;
			valide = true;
			degre1 = O.compterNbVillesAdj(matriceAdjacence, i);
			/*Fin d'affectation d'attributs*/
			if (degre1 == 1) continue;
			tabInd =  Arrays.copyOf(O.indiceVillesAdj(matriceAdjacence, i), (O.indiceVillesAdj(matriceAdjacence, indexVille)).length);
			for (int k=0; k<tabInd.length; k++) {
				degre2 = O.compterNbVillesAdj(matriceAdjacence, tabInd[k]);
				if (degre2 <= 1) {
					valide = false;
					break;
				}
			}
			if (Boolean.FALSE.equals(valide)) {
				continue;
			}
			if (degre1>1 && Boolean.TRUE.equals(valide)) {
				newNomDesVilles[a] = nomDesVilles[indexVille]; // On remplit le nouveau tableau newNomDesVilles avec les villes conformes
				newIndNomDesVilles[a] = indexVille; // On remplit le nouveau tableau newIndNomDesVilles avec les indices des villes conformes
				a++;
			}
		}	
		/*Initialisation d'attributs*/
		nombreDeVoisins = new int[newNomDesVilles.length];
		ecolesCopie = Arrays.copyOf(ecoles, ecoles.length);
		compte2 = 0;
		compte = 0;
		/*Fin Initialisation d'attributs*/
		for (int i=0; i<newNomDesVilles.length; i++) {
			nombreDeVoisins[i] = O.compterNbVillesAdj(matriceAdjacence, newIndNomDesVilles[i]);
			if (nombreDeVoisins[i]==2) {
				compte+=1;
			}
			else if (nombreDeVoisins[i]>=2) {
				compte2+=1;
			}
		}
		if (compte2>=compte) {
			for (int i=0; i<newNomDesVilles.length; i++) {
				/*Affectation d'attributs pour chaque iteration de i*/
				newEcoles[i] = "P";
				ecoles[newIndNomDesVilles[i]] = "P";
				/*Fin Affectation d'attributs*/
			}
			for (int i=0; i<newNomDesVilles.length; i++) {
				/*Initialisation d'attributs pour chaque iteration de i*/
				for (int h=0; h<newNomDesVilles.length; h++) {
					newAcces[h] = false;
				}
				indexVille = i;
				newEcoles[i] = "E"; // ville(A) => "E"
				newAcces[indexVille] = true;
				/*Fin Initialisation d'attributs*/
				for (int j=0; j<newNomDesVilles.length; j++) { // ["A", "B", "C", "D", "I"]
					if (!(j==indexVille)) {
						if (Boolean.FALSE.equals(newAcces[j])) { // ["B", "C", "D", "I"] => ville(B) etudiee
							compte = O.compterNbVillesAdj(matriceAdjacence, j); // ville(B) => 3
							tabIndAdj =  Arrays.copyOf(O.indiceVillesAdj(matriceAdjacence, newIndNomDesVilles[j]), (O.indiceVillesAdj(matriceAdjacence, newIndNomDesVilles[j])).length); // villes(B) => 3 => [0,2,7] => ["A","C","H"]
							for (int k=0; k<tabIndAdj.length; k++) {
								if (ecoles[tabIndAdj[k]].contains("E")) {  // ["A"] => "E"
									newAcces[j] = true; // ville(B) a acces via ville (A)
								}
								if (Boolean.TRUE.equals(matriceAdjacence[indexVille][j])) {
									newAcces[j] = true; // ville(B) a acces via ville (A)
								}
							}
						}
						else if (Boolean.FALSE.equals(newAcces[j])) {
							ecoles[newIndNomDesVilles[j]] = "P";
							break;
						}	
					}
				}
				accesEcole = true;
				for (int l=0; l<newAcces.length; l++) {
					if (Boolean.FALSE.equals(newAcces[l])) {
						accesEcole = false;
						break;
					}
				}
				if (Boolean.TRUE.equals(accesEcole)) {
					ecoles[newIndNomDesVilles[i]] = "E";
					break;
				}
			}
		}
		if (Boolean.FALSE.equals(accessibilite = CC.accederEcole(nomDesVilles, matriceAdjacence, ecoles))) { // Si le tableau d'ecoles obtenu ne respecte pas la contrainte d'accessibilite
			ecoles = Arrays.copyOf(ecolesCopie, ecolesCopie.length); // alors on recupere la premiere sauvegarde et on l'applique au tableau "ecoles" => repartir sur de bonnes bases
		}
		/*Attribuer des ecoles a des villes dont les degres valent 1 ou 0*/
		for (int i=0; i<ecoles.length; i++) {
			/*Initialisation d'attributs pour chaque iteration de i*/
			compte =  O.compterNbVillesAdj(matriceAdjacence, i);
			indexVilleAdjacente = O.indexVilleAdjacente(matriceAdjacence, i);
			/*Fin Initialisation d'attributs*/
			if (compte == 0) {
				ecoles[i] = "E";
			}
			if (compte == 1) {
				ecoles[indexVilleAdjacente] = "E";
			}
		}
		/*Fin de l'attribution*/
		/*Supprimer l'ecoles d'une des deux villes adjacentes dont les degres valent 1 et n'en garder qu'une*/
		for (int i=0; i<ecoles.length; i++) {
			for (int j=0; j<ecoles.length; j++) {
				if (Boolean.TRUE.equals(matriceAdjacence[i][j])) {
					/*Affectation d'attributs pour chaque iteration de j*/
					degre1 = O.compterNbVillesAdj(matriceAdjacence, i);
					degre2 = O.compterNbVillesAdj(matriceAdjacence, j);			
					if (degre1 == degre2 && degre1 == 1) {
						ecoles[i] = "E";
						ecoles[j] = "P";
					}
					/*Fin Affectation d'attributs*/
				}
			}
		}
		/*Fin Transferer*/
		/* VERIFICATION DE LA CONTRAINTE D'ACCESSIBILITE DU TABLEAU D'ECOLES OBTENU
		 * SI ELLE N'EST PAS RESPECTEE, ON UTILISE LE TABLEAU SAUVEGARDE AU DEBUT
		 * ET ON APPLIQUE UNE SOLUTION APPROCHEE DESSUS
		 * */ 
		accessibilite = CC.accederEcole(nomDesVilles, matriceAdjacence, ecoles);
		if (Boolean.FALSE.equals(accessibilite)) {
			pred = 0;
			nombreDeVoisins = new int[nomDesVilles.length];
			villesMarquees = new int[nomDesVilles.length];
			for (int i=0; i<nomDesVilles.length; i++) {
				nombreDeVoisins[i] = O.compterNbVillesAdj(matriceAdjacence, i);
				villesMarquees[i] = 0;
			}
			for (int j=0; j<villesMarquees.length; j++) { // DEBUT FOR
				if (villesMarquees[j] == 0) {
					int max = nombreDeVoisins[0];
					for (int i=0; i<nombreDeVoisins.length; i++) {
						if (nombreDeVoisins[i] > max && villesMarquees[i]!=1) {
							max = nombreDeVoisins[i];
							indexVille = i;
							if (i == 0) {
								continue;
							}
							pred = i;
						}
						if (nombreDeVoisins[i] == max && villesMarquees[i]!=1) { // S'il existe deux villes de meme degre et non marquees
							/*Affectation d'attributs pour chaque iteration de i*/
							degre1=0;
							degre2=0;
							tabIndVillesAdjComp = Arrays.copyOf(O.indiceVillesAdj(matriceAdjacence, indexVille), (O.indiceVillesAdj(matriceAdjacence, indexVille)).length); // On determine les indices des villes adjacentes de i
							tabIndVillesAdjComp2 = Arrays.copyOf(O.indiceVillesAdj(matriceAdjacence, pred), (O.indiceVillesAdj(matriceAdjacence, pred)).length); // On determine les indices des villes adjacentes du predecesseur de i; 
							/*Fin Affectation d'attributs*/ // On cherche la ville au plus haut degre
							for (int k=0; k<tabIndVillesAdjComp.length; k++) {
								if (villesMarquees[tabIndVillesAdjComp[k]] == 1) { 
									degre1+=1;
								}
							}				
							for (int k=0; k<tabIndVillesAdjComp2.length; k++) {
								if (villesMarquees[tabIndVillesAdjComp2[k]] == 1) {
									degre2+=1;
								}
							}
							if (degre1>degre2) { 
								indexVille = i;			
							}
							else if (degre1<degre2) {
								indexVille = nombreDeVoisins[i];
							}
							else {
								indexVille = i;	
							}
						}
					}
					villesMarquees[indexVille] = 1;
					ecolesCopie1[indexVille] = "E";
					tabIndVillesAdj = Arrays.copyOf(O.indiceVillesAdj(matriceAdjacence, indexVille), (O.indiceVillesAdj(matriceAdjacence, indexVille)).length);				
					for (int i=0; i<tabIndVillesAdj.length; i++) {
						int indice = tabIndVillesAdj[i];
						ecolesCopie1[indice] = "E";
						villesMarquees[indice] = 1; 
					}						
					for (int i=0; i<villesMarquees.length; i++) {
						if (villesMarquees[i] == 0) {
							break;
						}
					}
					afficherEcoles(ecolesCopie1);
					return(ecolesCopie1);
				}
			}
		}
		return(ecoles);	
	} // FIN METHODE
} // FIN CLASSE