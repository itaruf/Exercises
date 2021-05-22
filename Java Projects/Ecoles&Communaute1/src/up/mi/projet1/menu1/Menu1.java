package up.mi.projet1.menu1;
import java.util.Scanner;

import up.mi.projet1.menu2.Menu2;

/**
 * Classe qui va permettre d'afficher un premier menu avec deux options :<br>
 * <ol> <li> Option n1 : Ajouter une route entre deux villes.</li>
 * 		<li> Option n2 : Construire une ecole dans chacune des villes.</li>
 * </ol> 
 * @author mac
 *
 */
public class Menu1 {
		
	/**
	 * Attribut de type int qui stock une valeur numerique entree par l'utilisateur.
	 * @see Menu1#creerMenu1
	 */
	private int choix;

	/**
	 *<p>Objet de type Scanner qui scanne la valeur entree par l'utilisateur.</p>
	 * <ul><li> Permettra de verifier que l'utilisateur entre une valeur de type int.</li>
	 * <li>Associe a "choix".</li>
	 * </ul> 
	 * @see Menu1#creerMenu1
	 */	
	private Scanner c;

	/**
	 * <p>Tableau de type String de taille egale au nombre de villes entre par l'utilisateur et qui comporte les noms des villes entres par l'utilisateur.</p>
	 * <ul><li>Le premier nom de la ville correspond a l'indice 0 et ainsi de suite.</li>
	 * </ul>
	* @see Menu1#Menu1(String[], String[], boolean[][])
	*/
	private String[] nomDesVilles;

	/**
	 * <p>Tableau de type String de taille egale au nombre de villes entre par l'utilisateur et qui comportera "E" ou "P" dans chacune de ses cases.</p>
	 * <ul><li>"E" : Contient une ecole.</li>
	 * 	   <li>"P" : Ne contient pas d'ecole.</li>
	 * 	   <li>L'indice 0 correspond a la situation de la premiere ville du tableau "nomDesVilles" et ainsi de suite.</li>
	 * </ul> 
	 * @see Menu1#Menu1(String[], String[], boolean[][])
	*/
	private String[] ecoles;
	
	/**
	 * <p>Tableau 2D de type boolean qui represente la matrice d'adjacence des villes de l'agglomeration de taille egale au nombre de villes en ligne et en colonne.</p>
	 * <ul><li>En ligne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.</li>
	 * 	   <li>En colonne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.</li>
	 * </ul> 
	 * @see Menu1#Menu1(String[], String[], boolean[][])
	 */
	private boolean[][] matriceAdjacence;
	
	/**
	 * <p>Sert a declarer et initialiser les attributs "nomDesVilles", "matriceAdjacence" et "ecoles" de la classe.</p>
	 * @param nomDesVilles : Tableau de type String qui va nous servir a verifier qu'une ville existe, determiner les villes adjacentes d'une ville et d'afficher les noms d'une ville.
	 * @param ecoles : Tableau de type String qui va nous servir a determiner si une ville du tableau "nomDesVilles" contient une ecole.
	 * @param matriceAdjacence : Tableau 2D de type boolean qui represente la matrice d'adjacence de l'agglomeration.
	 * @see Menu1#nomDesVilles
	 * @see Menu1#ecoles
	 * @see Menu1#matriceAdjacence
	*/
	public Menu1(String[] nomDesVilles, String[] ecoles, boolean[][] matriceAdjacence) {
		
		this.nomDesVilles=nomDesVilles;
		this.ecoles=ecoles;
		this.matriceAdjacence=matriceAdjacence;
	}
			
	/**
	 * <ul><li>Cree et Affiche le premier menu.<br></li>
	 * <li> Demande a l'utilisateur d'entrer son choix parmi les options proposees.<br></li>
	 * <li> Appelle la methode "ajouterRoutes()" de la classe "AjoutRoutes" si l'utilisateur entre la valeur "1".<br></li>
	 * <li> Appelle la methode "construireEcoles()" de la classe "ConstructionEcoles" si l'utilisateur entre la valeur "2".<br></li>
	 * <li> Appelle la methode "creerMenu2()" de la classe "Menu2" si l'utilisateur entre la valeur "2".<br></li>
	 * <li> Redemande a l'utilisateur d'entrer son choix s'il entre une valeur differente de "1" ou de "2".<br></li>
	 * </ul> 
	 * <p>Cette methode ne prend aucun parametre.</p>
	 * @see AjoutRoutes#ajouterRoutes()
	 * @see ConstructionEcoles#construireEcoles()
	 * @see Menu2#creerMenu2()
	 */
	public void creerMenu1() { 
		
		do { // On entre dans une boucle tant que l'utilisateur n'a pas decide de quitter le menu
			
			System.out.println("\nAjouter une route (1)\nQuitter le menu (2)\nChoisissez un champ : ");
					
			while (true) {	// On entre dans une boucle infinie		
				
				c = new Scanner(System.in);
				
			    if (c.hasNextInt()) { // On verifie que la valeur entree par l'utilisateur est de type int				    	
			    	choix = c.nextInt(); // On stocke cette valeur dans un attribut
			    	
			    	if (choix == 1 || choix == 2) { // Si cette valeur correspond a la valeur d'une des options proposees alors
			    		
					    switch (choix) { // Suivant le choix fait
					        
					     case (1):	System.out.println("\nChoix n"+choix+" valide. Etape 'Ajouter une route'."); // 1 - On appelle la classe "AjoutRoutes" pour ajouter une route entre deux villes
					     			AjoutRoutes aR = new AjoutRoutes(nomDesVilles, matriceAdjacence);	
					     			aR.ajouterRoutes();
					                break; // On quitte la boucle infinie
					                     	
					     case (2):	System.out.println("\nChoix n"+choix+" valide. Representation de l'agglomeration terminee."); // 2 - On appelle la classe "ConstructionEcoles" pour initialiser le tableau "ecoles"
					     			ConstructionEcoles cE = new ConstructionEcoles(ecoles);
					     			cE.construireEcoles();
					            	Menu2 m2 = new Menu2(nomDesVilles, ecoles, matriceAdjacence); // 2 - On appelle la classe "Menu2" pour afficher le deuxieme menu
					            	m2.creerMenu2();
					                break;	// On quitte la boucle infinie	           
					      }
					}
			    	
			    	else { // Si la valeur entree par l'utilisateur ne correspond pas a la valeur d'une des options proposees alors...
						System.out.println("Veuillez choisir une valeur valide. (1 ou 2)."); 
						break; // On quitte la boucle infinie
					}
			    } 
			    
			   else { // Si la valeur entree par l'utilisateur ne correspond pas a une des options proposees alors...
					System.out.println("Veuillez choisir une valeur valide. (1 ou 2).");
					break;	
				}
			}
		} while(choix!=2);
	}
}