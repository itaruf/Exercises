#include <stdio.h>
#include <stdlib.h>
#define NMAX 6 // Possibilite de changer cette valeur
#include "prim_algorithme.c"

int main () {

    int i=0,j=0;
    int ordre=0; // Declaration d'une variable qui contiendra la taille de la matrice.
    int s=0; // Declaration d'une variable qui contiendra le nombre de sommets du graphe.
    int nb_arete=0; // Declaration d'une variable qui contiendra le nombre d'aretes du graphe.

    do { // On entre dans une boucle tant que l'utilisateur n'entre pas un nombre de sommets compris entre 0 et NMAX-1.
        printf("Nombre de sommets dans le graphe ? ( >0 et <=%d ): ",NMAX-1);
        scanf("%d",&s);
    } while (s<=0 || s>NMAX-1);

    ordre = s; // On affecte a "ordre" la valeur de "s". La taille de la matrice etant le nombre de sommets multiplie par lui-meme.

    float **adjacencePoids = (float **)malloc(ordre*sizeof(float*)); // On cree dynamiquement un tableau de pointeurs de taille "ordre" qui sera la matrice d'adjacence ponderee du graphe.
    for (i=0; i<ordre; i++) { // On entre dans une boucle pour allouer dynamiquement de l'espace memoire pour chaque ligne.
        adjacencePoids[i] = (float *)malloc(ordre*sizeof(float));
    }

    for (i=0; i<ordre; i++) { // On initialise le poids de chaque arete a 0 dans un premier temps.
        for (j=0; j<ordre; j++) {
            adjacencePoids[i][j] = 0.0;
        }
    }

    printf("\n1. Construction d\'un graphe : ");
    printf("\n");
    nb_arete = chargerGraphe(adjacencePoids,ordre,s); // On appelle la fonction "chargeGraphe" en passant en parametre matrice valuee non-remplie, sa taille et le nombre de sommets du graphe.

    printf("\n2. Affichage de la matrice d\'adjacence pond%cr%ce du graphe : ",130,130);
    printf("\n"); printf("\n");
    afficheMatriceAdjacence(adjacencePoids,ordre); // On appelle la fonction "afficheMatricAdjacence" en passant en parametre la matrice valuee et sa taille.

    if (nb_arete == 0) {
        printf("\nAucun arbre couvrant de poids minimum.");
        return(EXIT_SUCCESS);
    }

    prim(adjacencePoids,ordre);

    return(EXIT_SUCCESS);
}
