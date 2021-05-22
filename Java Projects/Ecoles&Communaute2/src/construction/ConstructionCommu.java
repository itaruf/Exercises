package construction;
import java.util.Arrays;
import java.util.Scanner;

/**
 * Classe qui va permettre de construire une communaute dans les regles :
 * <ul><li>Ajouter une route entre deux villes donnees par l'utilisateur.</li>
 * <li>Initialiser la matrice d'adjacence de la communaute</li>
 * <li>D'appliquer la solution naive en cas de non respect de la contrainte d'accessibilite</li>
 * <li>Remplir la matrice d'adjacence de la communaute suivant la description du fichier</li>
 * <li>Verifier la contrainte d'accessibilite de la communaute</li>
 * <li>Ajouter une ecole dans une ville</li>
 * <li>Supprimer une ecole dans une ville</li>
 * </ul>
 * @author mac
 */
public class ConstructionCommu {

	/**
	* Attribut de type String qui va nous servir a stocker le nom de la ville entree par l'utilisateur.
	*/
	private String nomVille;

	/**
	*<p>Objet de type Scanner qui scanne la valeur entree par l'utilisateur.</p>
	* <ul><li> Permettra de verifier que l'utilisateur entre une valeur de type String.</li>
	* <li>Associe a "nomDesVilles".</li> 
	* </ul> 
	*/
	private Scanner nV = new Scanner(System.in);
	
	/**
	* Attribut de type int qui va nous servir a stocker l'indice de la ville concernee par le retrait.
	*/
	private int indexVille = 0;
	
	/**
	* Attribut de type boolean qui va nous servir a determiner si une ville entree par l'utilisateur existe dans le tableau "nomDesVilles". 
	* Initialise a "false".
	*/
	private boolean villeExistante = false;
	
	/**
	* Attribut de type boolean qui va nous servir a determiner si une ecole existe deja dans la ville entree. 
	* Initialise a "false".
	*/
	private boolean ecoleExistante = false;
	
	/**
	* Attribut de type boolean qui va nous servir a determiner si chacune des villes du tableau "nomDesVilles" possede une ecole.
	* Initialise a "true".
	*/
	private boolean ecolesExistantesPartout = true;

	/**
	* Attribut de type int qui va nous servir a stocker le nombre de villes adjacentes d'une ville.
	* Initialise a "false".
	*/
	
	private int compte = 0;
	
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
	
	/* Attribut de type int qui va nous servir a stocker l'indice de la ville d'une ville adjacente.
	 * 
	 */
	private int indexVilleAdjacente;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner si le retrait de l'ecole de la ville concernee est possible.
	 */
	private boolean retirerEcole;

	/**
	 * <p>Tableau de type boolean de taille egale au nombre de villes et qui permet de determiner si une ville adjacente a acces ou non a une ecole via une autre ville. Initialise a "true" dans chacune des cases.</p>
	 * <ul><li>"true" : Contient une ecole.</li>
	 * 	   <li>"false" : Ne contient pas d'ecole.</li>
	 * </ul>
	 */
	private boolean[] villeSansAcces;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner s'il n'y a aucune ecole dans aucune des villes. 
	 * */
	private boolean aucuneEcole;
	
	/**
	 * <ul><li>Initialise chacune des cases du tableau "matriceAdjacence" à "false" : aucune ville n'est adjacente a aucune autre ville.<br></li>
	 * </ul>
	 * <p>Cette methode prend en parametre le nombre de villes de la communaute ainsi que sa matrice d'adjacence.</p>
	 * @param nombreDeVilles : Attribut de type int contenant le nombre de ville lu dans la communaute
	 * @param matriceAdjacence : Tableau de type boolean qui represente la matrice d'adjacence de la communaute
	 * @see initialiserMatrice#nomDesVilles
	 * @see initialiserMatrice#matriceAdjacence
	 */
	public void initialiserMatrice(int nombreDeVilles, boolean[][] matriceAdjacence) { 
		
		for (int i=0; i<nombreDeVilles; i++) { // On entre dans une boucle pour chaque ligne d'indice i
			for (int j=0; j<nombreDeVilles; j++) { // On entre dans une boucle pour chaque case d'une colonne d'indice j d'une ligne d'indice i
				matriceAdjacence[i][j] = false; // On affecte le booleen "false" dans chaque case d'une colonne d'indice j d'une ligne d'indice i
			}
		}
	}
	
	 /**
	 *<ul><li> Applique la solution naive, ie: mettre des ecoles partout si la contrainte d'accessibilite n'est pas respectee par le fichier pris en entree.<br></li> 
	 * </ul>
	 * @param ecoles : tableau contenant les situations (ecole/sans ecole) des villes d'une communaute
	 * @return un tableau contenant les ecoles d'une communaute
	 */
	public String[] appliquerSolutionNaive(String[] ecoles) { 
	
		for (int b=0; b<ecoles.length; b++) {
			ecoles[b] = "E";		
		}
		return(ecoles);
	}
	/**
	 * <ul><li>Remplie chacune des cases du tableau "matriceAdjacence" a "true" aux indices correspondant des qu'il existe une combinaison de villes a relier par une route.<br></li>
	 * </ul>
	 * <p>Cette methode prend en parametre le nombre de villes de la communaute, sa matrice d'adjacence et les deux tableaux tabRoutes et tabRoutes2 contenant les donnees sur les combinaisons de villes a relier par une route.</p>
	 * @param nomDesVilles : Tableau de type String qui va nous servir a verifier qu'une ville existe et d'afficher le nom d'une ville.
	 * @param matriceAdjacence : Tableau 2D de type boolean qui va nous servir a indiquer que deux villes du tableau "nomDesVilles" sont adjacentes.
	 * @param tabRoutes : Tableau de type String contenant la premiere ville incluse dans la combinaison a relier
	 * @param tabRoutes2 : Tableau de type String contenant la deuxieme ville incluse dans la combinaison a relier
	 * @see ajouterRoutes#nomDesVilles
	 * @see ajouterRoutes#matriceAdjacence
	 * @see ajouterRoutes#tabRoutes
	 * @see ajouterRoutes#tabRoutes2
	 */
	public void ajouterRoutes(String[] nomDesVilles, boolean[][] matriceAdjacence, String[] tabRoutes, String[] tabRoutes2) {
	
		int indexVille1 = 0;
		int indexVille2 = 0;
		boolean x,y = false;	
		for (int i=0; i<tabRoutes.length; i++) {
			x = false;
			y = false;	
			for (String element : nomDesVilles) {	
				if  (Arrays.asList(tabRoutes[i]).contains(element)) { // On verifie que le nom de la premiere ville entre existe dans le tableau "nomDesVilles"
					indexVille1 = Arrays.asList(nomDesVilles).indexOf(element); // On stocke l'indice de cette premiere ville
					x = true;
				}	
			
				if  (Arrays.asList(tabRoutes2[i]).contains(element)) {
					indexVille2 = Arrays.asList(nomDesVilles).indexOf(element); // On stocke l'indice de cette deuxieme ville
					y = true;
				}
			}	
			if (Boolean.TRUE.equals(x) && Boolean.TRUE.equals(y))  {
				matriceAdjacence[indexVille1][indexVille2] = true; // On affecte la valeur "true" pour indiquer l'ajout d'une route entre les deux villes dans un sens
				matriceAdjacence[indexVille2][indexVille1] = true;// On affecte la valeur "true" pour indiquer l'ajout d'une route entre les deux villes dans l'autre sens car on ne s'occupe pas de la direction des routes
			}	
		}
	}	
	
	/**
	* <p>Sert a determiner si un fichier decrivant une communaute pris en entree respecte la contrainte d'accessibilite ou non.</p>
	* @param nomDesVilles : Tableau de type String qui va nous servir a verifier qu'une ville existe et d'afficher le nom d'une ville.
	* @param matriceAdjacence : Tableau 2D de type boolean qui va nous servir a indiquer que deux villes du tableau "nomDesVilles" sont adjacentes.
	* @param ecoles : Tableau de type String qui va nous servir a determiner si une ville du tableau "nomDesVilles" contient une ecole.
	* @see accederEcole#nomDesVilles
	* @see accederEcole#matriceAdjacence
	* @see accederEcole#ecole
	* @return un booleen "false" si la contraite n'est pas respectee, "true" sinon
	*/
	public boolean accederEcole(String[] nomDesVilles, boolean[][] matriceAdjacence, String[] ecoles) {
	
		boolean acces = false;
		for (int i=0; i<ecoles.length; i++) {
			acces = false;
			if (ecoles[i].contains("E")) {
				acces = true; // Si la ville a l'indice i contient une ecole alors on passe directement a la ville suivante	
				continue;
			}
			else { // Sinon on verifie toutes les villes adjacentes a la ville etudiee	
				for (int j=0; j<ecoles.length; j++) { 	
					if (Boolean.TRUE.equals(matriceAdjacence[i][j])) {	
						if (ecoles[j].contains("E")) { // Si au moins une ville adjacente a la ville etudiee possede une ecole alors on passe a la ville suivante
							acces = true;
							break; // On passe a la ville suivante
						}
						else acces = false;
					}	
				}	
				if (Boolean.FALSE.equals(acces)) { // Si une ville n'a pas acces a un ecole alors on retourne "false" => le fichier ne respecte pas la contrainte d'accessibilite
					acces = false;
				}
			}
		}	
		return(acces);
	}

	/**
	* <ul> <li> Demande a l'utilisateur le nom de la ville dans laquelle il souhaite ajouter une ecole.<br></li>
	* <li> Redemande a l'utilisateur d'entrer un nom correct s'il entre le nom d'une ville qui n'est pas dans le tableau "nomDesVilles".<br></li>
	* <li> Verifie si l'ajout d'une ecoles dans la ville est possible.<br></li>
	* <li> Affiche un message si la ville possede deja une ecole.<br></li>
	* <li> Affiche un message si toutes les villes possedent deja une ecole.<br></li>
	* <li> Retourne au menu si la ville possede déjà une ecole ou si toutes les villes possedent une ecole.<br></li>
	* <li> Ajoute l'ecole dans la ville si c'est possible et modifie le contenu du tableau "ecoles" en conséquence.<br></li>
	* <li> Affiche la liste des villes dans lesquelles il y a une ecole.<br></li>
	* </ul>
	* <p> Cette methode prend en parametres les noms des villes ainsi que les ecoles de la communaute.</p>
	* @param nomDesVilles : Tableau de type String qui va nous servir a verifier qu'une ville existe et d'afficher le nom d'une ville.
	* @param ecoles : Tableau de type String qui va nous servir a determiner si une ville du tableau "nomDesVilles" contient une ecole.
	* @see ajouterEcoles#nomDesVilles
	* @see ajouterEcoles#ecoles
	*/
	public void ajouterEcoles(String[] nomDesVilles, String[] ecoles)  {
		
		do { // On entre dans une boucle tant que l'utilisateur n'a pas entre de ville existante	
			indexVille = 0;
			villeExistante = false;
			ecoleExistante = false;
			ecolesExistantesPartout = true;
			System.out.print("\nDans quelle ville souhaitez-vous ajouter une ecole ? : ");
			nomVille = nV.nextLine(); // Lit la chaine de caracteres entree par l'utilisateur
			nomVille = nomVille.replaceFirst("^ *", ""); // Enleve tous les espaces avant le premier caractere qui n'est pas un espace
			nomVille = nomVille.trim().replaceAll(" +", " "); // Enleve les espaces en trop entre deux mots
			nomVille = nomVille.replaceAll("\\s+$", ""); // Enleve tous les espaces avant le dernier caractere qui n'est pas un espace	
			for (int i=0; i<nomDesVilles.length; i++) { 
				if (Arrays.asList(nomDesVilles[i]).contains(nomVille)) { // On verifie que le nom de la ville entree existe dans le tableau "nomDesVilles"
					villeExistante = true;
					indexVille = i; // On stocke l'indice de la ville
				}	
			}	
			if (Boolean.FALSE.equals(villeExistante)) // Si le nom de la ville entree ne n'existe pas dans le tableau "nomDesVilles" alors...
			System.out.println("\nLe nom de la ville ne figure pas dans la liste.");
		} while (Boolean.FALSE.equals(villeExistante));
		// VERIFICATION 1 si la ville a deja une ecole.
		if (Arrays.asList(ecoles[indexVille]).contains("E")) { // Si la ville concernee a deja une ecole alors...
			System.out.println("\nLa ville '"+nomVille+"' possede deja une ecole.");
			ecoleExistante = true; 
		}		
		// FIN VERIFICATION 1	
		// VERIFICATION 2 : Si toutes les villes possedent deja une ecole.
		for (int i=0; i<ecoles.length; i++) {
			if  (Arrays.asList(ecoles[i]).contains("P")) { // On verifie si la ville a l'indice i ne contient pas d'ecole dans le tableau "ecoles"
				ecolesExistantesPartout = false; // Si au moins une ville a une ecole, on quitte la boucle
				break;
			}	
		}
		if (Boolean.TRUE.equals(ecolesExistantesPartout)) { // Si toutes les villes ont deja une ecole alors...
			System.out.println("Toutes les villes possedent une ecole. Retour au menu.");
		}
		// FIN VERIFICATION 2
		if (Boolean.FALSE.equals(ecoleExistante)) {   // Si la ville concernee n'a pas d'ecole alors
			ecoles[indexVille] ="E"; // On affecte "E" a l'indice correspondant a la ville concernee dans le tableau "ecoles"
		}
		System.out.print("\nListe des villes ou se trouvent une ecole : ");		
		for (int m=0; m<ecoles.length; m++) { 
			if (ecoles[m].contains("E")) { // Si la ville a l'indice m correspondante contient une ecole alors on l'affiche
				System.out.print(""+nomDesVilles[m]+" ");
			}	
		}	
		System.out.println();
	}

	/**
	* <ul> <li> Demande a l'utilisateur le nom de la ville dans laquelle il souhaite retirer une ecole.<br></li> 
	* <li> Redemande a l'utilisateur d'entrer un nom correct s'il entre le nom d'une ville qui n'est pas dans le tableau "nomDesVilles".<br></li>
	* <li> Verifie si le retrait de l'ecole d'une ville est possible.<br></li>
	* <li> Affiche un message si la ville ne possede pas d'ecole.<br></li>
	* <li> Affiche un message si aucune ville ne possede d'ecole.<br></li>
	* <li> Retourne au menu si la ville ne possede pas d'ecole ou si aucune ville ne possede d'ecole.<br></li>
	* <li> Retire l'ecole d'une ville si c'est possible et modifie le contenu du tableau "ecoles" en conséquence.<br></li>
	* <li> En cas de non-retrait : affiche un message indiquant que l'ecole de la ville concernee ne peut pas etre supprimee ainsi que la liste des villes qui ne pourront pas avoir acces a une ecole.<br></li>
	* <li> Appelle la methode "afficherEcoles" de la classe "Algorithme" pour afficher les villes ayant une ecole.<br></li>
	* </ul>
	* <p> Cette methode prend en parametres les noms des villes, les ecoles ainsi que la matrice d'adjacence de la communaute.</p>
	* @param nomDesVilles : Tableau de type String qui va nous servir a verifier qu'une ville existe et d'afficher le nom d'une ville.
	* @param ecoles : Tableau de type String qui va nous servir a determiner si une ville du tableau "nomDesVilles" contient une ecole.
	* @param matriceAdjacence : Tableau 2D de type boolean qui va nous servir a indiquer que deux villes du tableau "nomDesVilles" sont adjacentes.
	*/
	public void supprimerEcoles(String[] nomDesVilles, String[] ecoles, boolean[][] matriceAdjacence) {
	
		do { // Verifie que l'utilisateur entre le nom d'une ville existante. Lui redemande sinon		
			// On initialise chacun des attributs a chaque fois que l'utilisateur veut retirer une ecole dans une ville
			villeExistante = false;
			ecoleExistante = true;
			aucuneEcole = true;
			cas1 = true;
			cas2 = true;
			cas3 = true;
			retirerEcole = false;
			villeSansAcces = new boolean[nomDesVilles.length];
			nV = new Scanner(System.in);	
			for (int i=0; i<villeSansAcces.length; i++) {
				villeSansAcces[i] = true;
			}
			System.out.print("\nDans quelle ville souhaitez-vous retirer une ecole ? : ");
			nomVille = nV.nextLine(); // On affecte la chaine de caracteres entree par l'utilisateur dans String "nomVille"
			nomVille = nomVille.replaceFirst("^ *", ""); // Enleve tous les espaces avant le premier caractere qui n'est pas un espace
			nomVille = nomVille.trim().replaceAll(" +", " "); // Enleve les espaces en trop entre deux mots
			nomVille = nomVille.replaceAll("\\s+$", ""); // Enleve tous les espaces avant le dernier caractere qui n'est pas un espace		
			for (int i=0; i<nomDesVilles.length; i++) {
				if (Arrays.asList(nomDesVilles[i]).contains(nomVille)) { // On verifie que le nom de la ville entree par l'utilisateur existe parmi les villes de l'agglomeration contenues dans le tableau "nomDesVilles"
					villeExistante = true; 
					indexVille = i; // On récupère l'indice de la ville concernee par le retrait
				}	
			}
			if (Boolean.FALSE.equals(villeExistante)) { // Si la ville n'existe pas alors...
				System.out.println("\nLe nom de la ville ne figure pas dans la liste.");
			}
		} while (Boolean.FALSE.equals(villeExistante));
		// VERIFICATION 1 : La ville ne possede pas d'ecole.	
		for (int i=0; i<ecoles.length; i++) {
			if ((Arrays.asList(ecoles[indexVille]).contains("P"))) { // On verifie s'il n'y a pas d'ecole dans la ville concernee par le retrait a l'indice correspondant dans le tableau "ecoles".
				System.out.println("\nLa ville "+nomVille+" ne possede pas d'ecole.");
				ecoleExistante = false;
				break; // On quitte la boucle des que le if est realise
			}	
		}
		// FIN VERIFICATION 1
		// VERIFICATION 2 : Aucune ville ne possede d'ecole.	
		for (int i=0; i<ecoles.length; i++ ) { 
			if (ecoles[i].contains("E")) { // On verifie s'il y une ecole pour chaque indice correspondant a une ville dans le tableau "ecoles"
				aucuneEcole = false; 
				break; // On quitte la boucle a la premiere occurrence "E" (c'est-a-dire s'il y a au moins une ville possedant une ecole)
			}	
		}	
		if (Boolean.TRUE.equals(aucuneEcole)) { // S'il n'y a aucune ecole dans aucune ville alors...
			System.out.println("Aucune ville ne possede d'ecoles. Retour au menu.");
		}
		// FIN VERIFICATION 2		
		if (Boolean.TRUE.equals(ecoleExistante)) { // S'il existe une ecole dans la ville concernee par le retrait	  		
			//CAS 1 : Si la ville concernee n'est reliee a aucune autre ville.	
			for  (int i=0; i<ecoles.length; i++) {
				if (matriceAdjacence[indexVille][i] == true) {	// On verifie si la ville concernee est reliee a au moins une autre ville grace au tableau "matriceAdjacence"
					cas1 = false;
					break; // On quitte la boucle a la premiere ville adjacente trouvee.
				}
			}	
			if (Boolean.TRUE.equals(cas1)) { // Si la ville concernee n'est reliee a aucune autre ville alors ...
				System.out.println("\nRetrait impossible. La ville "+nomDesVilles[indexVille]+" n'est reliee a aucune autre ville.");
			} 	
			//FIN CAS 1.
			//CAS 2 : Si la ville concernee n'est reliee qu'a une seule ville.	
			if (Boolean.FALSE.equals(cas1)) { // Si le cas de la ville concernee ne fait pas parti du cas precedent alors...	
				compte = 0;
				for (int i=0; i<matriceAdjacence.length; i++) { // Pour chaque case indice k contenue dans une ligne a l'indice indexVille de la matrice	
					if (matriceAdjacence[indexVille][i] == true) { // On verifie si la ville concernee est reliee a une autre ville grace au tableau "matriceAdjacence"
						compte += 1; // On incremente de 1 pour chaque ville adjacente	
						indexVilleAdjacente = i;
					}
				}
				if (compte == 1) {
					if (matriceAdjacence[indexVille][indexVilleAdjacente] == true) { // On cherche l'indice de cette unique ville adjacente
						if (ecoles[indexVilleAdjacente].contains("E")) { // Si cette ville adjacente contient une ecole
							retirerEcole = true; // Le retrait de la ville est possible
							cas2 = true;
						}
						else if (ecoles[indexVilleAdjacente].contains("P")) { // Sinon si cette ville adjacente ne contient pas une ecole
							System.out.println("Retrait impossible. La ville '"+nomDesVilles[indexVille]+"' se retrouverait sans acces a une ecole.");
							cas2 = true;
						} 
					} 
				}
				else cas2 = false;
			}
			//FIN CAS 2	
			//CAS 3 : La ville concernee n'est reliee qu'a des villes qui n'ont pas d'ecole.
			if (Boolean.FALSE.equals(cas1) && Boolean.FALSE.equals(cas2)) { // Si le cas de la ville concernee ne fait pas parti des deux cas precedents alors...	
				for  (int i=0; i<ecoles.length; i++) { // Pour chaque ville contenue dans le tableau nomDesVilles
					if (matriceAdjacence[indexVille][i] == true) {	// On verifie si la ville concernee est reliee a au moins une autre ville grace au tableau "matriceAdjacence"	
						if (ecoles[i].contains("E")) { // On verifie si une ville adjacente a une ecole 
							cas3 = false;
							break; // On quitte la boucle a la premiere ecole trouvee dans une ville adjacente
						}
					}
				}	
				if (Boolean.TRUE.equals(cas3)) { // Si toutes les villes adjacentes n'ont pas d'ecole alors ...
					System.out.println("Retrait impossible. La ville '"+nomDesVilles[indexVille]+"' n'est reliee qu'a des villes qui n'ont pas d'ecole et n'aura donc pas acces a une ecole.");
				}
			}
			// FIN CAS 3	
			// CAS 4 : La ville concernee est reliee a d'autres villes dont au moins une contient une ecole		
			if (Boolean.FALSE.equals(cas1) && Boolean.FALSE.equals(cas2) && Boolean.FALSE.equals(cas3))  { // Si le cas de la ville concernee ne fait pas parti des trois cas precedents alors...		
				for (int i=0; i<nomDesVilles.length; i++) { // Pour chaque ville contenue dans le tableau nomDesVilles	
					if (matriceAdjacence[indexVille][i] == true) { // On cherche si la ville a l'indice correspondant est adjacente a la ville concernee grace au tableau "matriceAdjacence"
						indexVilleAdjacente = i; // Si la ville à l'indice i correspondante est adjacente, on recupere son indice	
						if (ecoles[indexVilleAdjacente].contains("E")) { // Si la ville adjacente contient une ecole 	
							retirerEcole = true; // Alors le retrait est possible pour l'instant
						} 
						else { // Si la ville adjacente n'a pas d'ecole
							for (int j=0; j<nomDesVilles.length; j++) { // Pour chaque ville contenue dans le tableau nomDesVilles	
								if (matriceAdjacence[indexVilleAdjacente][j] == true && indexVille!=j) { // On cherche si la ville a l'indice correspondant est reliee a la ville adjacente grace au tableau "matriceAdjacence" tout en excluant la ville concernee par le retrait
									if (ecoles[j].contains("E")) { // Si la ville a l'indice j correspondante contient une ecole
										villeSansAcces[indexVilleAdjacente] = retirerEcole = true; // Alors le retrait est possible pour l'instant
										break; //On quitte la boucle et on passe a ville suivante dans le tableau nomDesVilles
									}
									else if (ecoles[j].contains("P")) { // Si la ville a l'indice j correspondant ne contient pas d'ecole
										villeSansAcces[indexVilleAdjacente] = retirerEcole = false; // Alors le retrait est impossible pour l'instan
									} 
								} 
								else { // si la ville a l'indice j correspondant n'est pas reliee a la ville adjacente
									villeSansAcces[indexVilleAdjacente] = retirerEcole = false; // Alors le retrait est impossible pour l'instant
								}
							}	
						}
					}  	
				}
			}
			// FIN CAS 4	
			if (Boolean.TRUE.equals(retirerEcole)) { // S'il existe au moins une seule ville adjacente qui n'a pas d'acces a une ecole alors le retrait de l'ecole de la ville concernee devient impossible
				for (int i=0; i<nomDesVilles.length; i++) {
					if (Boolean.FALSE.equals(villeSansAcces[i])) {
						System.out.println("\nRetrait impossible de la ville "+nomDesVilles[indexVille]+".");
						retirerEcole = false;
						break;
					}
				}	
			}		 		
			if (Boolean.TRUE.equals(retirerEcole)) { // Si apres avoir fait toutes les verifications sur les villes adjacentes, le retrait est possible	
				System.out.println("\nRetrait possible de la ville "+nomDesVilles[indexVille]+".");
				ecoles[indexVille] = "P"; // Alors on affecte "P" a l'indice correspondant a la ville concernee dans le tableau ecoles
			}	
			if (Boolean.FALSE.equals(retirerEcole)) {
				for (int n=0; n<villeSansAcces.length; n++) { // Boucle pour afficher les noms des villes adjacentes a la ville concernee qui n'ont pas d'acces a une ecole via une autre ville adjacente
					if  (Boolean.FALSE.equals(villeSansAcces[n])) { 
						System.out.println("La ville '"+nomDesVilles[n]+"' n'a pas acces a une ecole via une autre ville adjacente.");
					}
				}
			}
			Algorithme A = new Algorithme(nomDesVilles);
			A.afficherEcoles(ecoles);
		}
	}
}