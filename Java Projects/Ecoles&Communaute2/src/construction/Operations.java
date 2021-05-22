package construction;

/**
 *Classe qui permet de realiser plusieurs operations necessaires au fonctionnement de l'algorithme de la classe Algorithme.
 *@author mac
 **/
public class Operations {

	/**
	 * <ul><li>Compte le nombre de villes adjacentes d'une ville<br></li> 
	 * </ul>
	 * @param matriceAdjacence : la matrice d'adjacence de la communaute pour determiner ces voisins
	 * @param indexVille : l'index de la ville dont on veut compter les voisins
	 * @return le nombre de villes adjacentes a la ville etudiee
	 */
	public int compterNbVillesAdj(boolean[][] matriceAdjacence, int indexVille) { 
		
		int nbVillesAdj = 0;	
		for (int j=0; j<matriceAdjacence.length; j++) {
			if (Boolean.TRUE.equals(matriceAdjacence[indexVille][j])) {
				nbVillesAdj+=1;
			}
		}
		return(nbVillesAdj);
	}

	/**
	 * <ul><li>Compte le nombre de villes adjacentes d'une ville qui ont une ecole.<br></li> 
	 * </ul>
	 * @param matriceAdjacence : la matrice d'adjacence de la communaute pour determiner ces voisins.
	 * @param indexVille : l'index de la ville dont on veut compter les voisins.
	 * @param ecoles : Tableau de type String qui va nous servir a determiner si une ville du tableau "nomDesVilles" contient une ecole.
	 * @return le nombre de villes adjacentes contenant une ecole.
	 */
	public int compterNbVillesAdjEcoles(boolean[][] matriceAdjacence, int indexVille, String[] ecoles) { 
 
		int nbVillesAdjEcoles = 0;
		for (int j=0; j<matriceAdjacence.length; j++) {
			if (Boolean.TRUE.equals(matriceAdjacence[indexVille][j]) && ecoles[j].contains("E")) {
				nbVillesAdjEcoles+=1;
			}
		}
		return(nbVillesAdjEcoles);
	}
	
	/**
	 * <ul><li>Determine les index des villes adjacentes a une ville.<br></li> 
	 * </ul>
	 * @param matriceAdjacence : la matrice d'adjacence de la communaute pour determiner ces voisins.
	 * @param indexVille : l'index de la ville dont on veut determiner les voisins.
	 * @return un tableau contenant les index de ces villes adjacentes.
	 */
	public int[] indiceVillesAdj(boolean[][] matriceAdjacence, int indexVille) { 
		
		int[] tabIndVillesAdj = new int[compterNbVillesAdj(matriceAdjacence, indexVille)];
		int i = 0;
		for (int j=0; j<matriceAdjacence.length; j++) {
			if (Boolean.TRUE.equals(matriceAdjacence[indexVille][j])) {
				tabIndVillesAdj[i] = j;
				i++;
			}
		}
		return (tabIndVillesAdj);
	}
	
	/**
	 * <ul><li>Determine l'index d'une ville adjacente.<br></li> 
	 * </ul>
	 * @param matriceAdjacence : la matrice d'adjacence de la communaute pour determiner ces voisins.
	 * @param indexVille : l'index de la ville dont on veut determiner les voisins.
	 * @return la valeur de l'index d'une ville adjacente
	 */
	public int indexVilleAdjacente(boolean[][] matriceAdjacence, int indexVille) {
		
		int indexVilleAdjacente = 0;
		for (int i=0; i<matriceAdjacence.length; i++) {
			if (Boolean.TRUE.equals(matriceAdjacence[indexVille][i])) {
				indexVilleAdjacente = i;
			}
		}
		return(indexVilleAdjacente);
	}
	
	/**
	 * <ul><li>Determine s'il existe une ecole a l'index de la ville etudiee.<br></li> 
	 * </ul>
	 * @param ecoles : Tableau de type String qui va nous servir a determiner si une ville du tableau "nomDesVilles" contient une ecole.
	 * @param indexVille : l'index de la ville dont on veut determiner les voisins.
	 * @return un booleen "false" s'il n'y en a pas, "true" s'il y en a une.
	 */
	public boolean possedeEcole(String[] ecoles, int indexVille) { 
		
		if (ecoles[indexVille].contains("E")) {
			return(true);
		}
		else return(false);
	}
}		