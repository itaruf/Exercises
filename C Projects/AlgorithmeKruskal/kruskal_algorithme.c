#include<stdio.h>
#include<stdlib.h>
#include <string.h>

struct t_arete {

        int x; // Numero du premier sommet
        int y; // Numero du second sommet
        float poids; // Poids de l'arete
        struct t_arete *arbre; //

}*t_arete = NULL;

void chargerArbre(struct t_arete arbre[], int n, int ordre);
int chargerGraphe (float **adjacencePoids, int ordre, int s);
void afficherMatriceAdjacence(float** adjacencePoids, int ordre);
void ajouterArete(int i,int j,float poids);
struct t_arete* supprimerArete();

int chargerGraphe(float **adjacencePoids, int ordre, int s) { //Fonction qui va permettre a l'utilisateur de creer son graphe et d'en realiser la matrice d'adjacence.

    int i,j;
    int nb_arete; // Declaration d'une variable qui contiendra le nombre d'aretes determine par l'utilisateur.
    int max_arete; // Declaration d'une variable qui contiendra le nombre d'aretes possible maximum quel que soit le type de graphe simple cree.
    float poids = 0.0; // Declaration d'une variable qui contiendra les poids de chaque arete.
    int x, y = 0; // x contient la valeur (et donc l'indice) du sommet a relier a y qui contient la valeur du sommet adjacent.
    max_arete = s*(s-1)/2; // Formule determinant le nombre d'aretes maximum dans un graphe simple complet pour lequel toute paire de sommets est reliee par une arete

    do {
        printf("\nNombre d'ar%ctes dans le graphe ? (min = 0 / max = %d) \n(Entrez une valeur num%crique) : ",136, max_arete,130); // On demande a l'utilisateur le nombre d'aretes que contiendra son graphe.
        scanf("%d",&nb_arete);
    } while (nb_arete>max_arete || nb_arete<0);

    for (i=0; i<nb_arete; i++) {
        printf("\nEntrez les sommets que relie l\'ar%cte n%c%d (x y) \n(Entrez des valeurs num%criques) : ",136,248,i+1,130);// On demande à l'utilisateur d'entrer une paire de sommets numérique à relier par une arête.
        scanf("%d %d",&x,&y);// On stock l'input dans les variables "x" et "y".

        if ((x>=s || y>=s || x<0 || y<0)) {
            printf("\nAu moins une des deux valeurs est invalide.\n");
            i--;
        }
        else {
            printf("\nEntrez le poid de l\'ar%cte n%c%d (Entrez une valeur num%crique) : ",136,248,i+1,130);
            scanf("%f",&poids);
            printf("\npoids : %.1f\n",poids);
            adjacencePoids[x][y] = poids; //On affecte la valeur du poids a la case a l'indice x en ligne (le sommet dont part l'arete) et a l'indice y en colonne (le sommet ou arrive l'arete).
            adjacencePoids[y][x] = poids; //On affecte la valeur du poids a la case a l'indice y en ligne (le sommet dont part l'arete) et a l'indice x en colonne (le sommet ou arrive l'arete).
            ajouterArete(x, y, poids);
        }
    }
    return(nb_arete);
}

void afficheMatriceAdjacence(float **adjacencePoids, int ordre) { //Fonction qui va permettre d'afficher la matrice d'adjacence construire dans la fonction chargerGraphe.
                                                            //Elle prend en parametre "** adjacence" un pointeur pointant sur un pointeur de type int et "ordre", la dimension de la matrice.
    int i,j;
    for (i=0; i<ordre; i++) {
        for (j=0; j<ordre; j++) {
            printf("%.1f\t", adjacencePoids[i][j]); // L'affichage arrondie au dixieme par exces les valeurs des poids entrees.
        }
        printf("\n");
    }
}

void chargerArbre(struct t_arete arbre[], int n, int ordre) {

    struct t_arete *tmp; // On declare une structure t_arete tampon.
    int s1,s2; // Numeros de sommets intermediaires.
    int ascendant_v1,ascendant_v2; // Variables qui determineront les ascendants des sommets intermediaires.
    int tab_ascendant[n]; // Tableau qui contiendra l'ascendant d'un sommet.
    int i,indiceG = 0; // Indices de l'arbre et du graphe initialisees a 0.
    float poids_arbre; // Poids de l'arbre

    for (i=0; i<n; i++) { // Initialisation du tableau des ascendants des sommets
        tab_ascendant[i] = -1;
    }

    while (!(t_arete==NULL) && indiceG < n-1 ) {
        tmp = supprimerArete();
        s1 = tmp->x; // Le 1er sommet intermediaire prend la valeur du numero du premier sommet d'une arete
        s2 = tmp->y; // Le 2eme sommet intermediaire prend la valeur du numero du second sommet de cette meme arete
        if (s1!=-1) {
            ascendant_v1 = s1;
            s1 = tab_ascendant[s1];
        }
        if (s2!=-1){
            ascendant_v2 = s2;
            s2 = tab_ascendant[s2];
        }
        if (ascendant_v1 != ascendant_v2){
            indiceG++;
            arbre[indiceG].x = tmp->x;
            arbre[indiceG].y = tmp->y;
            arbre[indiceG].poids = tmp->poids;
            tab_ascendant[ascendant_v2] = ascendant_v1;
        }
    }

    printf("\nArbre couvrant de poids minimum :");
    printf("\n[Ar%cte] : Poids\n", 136);
    for (i=1; i<ordre; i++) {
        printf("[%d - %d] : %.1f\n", arbre[i].x, arbre[i].y, arbre[i].poids);
    }
}

void ajouterArete(int i,int j, float poids) {

    struct t_arete *tmp,*file;

    tmp = (struct t_arete *)malloc(sizeof(struct t_arete));
    tmp->x = i;
    tmp->y = j;
    tmp->poids = poids;

    if (t_arete == NULL || tmp->poids < t_arete->poids) {
        tmp->arbre = t_arete;
        t_arete = tmp;
    }
    else {
        file = t_arete;
        while (file->arbre != NULL && file->arbre->poids < tmp->poids) {
            file = file->arbre;
        }
        /*for (int i=0; i<strlen(file->arbre); i++) {
            if (file->arbre != NULL && file->arbre->poids < tmp->poids) {
                file = file->arbre;
            }
        }*/
        tmp->arbre = file->arbre;
        file->arbre = tmp;
        if (file->arbre == NULL) {
            tmp->arbre = NULL;
        }
    }
}

struct t_arete* supprimerArete() { // Fonction qui va permettre de supprimer une arete

    struct t_arete *tmp;
    tmp = t_arete;
    t_arete = t_arete->arbre;
    return (tmp);
}
