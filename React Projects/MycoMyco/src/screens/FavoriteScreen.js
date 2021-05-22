//IMPORTS FRAMEWORKS
import React, { useContext } from 'react'
import { View, Text, ScrollView, Image } from "react-native";
import { StyleSheet, FlatList } from 'react-native';

//IMPORTS DE COMPOSANT
import MushroomItem from '../components/MushroomItem';

//IMPORTS RELATIF AU STYLE
import { SIZE } from '../components/colorThemes';
import { useTheme } from '../../ThemeProvider';

//IMPORT DU CONTEXTE
import FavoriteContext from '../../FavoriteContext'

//IMPORT DES DONNEES
import * as data from '../../back/database/data.json';

//IMPORT DE FONCTION
import DeleteOccurrences from '../helpers/DeleteOccurrences';

// *************************************** PAGE FAVORIS *********************************************

const FavoriteScreen = ({ navigation }) => {

    // Etat, appel du favoris
    const { state_favorite, dispatch_favorite } = useContext(FavoriteContext)
    // Etat, appel du mode sombre / clair
    const { THEME, isDark } = useTheme();

    // fonction qui retourne les champignons à afficher (champignons favoris)
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
        // boucle qui rempli le tableau des champignons à afficher s'ils sont présent et vrai dans le state contenant les favoris
        for (let i = 0; i < all_data.length; i++) {
            if (state_favorite.favorites[all_data[i]["Nom"]] == true)
                mushrooms.push(all_data[i])

        }
        return mushrooms
    }

    // creation de la variable contenant l'ensemble des champignons à afficher
    const mushroomsToDisplay = getMushrooms();

    return (
        <View style={scrollview(THEME)}>
            <View style={styles.header}>
                {/* Affichage du nombre de favoris présents lorsqu'il y en a plusieurs */}
                {mushroomsToDisplay.length > 1 && (
                    <View style={header_text(THEME)}>
                        <Text style={title(THEME)}>{mushroomsToDisplay.length + " types de champignons ajoutés aux favoris"}</Text>
                    </View>)}
                {/* Affichage du nombre de favoris présent lorsqu'il y en a qu'un */}
                {mushroomsToDisplay.length == 1 && (
                    <View style={header_text(THEME)}>
                        <Text style={title(THEME)}>Un type de champignon a été ajouté aux favoris</Text>
                    </View>)}
            </View>
            <ScrollView contentContainerStyle={scrollview(THEME)}>
                {/* Affichage de la liste des champignons favoris s'il en existe */}
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', padding: 10, margin: 36, color: 'grey' }}>Oh oh...vous n'avez ajouté aucun champignon aux favoris !</Text>
                    </View>}

            </ScrollView>
        </View >
    )
}

export default FavoriteScreen

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/

// STYLE DYNAMIQUE : à partir de fonctions 
function title(THEME) {
    return {
        fontWeight: 'bold',
        fontSize: SIZE.H1_BIS,
        color: THEME.TITLE_FAVORITE,
        textAlign: 'center'
    }
}

function scrollview(THEME) {
    return {
        flexGrow: 1,
        backgroundColor: THEME.SCROLLVIEW,
        justifyContent: 'space-between',
        paddingBottom: 80,
    }
}

function header_text(THEME) {
    return {

        alignItems: 'center',
        paddingVertical: 20,
        margin: 16,
        borderRadius: 10,

    }
}

// STYLES STATIQUE: à partir de la constante styles

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: "center",
        marginTop: 50,
        marginBottom: 20,
        color: "white"
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        flex: 0,
    },
    _header_text: {
        height: 60,
        justifyContent: 'center',
        backgroundColor: "white"
    },

})