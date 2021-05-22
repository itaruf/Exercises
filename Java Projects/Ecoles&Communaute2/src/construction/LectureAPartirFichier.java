package construction;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.LineNumberReader;

/**
 * <p>Classe qui va permettre de lire les donnees contenues dans un fichier pris en entree sur la ligne de commande.</p>
 * <ul><li> Cette classe extrait ces donnees pour les affectees a des attributs pour le bon fonctionnement de la suite du programme</li>
 * </ul>
 * @author mac
 */
public class LectureAPartirFichier {

	/*
	 * Attribut de type File qui va nous permettre de lire le fichier pris en entree sur la ligne de commande decrivant la communaute
	 * */
	private File file;

	/**
	 * <p>Sert a declarer et initialiser l'attribut "file" afin d'en recuperer les donnees.</p>
	 * @param file : Attribut de type File qui va nous permettre de lire le fichier pris en entree sur la ligne de commande decrivant la communaute
	 */
	public LectureAPartirFichier (File file) {
		
		this.file = file;
	}

	/**
	 * <ul> <li> Ouvre le fichier pris en entree et le lit<br></li> 
	 * <li> Recupere le nombre de villes specifiees dans le fichier.<br></li> 
	 * <li> Verifie si le retrait de l'ecole d'une ville est possible.<br></li>
	 * </ul>
	 * <p> Cette methode ne prend pas de parametre.</p>
	 * @return le nombre de villes
	 * @throws IOException : erreur.
	 * @throws FileNotFoundException : erreur3.
	 */
	public int recupererNombreDeVilles() throws FileNotFoundException, IOException {
		
		int nombreDeVilles = 0;
		String line;
		try (LineNumberReader r = new LineNumberReader(new FileReader(file))) {	
			while ((line = r.readLine()) != null) {
				for (String element : line.split(" ")) {
					if (element.contains("ville")) {		
						nombreDeVilles++;
					}
				}
			}	
		}
		return(nombreDeVilles);		
	}
	
	/**
	 * <ul> <li> Ouvre le fichier pris en entree et le lit<br></li> 
	 * <li> Recupere le nombre de villes specifiees dans le fichier.<br></li> 
	 * <li> Verifie si le retrait de l'ecole d'une ville est possible.<br></li>
	 * </ul>
	 * @param nomDesVilles : Tableau de type String qui va contenir une ville lue dans le fichier dans une case jusqu'a ce qu'elle soit toute lue.
	 * @return un tableau contenant le nom des villes
	 * @throws IOException : erreur.
	 * @throws FileNotFoundException : erreur3.
	 */
	public String[] recupererNomDesVilles(String[] nomDesVilles) throws FileNotFoundException, IOException {
		
		String line;
		int i = 0;
		try (LineNumberReader r1 = new LineNumberReader(new FileReader(file))) { // Lecture du fichier a la recherche des noms des villes specifiees    
			while ((line = r1.readLine()) != null) {
				for (String element : line.split(" ")) {
					if (element.contains("ville")) {
						line = line.replaceAll(".*\\(", "");	
						line = line.replaceAll("\\).*", "");	
						nomDesVilles[i] = line; // Ces noms sont stockes dans un tableau de String dedie
						i++;
					}
				}
			}
		}		
		return(nomDesVilles);	
	}
	
	/**
	 * <ul> <li> Ouvre le fichier pris en entree et le lit<br></li> 
	 * <li> Indique s'il existe au moins une ecole dans le fichier.<br></li> 
	 * </ul>
	 * @return un booleen "false" s'il n'y aucune ecole lue, "true" si au moins une existe
	 * @throws IOException : erreur.
	 * @throws FileNotFoundException : erreur3.
	 */
	public boolean existeEcoleDansFichier() throws FileNotFoundException, IOException{
		
		boolean x = false; // S'il n'existe aucune ecole dans le fichier, alors on retournera "false"
		String line;
		try (LineNumberReader r1 = new LineNumberReader(new FileReader(file))) { // Lecture du fichier a la recherche des villes ou se trouvent une ecole
			while ((line = r1.readLine()) != null) {
				for (String element : line.split(" ")) {
					if (element.contains("ecole")) {
						x = true; // S'il existe au moins une ecole dans le fichier, on quitte
						break;
					}
				}
			}
		}
		return(x);
	}
	
	/**
	 * <ul> <li> Ouvre le fichier pris en entree et le lit<br></li> 
	 * <li> Recupere les ecoles specifiees dans le fichier.<br></li> 
	 * </ul>
	 * @param tabEcoles : Tableau de type String qui va contenir les noms des villes contenant une ecole.
	 * @return un tableau contenant les villes lues contenant des ecoles.
	 * @throws IOException : erreur.
	 * @throws FileNotFoundException : erreur3.
	 */
	public String[] recupererEcoles(String[] tabEcoles) throws FileNotFoundException, IOException {
		
		String line; // Attribut qui contiendra le nom d'une ville contenant une ecole
		int j = 0;
		try (LineNumberReader r1 = new LineNumberReader(new FileReader(file))) { // Lecture du fichier a la recherche des villes ou se trouvent une ecole
			while ((line = r1.readLine()) != null) {
				for (String element : line.split(" ")) {
					if (element.contains("ecole")) {
						line = line.replaceAll(".*\\(", "");	
						line = line.replaceAll("\\).*", "");				
						tabEcoles[j] = line; // On affecte le nom de la ville dans une des cases du tableau
						j++;
					}
				}
			}
		}
		return(tabEcoles);		
	}
	
	/**
	 * <ul> <li> Ouvre le fichier pris en entree et le lit<br></li> 
	 * <li> Recupere le nombre de routes specifiees dans le fichier.<br></li> 
	 * </ul>
	 * @return le nombre de routes lues
	 * @throws IOException  : .
	 * @throws FileNotFoundException : erreur3.
	 */
	public int recupererNombreDeRoutes() throws FileNotFoundException, IOException {
		
		int nbRoutes = 0;
		String line;
		try (LineNumberReader r1 = new LineNumberReader(new FileReader(file))) {   	
			while ((line = r1.readLine()) != null) {
				for (String element : line.split(" ")) {
					if (element.contains("route")) {				
						nbRoutes++; // On incremente de 1 pour chaque ligne contenant une combinaison de villes a relier par une route
					}
				}
			}
		}
		return(nbRoutes);		
	}
	
	/**
	 * <ul> <li> Ouvre le fichier pris en entree et le lit<br></li> 
	 * <li> Recupere le nombre de routes specifiees dans le fichier.<br></li> 
	 * </ul>
	 * @param routes : tableau de Type String contenant les combinaisons de villes a relier par une route
	 * @return un tableau contenant les combinaisons de villes a relier par une route
	 * @throws IOException : erreur.
	 * @throws FileNotFoundException : erreur3.
	 */
	public String[] recupererRoutes1(String[] routes) throws FileNotFoundException, IOException { // Recupere l'ensemble des routes et leurs villes spécifiees
		
		String line; // Attribut qui contiendra une combinaison de villes a relier par une route
		int m = 0;	
		try (LineNumberReader r2 = new LineNumberReader(new FileReader(file))) {   	
			while ((line = r2.readLine()) != null) {
				for (String element : line.split(" ")) {
					if (element.contains("route")) {					
						routes[m] = line;
						m++;
					}
				}		
			}
			return(routes);
		}
	}
 	
	/**
	 * <ul> <li> Ouvre le fichier pris en entree et le lit<br></li> 
	 * <li> Recupere le nom de la premiere ville lue dans une combinaison.<br></li> 
	 * </ul>
	 * @param tabRoutes : Tableau de String qui contiendra la premiere partie des combinaisons
	 * @return un tableau contenant les premieres villes a relier par des routes
	 * @throws IOException : erreur.
	 * @throws FileNotFoundException : erreur3.
	 */
	public String[] recupererRoutes2(String[] tabRoutes) throws FileNotFoundException, IOException  { // Partie gauche : nom de la ville à gauche
	
		String line; // Attribut de type String qui va contenir le nom de la premiere ville dans chaque combinaison
		int a = 0;
		try (LineNumberReader r1 = new LineNumberReader(new FileReader(file))) { // Lecture du fichier a la recherche des routes entre 2 villes specifiees
			while ((line = r1.readLine()) != null) {
				for (String element : line.split(" ")) {
					if (element.contains("route")) {
						line = line.replaceAll(".*\\(", "");	
						line = line.replaceAll(",.*", "");						
						tabRoutes[a] = line; // On stock le nom de la premiere ville specifiee lue
						a++;
					}
				}
			}
		}
		return(tabRoutes);
	}
	
	 /**
	 *<ul> <li> Ouvre le fichier pris en entree et le lit<br></li> 
	 * <li> Recupere le nom de la deuxieme ville lue dans une combinaison.<br></li> 
	 * </ul>
	 * @param tabRoutes2 : Tableau de String qui contiendra la deuxieme partie des combinaisons
	 * @return un tableau contenant les deuxiemes villes a relier par des routes a leurs combinaisons
	 * @throws IOException : erreur.
	 * @throws FileNotFoundException : erreur3.
	 */
	public String[] recupererRoutes3(String[] tabRoutes2) throws FileNotFoundException, IOException   { // Partie droite : nom de la ville à droite
		
		String line; // Attribut de type String qui va contenir le nom de la deuxieme ville dans chaque combinaison
		int a = 0;
		try (LineNumberReader r1 = new LineNumberReader(new FileReader(file))) {   
			while ((line = r1.readLine()) != null) {
				for (String element : line.split(" ")) {
					if (element.contains("route")) {
						line = line.replaceAll(".*,", "");	// On remplace le nom de la ville a gauche par un espace vide
						line = line.replaceAll("\\).*", ""); // On remplace la partie droite apres le nom de la ville a droite par un espace vide	
						tabRoutes2[a] = line; // On stock le nom de la deuxieme ville specifiee lue
						a++;
					}
				}
			}
		}	
		return (tabRoutes2);	
	}
}