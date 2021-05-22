package up.mi.projet1.menu1;

/**
 * Classe qui permet de creer un tableau ecoles et d'initialiser toutes ses cases a "E" c'est-a-dire mettre des ecoles dans toutes les villes (Solution naive).
 * @author mac
 *
 */
public class ConstructionEcoles {

	/**
	 * <p>Tableau de type String de taille egale au nombre de villes entre par l'utilisateur qui comportera "E" dans chacune de ses cases.</p>
	 * <ul><li>"E" : Contient une ecole.</li>
	 * 	   <li>L'indice 0 correspond a la situation de la premiere ville du tableau "nomDesVilles" et ainsi de suite.</li>
	 * </ul> 
	 * <p>Cet attribut sert a :</p>
	 * <ul><li>Initialiser chacune de ses cases a "E" suivant la solution naive.</li>
	 * </ul>
	 * @see ConstructionEcoles#construireEcoles()
	 * @see ConstructionEcoles#ConstructionEcoles(String[])
	 */
	private String[] ecoles;
		
	/**
	 * <p>Sert a declarer et initialiser l'attribut "ecoles" de la classe.</p>
	 * @param ecoles : Tableau de String qui va nous servir a attribuer une ecole a chaque ville du tableau "nomDesVilles".
	 */
	public ConstructionEcoles(String[] ecoles) {
		
		this.ecoles=ecoles;
	}

	/**
	 * <ul><li>Initialise chacune des cases du tableau "ecoles" avec la valeur "E" : la ville a l'indice correspondant possede une ecole.</li></ul>
	 * <p>Cette methode ne prend pas de parametre.</p>
	 */
	public void construireEcoles() {
		
		for  (int i=0; i<ecoles.length; i++) { // Pour chacune des cases
			ecoles[i] = "E"; // On affecte la valeur "E" 
		}
	}
}