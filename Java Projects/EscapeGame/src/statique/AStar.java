package statique;

/*Sur la base de : "https://fr.wikipedia.org/wiki/Algorithme_A*"
 * 				 : "http://helios.mi.parisdescartes.fr/~lomn/Cours/AV/Projet/labyrinthe.c"
 * */
import java.util.PriorityQueue;
 
/*
 * @author Taruf Imane 51807791
 * */
public class AStar {
	 
    private static Cellule [][] grille;
    private static PriorityQueue<Cellule> open;    
    private static boolean destination[][];
    private static int dx, dy;
    private static int fx, fy;
	private static class Cellule {  	
    private int x, y;     
    
    /*Affecte les coordonnées d'une case
	 * @param x : coordonnée en abscisse de la case
	 * @param y : coordonnée en ordonnée de la case
     * */
    public Cellule(int x, int y) {
        	
    	this.x = x;
    	this.y = y; 
		}
    }
	
	/* Permet d'indiquer les cases inaccessibles (Feu ou Mur) de la grille
	 * @param x : coordonnée en abscisse de la case
	 * @param y : coordonnée en ordonnée de la case
	 * */   
	public static void caseInaccessible(int x, int y) {
        grille[x][y] = null; // Affecte la valeur null à la case de coordonnées x et y pour indiquer que la case ne peut être traversée
        /*System.out.println(x);
        System.out.println(y);
        System.out.println();*/
    }
	
	/* Permet d'ajouter les coordonnées d'une case
	 * @param position : coordonnées actuelle de la case du prisonnier
	 * @param tmp : coordonnées d'une case de la grille
	 * */
    static void nouvellePosition(Cellule position, Cellule tmp) {
    	
        if (tmp == null || destination[tmp.x][tmp.y]) { // S'il s'agit d'une case inaccessible ou de la sortie, on quitte la méthode
        	return;
        }
        // On n'ajoute pas les cases inaccessibles à la file
        if (!open.contains(tmp)) { // Si les coordonnées d'une case n'ont pas encore été enregistrées alors on l'ajoute à la file
        	open.add(tmp);
        }
    }
    
    public static void algorithmeAStar() { 
        
        open.add(grille[AStar.dx][AStar.dy]); // On ajoute les coordonnées du point de départ du prisonnier dans la grille
        Cellule position; // coordonnées d'une case
        Cellule tmp; // coordonnées temporaires du prisonnier
        
        while(true) { // On entre dans une boucle infinie tant que toutes les cases n'ont pas été traitées
            position = open.poll(); // On affecte les coordonnées de la tête de la file à la variable position
            // Si la position actuelle est une case inaccessible, alors on arrête le parcours
            if (position==null) {
            	break;
            }
            // Si la destination est atteinte, on quitte la méthode
            destination[position.x][position.y] = true;  
            if (position.equals(grille[fx][fy])) {
            	return; 
            }
            // On inspecte la case précédente sur la même ligne
            if (position.y-1 >= 0) { // Si elle n'est pas hors de la grille
                tmp = grille[position.x][position.y-1];
                nouvellePosition(position, tmp); // On enregistre cette case
            }
            // On inspecte la case suivante sur la même ligne
            if (position.y+1 < grille[0].length) { // Si elle n'est pas hors de la grille
                tmp = grille[position.x][position.y+1];
                nouvellePosition(position, tmp); // On enregistre cette case
            }
            // On inspecte la case sur ligne suivante de la même colonne
            if (position.x+1 < grille.length) { // Si elle n'est pas hors de la grille
                tmp = grille[position.x+1][position.y];
                nouvellePosition(position, tmp); // On enregistre cette case
                // + On inspecte la case précédente sur la même ligne
                if (position.y-1 >= 0){
                    tmp = grille[position.x+1][position.y-1];
                    nouvellePosition(position, tmp); // On enregistre cette case
                }       
                // + On inspecte la case suivante sur la même ligne
                if (position.y+1 < grille[0].length) { // Si elle n'est pas hors de la grille
                   tmp = grille[position.x+1][position.y+1];
                    nouvellePosition(position, tmp); // On enregistre cette case
                }  
            }
            // On inspecte la case sur ligne précédente de la même colonne
            if (position.x-1 >= 0) { // Si elle n'est pas hors de la grille
                tmp = grille[position.x-1][position.y];  
                nouvellePosition(position, tmp); // On enregistre cette case
                // + On inspecte la case précédente sur la même ligne
                if (position.y-1 >= 0) {  // Si elle n'est pas hors de la grille                    
                    tmp = grille[position.x-1][position.y-1];
                    nouvellePosition(position, tmp); // On enregistre cette case
                }
                // + On inspecte la case suivante sur la même ligne
                if (position.y+1 < grille[0].length) { // Si elle n'est pas hors de la grille 
                    tmp = grille[position.x-1][position.y+1];
                    nouvellePosition(position, tmp); // On enregistre cette case
                }
            } 
        } 
    }
    
	/* Permet d'indiquer les cases inacsessibles (Feu ou Mur) de la grille
	 * @param x : nombre de lignes de l'instance
	 * @param y : nombre de colonnes de l'instance
	 * @param dx : coord en abscisse de la case de début
	 * @param dy : coord en ordonnée de la case de début
	 * @param fx : coord en abscisse de la case de fin
	 * @param fy : coord en ordonnée de la case de fin
	 * @param matriceGrille : la grille remplie de l'instance
	 * */   
	public void parcours(int x, int y, int dx, int dy, int fx, int fy, String[][] matriceGrille) {
        
		/*On récupère les coordonnées x et y des cases du début et de la fin de la grille*/
    	AStar.dx = dx; 
    	AStar.dy = dy;
        AStar.fx = fx;
        AStar.fy = fy;
        grille = new Cellule[x][y]; // On créé un nouvel objet de type Cellule de taille égale au nb de lignes et de colonnes de l'instance
        destination = new boolean[x][y]; // On créé un nouvel objet de type booléen de taille égale au nb de lignes et de colonnes de l'instance
		open = new PriorityQueue<>((c1, c2) -> { // On instancie une PriorityQueue qui contiendra les coordonnées des cases de la grille
			return(0);							 // java.util.Comparator<T>
		});        
		// Pour chacune des cases
        for(int i=0; i<x; i++) { 
        	for(int j=0; j<y; j++) {
        		grille[i][j] = new Cellule(i, j); // On instancie leurs coordonnées x (abs) et y (ord) de type Cellule
        	}
        }       
    	for (int i=0; i<matriceGrille.length; i++) { // On parcourt notre grille à la recherche de cases inaccessibles
			for (int j=0; j<matriceGrille[i].length; j++) {
				if (matriceGrille[i][j].contains("F") || matriceGrille[i][j].contains("#")) { // inaccessible => case contenant "Feu" ou "Mur"
					caseInaccessible(i, j); // On appelle la méthode caseInaccessible si les contraintes ci-dessus existent
				}
			}
		}           
        algorithmeAStar(); // On appelle la méthode algorithmeAStar pour appliquer AStar sur la grille    
        if (destination[AStar.fx][AStar.fy]) { // Si la destination a été atteinte par le prisonnier, alors on affiche Y pour indiquer qu'il s'est échappé
        	System.out.println("\nY");  
        }
        else {
        	System.out.println("\nN");  // Sinon on affiche N 
        }
    }
}