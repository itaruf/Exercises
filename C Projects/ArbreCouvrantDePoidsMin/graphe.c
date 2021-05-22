#include <stdio.h>
#include <stdlib.h>

void chargeGraphe (int **adjacence, int ordre, int s) { //Fonction qui va permettre � l'utilisateur de cr�er son graphe et d'en r�aliser la matrice d'adjacence.

    int i,j; //D�claration des variables destin�es � l'incr�mentation/d�cr�mentation des boucles � venir.
    int nb_arete; //D�claration d'une variable qui contiendra le nombre d'ar�tes d�termin� par l'utilisateur.
    int max_arete; //D�claration d'une variable qui contiendra le nombre d'ar�tes possible maximum quel que soit le type de graphe simple cr�e.

    int x, y; // x contient la valeur (et donc l'indice) du sommet � relier � y qui contient la valeur du sommet adjacent.
    max_arete = s*(s-1)/2; //Formule d�terminant le nombre d'ar�tes maximum dans un graphe simple complet pour lequel toute paire de sommets est reli�e par une ar�te

    do { //On entre dans une boucle pour borner les valeurs que l'utilisateur peut entrer.
        printf("\nNombre d'ar%ctes dans le graphe ? (min = 0 / max = %d) \n(Entrez une valeur num%crique) : ",136, max_arete,130);//On demande � l'utilisateur le nombre d'ar�tes que contiendra son graphe.
        scanf("%d",&nb_arete);//On enregistre l'input dans la variable "nb_arete".
    } while (nb_arete>max_arete || nb_arete<0);//Fin de la boucle do.

    do {//On entre dans une boucle pour emp�cher l'utilisateur d'entrer des valeurs invalides � cette construction.
        for (i=1; i<=nb_arete; i++) {//On entre dans une boucle pour lier chacune des ar�tes � une paire de sommets.
            printf("\nEntrez les sommets que relie l\'ar%cte n%c%d (x y) \n(Entrez des valeurs num%criques) : ",136,248,i,130);//On demande � l'utilisateur d'entrer une paire de sommets num�rique � relier par une ar�te.
            scanf("%d %d",&x,&y);//On stock l'input dans les variables "x" et "y".

            if ((x>s || y>s || x<=0 || y<=0)) { //Si la ou les valeurs contenues dans x et/ou y sont invalides alors
                printf("\nAu moins une des deux valeurs est invalide.");//On en avertit l'utilisateur
                printf("\n");
                i--;//Et on re-demande � l'utilisateur d'entrer une paire de sommets num�rique � relier par une ar�te.
            }//Fin du if.

            else { //Sinon, on commence l'�tape du remplissage de la matrice d'adjacence.
                adjacence[x][y] = 1;//On affecte la valeur "1" � la case � l'indice x en ligne (le sommet dont part l'ar�te)et � l'indice y en colonne (le sommet o� arrive l'ar�te).
                adjacence[y][x] = 1;//On affecte la valeur "1" � la case � l'indice y en ligne (le sommet dont part l'ar�te)et � l'indice x en colonne (le sommet o� arrive l'ar�te).
                    //Puisqu'il s'agit d'un graphe simple non-orient�, alors l'affection de la valeur "1" se fait dans les deux sens.
            }//Fin du else n�2.
        } //Fin de la boucle for.
    } while (x>s || y>s || nb_arete<=0 || nb_arete>max_arete);//Fin de la boucle do.
}//Fin de la fonction chargeGraphe.
