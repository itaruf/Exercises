#include <stdio.h>
#include <stdlib.h>
#define NMAX 6
#include "graphe.c"
#include "arbre_poids_min.c"

void afficheMatriceAdjacence (int **adjacence, int ordre) { //Fonction qui va permettre d'afficher la matrice d'adjacence construire dans la fonction chargeGraphe.
                                                              //Elle prend en param�tre "** adjacence" un pointeur pointant sur un pointeur de type int et "ordre", la dimension de la matrice.
    int i,j;//D�claration des variables destin�es � l'incr�mentation/d�cr�mentation des boucles � venir.

    for (i=1; i<=ordre; i++) { //On entre dans une boucle pour parcourir le tableau lin�airement.
        for (j=1; j<=ordre; j++) {//On entre dans une bou cle pour parcourir le tableau case par case pour chaque ligne.
            printf("%4d", adjacence[i][j]);//On affiche � l'�cran les valeurs contenues dans chacune des cases.
        }//Fin de la boucle for n�2.
        printf("\n");//Apr�s avoir affich� toutes les cases d'une m�me ligne, on revient � la ligne avant de continuer sur la ligne suivante.
    }//Fin de la boucle for n�1.
}

int main () {

    int i,j;//D�claration des variables destin�es � l'incr�mentation des boucles � venir.
    int ordre;//D�claration d'une variable qui contiendra la taille de la matrice.
    int s;//D�claration d'une variable qui contiendra le nombre de sommets du graphe.

    do { //On entre dans une boucle pour borner les donn�es de l'utilisateur.
        printf("Nombre de sommets dans le graphe ? ( <=%d ): ",NMAX);//On demande � l'utilisateur le nombre de sommets souhait� dans le graphe.
        scanf("%d",&s);//On stock cette valeur dans la variable "s".
    }while (s<=0 || s>NMAX);//Fin de la houcle.

    ordre = s;//On affecte � "ordre" la valeur de "s". La taille de la matrice �tant le nombre de sommet multipli� par lui-m�me.

    /*int *l = (int*)malloc(ordre*sizeof(int));//On cr�e dynamiquement un tableau de pointeurs de taille "ordre" qui servira � determiner les longueurs minimales des sommets depuis s.
    for (i=1; i<=ordre; i++) {//On entre dans une boucle pour allouer dynamiquement de l'espace m�moire pour chaque ligne.
        l[i] = (int)malloc(ordre*sizeof(int));
    }//Fin de la boucle for.*/
    /*int *pred = (int*)malloc(ordre*sizeof(int));//On cr�e dynamiquement un tableau de pointeurs de taille "ordre" qui stockera les pr�d�cesseurs des sommets.
    for (i=1; i<=ordre; i++) {//On entre dans une boucle pour allouer dynamiquement de l'espace m�moire pour chaque ligne.
        pred[i] = (int)malloc(ordre*sizeof(int));
    }//Fin de la boucle for.*/

    int **adjacence = (int **)malloc(ordre*sizeof(int *));//On cr�e dynamiquement un tableau de pointeurs de taille "ordre" qui sera la matrice d'adjacence du graphe.
    for (i=1; i<=ordre; i++) {//On entre dans une boucle pour allouer dynamiquement de l'espace m�moire pour chaque ligne.
        adjacence[i] = (int *)malloc(ordre*sizeof(int));
    }//Fin de la boucle for.

    for (i=1; i<=ordre; i++) { //On entre dans une boucle pour affecter la valeur "0" � chacune des cases de la matrice.
        for (j=1 ; j<=ordre; j++) {
            adjacence[i][j] = 0;
        }//Fin de la boucle for n�2.
    }//Fin de la boucle for n�1.

    printf("\n1. Construction d\'un graphe : ");
    printf("\n");
    chargeGraphe(adjacence,ordre,s);//On appelle la fonction "chargeGraphe" en passant en param�tres le pointeur pointant sur notre matrice non-remplie, la taille du tableau et le nombre de sommets du graphe.

    printf("\n2. Affichage de la matrice d\'adjacence du graphe : ");
    printf("\n");
    printf("\n");
    afficheMatriceAdjacence(adjacence,ordre);//On appelle la fonction "affiche_matrice_adjacence" en passant en param�tre le pointeur pointant sur notre matrice remplie et sa taille.
    plusCourtChemin(adjacence,ordre,s);
    return(EXIT_SUCCESS);
}

