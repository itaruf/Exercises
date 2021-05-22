package construction;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.Scanner;

/**
 *<p>Classe qui va permettre d'afficher les deux menus du projet</p>
 *<ul><li> Le premier menu afficher a l'ecran permet d'aller dans le deuxieme menu, de choisir la recherche d'une solution automatique, de sauvegarder une solution trouvee ou de quitter le programme</li>
 *<li> Le deuxieme menu permet d'ajouter, de retirer soi-meme l'ecole d'une ville ou de retourner dans le premier menu</li>
 *</ul>
 * @author mac
 */
public class Menus {

	/**
	 * Attribut de type int qui stock une valeur numerique entree par l'utilisateur.
	 */
	private int choix;

	/**
	 *<p>Objet de type Scanner qui scanne la valeur entree par l'utilisateur.</p>
	 * <ul><li> Permettra de verifier que l'utilisateur entre une valeur de type int.</li>
	 * <li>Associe a "choix".</li>
	 * </ul> 
	 */	
	private Scanner c;

	/*
	 * Attribut de type File qui va nous permettre de lire le fichier pris en entree sur la ligne de commande decrivant la communaute
	 * */
	private File file;

	/*
	 * Tableau de type String qui contient la description des ecoles d'une ville avant l'application de l'algorithme
	 **/
	private String[] ecolesCopie;

	/*
	 * Tableau de type String qui contient la solution appliquee sur le tableau d'ecoles pris en entree
	 **/
	private String[] tabEcoles1;

	/*
	 * Tableau de type String qui contient la solution appliquee sur un tableau d'ecoles naif
	 **/
	private String[] tabEcoles2;
	
	/**
	 * <p>Sert a declarer et initialiser l'attribut "file" afin d'en recuperer les donnees.</p>
	 * @param file : Attribut de type File qui va nous permettre de lire le fichier pris en entree sur la ligne de commande decrivant la communaute
	 * @see Menus#file
	*/
	public Menus(File file) {
		
		this.file = file;
	}
	
	/**
	 * <ul><li> Affiche le menu de la premiere partie du projet.<br></li>
	 * <li> Appelle la methode "ajouterEcoles(nomDesVilles, ecoles)" de la classe "ConstructionCommu" si l'utilisateur entre la valeur "1".<br></li>
	 * <li> Appelle la methode "construireEcoles(nomDesVilles, ecoles,matriceAdjacence)" de la classe "ConstructionCommu" si l'utilisateur entre la valeur "2".<br></li>
	 * <li> Appelle la methode "creerMenuPartie2(nomDesVilles, matriceAdjacence,ecoles, routes)" de la classe "Menus" si l'utilisateur entre la valeur "3".<br></li>
	 * <li> Redemande a l'utilisateur d'entrer son choix s'il entre une valeur differente de "1", "2" ou "3".<br></li>
	 * </ul>
	 * @param nomDesVilles : Tableau de type String qui va nous servir a verifier qu'une ville existe, determiner les villes adjacentes d'une ville et d'afficher les noms d'une ville.
	 * @param ecoles : Tableau de type String qui va nous servir a determiner si une ville du tableau "nomDesVilles" contient une ecole.
	 * @param matriceAdjacence : Tableau 2D de type boolean qui represente la matrice d'adjacence de l'agglomeration.
	 * @param routes : tableau de Type String contenant les combinaisons de villes a relier par une route.
	 * @throws IOException : erreur.
	 * @see creerMenuPartie1#nomDesVilles
	 * @see creerMenuPartie1#ecoles
	 * @see creerMenuPartie1#matriceAdjacence
	 * @see creerMenuPartie1#routes
	*/	
	public void creerMenuPartie1(String[] nomDesVilles, String[] ecoles, boolean[][] matriceAdjacence, String[] routes) throws IOException {
		
		ConstructionCommu CC = new ConstructionCommu();
		CC.accederEcole(nomDesVilles, matriceAdjacence, ecoles);	
		do { // On entre dans une boucle tant que l'utilisateur n'a pas decide de quitter le menu						
			System.out.print("\nAjouter une ecole (1)\nRetirer une ecole (2)\nQuitter le menu - Retour au troisieme menu (3)\nChoisissez un champ : ");	
			c = new Scanner(System.in);	
			if (c.hasNextInt()) { // On verifie que la valeur entree par l'utilisateur est de type int				    	
				choix = c.nextInt(); // On stocke cette valeur dans un attribut				    	
				if (choix == 1 || choix == 2 || choix == 3) { // Si cette valeur correspond a la valeur d'une des options proposees alors    	
					switch (choix) { // Suivant le choix fait		        
						case (1):	System.out.println("\nChoix n"+choix+" valide. Etape 'Ajouter une ecole'."); 
									CC.ajouterEcoles(nomDesVilles, ecoles);
									break; // On quitte la boucle infinie			                     	
						case (2):	System.out.println("\nChoix n"+choix+" valide. Etape 'Retirer une ecole'."); 
									CC.supprimerEcoles(nomDesVilles, ecoles,matriceAdjacence);
									break; // On quitte la boucle infinie
						case (3):	System.out.println("\nChoix n"+choix+" valide. Retour au menu precedent.\n");
									creerMenuPartie2(nomDesVilles, matriceAdjacence,ecoles, routes);
									break;
					}
				}		    	
				else { // Si la valeur entree par l'utilisateur ne correspond pas a la valeur d'une des options proposees alors...
					System.out.println("\nVeuillez choisir une valeur valide. (1, 2 ou 3).");
				}
			} 	    
			else { // Si la valeur entree par l'utilisateur ne correspond pas a une des options proposees alors...
				System.out.println("\nVeuillez choisir une valeur valide. (1,2 ou 3).");
			}
		} while (choix!=3); 
	}
	
	/**
	 * <ul><li> Affiche le menu de la premiere partie du projet.<br></li>
	 * <li> Appelle la methode "existeEcoleDansFichier()" de la classe "LectureAPartirFichier" si l'utilisateur entre la valeur "1".<br></li>
	 * <li> Appelle la methode "appliquerSolutionNaive(ecoles)" de la classe "LectureAPartirFichier" si l'utilisateur entre la valeur "1".<br></li>
	 * <li> Appelle la methode "creerMenuPartie1(nomDesVilles, ecoles, matriceAdjacence, routes)" de la classe "Menus" si l'utilisateur entre la valeur "1".<br></li>
	 * <li> Appelle la methode "existeEcoleDansFichier()" de la classe "LectureAPartirFichier" si l'utilisateur entre la valeur "2".<br></li>
	 * <li> Appelle la methode "appliquerSolutionNaive(ecoles)" de la classe "LectureAPartirFichier" si l'utilisateur entre la valeur "2".<br></li>
	 * <li> Appelle la methode "creerAlgorithme(nomDesVilles, ecoles, matriceAdjacence)" de la classe "Algorithme" si l'utilisateur entre la valeur "2".<br></li>
	 * <li> Appelle la methode "comparerScore(tabEcoles1, tabEcoles2)" de la classe "Algorithme" si l'utilisateur entre la valeur "2".<br></li>
	 * <li> Appelle la methode "sauvegarder()" de la classe "Sauvegarder" si l'utilisateur entre la valeur "3".<br></li>
	 * <li> Quitte le programme si l'utilisateur entre la valeur "3".<br></li>
	 * <li> Redemande a l'utilisateur d'entrer son choix s'il entre une valeur differente de "1", "2", "3" ou "4".<br></li>
	 * </ul>
	 * @param nomDesVilles : Tableau de type String qui va nous servir a verifier qu'une ville existe, determiner les villes adjacentes d'une ville et d'afficher les noms d'une ville.
	 * @param ecoles : Tableau de type String qui va nous servir a determiner si une ville du tableau "nomDesVilles" contient une ecole.
	 * @param matriceAdjacence : Tableau 2D de type boolean qui represente sla matrice d'adjacence de l'agglomeration.
	 * @param routes : tableau de Type String contenant les combinaisons de villes a relier par une route.
	 * @throws IOException : erreur.
	 * @see creerMenuPartie2#nomDesVilles
	 * @see creerMenuPartie2#ecoles
	 * @see creerMenuPartie2#matriceAdjacence
	 * @see creerMenuPartie2#routes
	*/	
	public void creerMenuPartie2(String[] nomDesVilles, boolean[][] matriceAdjacence, String ecoles[], String[] routes) throws IOException { 
		
		LectureAPartirFichier LAPF = new LectureAPartirFichier(file);
		ConstructionCommu CC = new ConstructionCommu();
		do { // On entre dans une boucle tant que l'utilisateur n'a pas decide de quitter le menu	
			System.out.print("Resoudre manuellement (1)\nResoudre automatiquement (2)\nSauvegarder (3)\nQuitter le programme (4)\nChoisissez un champ : ");
			c = new Scanner(System.in);		
			if (c.hasNextInt()) { // On verifie que la valeur entree par l'utilisateur est de type int				    	
				choix = c.nextInt(); // On stocke cette valeur dans un attribut
				if (choix == 1 || choix == 2 || choix == 3 || choix == 4) { // Si cette valeur correspond a la valeur d'une des options proposees alors
					switch (choix) { // Suivant le choix fait
						case (1):	System.out.println("\nChoix n"+choix+" valide. Etape 'Resolution manuelle'.");
									if (Boolean.FALSE.equals(LAPF.existeEcoleDansFichier())) {
										System.out.println("Le fichier ne contient aucune ecole et ne respecte donc pas la contrainte d'accessibilite. On applique la solution naive.");		
										CC.appliquerSolutionNaive(ecoles);
									}
									else if (Boolean.FALSE.equals(CC.accederEcole(nomDesVilles, matriceAdjacence, ecoles))){
										System.out.println("Le fichier contient des ecoles mais ne respecte pas la contrainte d'accessibilite. On applique la solution naive.");
										CC.appliquerSolutionNaive(ecoles);
									}
									creerMenuPartie1(nomDesVilles, ecoles, matriceAdjacence, routes);
									break;
						case (2):	System.out.println("\nChoix n"+choix+" valide. Etape 'Resolution automatique'."); 							
									if (Boolean.FALSE.equals(LAPF.existeEcoleDansFichier())) {
										System.out.println("Le fichier ne contient aucune ecole et ne respecte donc pas la contrainte d'accessibilite. On applique la solution naive.");		
										CC.appliquerSolutionNaive(ecoles);
									}
									else if (Boolean.FALSE.equals(CC.accederEcole(nomDesVilles, matriceAdjacence, ecoles))){
										System.out.println("Le fichier contient des ecoles mais ne respecte pas la contrainte d'accessibilite. On applique la solution naive.");
										CC.appliquerSolutionNaive(ecoles);
									}
									ecolesCopie = Arrays.copyOf(ecoles, ecoles.length);	
									for (int i=0; i<ecolesCopie.length; i++) {
										ecolesCopie[i] = "E";
									}
									Algorithme A = new Algorithme(nomDesVilles);
									tabEcoles1 = Arrays.copyOf(A.creerAlgorithme(nomDesVilles, ecoles, matriceAdjacence),ecoles.length);
									tabEcoles2 = Arrays.copyOf(A.creerAlgorithme(nomDesVilles, ecolesCopie, matriceAdjacence),ecoles.length);	
									ecoles = A.comparerScore(tabEcoles1, tabEcoles2);
									break;
						case (3):	System.out.println("\nChoix n"+choix+" valide. Etape 'Sauvegarde'."); 
									Sauvegarde S = new Sauvegarde(); 
									S.sauvegarder(nomDesVilles, ecoles, matriceAdjacence, routes);
									break;
						case (4):	System.out.println("\nChoix n"+choix+" valide. Fin du programme.");
									System.exit(0); // Fin du programme
					}
				}
				else { // Si la valeur entree par l'utilisateur ne correspond pas a la valeur d'une des options proposees alors...
					System.out.println("\nVeuillez choisir une valeur valide. (1, 2, 3 ou 4).");
				}
			} 
			else { // Si la valeur entree par l'utilisateur ne correspond pas a une des options proposees alors...
				System.out.println("\nVeuillez choisir une valeur valide. (1, 2, 3 ou 4).");
			}
		} while (choix!=4); 
	}
}