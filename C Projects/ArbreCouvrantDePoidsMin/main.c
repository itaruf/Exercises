#include <stdio.h>
#include <stdlib.h>
#define NMAX 6
#include "graphe.c"
#include "arbre_poids_min.c"

void afficheMatriceAdjacence (int **adjacence, int ordre) { //Fonction qui va permettre d'afficher la matrice d'adjacence construire dans la fonction chargeGraphe.
                                                              //Elle prend en paramètre "** adjacence" un pointeur pointant sur un pointeur de type int et "ordre", la dimension de la matrice.
    int i,j;//Déclaration des variables destinées à l'incrémentation/décrémentation des boucles à venir.

    for (i=1; i<=ordre; i++) { //On entre dans une boucle pour parcourir le tableau linéairement.
        for (j=1; j<=ordre; j++) {//On entre dans une bou cle pour parcourir le tableau case par case pour chaque ligne.
            printf("%4d", adjacence[i][j]);//On affiche à l'écran les valeurs contenues dans chacune des cases.
        }//Fin de la boucle for n°2.
        printf("\n");//Après avoir affiché toutes les cases d'une même ligne, on revient à la ligne avant de continuer sur la ligne suivante.
    }//Fin de la boucle for n°1.
}

int main () {

    int i,j;//Déclaration des variables destinées à l'incrémentation des boucles à venir.
    int ordre;//Déclaration d'une variable qui contiendra la taille de la matrice.
    int s;//Déclaration d'une variable qui contiendra le nombre de sommets du graphe.

    do { //On entre dans une boucle pour borner les données de l'utilisateur.
        printf("Nombre de sommets dans le graphe ? ( <=%d ): ",NMAX);//On demande à l'utilisateur le nombre de sommets souhaité dans le graphe.
        scanf("%d",&s);//On stock cette valeur dans la variable "s".
    }while (s<=0 || s>NMAX);//Fin de la houcle.

    ordre = s;//On affecte à "ordre" la valeur de "s". La taille de la matrice étant le nombre de sommet multiplié par lui-même.

    /*int *l = (int*)malloc(ordre*sizeof(int));//On crée dynamiquement un tableau de pointeurs de taille "ordre" qui servira à determiner les longueurs minimales des sommets depuis s.
    for (i=1; i<=ordre; i++) {//On entre dans une boucle pour allouer dynamiquement de l'espace mémoire pour chaque ligne.
        l[i] = (int)malloc(ordre*sizeof(int));
    }//Fin de la boucle for.*/
    /*int *pred = (int*)malloc(ordre*sizeof(int));//On crée dynamiquement un tableau de pointeurs de taille "ordre" qui stockera les prédécesseurs des sommets.
    for (i=1; i<=ordre; i++) {//On entre dans une boucle pour allouer dynamiquement de l'espace mémoire pour chaque ligne.
        pred[i] = (int)malloc(ordre*sizeof(int));
    }//Fin de la boucle for.*/

    int **adjacence = (int **)malloc(ordre*sizeof(int *));//On crée dynamiquement un tableau de pointeurs de taille "ordre" qui sera la matrice d'adjacence du graphe.
    for (i=1; i<=ordre; i++) {//On entre dans une boucle pour allouer dynamiquement de l'espace mémoire pour chaque ligne.
        adjacence[i] = (int *)malloc(ordre*sizeof(int));
    }//Fin de la boucle for.

    for (i=1; i<=ordre; i++) { //On entre dans une boucle pour affecter la valeur "0" à chacune des cases de la matrice.
        for (j=1 ; j<=ordre; j++) {
            adjacence[i][j] = 0;
        }//Fin de la boucle for n°2.
    }//Fin de la boucle for n°1.

    printf("\n1. Construction d\'un graphe : ");
    printf("\n");
    chargeGraphe(adjacence,ordre,s);//On appelle la fonction "chargeGraphe" en passant en paramètres le pointeur pointant sur notre matrice non-remplie, la taille du tableau et le nombre de sommets du graphe.

    printf("\n2. Affichage de la matrice d\'adjacence du graphe : ");
    printf("\n");
    printf("\n");
    afficheMatriceAdjacence(adjacence,ordre);//On appelle la fonction "affiche_matrice_adjacence" en passant en paramètre le pointeur pointant sur notre matrice remplie et sa taille.
    plusCourtChemin(adjacence,ordre,s);
    return(EXIT_SUCCESS);
}

