package statique;

import java.util.Scanner;

/*
 * @author Taruf Imane 51807791
 * */
public class Grille {

	private String[][] matriceGrille;
	private int i;
	private String[] symbolesPermis = {".","#","F","D","S"};
	// "." = libre; "#" = mur; "F" = feu; "D" = debut; "S" = sortie
	private Scanner s;
	private boolean estValide = false;
	private boolean existeDebut = false;
	private boolean existeFin = false;
	private Debut debut;
	private Fin fin;
	boolean isStringNumber = true;

	public Grille(String[][] matriceGrille, int i, Debut debut, Fin fin)  {
		
		this.matriceGrille = matriceGrille;		
		this.i = i;
		this.debut = debut;
		this.fin = fin;
	}
	
	public void creerGrille() {
		
		do {
			existeDebut = false;
			existeFin = false;
			symbolesPermis = new String[]{".","#","F","D","S"}; // On définit le tableau des symboles permis
			System.out.println("\nRemplissage de la grille n\u00b0"+(i+1)+" : ");
			for (int i=0; i<matriceGrille.length; i++) { // Pour chaque ligne de l'instance
				for (int j=0; j<matriceGrille[i].length; j++) { // Pour chaque colonne de l'instance
					estValide = false;
					s = new Scanner(System.in);	
					System.out.print("Symbole ["+i+"]["+j+"] ? : ");
					matriceGrille[i][j] = s.nextLine();
					matriceGrille[i][j] = matriceGrille[i][j].replaceFirst("^ *", ""); // Enleve tous les espaces avant le premier caractere qui n'est pas un espace
					matriceGrille[i][j] = matriceGrille[i][j].trim().replaceAll(" +", " "); // Enleve les espaces en trop entre deux mots
					matriceGrille[i][j] = matriceGrille[i][j].replaceAll("\\s+$", ""); // Enleve tous les espaces avant le dernier caractere qui n'est pas un espace*/				
					if (matriceGrille[i][j].matches("[0-9]+")) {
						estValide = false; 
					}
					for (int k=0; k<symbolesPermis.length; k++) {
						if (matriceGrille[i][j].equals(symbolesPermis[k])) {
							estValide = true; // Le symbole entré par l'utilisateur est conforme
							break;
						}
					}			
					if (Boolean.FALSE.equals(estValide)) { // Si la valeur entrée n'est pas conforme à la liste
						System.out.println("Symbole ["+i+"]["+j+"] incorrect");
						if (j==0) {		
							j=-1;
							continue;
						}
						else {
							j--; // On recommence cette étape
							continue;
						}
					}
					/*Les valeurs D et S sont considérées comme uniques dans une grille : il ne peut donc y avoir qu'un seul début et qu'une seule sortie par grille*/
					// Si on définit une sortie et qu'il existe un début, alors nous pouvons retirer leurs symboles associés de la liste des symboles permis
					if (matriceGrille[i][j].contains("S") && Boolean.TRUE.equals(existeDebut)) { 
						existeFin = true; // On indique qu'une sortie a été définie
						fin.x = i; // On affecte la coordonnée en abscisse de la case Sortie
						fin.y = j; // On affecte la coordonnée en ordonnée de la case Sortie
						symbolesPermis = new String[]{".","#","F"};
					}		
					// Si on définit une sortie et qu'il n'existe pas encore de début, alors nous retirons uniquement le symbole associé à la sortie de la liste
					if (matriceGrille[i][j].contains("S") && Boolean.FALSE.equals(existeDebut)) { 
						existeFin = true; // On indique qu'une sortie a été définie
						fin.x = i; // On affecte la coordonnée en abscisse de la case Sortie
						fin.y = j; // On affecte la coordonnée en abscisse de la case Sortie
						symbolesPermis = new String[]{".","#","F","D"};
					}
					// Si on définit un début et qu'il existe une sortie, alors nous pouvons retirer leurs symboles associés de la liste des symboles permis
					if (matriceGrille[i][j].contains("D") && Boolean.TRUE.equals(existeFin)) {
						existeDebut = true; // On indique qu'un début a été défini
						debut.x = i; // On affecte la coordonnée en abscisse de la case Debut
						debut.y = j; // On affecte la coordonnée en abscisse de la case Debut
						symbolesPermis = new String[]{".","#","F"};
					}
					// Si on définit un début et qu'il n'existe pas encore de sortie alors nous retirons uniquement le symbole associé au début de la liste
					if (matriceGrille[i][j].contains("D") && Boolean.FALSE.equals(existeFin)) {
						existeDebut = true; // On indique qu'un début a été défini
						debut.x = i; // On affecte la coordonnée en abscisse de la case Debut
						debut.y = j; // On affecte la coordonnée en abscisse de la case Debut
						symbolesPermis = new String[]{".","#","F","S"};
					}
				}
			}	
			if (Boolean.FALSE.equals(existeFin)) System.out.println("\nLa sortie 'S' n'a pas ete definie."); 
			if (Boolean.FALSE.equals(existeDebut)) System.out.print("\nLe debut 'D' n'a pas ete defini.\n"); 
			/*On recommence le remplissage de la grille si à la fin aucune sortie n'a été définie 
			On recommence le remplissage de la grille si à la fin aucun début n'a été défini*/
		} while (Boolean.FALSE.equals(existeFin) || Boolean.FALSE.equals(existeDebut));
			
		System.out.println("\nAffichage de la grille n\u00b0"+(i+1)+" : "); // On affiche la grille une fois remplie
		for (int i=0; i<matriceGrille.length; i++) {
			for (int j=0; j<matriceGrille[i].length; j++) {
				System.out.print(matriceGrille[i][j] + " ");	
			}		
			System.out.print("\n");
		}	 	
	}
}