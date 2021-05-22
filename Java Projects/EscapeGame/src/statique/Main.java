package statique;

import java.util.Scanner;
/*
 * @author Taruf Imane 51807791
 * */
public class Main {
	
	private static int nombreInstances; // T
	private static int nombreLignes; // N
	private static int nombreColonnes; // M
	private static Scanner n;
	private static boolean estValide;
	private static final int NMAX = (int) Math.pow(10,3);
	private static String[][] matriceGrille;

	public static void main(String[] args) {

		System.out.println("\nCAS STATIQUE :\n");
		do { // On entre dans une boucle tant que l'utilisateur n'a pas entré de valeur conforme
			estValide = false;
			while (true) { // On entre dans une boucle infinie	
				System.out.print("Nombre d'instance(s) ? : ");
				n = new Scanner(System.in);		
				if (n.hasNextInt()) { // On verifie que la valeur entree par l'utilisateur est de type int
					nombreInstances = n.nextInt();
			    	estValide = true; 
			    	break;
			    }
				else System.out.println("\nVeuillez entrer un entier superieur a 1."); // Sinon on redemande à l'utilisateur d'entrer un entier
			}
		    if (nombreInstances < 1) System.out.println("\nVeuillez entrer un entier superieur a 1."); 	// Si l'entier ne respecte pas les contraintes
		} while (nombreInstances < 1 || Boolean.FALSE.equals(estValide)); // Si l'utilisateur entre une valeur de type non-int ou un entier non conforme
		
		for (int i=0; i<nombreInstances; i++) { // Pour chacune des instances
			System.out.println("\nInstance n\u00b0"+(i+1)+" :");
			do { // On entre dans une boucle tant que l'utilisateur n'a pas entré de valeur conforme
				while (true) { 
					System.out.print("\nNombre de ligne(s) ? : ");
					n = new Scanner(System.in);	
					if (n.hasNextInt()) { // On vérifie que la valeur entrée est un entier de type int
						nombreLignes = n.nextInt(); 
				    	estValide = true; 
				    	break; 
				    }
					else System.out.println("\nVeuillez entrer un entier entre 1 et "+NMAX+"."); // Sinon on redemande à l'utilisateur d'entrer un entier
				}
			    if (nombreLignes < 1 || nombreLignes > NMAX) System.out.println("\nVeuillez entrer un entier entre 1 et "+NMAX+"."); // Si l'entier ne respecte pas les contraintes	
			} while (nombreLignes < 1 || nombreLignes > NMAX || Boolean.FALSE.equals(estValide)); // Si l'utilisateur entre une valeur de type non-int ou un entier non conforme
			do { 
				while (true) { 	
					System.out.print("\nNombre de colonne(s) ? : ");
					n = new Scanner(System.in);	
					if (n.hasNextInt()) { // On vérifie que la valeur entrée est un entier de type int
						nombreColonnes = n.nextInt(); 
				    	estValide = true; 
				    	break; 
				    }
					else System.out.println("\nVeuillez entrer un entier entre 1 et "+NMAX+"."); // Sinon on redemande à l'utilisateur d'entrer un entier
				}
			    if (nombreColonnes < 1 || nombreColonnes > NMAX) System.out.println("\nVeuillez entrer un entier entre 1 et "+NMAX+"."); // Si l'utilisateur entre une valeur de type non-int ou un entier non conforme		
			} while (nombreColonnes < 1 || nombreColonnes > NMAX || Boolean.FALSE.equals(estValide));
			matriceGrille = new String[nombreLignes][nombreColonnes]; // On créé la i-ème grille pour l'instance i		
			
			Debut d = new Debut(); // On instancie la classe Debut
			
			Fin f = new Fin(); // On instancie la classe Fin
			
			Grille g = new Grille(matriceGrille, i, d, f); // On instancie la classe Grille en passant en paramètre la matrice non remplie, le numéro de l'instance en cours, les coordonnées x y des cases de départ et d'arrivée à définir
			g.creerGrille(); // On appelle la méthode creerGrille qui va permettre de remplir la grille avec les symboles autorisés
			
			AStar aS = new AStar(); // Une fois la grille remplie, on instancie la classe AStar
			aS.parcours(nombreLignes, nombreColonnes, d.x, d.y, f.x, f.y, matriceGrille); // On appelle la méthode parcours en passant en paramètre les nombres de lignes et de colonnes de l'instance en cours
																						  // les coordonnées x y des cases de départ et d'arrivée définies  et la grille remplie
		}
	}	
}
