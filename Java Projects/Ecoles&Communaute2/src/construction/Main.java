package construction;
import java.io.*;

/**
 *<p>Classe de demarrage de l'application.</p>
 *<ul><li> Permet de lire le fichier pris en entree sur la ligne de commande et d'en extraire les donnees pour la construction de la communaute
 *</ul>
 *@author mac
 */
public class Main {
	
	/**
	 * Attribut de type int qui va nous servir a stocker le nombre de villes entre par l'utilisateur.
	 */
	static int nombreDeVilles;
	
	/*
	 * Tableau de type String qui va permettre de stocker les combinaisons de villes a relier par une routes lues dans le fichier decrivant la communaute.
	 * */
	static String[] routes;
	
	/*
	 * Attribut de type int qui va permettre de terminer le nombre de routes lu dans le fichier decrivant la communaute.
	 * */
	static int nombreDeRoutes;
	
	/*
	 * Tableau de type String qui va permettre de stocker les noms des villes lues dans le fichier decrivant la communaute.
	 * */
	static String[] nomDesVilles;
	
	/**
	 * Tableau de type String qui va contenir la premiere ville lue dans une meme combinaison de villes a relier par une route.
	 */
	static String[] tabRoutes;
	
	/**
	 * Tableau de type String qui va contenir la deuxieme ville lue dans une meme combinaison de villes a relier par une route.
	 */
	static String[] tabRoutes2;
	
	/**
	 * <p>Tableau de type String de taille egale au nombre de villes entre par l'utilisateur et qui comportera "E" ou "P" dans chacune de ses cases.</p>
	 * <ul><li>"E" : Contient une ecole.
	 * 	   <li>"P" : Ne contient pas d'ecole.
	 * 	   <li>L'indice 0 correspond a la situation de la premiere ville du tableau "nomDesVilles" et ainsi de suite.
	 * </ul> 
	 */
	static String[] ecoles;
	
	/**
	 * <p>Tableau de type String tampon qui nous servira a remplir le tableau ecoles</p>
	 */
	static String[] tabEcoles;
	
	/**
	 * <p>Tableau 2D de type boolean qui represente la matrice d'adjacence des villes de l'agglomeration de taille egale au nombre de villes en ligne et en colonne.</p>
	 * <ul><li>En ligne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.
	 * 	   <li>En colonne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.
	 * </ul>
	 */
	static boolean[][] matriceAdjacence;
	
	/**
	 * <ul> <li>Recupere le nombre de villes contenu dans le fichier.<br></li>
	 * <li> Cree un tableau "ecoles" qui permettra de determiner l'emplacement des ecoles dans l'agglomeration.<br></li>
	 * <li> Cree la matrice d'adjacence de l'agglomeration.<br></li>
	 * <li> Cree le tableau "tabEcoles" tampon.<br></li>
	 * <li> Cree le tableau "routes" qui contiendra les combinaisons de villes a relier par une route.<br></li>
	 * <li> Cree les tableaux "tabRoutes" et "tabRoutes2" qui va separer les donnees liees a ces combinaisons.<br></li>
	 * <li> Apelle la methode "recupererNombreDeVilles()" de la classe "LectureAPartirFichier" pour initialiser la matrice d'adjacence.<br></li>
	 * <li> Apelle la methode "recupererNombreDeRoutes()" de la classe "LectureAPartirFichier" pour initialiser la matrice d'adjacence.<br></li>
	 * <li> Apelle la methode "recupererNomDesVilles(nomDesVilles)" de la classe "LectureAPartirFichier" pour initialiser la matrice d'adjacence.<br></li>
	 * <li> Apelle la methode "recupererRoutes1(routes)" de la classe "LectureAPartirFichier" pour initialiser la matrice d'adjacence.<br></li>
	 * <li> Apelle la methode "recupererEcoles(tabEcoles)" de la classe "LectureAPartirFichier" pour initialiser la matrice d'adjacence.<br></li>
	 * <li> Apelle la methode "recupererRoutes2(tabRoutes)" de la classe "LectureAPartirFichier" pour initialiser la matrice d'adjacence.<br></li>
	 * <li> Apelle la methode "recupererRoutes3(tabRoutes2)" de la classe "LectureAPartirFichier" pour initialiser la matrice d'adjacence.<br></li>
	 * <li> Enregistre les noms des villes de l'agglomeration dans le tableau "nomDesVilles".<br></li>
	 * <li> Affiche les noms des villes contenus dans le tableau "nomDesVilles".<br></li>
	 * <li> Apelle la methode "initialiserMatrice" de la classe "ConstructionCommu" pour remplir la matrice d'adjacence avec ces combinaisons.<br></li>
	 * <li> Apelle la methode "ajouterRoutes" de la classe "ConstructionCommu" pour initialiser la matrice d'adjacence.<br></li>
	 * <li> Appelle la methode "creeMenuPartie2" de la classe "Menus" pour afficher le menu de la partie 2.<br></li>
	 * </ul>
	 * @param args : Arguments de la methode main.
	 * @throws IOException : erreur.
	 * @throws FileNotFoundException : erreur.
	 */
	public static void main(String[] args) throws FileNotFoundException, IOException {
		
		File file = new File(args[0]); // On stock le chemin vers le fichier pris en entree sur la ligne de commande
		System.out.println("Projet : Construction d'ecoles partie 2");
		System.out.println("Auteurs : ARBOUCHE Soumaya 51807322, TARUF Imane 51807791 et ARBOUCHE Anas 51607802.\n");
		//File file = new File("C:\\Users\\admin\\eclipse-workspace\\ProjetPartie2\\src\\communaute");
		LectureAPartirFichier LAPF = new LectureAPartirFichier(file);		
		nombreDeVilles = LAPF.recupererNombreDeVilles();
		nombreDeRoutes = LAPF.recupererNombreDeRoutes();	
		nomDesVilles = new String[nombreDeVilles];
		tabEcoles = new String[nombreDeVilles];
		ecoles = new String[nombreDeVilles];
		tabRoutes = new String[nombreDeRoutes];
		tabRoutes2 = new String[nombreDeRoutes];
		routes = new String[nombreDeRoutes];
		matriceAdjacence = new boolean[nombreDeVilles][nombreDeVilles]; 		
		for (int k=0; k<tabEcoles.length; k++) {
			tabEcoles[k] = "";
			ecoles[k] = "P";
		}	
		for (int k=0; k<tabRoutes.length; k++) {
			tabRoutes[k] = "";
			tabRoutes2[k] = "";
		}
		nomDesVilles = LAPF.recupererNomDesVilles(nomDesVilles);	
		routes = LAPF.recupererRoutes1(routes);
		tabEcoles = LAPF.recupererEcoles(tabEcoles);		
		tabRoutes = LAPF.recupererRoutes2(tabRoutes);
		tabRoutes2 = LAPF.recupererRoutes3(tabRoutes2);		
		for (int k=0; k<nomDesVilles.length; k++) {
			for (int l=0; l<nomDesVilles.length; l++) {
				if (nomDesVilles[k].matches(tabEcoles[l])) {
					ecoles[k] = "E";
					break;
				}	
			}
		}
		ConstructionCommu CC = new ConstructionCommu();
		CC.initialiserMatrice(nombreDeVilles, matriceAdjacence);
		CC.ajouterRoutes(nomDesVilles, matriceAdjacence, tabRoutes, tabRoutes2);		
		Menus M = new Menus(file);
		M.creerMenuPartie2(nomDesVilles, matriceAdjacence, ecoles, routes);
	}
}