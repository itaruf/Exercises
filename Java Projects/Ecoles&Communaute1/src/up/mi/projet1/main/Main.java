package up.mi.projet1.main;
import java.util.Scanner;
import up.mi.projet1.graphe.Graphe;
import up.mi.projet1.menu1.Menu1;
import java.util.Arrays;

/**
 *  <p>Classe de demarrage de l'application.</p>
 *  <ul><li> Permet de demander a l'utilisateur le nombre de villes d'une communaute d'agglomeration ainsi que les noms de chacune de ces villes.
 *  </ul>
 * @author mac
 */

public class Main {
	
	/**
	 * Attribut de type int qui va nous servir a stocker le nombre de villes entre par l'utilisateur.
	 * @see Main#main
	 */
	static int nombreDeVilles;
		
	/**
	 * Attribut de type int qui va nous servir a stocker le nombre d'ecoles maximum de l'agglomeration.
	 * @see Main#main
	 */
	static int nbEcolesMax;
	
	/**
	 * <p>Tableau de type String de taille egale au nombre de villes entre par l'utilisateur et qui comportera les noms des villes entres par l'utilisateur.</p>
	 * <ul><li>Le premier nom de la ville correspond a l'indice 0 et ainsi de suite.
	 * </ul>
	 * @see Main#main
	 */
	static String[] nomDesVilles;
	
	/**
	 * <p>Tableau de type String de taille egale au nombre de villes entre par l'utilisateur et qui comportera "E" ou "P" dans chacune de ses cases.</p>
	 * <ul><li>"E" : Contient une ecole.
	 * 	   <li>"P" : Ne contient pas d'ecole.
	 * 	   <li>L'indice 0 correspond a la situation de la premiere ville du tableau "nomDesVilles" et ainsi de suite.
	 * </ul> 
	 * @see Main#main
	 */
	static String[] ecoles;
	
	/**
	 * <p>Tableau 2D de type boolean qui represente la matrice d'adjacence des villes de l'agglomeration de taille egale au nombre de villes en ligne et en colonne.</p>
	 * <ul><li>En ligne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.
	 * 	   <li>En colonne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.
	 * </ul>
	 * @see Main#main
	 */
	static boolean[][] matriceAdjacence;
	
	/**
	 * <p>Attribut de type boolean qui permet de controler si le nombre de villes entre correspond aux criteres demandes</p>
	 * <ul><li>Initialise a "false".
	 * </ul>
	 * @see Main#main
	 */
	static boolean estValide;
	
	/**
	 * <p>Objet de type Scanner qui scanne la valeur entree par l'utilisateur.</p>
	 * <ul><li> Permettra de verifier que l'utilisateur entre une valeur de type int.
	 * </ul> Associe a "nombreDeVilles".
	 * @see up.mi.projet1.menu1.AjoutRoutes#ajouterRoutes()
	 */	
	static Scanner nbVilles;
	
	/**
	 * <p>Objet de type Scanner qui scanne la valeur entree par l'utilisateur.</p>
	 * <ul><li> Permettra de verifier que l'utilisateur entre une valeur de type String.</li>
	 * <li> Associe a "nomDesVilles".</li>
	 * </ul>
	 * @see up.mi.projet1.menu1.AjoutRoutes#ajouterRoutes()
	 */	
	static Scanner nomVille;
	
	/**
	 * <ul> <li> Demande a l'utilisateur d'entrer le nombre de villes de l'agglomeration.<br></li>
	 * <li> Redemande a l'utilisateur d'entrer ce nombre s'il ne correspond pas aux criteres demandes.<br></li>
	 * <li> Cree un tableau "ecoles" qui permettra de determiner l'emplacement des ecoles dans l'agglomeration.<br></li>
	 * <li> Cree la matrice d'adjacence de l'agglomeration.<br></li>
	 * <li> Apelle la methode "initialiserMatrice()" de la classe "Graphe" pour remplir la matrice d'adjacence.<br></li>
	 * <li> Demande a l'utilisateur d'entrer les noms des villes de l'agglomeration.<br></li>
	 * <li> Enregistre les noms des villes de l'agglomeration dans le tableau "nomDesVilles".<br></li>
	 * <li> Affiche les noms des villes contenus dans le tableau "nomDesVilles".<br></li>
	 * <li> Appelle la methode "creeMenu1()" de la classe "Menu1" pour afficher le premier menu.<br></li>
	 * </ul>
	 * @see Graphe#initialiserMatrice()
	 * @see Menu1#creerMenu1()
	 * @param args : Arguments de la methode main.
	 */
	public static void main (String[] args) {
		
		System.out.println("Projet : Construction d'ecoles partie 1");
		System.out.println("Auteurs : ARBOUCHE Soumaya 51807322, TARUF Imane 51807791 et ARBOUCHE Anas 51607802.\n");
			 
		do { // On entre dans une boucle tant que l'utilisateur n'a pas entre de valeur conforme
			
			while (true) { // On entre dans une boucle infinie	
				
				System.out.println("Entrez le nombre de villes : ");
				nbVilles = new Scanner(System.in);		
				
			    if (nbVilles.hasNextInt()) { // On verifie que la valeur entree par l'utilisateur est de type int
			    	nombreDeVilles = nbVilles.nextInt(); // On stocke cette valeur dans un attribut
			    	estValide = true; 
			    	break; // On quitte la boucle infinie
			    }
			    
			    else { // Si la valeur entree par l'utilisateur n'est pas un int alors...
			    	System.out.println("\nVeuillez entrer un entier superieur a 1.");
			    }
			}
			
		    if (nombreDeVilles <= 1) { // Si la valeur entree par l'utilisateur est inferieure ou egale a 1 alors...
				System.out.println("\nVeuillez entrer un entier superieur a 1.");
			}
			
		} while (nombreDeVilles <= 1 || Boolean.FALSE.equals(estValide));
		
		System.out.println("\nLe nombre de villes est : "+nombreDeVilles); 

		nbEcolesMax = nombreDeVilles; // Le nombre d'ecoles maximum contenu dans une agglomeration est egal au nombre de villes dans cette agglomeration
		ecoles = new String[nbEcolesMax]; // On cree un tableau "ecoles" de taille egale au nombre d'ecoles maximum
		
		matriceAdjacence = new boolean[nombreDeVilles][nombreDeVilles]; // On cree une matrice d'adjacence qui est un tableau 2D de taille egale au nombre de villes en ligne et nombre de villes en colonne
		Graphe g = new Graphe(nombreDeVilles, matriceAdjacence); // On appelle la classe "Graphe" pour initialiser cette matrice
		g.initialiserMatrice();
			 
		nomDesVilles = new String[nombreDeVilles]; // On cree un tableau "nomDesVilles" de taille egale au nombre de villes entre par l'utilisateur
		
		System.out.println("\nNommer les villes\n");
		nomVille = new Scanner(System.in);
		
		for (int i=0; i<nombreDeVilles; i++) {	// On entre dans une boucle pour nommer chaque ville
				
			do {
					
				estValide = true;
				System.out.println("Nom de la ville n"+(i+1)+" : ");
				nomDesVilles[i] = nomVille.nextLine(); // On enregistre l'entree utilisateur a l'indice i du tableau "nomDesVilles"	
				nomDesVilles[i] = nomDesVilles[i].replaceFirst("^ *", ""); // Enleve tous les espaces avant le premier caractere qui n'est pas un espace
				nomDesVilles[i] = nomDesVilles[i].trim().replaceAll(" +", " "); // Enleve les espaces en trop entre deux mots
				nomDesVilles[i] = nomDesVilles[i].replaceAll("\\s+$", ""); // Enleve tous les espaces avant le dernier caractere qui n'est pas un espace
					
				if (nomDesVilles[i].trim().isEmpty() ) {
					System.out.println("\nVeuillez ne pas entrer de champ vide.");
					estValide = false;
				}
				
				for (int j=0; j<nombreDeVilles; j++) { // On entre dans une boucle pour vérifier que le nom entre n'existe pas déjà
					if  (Arrays.asList(nomDesVilles[j]).contains(nomDesVilles[i]) && j!=i) {
						System.out.println("\nVeuillez ne pas entrer deux fois le nom d'un même ville.\n");
						estValide = false;
						break;
					}
				}
			} while (Boolean.FALSE.equals(estValide));
		}
		
		System.out.println("\nListe des villes :");
		System.out.println(Arrays.toString(nomDesVilles)); // On affiche tous les noms des villes contenus dans le tableau "nomDesVilles"

	 	Menu1 m1 = new Menu1(nomDesVilles, ecoles, matriceAdjacence);  // On appelle la classe Menu1 pour afficher le premier menu
	 	m1.creerMenu1();
	}
}