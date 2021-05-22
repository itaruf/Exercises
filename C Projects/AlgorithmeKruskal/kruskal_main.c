#include <stdio.h>
#include <stdlib.h>
#define NMAX 7 // Possibilite de changer cette valeur
#include "kruskal_algorithme.c"

int main () {

    int i,j;
    int ordre; // Declaration d'une variable qui contiendra la taille de la matrice.
    int s; // Declaration d'une variable qui contiendra le nombre de sommets du graphe.
    int n; // Declaration d'une variable qui contiendra le nombre d'aretes du graphe.
    float poids_arbre; // Declaration d'une variable qui contiendra le poids des aretes du graphe.

    do { // On entre dans une boucle tant que l'utilisateur n'entre pas un nombre de sommets compris entre 0 et NMAX-1.
        printf("Nombre de sommets dans le graphe ? ( >0 et <=%d ): ",NMAX-1);
        scanf("%d",&s);
    } while (s<=0 || s>NMAX-1);

    ordre = s; // On affecte a "ordre" la valeur de "s". La taille de la matrice etant le nombre de sommet multiplie par lui-meme.
    struct t_arete arbre[ordre]; // On declare une structure de type t_arete qui contiendra l'arbre couvrant de poids minimum.

    float **adjacencePoids = (float **)malloc(ordre*sizeof(float*)); // On cree dynamiquement un tableau de pointeurs de taille "ordre" qui sera la matrice d'adjacence du graphe.
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
    n = chargerGraphe(adjacencePoids,ordre,s); // On appelle la fonction "chargeGraphe" en passant en parametre matrice valuee non-remplie, sa taille et le nombre de sommets du graphe.

    printf("\n2. Affichage de la matrice d\'adjacence pond%cr%ce du graphe : ",130,130);
    printf("\n"); printf("\n");
    afficheMatriceAdjacence(adjacencePoids,ordre); // On appelle la fonction "afficheMatriceAdjacence" en passant en parametre la matrice valuee et sa taille.

    chargerArbre(arbre, n, ordre); // On appelle la fonction "chargerArbre" en passant en parametre notre arbre, le nombre d'aretes du graphe et l'ordre du graphe.

    return(EXIT_SUCCESS);
}
