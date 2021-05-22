#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define INFINI 1000.0

int chargerGraphe(float **adjacencePoids, int ordre, int s);
void afficherMatriceAdjacence(float** adjacencePoids, int ordre);
int indexProchainSommet(float tab_min[], int *marques, int ordre);
void afficherArbreCouvrantMin(int tab_ascendant[], float **adjacencePoids, int ordre);
void prim(float **adjacencePoids, int ordre);
/*typedef struct t_arete {

    int *arbre; // Arbre d’incidence nœud-arc de poids minimum // Tableau dynamique

}t_arete;

void insererArete(t_arete* tA, int min, int indiceA, int ymin, int tab_min, int s) {

    tA->arbre[0] = s;
    tA->arbre[indiceA] = min;
    //printf("\narbre[%d] : %d\n",indiceA, (tA->arbre[indiceA]));
}
*/
int chargerGraphe(float **adjacencePoids, int ordre, int s) { //Fonction qui va permettre a l'utilisateur de creer son graphe et d'en realiser la matrice d'adjacence ponderee.

    int i,j;
    int nb_arete; // Declaration d'une variable qui contiendra le nombre d'aretes determine par l'utilisateur.
    int max_arete; // Declaration d'une variable qui contiendra le nombre d'aretes possible maximum quel que soit le type de graphe simple cree.
    float poids = 0; // Declaration d'une variable qui contiendra les poids de chaque arete.
    int x, y = 0; // x contient la valeur (et donc l'indice) du sommet a relier a y qui contient la valeur du sommet adjacent.
    max_arete = s*(s-1)/2; // Formule determinant le nombre d'aretes maximum dans un graphe simple complet pour lequel toute paire de sommets est reliee par une arete.

    do { // On entre dans une boucle tant que l'utilisateur n'entre pas un nombre d'aretes compris entre 0 et max_arete (nb max d'aretes)
        printf("\nNombre d'ar%ctes dans le graphe ? (min = 0 / max = %d) \n(Entrez une valeur num%crique) : ",136, max_arete,130); // On demande a l'utilisateur le nombre d'aretes que contiendra son graphe.
        scanf("%d",&nb_arete);
    } while (nb_arete>max_arete || nb_arete<0);

    for (i=0; i<nb_arete; i++) { // Pour chacune des aretes

        printf("\nEntrez les sommets que relie l\'ar%cte n%c%d (x y) \n(Entrez des valeurs num%criques) : ",136,248,i+1,130);// On demande à l'utilisateur d'entrer une paire de sommets numérique à relier par l'arête concernee.
        scanf("%d %d",&x,&y);// On stock l'input dans les variables "x" et "y".

        if ((x>=s || y>=s || x<0 || y<0)) { // Si une des valeurs des coordonnees n'est pas conforme alors l'utilisateur devra recommencer cette etape.
            printf("\nAu moins une des deux valeurs est invalide.\n");
            i--;
        }

        else { // Si les coordonnees de l'arete entrees par l'utilisateur sont conformes, alors on passe a l'etape d'affection de son poid.
            printf("\nEntrez le poid de l\'ar%cte n%c%d (Entrez une valeur num%crique) : ",136,248,i+1,130);
            scanf("%f",&poids);
            printf("\npoids : %.1f\n",poids); // L'affichage arrondie au dixieme par exces la valeur du poid entree.

            adjacencePoids[x][y] = poids; // On affecte la valeur du poids a la case a l'indice x en ligne (le sommet dont part l'arete) et a l'indice y en colonne (le sommet ou arrive l'arete).
            adjacencePoids[y][x] = poids; // On affecte la valeur du poids a la case a l'indice y en ligne (le sommet dont part l'arete) et a l'indice x en colonne (le sommet ou arrive l'arete).
        }
    }
    return(nb_arete);
}

void afficheMatriceAdjacence(float **adjacencePoids, int ordre) { /*Fonction qui va permettre d'afficher la matrice d'adjacence construire dans la fonction chargeGraphe.
                                                                    Elle prend en parametre "** adjacence", la matrice d'adjacence valuee et "ordre", la dimension de la matrice.*/
    int i,j;
    for (i=0; i<ordre; i++) {
        for (j=0; j<ordre; j++) {
            printf("%.1f\t", adjacencePoids[i][j]); // L'affichage arrondie au dixieme par exces les valeurs des poids entrees.
        }
        printf("\n");
    }
}
int indexProchainSommet(float tab_min[], int *marques, int ordre) {

    int i;
    float min = INFINI;
    int index_sommet;

    for (i=0; i<ordre; i++) {
        if (!marques[i] && tab_min[i]<min) { // On cherche le prochain sommet non marque dont la valeur est la plus petite
            min = tab_min[i];
            index_sommet = i; // On recupere l'indice du numéro de sommet le plus petit pour l'instant
        }
    }
    return (index_sommet); // On renvoit l'indice du numéro de sommet le plus petit
}

void afficherArbreCouvrantMin(int tab_ascendant[], float **adjacencePoids, int ordre) {

    int i;
    printf("\nArbre couvrant de poids minimum");
    printf("\n[Ar%cte] : Poids\n", 136);
    for (i=1; i<ordre; i++) {
        printf("[%d - %d] : %.1f\n", tab_ascendant[i], i, adjacencePoids[i][tab_ascendant[i]]);
    }
}

/*void afficherArbreMin2(int tab_ascendant[], float **adjacencePoids, int ordre, t_arete* tA) {

    printf("\n[Ar%cte] : Poids\n", 136);
    for (int i=1; i<ordre; i++) {
        printf("[%d - %d] : %.1f\n", tA->arbre[i], i, adjacencePoids[i][tA->arbre[i]]);
    }
}*/

void prim(float **adjacencePoids, int ordre) {

    //t_arete *arbre; // Arbre d’incidence nœud-arc de poids minimum a retourner.
    int tab_ascendant[ordre]; // Tableau contenant le sommet ascendant d'un sommet a l'indice correspondant.
    float tab_min[ordre]; // Distance minimale du prochain sommet a marquer.
    int *marques[ordre]; // Tableau dynamique indiquant si les sommets sont marques ou non.
    int indiceA = 0; // Indice de l’arbre initialise a 0.
    int x, y, min, ymin, s; // Numeros de sommets intermediaires.
    int rand();
    srand(time(NULL));
    s = rand()%ordre; // Choisir un sommet s aleatoirement compris entre 0 et ordre-1.

    for (int i=0; i<=ordre-1; i++) { // Allouer l’arbre de « ordre-1 » aretes et le tableau marque de « ordre » entiers.
        //arbre = (int*)malloc(ordre*sizeof(int));
        marques[i] = 0; // Initialiser le marquage des sommets a 0.
        tab_min[i] = INFINI; // Initialiser la longueur minimale a l’INFINI.

    }

    tab_min[0] = s; // Le premiet sommet etudie est le sommet determine aleatoirement.
    printf("\nSommet aleatoire : %d\n",s);

    while (indiceA<ordre-1) { // Tant que les aretes de l’arbre ne sont pas toutes traitees.
        // Pour tous les sommets min marques
        // Chercher le sommet de longueur minimale « ymin » adjacent a min
        // Et non marque
        for (x=0; x<ordre; x++) {
            min = indexProchainSommet(tab_min, marques, ordre);
            marques[min] = 1; // On marque le sommet min
            for (y=0; y<ordre; y++) {
                if (adjacencePoids[min][y] && !marques[y] && adjacencePoids[min][y]<tab_min[y]) {
                    tab_ascendant[y] = min; // On affecte le numero du sommet ascendant de y a l'indice correspondant dans le tableau.
                    ymin = y;  // sommet y de poids min.
                    tab_min[y] = adjacencePoids[min][y]; // On affecte la valeur du poids minimum du prochain sommet a marquer.
                }
            }
            marques[ymin] = 1; // Marquer le sommet « ymin » de longueur minimale.
            //insererArete(&arbre, min, indiceA, ymin, tab_min, s);// Inserer l’arete (min, ymin) de poids min a la position « indiceA » de l’arbre.
            indiceA++; // Passer à l’arete suivante de l‘arbre.
        }
    }
    afficherArbreCouvrantMin(tab_ascendant, adjacencePoids, ordre);
}
