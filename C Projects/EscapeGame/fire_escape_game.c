#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#define NMIN_INSTANCES 1
#define NMAX_INSTANCES 20
#define NMIN_LIGNES 1
#define NMAX_COLONNES 1000

void remplissage_grille(int T) { //Fonction qui va permettre � l'utilisateur de remplir la ou les grilles et de jouer � la ou aux parties corresppondant au nombre de grilles

    int i,j,l,k, N, M, x;
    double v1 = 10, v2 = 3;
    char c, resultat;
    char tmp = 'a';
    char tab_grille2[NMIN_LIGNES][NMAX_COLONNES];
    char tab_symboles[] = {'.','#','F','D','S'}; //tableau contenant les symboles de l'�nonc�

   /* printf("\nles symboles sont :\t"); //v�rification
    for (j=0; j<M_COLONNES; j++) {
        printf("%c\t",tab_symboles[j]);
    }*/

    //REMPLISSAGE
    printf("[REMPLISSAGE]");

    for (k=0; k<T; k++) { // On rentre dans la boucle pour remplir les T instance(s)
        resultat = tmp;
        do {
            printf("\n");
            printf("\n(Instance n%d) Valeur de N (Lignes)? : ",k+1); //On demande � l'utilisateur combien de ligne(s) doit contenir sa grille
            scanf("%d",&N); //On stock cette valeur dans une variable N
            printf("N vaut : [%d]\n",N); //V�rification
        } while (N<1 || N>pow(v1,v2)); //Si n�c�ssaire, on r�p�te l'op�ration pr�c�dente tant que les contraintes ne sont pas respect�es

        do {
            printf("\nValeur de M (Colonnes)? : "); //On demande � l'utilisateur combien de colonne(s) doit contenir sa grille
            scanf("%d",&M); //On stock cette valeur dans une variable N
            printf("M vaut : [%d]\n",M); //V�rification
        } while (M<1 || M>pow(v1,v2));//Si n�c�ssaire, on r�p�te l'op�ration pr�c�dente tant que les contraintes ne sont pas respect�es

        for (i=0; i<N; i++) { // On rentre dans la boucle : chaque N lignes suivantes contient M symboles
            printf("\n");

            for (l=0; l<M; l++) {//On rentre dans la boucle pour remplir chacune des colonnes M d'une m�me ligne N avec des symboles
                printf("\n");
                printf("\nLigne %d et colonne %d ? : ",i,l); //V�rification
                scanf(" %c", &tab_grille2[i][l]);  //On stock cette donn�e dans le tableau pr�c�demment d�clar�
                printf("Verif : Ligne %d et colonne %d : [%c]",i,l,tab_grille2[i][l]); //V�rification des donn�es entr�es
            }
        }
        printf("\n");

        //D�BUT DU JEU
        printf("\n[MOUVEMENT]");
        printf("\n");

        //do {
        for (i=0; i<N; i++) {
            for (l=0; l<M; l++) {

            //On cherche la zone de d�part du prisonnier
            for (i=0; i<N; i++) {
                for (l=0; l<M; l++) {
                    if (tab_grille2[i][l] == 'D')
                    printf("\nZone de depart a la case [%d][%d]",i,l); //v�rificatioon
                }
            }
                if (tab_grille2[i][l-1]  == 'F' && tab_grille2[i+1][l] == 'F' && tab_grille2[i][l+1] == 'F') {
                    //printf("\n[N] Le prisonnier est bloque"); //v�rification
                    resultat = 'N'; //Si le prisonnier ne peut s'�chapper, alors N
                    printf("\n%c",resultat); //V�rification
                    continue;
                }

            }
            //On cherche une zone de sortie pr�s de l'emplacement du prisonnier (si elle existe N,S,E ou O)

            for (l=0; l<M; l++) {
                if (tab_grille2[i][l] == 'S' ||
                    tab_grille2[i+1][l] == 'S' ||
                    tab_grille2[i-1][l] == 'S' ||
                    tab_grille2[i][l+1] == 'S' ||
                    tab_grille2[i][l-1] == 'S') {

                    resultat = 'Y'; //Si le prisionner peut s'�chapper, alors Y
                    printf("\n%c",resultat);//V�rification
                    continue;
                }
            }

            //MOUVEMENT PRISONNIER
            //S'il n'y a pas de sortie autour, le prisonnier peut tenter de se d�placer dans les zones libres

                if (tab_grille2[i][l] == '.' ||
                    tab_grille2[i+1][l] == '.' ||
                    tab_grille2[i-1][l] == '.' ||
                    tab_grille2[i][l+1] == '.' ||
                    tab_grille2[i][l-1] == '.') {

                    printf("\nDans quelle direction deplacer le prisonnier ? 1 pour Nord ,2 pour Sud, 3 pour Est, 4 pour Ouest) : ");
                    scanf("%d",&x);

                    switch(x) { //Selon le choix de l'utilisateur, le prisonnier se d�place vers la case associ�e � ce choix

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
            //Le feu se propage dans les 4 directions apr�s le tour du prisonnier.

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
        } //while (resultat != 'Y' || resultat != 'N'); l'id�e �tait de r�p�ter les parcours tant que la variable resultat n'a pas pris une de ces valeurs.

int main () {

    int T; // nombre d'instances

    do {
    printf("\nNombre d'instances ? (Entre %d et %d) : ",NMIN_INSTANCES,NMAX_INSTANCES); //On demande � l'utilisateur le nombre de grilles (instances) qu'il souhaite remplir
    scanf("%d",&T); //On stock cette valeur dans T
    } while(T<1 || T>NMAX_INSTANCES); //Si n�c�ssaire, on r�p�te l'op�ration pr�c�dente tant que les contraintes ne sont pas respect�es

    remplissage_grille(T); //On appelle la fonction qui permettra � l'utilisateur de remplir sa grille et de jouer au jeu
    return(EXIT_SUCCESS);

}

/* Exemple d'entr�e qui montre le fonctionnement et � taper dans l'ordre :

1
2
2
F
D
S
.

*/
