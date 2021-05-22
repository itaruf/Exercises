#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#define NMIN_INSTANCES 1
#define NMAX_INSTANCES 20
#define NMIN_LIGNES 1
#define NMAX_COLONNES 1000

void remplissage_grille(int T) { //Fonction qui va permettre à l'utilisateur de remplir la ou les grilles et de jouer à la ou aux parties corresppondant au nombre de grilles

    int i,j,l,k, N, M, x;
    double v1 = 10, v2 = 3;
    char c, resultat;
    char tmp = 'a';
    char tab_grille2[NMIN_LIGNES][NMAX_COLONNES];
    char tab_symboles[] = {'.','#','F','D','S'}; //tableau contenant les symboles de l'énoncé

   /* printf("\nles symboles sont :\t"); //vérification
    for (j=0; j<M_COLONNES; j++) {
        printf("%c\t",tab_symboles[j]);
    }*/

    //REMPLISSAGE
    printf("[REMPLISSAGE]");

    for (k=0; k<T; k++) { // On rentre dans la boucle pour remplir les T instance(s)
        resultat = tmp;
        do {
            printf("\n");
            printf("\n(Instance n%d) Valeur de N (Lignes)? : ",k+1); //On demande à l'utilisateur combien de ligne(s) doit contenir sa grille
            scanf("%d",&N); //On stock cette valeur dans une variable N
            printf("N vaut : [%d]\n",N); //Vérification
        } while (N<1 || N>pow(v1,v2)); //Si nécéssaire, on répète l'opération précédente tant que les contraintes ne sont pas respectées

        do {
            printf("\nValeur de M (Colonnes)? : "); //On demande à l'utilisateur combien de colonne(s) doit contenir sa grille
            scanf("%d",&M); //On stock cette valeur dans une variable N
            printf("M vaut : [%d]\n",M); //Vérification
        } while (M<1 || M>pow(v1,v2));//Si nécéssaire, on répète l'opération précédente tant que les contraintes ne sont pas respectées

        for (i=0; i<N; i++) { // On rentre dans la boucle : chaque N lignes suivantes contient M symboles
            printf("\n");

            for (l=0; l<M; l++) {//On rentre dans la boucle pour remplir chacune des colonnes M d'une même ligne N avec des symboles
                printf("\n");
                printf("\nLigne %d et colonne %d ? : ",i,l); //Vérification
                scanf(" %c", &tab_grille2[i][l]);  //On stock cette donnée dans le tableau précédemment déclaré
                printf("Verif : Ligne %d et colonne %d : [%c]",i,l,tab_grille2[i][l]); //Vérification des données entrées
            }
        }
        printf("\n");

        //DÉBUT DU JEU
        printf("\n[MOUVEMENT]");
        printf("\n");

        //do {
        for (i=0; i<N; i++) {
            for (l=0; l<M; l++) {

            //On cherche la zone de départ du prisonnier
            for (i=0; i<N; i++) {
                for (l=0; l<M; l++) {
                    if (tab_grille2[i][l] == 'D')
                    printf("\nZone de depart a la case [%d][%d]",i,l); //vérificatioon
                }
            }
                if (tab_grille2[i][l-1]  == 'F' && tab_grille2[i+1][l] == 'F' && tab_grille2[i][l+1] == 'F') {
                    //printf("\n[N] Le prisonnier est bloque"); //vérification
                    resultat = 'N'; //Si le prisonnier ne peut s'échapper, alors N
                    printf("\n%c",resultat); //Vérification
                    continue;
                }

            }
            //On cherche une zone de sortie près de l'emplacement du prisonnier (si elle existe N,S,E ou O)

            for (l=0; l<M; l++) {
                if (tab_grille2[i][l] == 'S' ||
                    tab_grille2[i+1][l] == 'S' ||
                    tab_grille2[i-1][l] == 'S' ||
                    tab_grille2[i][l+1] == 'S' ||
                    tab_grille2[i][l-1] == 'S') {

                    resultat = 'Y'; //Si le prisionner peut s'échapper, alors Y
                    printf("\n%c",resultat);//Vérification
                    continue;
                }
            }

            //MOUVEMENT PRISONNIER
            //S'il n'y a pas de sortie autour, le prisonnier peut tenter de se déplacer dans les zones libres

                if (tab_grille2[i][l] == '.' ||
                    tab_grille2[i+1][l] == '.' ||
                    tab_grille2[i-1][l] == '.' ||
                    tab_grille2[i][l+1] == '.' ||
                    tab_grille2[i][l-1] == '.') {

                    printf("\nDans quelle direction deplacer le prisonnier ? 1 pour Nord ,2 pour Sud, 3 pour Est, 4 pour Ouest) : ");
                    scanf("%d",&x);

                    switch(x) { //Selon le choix de l'utilisateur, le prisonnier se déplace vers la case associée à ce choix

                        case 1 :
                            if (tab_grille2[i-1][l] != '#' || (tab_grille2[i-1][l] != 'F')) {
                                tab_grille2[i][l] = tab_grille2[i+1][l];
                                break;
                            }

                        case 2 :
                            if (tab_grille2[i+1][l] != '#' || (tab_grille2[i-1][l] != 'F')) {
                                tab_grille2[i][l] = tab_grille2[i+1][l];
                                break;
                            }

                        case 3 :
                            if (tab_grille2[i-1][l+1] != '#'|| (tab_grille2[i-1][l] != 'F')) {
                                tab_grille2[i][l] = tab_grille2[i+1][l];
                                break;
                            }

                        case 4 :
                                if (tab_grille2[i][l-1] != '#'|| (tab_grille2[i-1][l] != 'F')) {
                                tab_grille2[i][l] = tab_grille2[i+1][l];
                                break;
                            }
                        }
                    }
                }

            //FIN MOUVEMENT PRISONNIER

            //PROPAGATION DU FEU
            //Le feu se propage dans les 4 directions après le tour du prisonnier.

             for (i=0; i<N; i++) {
                    if (resultat == 'Y' || resultat == 'N') {continue;} //Si la partie est finie, pas la peine de faire les instructions ci-dessous
                    else {
                        for (l=0; l<M; l++) {

                            if (tab_grille2[i][l] == 'F'){

                                if (tab_grille2[i-1][l] != '#') { //Le feu ne peut pas traverser les murs
                                    tab_grille2[i-1][l] = 'F';
                                    printf("\nLa case [%d][%d] est en flamme",i,l);
                                }

                                if (tab_grille2[i+1][l] != '#') {
                                    tab_grille2[i+1][l] = 'F';
                                    printf("\nLa case [%d][%d] est en flamme",i+1,l);
                                }

                                if (tab_grille2[i][l-1] != '#') {
                                    tab_grille2[i][l-1] = 'F';
                                    printf("\nLa case [%d][%d] est en flamme",i,l-l);
                                }

                                if (tab_grille2[i][l+1] != '#') {
                                    tab_grille2[i][l+1] = 'F';
                                    printf("\nLa case [%d][%d] est en flamme",i,l-l);
                                }
                            }
                        }
                    }
                }  //FIN PROPAGATION DU FEU
            }
        } //while (resultat != 'Y' || resultat != 'N'); l'idée était de répéter les parcours tant que la variable resultat n'a pas pris une de ces valeurs.

int main () {

    int T; // nombre d'instances

    do {
    printf("\nNombre d'instances ? (Entre %d et %d) : ",NMIN_INSTANCES,NMAX_INSTANCES); //On demande à l'utilisateur le nombre de grilles (instances) qu'il souhaite remplir
    scanf("%d",&T); //On stock cette valeur dans T
    } while(T<1 || T>NMAX_INSTANCES); //Si nécéssaire, on répète l'opération précédente tant que les contraintes ne sont pas respectées

    remplissage_grille(T); //On appelle la fonction qui permettra à l'utilisateur de remplir sa grille et de jouer au jeu
    return(EXIT_SUCCESS);

}

/* Exemple d'entrée qui montre le fonctionnement et à taper dans l'ordre :

1
2
2
F
D
S
.

*/
