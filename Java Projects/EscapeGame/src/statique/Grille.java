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
			symbolesPermis = new String[]{".","#","F","D","S"}; // On d�finit le tableau des symboles permis
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
							estValide = true; // Le symbole entr� par l'utilisateur est conforme
							break;
						}
					}			
					if (Boolean.FALSE.equals(estValide)) { // Si la valeur entr�e n'est pas conforme � la liste
						System.out.println("Symbole ["+i+"]["+j+"] incorrect");
						if (j==0) {		
							j=-1;
							continue;
						}
						else {
							j--; // On recommence cette �tape
							continue;
						}
					}
					/*Les valeurs D et S sont consid�r�es comme uniques dans une grille : il ne peut donc y avoir qu'un seul d�but et qu'une seule sortie par grille*/
					// Si on d�finit une sortie et qu'il existe un d�but, alors nous pouvons retirer leurs symboles associ�s de la liste des symboles permis
					if (matriceGrille[i][j].contains("S") && Boolean.TRUE.equals(existeDebut)) { 
						existeFin = true; // On indique qu'une sortie a �t� d�finie
						fin.x = i; // On affecte la coordonn�e en abscisse de la case Sortie
						fin.y = j; // On affecte la coordonn�e en ordonn�e de la case Sortie
						symbolesPermis = new String[]{".","#","F"};
					}		
					// Si on d�finit une sortie et qu'il n'existe pas encore de d�but, alors nous retirons uniquement le symbole associ� � la sortie de la liste
					if (matriceGrille[i][j].contains("S") && Boolean.FALSE.equals(existeDebut)) { 
						existeFin = true; // On indique qu'une sortie a �t� d�finie
						fin.x = i; // On affecte la coordonn�e en abscisse de la case Sortie
						fin.y = j; // On affecte la coordonn�e en abscisse de la case Sortie
						symbolesPermis = new String[]{".","#","F","D"};
					}
					// Si on d�finit un d�but et qu'il existe une sortie, alors nous pouvons retirer leurs symboles associ�s de la liste des symboles permis
					if (matriceGrille[i][j].contains("D") && Boolean.TRUE.equals(existeFin)) {
						existeDebut = true; // On indique qu'un d�but a �t� d�fini
						debut.x = i; // On affecte la coordonn�e en abscisse de la case Debut
						debut.y = j; // On affecte la coordonn�e en abscisse de la case Debut
						symbolesPermis = new String[]{".","#","F"};
					}
					// Si on d�finit un d�but et qu'il n'existe pas encore de sortie alors nous retirons uniquement le symbole associ� au d�but de la liste
					if (matriceGrille[i][j].contains("D") && Boolean.FALSE.equals(existeFin)) {
						existeDebut = true; // On indique qu'un d�but a �t� d�fini
						debut.x = i; // On affecte la coordonn�e en abscisse de la case Debut
						debut.y = j; // On affecte la coordonn�e en abscisse de la case Debut
						symbolesPermis = new String[]{".","#","F","S"};
					}
				}
			}	
			if (Boolean.FALSE.equals(existeFin)) System.out.println("\nLa sortie 'S' n'a pas ete definie."); 
			if (Boolean.FALSE.equals(existeDebut)) System.out.print("\nLe debut 'D' n'a pas ete defini.\n"); 
			/*On recommence le remplissage de la grille si � la fin aucune sortie n'a �t� d�finie 
			On recommence le remplissage de la grille si � la fin aucun d�but n'a �t� d�fini*/
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