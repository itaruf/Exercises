package up.mi.projet1.menu2;

import java.util.Arrays;
import java.util.Scanner;

/**
 * Classe qui va permettre a l'utilisateur de choisir la ville dans laquelle il souhaiterait retirer une ecole et de verifier si le retrait est possible puisqu'aucune ville ne doit se retrouver sans ecole dans son voisinage.
 * @author mac
 */
public class SuppressionEcoles {
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner si une ville entree par l'utilisateur existe dans le tableau "nomDesVilles". 
	 * Initialise a "false".
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private boolean villeExistante = false;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner si une ecole existe dans une ville. 
	 * Initialise a "true".
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private boolean ecoleExistante = true;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner s'il n'y a aucune ecole dans aucune des villes. 
	 * Initialise a "true".
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private	boolean aucuneEcole = true;
	
	/**
	 * Attribut de type int qui va nous servir a stocker l'indice de la ville concernee par le retrait.
	 * Initialise a "0".
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private int indexVille = 0;
	
	/**
	 * Attribut de type String qui va nous servir a stocker le nom de la ville entree par l'utilisateur.
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private String nomVille;
	
	/**
	 *<p>Objet de type Scanner qui scanne la valeur entree par l'utilisateur.</p>
	 * <ul><li> Permettra de verifier que l'utilisateur entre une valeur de type String.</li>
	 * <li> Associe a "nomDesVilles".</li>
	 * </ul>
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private Scanner nV = new Scanner(System.in);
	
	/**
	 * Attribut de type int qui va nous servir a stocker l'indice d'une ville adjacente a la ville concernee par le retrait.
	 * Initialise a "0".
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private int indexVilleAdjacente = 0;

	/**
	 * Attribut de type boolean qui va nous servir a determiner l'issu du cas 1 : "la ville concernee par le retrait n'est adjacente a aucune ville".
	 * Initialise a "true".
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private boolean cas1 = true;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner l'issu du cas 2 : "la ville concernee par le retrait n'est adjacente qu'a une seule ville".
	 * Initialise a "true".
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private boolean cas2 = true;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner l'issu du cas 3 : "la ville concernee par le retrait n'est adjacente qu'à des villes sans ecole".
	 * Initialise a "true".
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private boolean cas3 = true;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner si le retrait de l'ecole de la ville concernee est possible.
	 * Initialise a "false".
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private boolean retirerEcole = false;
	
	/**
	 * Attribut de type int qui va nous servir a compter le nombre de villes adjacentes a la ville concernee par le retrait.
	 * Initialise a "0".
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private int compte = 0;

	/**
	 * <p>Tableau de type boolean de taille egale au nombre de villes et qui permet de determiner si une ville adjacente a acces ou non a une ecole via une autre ville. Initialise a "true" dans chacune des cases.</p>
	 * <ul><li>"true" : Contient une ecole.</li>
	 * 	   <li>"false" : Ne contient pas d'ecole.</li>
	 * </ul>
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private boolean[] villeSansAcces;
	
	/**
	 * <p>Tableau de type String de taille egale au nombre de villes entre par l'utilisateur et qui comporte les noms des villes entres par l'utilisateur.</p>
	 * <ul><li>Le premier nom de la ville correspond a l'indice 0 et ainsi de suite.</li></ul>
	 * <p>Cet attribut sert a :</p>
	 * <ul><li>Verifier que le contenu de l'attribut "nomVille" correspond au nom d'une des villes du tableau.</li>
	 * 	   <li>Afficher le nom d'une ville.</li>
	 * </ul>
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private String[] nomDesVilles;
	
	/**
	 * <p>Tableau de type String de taille egale au nombre de villes entre par l'utilisateur et qui comporte "E" ou "P" dans chacune de ses cases.</p>
	 * <ul><li>"E" : Contient une ecole.</li>
	 * 	   <li>"P" : Ne contient pas d'ecole.</li>
	 *	   <li>L'indice 0 correspond a la situation de la premiere ville du tableau "nomDesVilles" et ainsi de suite.</li>
	 * </ul>
	 * <p>Cet attribut sert a :</p>
	 * <ul><li>Verifier qu'une ville du tableau "nomDesVilles" contient une ecole.</li>
	 * </ul> 
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private String[] ecoles;
	
	/** 
	 * <p>Tableau 2D de type boolean qui represente la matrice d'adjacence des villes de l'agglomeration de taille egale au nombre de villes en ligne et en colonne.</p>
	 * <ul><li>En ligne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.</li>
	 * 	   <li>En colonne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.</li>
	 * </ul>
	 * <p>Cet attribut sert a :</p>
	 * <ul><li> Determiner si deux villes sont adjacentes.</li>
	 * </ul>
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	private boolean[][] matriceAdjacence;

	/**
	 * <p>Sert a declarer et initialiser les attributs "nomDesVilles", "matriceAdjacence" et "ecoles" de la classe.</p>
	 * @param nomDesVilles : Tableau de type String qui va nous servir a verifier qu'une ville existe, determiner les villes adjacentes d'une ville et d'afficher les noms d'une ville.
	 * @param ecoles : Tableau de type String qui va nous servir a determiner si une ville du tableau "nomDesVilles" contient une ecole.
	 * @param matriceAdjacence : Tableau 2D de type boolean qui va nous servir a determiner si deux villes du tableau "nomDesVilles" sont adjacentes.
	 */
	public SuppressionEcoles(String[] nomDesVilles, String[] ecoles, boolean[][] matriceAdjacence) {
		
		this.nomDesVilles = nomDesVilles;
		this.ecoles = ecoles;
		this.matriceAdjacence = matriceAdjacence;		
	}
	
	/**
	 * <ul> <li> Demande a l'utilisateur le nom de la ville dans laquelle il souhaite retirer une ecole.<br></li> 
	 * <li> Redemande a l'utilisateur d'entrer un nom correct s'il entre le nom d'une ville qui n'est pas dans le tableau "nomDesVilles".<br></li>
	 * <li> Verifie si le retrait de l'ecole d'une ville est possible.<br></li>
	 * <li> Affiche un message si la ville ne possede pas d'ecole.<br></li>
	 * <li> Affiche un message si aucune ville ne possede d'ecole.<br></li>
	 * <li> Affiche le Menu2 si la ville ne possede pas d'ecole ou si aucune ville ne possede d'ecole.<br></li>
	 * <li> Retire l'ecole d'une ville si c'est possible et modifie le contenu du tableau "ecoles" en conséquence.<br></li>
	 * <li> En cas de non-retrait : affiche un message indiquant que l'ecole de la ville concernee ne peut pas etre supprimee ainsi que la liste des villes qui ne pourront pas avoir acces a une ecole.<br></li>
	 * <li> Affiche la liste des villes dans lesquelles il y a une ecole.<br></li>
	 * <li> Appelle la methode "creeMenu2()" de la classe "Menu2" pour afficher le deuxieme menu et redemander à l'utilisateur de faire un nouveau choix parmi les options proposees.<br></li> 
	 * </ul>
	 * <p> Cette methode ne prend pas de parametres.</p>
	 */
	public void supprimerEcoles() {
		
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
			
			System.out.println("\nDans quelle ville souhaitez-vous retirer une ecole ? : ");
			nomVille = nV.nextLine(); // On affecte la chaine de caracteres entree par l'utilisateur dans String "nomVille"
			nomVille = nomVille.replaceFirst("^ *", ""); // Enleve tous les espaces avant le premier caractere qui n'est pas un espace
			nomVille = nomVille.trim().replaceAll(" +", " "); // Enleve les espaces en trop entre deux mots
			nomVille = nomVille.replaceAll("\\s+$", ""); // Enleve tous les espaces avant le dernier caractere qui n'est pas un espace
				
			for (int i=0; i<nomDesVilles.length; i++) {
				if  (Arrays.asList(nomDesVilles[i]).contains(nomVille)) { // On verifie que le nom de la ville entree par l'utilisateur existe parmi les villes de l'agglomeration contenues dans le tableau "nomDesVilles"
					villeExistante = true; 
					indexVille = i; // On récupère l'indice de la ville concernee par le retrait
				}	
			}
				
			if  (Boolean.FALSE.equals(villeExistante)) { // Si la ville n'existe pas alors...
				System.out.println("\nLe nom de la ville ne figure pas dans la liste.");
			}
				
		} while (Boolean.FALSE.equals(villeExistante));
			
		// VERIFICATION 1 : La ville ne possede pas d'ecole.	
			
		for (int i=0; i<ecoles.length; i++) {
			if ( (Arrays.asList(ecoles[indexVille]).contains("P")) ) { // On verifie s'il n'y a pas d'ecole dans la ville concernee par le retrait a l'indice correspondant dans le tableau "ecoles".
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
			System.out.println("\nAucune ville ne possede d'ecoles. Retour au menu.");
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
					System.out.println("\nRetrait impossible. La ville '"+nomDesVilles[indexVille]+"' n'est reliee qu'a des villes qui n'ont pas d'ecole et n'aura donc pas acces a une ecole.");
				}
			}
			
			// FIN CAS 3.		
					
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
				for (int i=0; i<nomDesVilles.length; i++) {
					if (Boolean.FALSE.equals(villeSansAcces[i])) {
						System.out.println("\nRetrait impossible.");
						retirerEcole = false;
						break;
					}
				}					
			}		
		}  
		
		if (Boolean.TRUE.equals(retirerEcole)) { // Si apres avoir fait toutes les verifications sur les villes adjacentes, le retrait est possible	
			System.out.println("\nRetrait valide.");
			ecoles[indexVille] = "P"; // Alors on affecte "P" a l'indice correspondant a la ville concernee dans le tableau ecoles
		}
		
		if (Boolean.FALSE.equals(retirerEcole)) {
			for (int n=0; n<villeSansAcces.length; n++) { // Boucle pour afficher les noms des villes adjacentes a la ville concernee qui n'ont pas d'acces a une ecole via une autre ville adjacente
				if  (Boolean.FALSE.equals(villeSansAcces[n])) { 
					System.out.println("La ville '"+nomDesVilles[n]+"' n'a pas acces a une ecole via une autre ville adjacente.");						
				}
			}
		}
			
		System.out.println("\nListe des villes ou se trouvent une ecole : ");
		
		for (int m=0; m<ecoles.length; m++) { 
			if (ecoles[m].contains("E")) { // Si la ville a l'indice m correspondante contient une ecole alors on l'affiche
				System.out.print(""+nomDesVilles[m]+" ");
			}	
		}
		
		System.out.println("\n");
		Menu2 m2 = new Menu2(nomDesVilles, ecoles, matriceAdjacence); // On retourne dans le Menu2 apres la procedure de retrait ou de non-retrait
    	m2.creerMenu2();
	}
}