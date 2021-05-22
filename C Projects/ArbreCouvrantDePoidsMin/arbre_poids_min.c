#include <stdio.h>
#include <stdlib.h>

struct File { // On cree une structure pour representer notre file

    int premier; // variable qui prendra la valeur du sommet en premiere position dans la file
    int dernier; // variable qui prendra la valeur du sommet en derniere position dans la file
    int taille; // variable qui permettra de determiner la taille actuelle de la file (depend du nombre de sommets enfiles).
    int capacite; // variable qui permet de determiner la taille maximale de la file
    int* tab; // tableau dynamique qui va nous servir d'intermediaire
};

struct File* createfile(int capacite) { // Fonction qui va permettre de creer une file de taille egale au nombre de sommets total

    struct File* file = (struct File*)malloc(sizeof(struct File)); // On alloue dynamiquement de l'espace memoire a notre file
    file->capacite = capacite; // On affecte
    file->premier = file->taille = 0; // On initialise la valeur a premiere position a 0 et la taille de la file a 0.
    file->dernier = capacite - 1; // On initialise la valeur a la derniere position
    file->tab = (int*)malloc(file->capacite*sizeof(int)); // On alloue dynamiquement notre tableau dynamique de taille egale au nombre de sommets total
    return file;
}

int fileRemplie(struct File* file) { // Fonction qui va permettre de determiner si la file actuelle a atteint sa capacite maximale ou non

    return (file->taille == file->capacite); // Fin de l'execution si la taille de la file vaut sa capacite maximale
}

int fileVide(struct File* file){ // Fonction qui va permettre de determiner si la file actuelle ne contient aucun element ou non

    return (file->taille == 0); //  Fin de l'execution si la taille de la file est nulle
}

void enfiler(struct File* file, int s) { // Fonction qui va permettre d'enfiler un sommet dans la file. Elle prend en parametre la file actuelle et le sommet s a enfiler

    if (fileRemplie(file)) // Si la file a deja atteint sa capacite maximale, on met fin à l'excution de la fonction
        return;

    file->dernier = (file->dernier + 1) % file->capacite; // Le sommet actuellement a la derniere position prend la valeur du sommet a la position suivante
    file->tab[file->dernier] = s; // La derniere position de la file est attribuee au sommet enfile
    file->taille = file->taille + 1; // La taille de la file est augmentee de 1 suite a l'enfilage

}

int defiler(struct File* file) { // Fonction qui va permettre de defiler un sommet de la file.  Elle prend en parametre la file actuelle.

    if (fileVide(file)) // Si la file actuelle est vide, on met fin a l'execution de la fonction
        return;

    int s = file->tab[file->premier]; // s prend la valeur du sommet a la premiere position de la file
    file->premier = (file->premier + 1) % file->capacite; // La premiere position de la file est attribuee au sommet suivant dans la file
    file->taille = file->taille - 1; // La taille  de la file est reduite de 1 suite au defilage
    return s; // On renvoie la valeur du sommet defile
}

int premier(struct File* file) { // Fonction qui va permettre de renvoyer le sommet en premiere position de la file. Elle prend en parametre la file actuelle

    if (fileVide(file)) // Si la file actuelle est vide, on met fin a l'execution de la fonction
        return;

    return file->tab[file->premier]; // On renvoie la valeur du sommet a la premiere position de la file
}

int dernier(struct File* file) { // Fonction qui va permettre de renvoyer le sommet en derniere de la file. Elle prend en parametre la file actuelle

    if (fileVide(file)) // Si la file actuelle est vide, on met fin a l'execution de la fonction
        return;

    return file->tab[file->dernier]; // On renvoie la valeur du sommet a la derniere position de la file
}

void plusCourtChemin(int **adjacence, int ordre, int s) {  // fonction qui va permettre de trouver les predecesseurs de chaque sommet

    struct file* file = createfile(s); // On cree une file de capacite maximale egale au nombre de sommets
    int x; // variable qui contiendra le sommet de reference entre par l'utilisateur
    int sommetRef; // variable qui contiendra le sommet de reference entre par l'utilisateur
    int marques[s], l[s], pred[s]; //  tableaux qui serviront a determiner respectivement les sommets marques, les longueurs minimales des sommets depuis le sommet de reference et les predecesseurs des sommets
    int tab_chemin[s]; // tableau qui servira a determiner les sommets formant le chemin le plus court depuis le sommet de reference
    int tab_chemin_cas1[2]; // tableau qui servira a determiner les sommets formant le chemin le plus court depuis le sommet de reference

    for (int k=1; k<=s; k++) {
        marques[k] = 0 ; // On initialise les marques a 0
        l[k] = 0; // On initialise les longueurs minimales a 0
        pred[k] = 0; // On initialise les predecesseurs de chaque sommet a 0
    }

    do {
        printf("\nPlus court chemin : ");
        printf("\nEntrez le sommet de r%cf%crence ( =>1 ou <=%d ): ",130, 130,s);
        scanf("%d",&x);
        printf("\nsommetRef : %d", x);

    } while(x <= 0 ||x > s);

    sommetRef = x;
    tab_chemin[1] = sommetRef;
    marques[x] = 1; // On marque le sommet de reference a 1
    enfiler(file, x); // On enfile ce sommet dans la file
    printf("\nSommet %d enfil%c dans la file\n", x, 130);
    printf("\nLe sommet en premi%cre position est %d\n", 138, premier(file));
    printf("Le sommet en derni%cre position est %d\n", 138, dernier(file));

    //DETERMINER LES PREDECESSEURS DE CHAQUE SOMMET ET LA LONGUEUR ENTRE LE SOMMET REF ET LES AUTRES SOMMETS//

    do { // On rentre dans une boucle tant que la file n'est pas vide

        x = premier(file);
       /* printf("\nLe sommet en premiere position est %d\n", premier(file));
        printf("Le sommet en derniere position est %d\n", dernier(file));*/
        defiler(file);
        /*printf("\nLe sommet en premiere position est %d\n", premier(file));
        printf("Le sommet en derniere position est %d\n", dernier(file));*/
        printf("\nOn defile le sommet %d",x);

        for (int i=1; i<=s; i++) { // Pour tous les sommets adjacents au sommet ref
                if (adjacence[x][i] == 1 && !marques[i]) { // Si deux sommets sont adjacents et que le sommet adjacent a x n'est pas encore marque
                    marques[i] = 1; // On marque ce sommet adjacent
                    enfiler(file,i); // On l'enfile dans la file pour la prochaine iteration
                    printf("\nOn enfile le sommet %d dans la file", premier(file));
                    pred[i] = x;  // x est le predecesseur de i le sommet adjacent.
                    //printf("\npred[%d] = %d", i, pred[i]);
                    l[i] = l[x] + 1; //On incremente de 1 la longueur de i le sommet adjacent
                    //printf("\nl[%d] = %d", i, l[i]);
                }
            }
    } while(!(fileVide(file)));

    printf("\n");
    printf("\nR%csultat : ",130);
    for (int i=1; i<=s; i++) {
        printf("\nLongueur %c l'indice %d : %d",133,i, l[i]); // On affiche les longueurs de chaque sommet depuis le sommet de reference
    }

    for (int i=1; i<=s; i++) {
        printf("\npr%cd%ccesseur de %d : %d",130,130,i, pred[i]); // On affiche les predecesseurs de chaque sommet
    }


    // AFFICHER LE CHEMIN LE PLUS COURT DEPUIS UN SOMMET DE REFERENCE //


    // Cas 1 : Le sommet de reference est relie a au moins 1 sommet isole.

    /*for (int k=1; k<=strlen(tab_chemin_cas1); k++) {
         tab_chemin_cas1[k] = 0;

    }


    tab_chemin_cas1[1] = sommetRef;
    for (int j=1; j<=s; j++) {
        if (adjacence[sommetRef][j] == 1) {
            for (int k=1; k<=s; k++) {
                if ((!(pred[k] != j && j != sommetRef))) {
                    tab_chemin_cas1[2]=j;
               }
            }
           if (tab_chemin_cas1[2]!=0) {
            break;
           }
        }
    }



    printf("\nChemin le plus court depuis le sommet de r%cf%crence %d: \n",130,130,sommetRef);
    for (int i=1; i<=2; i++) {
        if (tab_chemin_cas1[i]!=0) {
            printf("%d\t", tab_chemin_cas1[i]);
        }
        else continue;
    }*/

    // Fin cas 1

    // Cas general

   /* for (int i=1; i<=s; i++) {
        for (int j=1; j<=s; j++) {
            if (pred[j]==i && i==sommetRef) {
                tab_chemin[j] = i;
            }
        }
        for (int k=1; k<=s; k++) {
            if (tab_chemin[j] == i) {
            ...
            }
        }
    }*/

    // Fin cas general
}

