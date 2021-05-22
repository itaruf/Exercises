package up.mi.projet1.graphe;

/** 
 * Classe qui va permettre d'initialiser la matrice d'adjacence d'ordre n*n (avec n = nombre de ville) qui servira a la construction des routes de l'agglomeration.
 * @author mac
 */

public class Graphe {

	/**
	 * Attribut de type int qui va nous servir a recuperer le nombre de villes entre par l'utilisateur.
	 * @see Graphe#Graphe(int, boolean[][])
	 * @see Graphe#initialiserMatrice()
	 */
	private int nombreDeVilles;
		
	/**
	 * <p>Tableau 2D de type boolean qui represente la matrice d'adjacence des villes de l'agglomeration de taille egale au nombre de villes en ligne et en colonne.</p>
	 * <ul><li>En ligne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.</li>
	 * 	   <li>En colonne : l'indice 0 correspond a la premiere ville entree et ainsi de suite.</li>
	 * </ul> 
	 * @see Graphe#Graphe(int, boolean[][]) 
	 * @see Graphe#initialiserMatrice()
	 */
	private boolean[][] matriceAdjacence;
			
	/**
	 * <p>Sert a declarer et initialiser les attributs "nombreDeVilles" et "matriceAdjacence" de la classe.</p>
 	 * @param nombreDeVilles : Attribut de type int contenant le nombre de villes de l'agglomeration entre par l'utilisateur.
	 * @param matriceAdjacence : Tableau 2D de type boolean dont chacune des cases est a initialiser.
	 * @see Graphe#nombreDeVilles
	 * @see Graphe#matriceAdjacence
	 */
	public Graphe (int nombreDeVilles, boolean[][] matriceAdjacence) {
		
		this.nombreDeVilles = nombreDeVilles;
		this.matriceAdjacence = matriceAdjacence;
	}
	
	/**
	 * <ul><li>Initialise chacune des cases du tableau "matriceAdjacence" à "false" : aucune ville n'est adjacente a aucune autre ville.<br></li>
	 * </ul>
	 * <p>Cette methode n'a pas de parametre.</p>
	 */
	public void initialiserMatrice () { 
		for (int i=0; i<nombreDeVilles; i++) { // On entre dans une boucle pour chaque ligne d'indice i
			 for (int j=0; j<nombreDeVilles; j++) { // On entre dans une boucle pour chaque case d'une colonne d'indice j d'une ligne d'indice i
				 matriceAdjacence[i][j] = false; // On affecte le booleen "false" dans chaque case d'une colonne d'indice j d'une ligne d'indice i
			 }
		 }
	}	
}