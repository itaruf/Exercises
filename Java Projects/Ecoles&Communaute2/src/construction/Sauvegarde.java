package construction;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Arrays;
import java.util.Scanner;

/**
* Classe qui va permettre a l'utilisateur de sauvegarder une solution trouvee manuellement ou automatiquement, dans un fichier deja existant 
*sur son systeme ou dans un fichier qui sera nouvellement cree pour.
*@author mac
*/
public class Sauvegarde {
	
	/**
	 * Attribut de type boolean qui va nous permettre de determiner si un chemin vers un fichier existe ou non sur le systeme
	 */
	private boolean existe;
	
	/**
	 * Attribut de type String qui va nous permettre de stocker le chemin vers un fichier texte.
	 */
	private String cheminFichier;
	
	/**
	 * <p>Objet de type Scanner qui scanne la valeur entree par l'utilisateur.</p> 
	 * <ul><li> Permettra de verifier que l'utilisateur entre une valeur de type String.</li>
	 * <li>Associe a "cheminFichier".</li> 
	 * </ul> 
	 * */
	private Scanner c;

	/**
	* <p>Sert a sauvegarder une solution manuelle ou automatique dans un fichier.</p>
	* <ul><li>L'utilisateur entre le chemin vers le fichier ou la solution doit etre enregistree</li>
	* <li>Si ce chemin mene a une fichier deja existant sur son systeme, les donnees y seront sauvegardees</li>
	* <li>Si ce chemin mene a une fichier non existant sur son systeme, un fichier sera cree a l'emplacement specifie et les donnees y seront sauvegardees</li>
	* </ul>
	* @param nomDesVilles : Tableau de type String qui va nous servir a verifier qu'une ville existe et d'afficher le nom d'une ville.
	* @param matriceAdjacence : Tableau 2D de type boolean qui va nous servir a indiquer que deux villes du tableau "nomDesVilles" sont adjacentes.
	* @param ecoles : Tableau de type String qui va nous servir a determiner si une ville du tableau "nomDesVilles" contient une ecole.
	* @param routes : Tableau de type String qui va nous servir a stocker les combinaisons de villes reliees par une routes.
	* @throws IOException : erreur.
	* @see sauvegarder#nomDesVilles
	* @see sauvegarder#ecoles
	* @see sauvegarder#matriceAdjacence
	* @see sauvegarder#routes
	*/
	public void sauvegarder(String[] nomDesVilles, String[] ecoles, boolean[][] matriceAdjacence, String[] routes) throws IOException  {	
		
		System.out.println(Arrays.toString(ecoles));
		c = new Scanner(System.in);
		do {
			existe = false;
			System.out.println("\nChemin vers le fichier ou enregistrer la solution ?");
			cheminFichier = c.nextLine();
			File file = new File(cheminFichier);
			if (file.exists()) { // Si le chemin indique mene a un fichier existant
				existe = true;
				try (PrintStream out = new PrintStream(new FileOutputStream(cheminFichier))) {	// On ecrit dans ce fichier les donnees suivantes : 	
					for (int i=0; i<nomDesVilles.length; i++) { // On sauvegarde en premier les villes de la communaute
						String SauvegardeVille = "ville("+nomDesVilles[i]+")\n";
						out.print(SauvegardeVille);
					}			
					for (int i=0; i<routes.length; i++) { // On sauvegarde ensuite les combinaisons de villes reliees par une route
						String SauvegardeRoute = ""+routes[i]+"\n";
						out.print(SauvegardeRoute);
					}		
					for (int i=0; i<ecoles.length; i++) { // Et on sauvegarde les villes contenant des ecoles
						if (ecoles[i].contains("E")) {
						    String villeASauvegarder = "ecole("+nomDesVilles[i]+")\n";
							out.print(villeASauvegarder);
						}
					}
				}
			}
			else { // Si le chemin indique mene a un fichier inexistant
				file.createNewFile(); // On cree ce fichier sur le systeme de l'utilisateur
				try (PrintStream out = new PrintStream(new FileOutputStream(cheminFichier))) {	// On ecrit dans ce fichier les donnees suivantes : 		
					for (int i=0; i<nomDesVilles.length; i++) {
						String SauvegardeVille = "ville("+nomDesVilles[i]+")\n"; // On sauvegarde ensuite les combinaisons de villes reliees par une route
						out.print(SauvegardeVille);
					}			
					for (int i=0; i<routes.length; i++) {
						String SauvegardeRoute = ""+routes[i]+"\n";
						out.print(SauvegardeRoute);
					}		
					for (int i=0; i<ecoles.length; i++) { // Et on sauvegarde les villes contenant des ecoles
						if (ecoles[i].contains("E")) {
						    String villeASauvegarder = "ecole("+nomDesVilles[i]+")\n";
							out.print(villeASauvegarder);
						}
					}
				}
			}
		} while(Boolean.FALSE.equals(existe));
		System.out.println();
	}
}