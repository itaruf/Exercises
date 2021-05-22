package up.mi.projet1.menu2;
import java.util.Arrays;
import java.util.Scanner;

/**
 * Classe qui va permettre a l'utilisateur de choisir la ville dans laquelle il souhaiterait ajouter une ecole et de verifier si l'ajout est possible.
 * @author mac
 *
 */
public class AjoutEcoles {
	
	/**
	 * Attribut de type String qui va nous servir a stocker le nom de la ville entree par l'utilisateur.
	 * @see AjoutEcoles#ajouterEcoles()
	 */
	private String nomVille;
	
	/**
	 *<p>Objet de type Scanner qui scanne la valeur entree par l'utilisateur.</p>
	 * <ul><li> Permettra de verifier que l'utilisateur entre une valeur de type String.</li>
	 * <li>Associe a "nomDesVilles".</li> 
	 * </ul> 
	 * @see AjoutEcoles#ajouterEcoles()
	 */
	private Scanner nV = new Scanner(System.in);
	
	/**
	 * Attribut de type int qui va nous servir a stocker l'indice de la ville concernee par le retrait.
	 * Initialise a "0".
	 * @see AjoutEcoles#ajouterEcoles()
	 */
	private int indexVille;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner si une ville entree par l'utilisateur existe dans le tableau "nomDesVilles". 
	 * Initialise a "false".
	 * @see AjoutEcoles#ajouterEcoles()
	 */
	private boolean villeExistante = false;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner si une ecole existe deja dans la ville entree. 
	 * Initialise a "false".
	 * @see AjoutEcoles#ajouterEcoles()
	 */
	private boolean ecoleExistante = false;
	
	/**
	 * Attribut de type boolean qui va nous servir a determiner si chacune des villes du tableau "nomDesVilles" possede une ecole.
	 * Initialise a "true".
	 * @see AjoutEcoles#ajouterEcoles()
	 */
	private boolean ecolesExistantesPartout = true;
	
	/**
	 * <p>Tableau de type String de taille egale au nombre de villes entre par l'utilisateur et qui comporte les noms des villes entres par l'utilisateur.</p>
	 * <ul><li>Le premier nom de la ville correspond a l'indice 0 et ainsi de suite.</li></ul>
	 * <p>Cet attribut sert a :</p>
	 * <ul><li>Verifier que le contenu de l'attribut "nomVille" correspond au nom d'une des villes du tableau.</li>
	 * 	   <li>Afficher le nom d'une ville.</li>
	 * </ul>
	 * @see AjoutEcoles#ajouterEcoles()
	 * @see AjoutEcoles#AjoutEcoles(String[], String[], boolean[][])
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
     * @see AjoutEcoles#AjoutEcoles(String[], String[], boolean[][])
     * @see AjoutEcoles#ajouterEcoles()    
     */
	private String[] ecoles;
	
	/** 
	 * <p>Tableau 2D de type boolean qui represente la matrice d'adjacence des villes de l'agglomeration de taille egale au nombre de villes en ligne et en colonne.</p>
	 * <ul><li>En ligne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.</li>
	 * 	   <li>En colonne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.</li>
	 * </ul>
	 * <p>Cet attribut est passe en parametre pour appeller la methode "creerMenu2" de la classe "Menu2"</p>
	 * @see AjoutEcoles#AjoutEcoles(String[], String[], boolean[][])
	 * @see AjoutEcoles#ajouterEcoles()  
	 * @see Menu2#creerMenu2()
	 */
	private boolean[][] matriceAdjacence;
	
	/**
	 * <p>Sert a declarer et initialiser les attributs "nomDesVilles", "matriceAdjacence" et "ecoles" de la classe.</p>
	 * @param nomDesVilles : Tableau de type String qui va nous servir a verifier qu'une ville existe et d'afficher le nom d'une ville. 
	 * @param ecoles : Tableau de type String qui va nous servir a determiner si une ville du tableau "nomDesVilles" contient une ecole.
	 * @param matriceAdjacence : tableau 2D de type boolean qui va nous servir a appeler appeller la methode "creerMenu2" de la classe "Menu2".
	 */
	public AjoutEcoles(String[] nomDesVilles, String[] ecoles, boolean[][] matriceAdjacence) {
		
		this.nomDesVilles=nomDesVilles;
		this.ecoles=ecoles;
		this.matriceAdjacence = matriceAdjacence;	
	}
	
	/**
	 * <ul> <li> Demande a l'utilisateur le nom de la ville dans laquelle il souhaite ajouter une ecole.<br></li>
	 * <li> Redemande a l'utilisateur d'entrer un nom correct s'il entre le nom d'une ville qui n'est pas dans le tableau "nomDesVilles".<br></li>
	 * <li> Verifie si l'ajout d'une ecoles dans la ville est possible.<br></li>
	 * <li> Affiche un message si la ville possede deja une ecole.<br></li>
	 * <li> Affiche un message si toutes les villes possedent deja une ecole.<br></li>
	 * <li> Ajoute l'ecole dans la ville si c'est possible et modifie le contenu du tableau "ecoles" en conséquence.<br></li>
	 * <li> Affiche la liste des villes dans lesquelles il y a une ecole.<br></li>
	 * <li> Appelle la methode "creeMenu2()" de la classe "Menu2" pour afficher le deuxieme menu et redemander à l'utilisateur de faire un nouveau choix parmi les options proposees.<br></li> 
	 * </ul>
	 * <p> Cette methode ne prend pas de parametres.</p>
	 */
	public void ajouterEcoles () {
		
		do { // On entre dans une boucle tant que l'utilisateur n'a pas entre de ville existante
				
			indexVille = 0;
			villeExistante = false;
			ecoleExistante = false;
			ecolesExistantesPartout = true;
			System.out.println("\nDans quelle ville souhaitez-vous ajouter une ecole ? : ");
			nomVille = nV.nextLine(); // Lit la chaine de caracteres entree par l'utilisateur
			nomVille = nomVille.replaceFirst("^ *", ""); // Enleve tous les espaces avant le premier caractere qui n'est pas un espace
			nomVille = nomVille.trim().replaceAll(" +", " "); // Enleve les espaces en trop entre deux mots
			nomVille = nomVille.replaceAll("\\s+$", ""); // Enleve tous les espaces avant le dernier caractere qui n'est pas un espace
				
			for (int i=0; i<nomDesVilles.length; i++) { 
				if  (Arrays.asList(nomDesVilles[i]).contains(nomVille)) { // On verifie que le nom de la ville entree existe dans le tableau "nomDesVilles"
					villeExistante = true;
					indexVille = i; // On stocke l'indice de la ville
				}			
			}
				
			if (Boolean.FALSE.equals(villeExistante)) // Si le nom de la ville entree ne n'existe pas dans le tableau "nomDesVilles" alors...
					System.out.println("\nLe nom de la ville ne figure pas dans la liste.");
				
		} while (Boolean.FALSE.equals(villeExistante));
			
		// VERIFICATION 1 si la ville a deja une ecole.
			
		if ( (Arrays.asList(ecoles[indexVille]).contains("E")) ) { // Si la ville concernee a deja une ecole alors...
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
			System.out.println("\nToutes les villes possedent une ecole. Retour au menu.");
		}
			
		// FIN VERIFICATION 2
			
		if (Boolean.FALSE.equals(ecoleExistante))   // Si la ville concernee n'a pas d'ecole alors
			ecoles[indexVille] ="E"; // On affecte "E" a l'indice correspondant a la ville concernee dans le tableau "ecoles"
			
		System.out.println("\nListe des villes ou se trouvent une ecole : \n");
		
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