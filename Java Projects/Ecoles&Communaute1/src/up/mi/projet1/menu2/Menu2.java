package up.mi.projet1.menu2;
import java.util.Scanner;

/**
 * Classe qui va permettre d'afficher un deuxieme menu avec trois options : <br>
 * <ol> <li> Option n1 : Ajouter une ecole dans une ville.</li>
 * <li> Option n2 : Retirer l'ecole d'une ville.</li>
 * <li> Option n3 : Quitter le programme.</li>
 * </ol>
 * @author mac
 */
public class Menu2 { 
	
	/**
	 * Attribut de type int qui stock une valeur numerique entree par l'utilisateur.
	 * @see Menu2#creerMenu2
	 */	
	int choix;
	
	/**
	 *Objet de type Scanner qui scanne la valeur entree par l'utilisateur.
	 *<ul><li>Permettra de verifier que l'utilisateur entre une valeur de type int.</li>
	 *<li>Associe a "choix".</li>
	 *</ul>
	 * @see Menu2#creerMenu2
	 */	
	private Scanner c;
	
	/**
	 * <p>Tableau de type String de taille egale au nombre de villes entre par l'utilisateur et qui comporte les noms des villes entres par l'utilisateur.</p>
	 * <ul><li>Le premier nom de la ville correspond a l'indice 0 et ainsi de suite.</li>
	 * </ul>
	 * @see Menu2#Menu2(String[], String[], boolean[][])
	 */
	private String[] nomDesVilles;
	
	/**
	 * <p>Tableau de type String de taille egale au nombre de villes entre par l'utilisateur et qui comportera "E" ou "P" dans chacune de ses cases.</p>
	 * <ul><li>"E" : Contient une ecole.</li>
	 * 	   <li>"P" : Ne contient pas d'ecole.</li>
	 * 	   <li>L'indice 0 correspond a la situation de la premiere ville du tableau "nomDesVilles" et ainsi de suite.</li>
	 * </ul> 
	 * @see Menu2#Menu2(String[], String[], boolean[][])
	 */
	private String[] ecoles;
	
	/**
	 * <p>Tableau 2D de type boolean qui represente la matrice d'adjacence des villes de l'agglomeration de taille egale au nombre de villes en ligne et en colonne.</p>
	 * <ul><li>En ligne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.</li>
	 * 	   <li>En colonne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.</li>
	 * </ul>
	 * @see Menu2#Menu2(String[], String[], boolean[][])
	 */
	private boolean[][] matriceAdjacence;

	/**
	 *<p>Sert a declarer et initialiser les attributs "nomDesVilles", "matriceAdjacence" et "ecoles" de la classe.</p>
	 * @param nomDesVilles : Tableau de type String contenant les noms des villes de l'agglomeration.
	 * @param ecoles : Tableau de String qui va nous servir a determiner la possibilite d'ajouter ou de retirer une ecole d'une ville du tableau "nomDesVilles".
	 * @param matriceAdjacence : Tableau 2D de type boolean qui represente la matrice d'adjacence de l'agglomeration.
	 */
	public Menu2(String[] nomDesVilles, String[] ecoles, boolean[][] matriceAdjacence) {
		
		this.nomDesVilles=nomDesVilles;
		this.ecoles=ecoles;
		this.matriceAdjacence=matriceAdjacence;
	}
		
	/**
	 * <ul><li>Cree et Affiche le deuxieme menu.<br></li>
	 * <li> Demande a l'utilisateur d'entrer son choix parmi les options proposees.<br></li>
	 * <li> Appelle la methode "ajouterEcoles()" de la classe "AjoutEcoles" si l'utilisateur entre la valeur "1".<br></li>
	 * <li> Appelle la methode "suppressionEcoles()" de la classe "SuppressionEcoles" si l'utilisateur entre la valeur "2".<br></li>
	 * <li> Quittele programme si l'utilisateur entre la valeur "3".<br></li>
	 * <li> Redemande a l'utilisateur d'entrer son choix s'il entre une valeur differente de "1", de "2" ou de "3".<br></li>
	 * </ul> 
	 * <p>Cette methode ne prend aucun parametre.</p>
	 * @see AjoutEcoles#ajouterEcoles()
	 * @see SuppressionEcoles#supprimerEcoles()
	 */
	public void creerMenu2() {
		
		do { // On entre dans une boucle tant que l'utilisateur n'a pas decide de quitter le menu
				
			System.out.println("\nAjouter une ecole (1)\nRetirer une ecole (2)\nQuitter le menu (3)\nChoisissez un champ : ");
		
			while (true) { // On entre dans une boucle infinie				
				c = new Scanner(System.in);	
				
				if (c.hasNextInt()) { // On verifie que la valeur entree par l'utilisateur est de type int				    	
					choix = c.nextInt(); // On stocke cette valeur dans un attribut
						    	
					if (choix == 1 || choix == 2 || choix == 3) { // Si cette valeur correspond a la valeur d'une des options proposees alors
						    	
						switch (choix) { // Suivant le choix fait
									        
							case (1):	System.out.println("\nChoix n"+choix+" valide. Etape 'Ajouter une ecole'."); // 1 - On appelle la classe "AjoutEcoles" pour ajouter une ecole dans une ville
								    					AjoutEcoles aE = new AjoutEcoles(nomDesVilles, ecoles, matriceAdjacence);
								    					aE.ajouterEcoles();
										                break; // On quitte la boucle infinie
										                     	
							case (2):	System.out.println("\nChoix n"+choix+" valide. Etape 'Retirer une ecole'."); // 2 - On appelle la classe "SuppressionEcoles" pour retirer une ecole dans une ville
										     			SuppressionEcoles sE = new SuppressionEcoles(nomDesVilles, ecoles, matriceAdjacence);
										     			sE.supprimerEcoles();
										            	break; // On quitte la boucle infinie
										              
							case (3):	System.out.println("\nChoix n"+choix+" valide. Fin du programme."); // 3 - On appelle la classe "SuppressionEcoles" pour retirer une ecole dans une ville
										                return; // Fin du programme
						}
					}
						    	
					else { // Si la valeur entree par l'utilisateur ne correspond pas a la valeur d'une des options proposees alors...
						System.out.println("Veuillez choisir une valeur valide. (1, 2 ou 3).");
						break; // On quitte la boucle infinie
					}
				} 
						    
				else { // Si la valeur entree par l'utilisateur ne correspond pas a une des options proposees alors...
					System.out.println("Veuillez choisir une valeur valide. (1,2 ou 3).");
					break; // On quitte la boucle infinie
				}
			}
		} while(choix!=3); 
	}
}