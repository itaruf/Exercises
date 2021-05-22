//IMPORTS FRAMEWORKS
import React, { useContext } from 'react'
import { View, Text, ScrollView, Image } from "react-native";
import { StyleSheet, FlatList } from 'react-native';

//IMPORT DE COMPOSANT
import MushroomItem from '../components/MushroomItem';

//IMPORT DES DONNEES
import * as data from '../../back/database/data.json';

//IMPORTS RELATIFS AU STYLE
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';

//IMPORT DU CONTEXTE
import HistoryContext from '../../HistoryContext';

//IMPORT DE FONCTION
import DeleteOccurrences from '../helpers/DeleteOccurrences';


// ***************************************PAGE HISTORIQUE *********************************************

const HistoryScreen = ({ navigation }) => {

    // Etat, appel de l'historique
    const { state_history, dispatch } = useContext(HistoryContext)
    // Etat, appel du mode sombre / clair
    const { THEME, isDark } = useTheme();

    // tableau qui contient les champignons à afficher (présent dans l'historique) initilisé vide
    var sortable = [];
    // modification de la forme des données (de objet à tableau) pour les trier et ajout des données dans le tableau sortable 
    for (var name in state_history.consulted) {
        sortable.push([name, state_history.consulted[name]]);
    }

    // triage par date (plus récente à la plus ancienne)
    sortable.sort(function (a, b) {
        return new Date(b[1]) - new Date(a[1]);
    });

    // fonction qui retourne les champignons à afficher (champignons consultés)
    function getMushrooms() {
        // tableau contenant les champignons à afficher initialisé vide
        const mushrooms = []
        // recherche de tous les champignons (especes 16, famille 15, genre 14)
        // retrait des doublons concernant les familles
        let data14 = data[14]
        let data15 = data[15]
        let data16 = data[16]
        const all_data = data14.concat(data15, data16);
        DeleteOccurrences(all_data)
        // boucle qui rempli le tableau des champignons à afficher s'ils sont présent dans le state contenant l'historique
        for (let i = 0; i < sortable.length; i++) {
            for (let j = 0; j < all_data.length; j++) {
                if ((sortable[i][0] == [all_data[j]["Nom"]]) && (sortable[i][1] != undefined))
                    mushrooms.push(all_data[j])
            }
        }
        return mushrooms
    }

    // creation de la variable contenant l'ensemble des champignons à afficher
    const mushroomsToDisplay = getMushrooms();

    return (
        <ScrollView contentContainerStyle={scrollview(THEME)}>
            {/* Affichage de la liste des champignons consultés s'il en existe */}
            {mushroomsToDisplay.length > 0 ?
                <FlatList
                    data={mushroomsToDisplay}
                    keyExtractor={(item) => item["Nom"]}
                    renderItem={({ item }) => <MushroomItem item={item} navigation={navigation} />
                    }
                />
                // sinon quand la liste est vide, affichage d'un message et d'une image
                :
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require("../assets/mushroom_sad.png")}
                        style={{ height: 250, width: 250 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', padding: 10, margin: 36, color: 'grey' }}>Oh oh...vous n'avez consulté aucun champignon récemment !</Text>
                </View>}

        </ScrollView>
    )
}

export default HistoryScreen

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/

// STYLE DYNAMIQUE : à partir de fonctions 
function scrollview(THEME) {
    return {
        flexGrow: 1,
        backgroundColor: THEME.SCROLLVIEW,
        justifyContent: 'space-between',
        paddingBottom: 80,
        paddingVertical: 10,
    }
}


