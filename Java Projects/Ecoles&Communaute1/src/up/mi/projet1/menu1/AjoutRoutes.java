package up.mi.projet1.menu1;
import java.util.Scanner;
import java.util.Arrays;

/**
 * Classe qui va permettre d'ajouter une route entre deux villes donnees par l'utilisateur.
 * @author mac
 *
 */
public class AjoutRoutes {
	
	/**
	 *<p>Objet de type Scanner qui scanne la valeur entree par l'utilisateur.</p>
	 * <ul><li> Permettra de verifier que l'utilisateur entre une valeur de type String.
	 * </ul> Associe a "chaine".
	 * @see AjoutRoutes#ajouterRoutes()
	 */
	private Scanner c = new Scanner(System.in);
	
	/**
	 * Attribut de type String qui stocke le nom de la premiere ville que l'utilisateur doit entrer.
	 * @see AjoutRoutes#ajouterRoutes()
	 */
	private String ville1;
	
	/**
	 * Attribut de type String qui stocke le nom de la deuxieme ville que l'utilisateur doit entrer.
	 * @see AjoutRoutes#ajouterRoutes()
	 */
	private String ville2;
	
	/**
	 * Attributs de type boolean qui vont permettre de verifier si les noms des deux villes existent dans le tableau "nomDesVilles".
	 * Initialises a "false".
	 * @see AjoutRoutes#ajouterRoutes()
	 */
	private boolean ville1Existe = false, ville2Existe = false;
	
	/**
	 * Attribut de type int qui stocke l'indice de la premiere ville contenue dans le tableau "ville1Villes2".
	 * @see AjoutRoutes#ajouterRoutes()
	 */
	private int indexVille1;
	
	/**
	 * Attribut de type int qui stocke l'indice de la deuxieme ville contenue dans le tableau "ville1Villes2".
	 * @see AjoutRoutes#ajouterRoutes()
	 */
	private int indexVille2;
	
	/**
	 * <p>Tableau de type String de taille egale au nombre de villes entre par l'utilisateur et qui comporte les noms des villes entres par l'utilisateur.</p>
	 * <ul><li>Le premier nom de la ville correspond a l'indice 0 et ainsi de suite.</li>
	 * </ul>
	 * <p>Cet attribut sert a :</p>
	 * <ul><li>Verifier que le contenu des attributs "ville1" et "ville2" correspondent a des noms de villes du tableau.</li>
	 * 	   <li>Afficher le nom d'une ville.</li>
	 * </ul>
	 * @see AjoutRoutes#AjoutRoutes(String[], boolean[][])
	 * @see AjoutRoutes#ajouterRoutes()
	 */
	private String[] nomDesVilles;
		
	/**
	 * <p>Tableau 2D de type boolean qui represente la matrice d'adjacence des villes de l'agglomeration de taille egale au nombre de villes en ligne et en colonne.</p>
	 * <ul><li>En ligne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.</li>
	 * 	   <li>En colonne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.</li>
	 * </ul> 
	 * <p>Cet attribut sert a :</p>
	 * <ul><li>Indiquer que deux villes sont adjacentes (c'est-a-dire relier par une route) en modifiant le contenu aux indices des deux villes correspondantes a "true".</li>
	 </ul>
	 */
	private boolean[][] matriceAdjacence;
	
	/**
	 * <p>Sert a declarer et initialiser les attributs "nomDesVilles", "ecoles" et "matriceAdjacence" de la classe.</p>
	 * @param nomDesVilles : Tableau de type String qui va nous servir a verifier qu'une ville existe et d'afficher le nom d'une ville.
	 * @param matriceAdjacence : Tableau 2D de type boolean qui va nous servir a indiquer que deux villes du tableau "nomDesVilles" sont adjacentes.
	 * @see AjoutRoutes#nomDesVilles
	 * @see AjoutRoutes#matriceAdjacence
	 */
	public AjoutRoutes(String[] nomDesVilles, boolean[][] matriceAdjacence) {
		
		this.nomDesVilles = nomDesVilles;
		this.matriceAdjacence = matriceAdjacence;	
	}
	
	/**
	 * <ul> <li> Demande a l'utilisateur le noms des villes entre lesquelles il veut ajouter une route.<br></li>
	 * <li> Redemande a l'utilisateur d'entrer les noms de deux villes si :<br>
	 * <ol><li>Il n'entre le nom que d'une seule ville.<br></li>
	 * <li>Il entre deux villes du meme nom.<br></li>
	 * <li>Il entre des noms de villes errones.<br></li>
	 * <li>Il entre une chaine de caracteres vides<br></li>
	 * </ol></li>
	 * <li >Ajoute un route entre deux villes existantes.<br></li>
	 * <li> Modifie le contenu de "matriceAdjacence" aux indices correspondant en "true"et affiche la matrice d'adjacence de l'agglomeration.<br></li>
	 * <li> Affiche le Menu1 et ses options.<br></li>
	 * </ul>
	 * <p> Cette methode ne prend pas de parametre.</p>
	 */
	public void ajouterRoutes() {
		 
		do { // On entre dans une boucle tant que l'utilisateur n'entre pas les noms de deux villes existant dans le tableau "nomDesVilles"
			
			do {
				
				indexVille1 = 0;	
				ville1="";
				ville1Existe = false;			
				c = new Scanner(System.in);
					
				System.out.println("\nNom de la premiere ville : ");
				ville1 = c.nextLine();
				ville1 = ville1.replaceFirst("^ *", ""); // Enleve tous les espaces avant le premier caractere qui n'est pas un espace
				ville1 = ville1.trim().replaceAll(" +", " "); // Enleve les espaces en trop entre deux mots
				ville1 = ville1.replaceAll("\\s+$", ""); // Enleve tous les espaces avant le dernier caractere qui n'est pas un espace
				
				for (int i=0; i<nomDesVilles.length; i++) {			
					if( (Arrays.asList(nomDesVilles[i]).contains(ville1)) ) { // On verifie que le nom de la premiere ville entre existe dans le tableau "nomDesVilles"
						ville1Existe = true; // On affecte la valeur true pour indiquer que la ville existe dans ce tableau
						indexVille1 = i; // On stocke l'indice de cette premiere ville
						break; // On quitte la boucle
					}
				}
				
				if ( Boolean.FALSE.equals(ville1Existe)) { // Si la premiere ville entree n'existe pas dans le tableau "nomDesVilles" alors...
					System.out.println("\nLa ville '"+ville1+"' n'est pas dans la liste.");
					System.out.println("Veuillez entrer le nom d'une ville qui existe dans l'agglomeration.");
				}
				
			} while(Boolean.FALSE.equals(ville1Existe));
				
			 do {
				 
				 indexVille2 = 0;
				 ville2="";
				 ville2Existe = false;
				 c = new Scanner(System.in);
				 
				System.out.println("\nNom de la deuxieme ville : ");									
				ville2 = c.nextLine();		
				ville2 = ville2.replaceFirst("^ *", ""); // Enleve tous les espaces avant le premier caractere qui n'est pas un espace
				ville2 = ville2.trim().replaceAll(" +", " "); // Enleve les espaces en trop entre deux mots
				ville2 = ville2.replaceAll("\\s+$", ""); // Enleve tous les espaces avant le dernier caractere qui n'est pas un espace
					
				for (int i=0; i<nomDesVilles.length; i++) {			 	
					if ( (Arrays.asList(nomDesVilles[i]).contains(ville2)) ) { // On verifie que le nom de la deuxieme ville entre existe dans le tableau "nomDesVilles"
						ville2Existe = true; // On affecte la valeur true pour indiquer que la ville existe dans ce tableau
						indexVille2 = i; // On stocke l'indice de cette deuxieme ville
						break; // On quitte la boucle
					}
				}
					
				if (Boolean.FALSE.equals(ville2Existe)) {// Si la deuxieme ville entree n'existe pas dans le tableau "nomDesVilles" alors...
					System.out.println("\nLa ville '"+ville2+"' n'est pas dans la liste.");	
					System.out.println("Veuillez entrer le nom d'une ville qui existe dans l'agglomeration.");
				}
					
			} while(Boolean.FALSE.equals(ville2Existe));
					
			if ( ville1.compareTo(ville2) == 0) {// Si l'utilisateur entre deux fois la meme chaine de caracteres alors...
				System.out.println("\nVeuillez entrer les noms de deux villes differentes.");		
			}
			
		} while (ville1.compareTo(ville2) == 0);

		if ( Boolean.TRUE.equals(ville1Existe) && Boolean.TRUE.equals(ville2Existe)) { // Si les noms des deux villes existent alors
			
			matriceAdjacence[indexVille1][indexVille2] = true; // On affecte la valeur "true" pour indiquer l'ajout d'une route entre les deux villes dans un sens
			matriceAdjacence[indexVille2][indexVille1] = true;// On affecte la valeur "true" pour indiquer l'ajout d'une route entre les deux villes dans l'autre sens car on ne s'occupe pas de la direction des routes
		}
		
		// Afficher la matrice
		System.out.print("\n");
		for (int i=0; i < matriceAdjacence.length; i++) {
			//System.out.print(i+ "  ");
			for (int k=0; k<matriceAdjacence.length; k++) {
				System.out.print((matriceAdjacence[i][k] && matriceAdjacence[k][i] == true ? "T" : "F") + " ");	
			}		
			 System.out.print("\n");
		}	 	
    	System.out.println("\nAjouter une route (1)\nQuitter le menu (2)\nChoisissez un champ : ");			
	}
}