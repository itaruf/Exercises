//IMPORTS FRAMEWORKS
import React from 'react'
import { View, Text, StyleSheet, FlatList, LogBox, ScrollView } from "react-native";
import { useScrollToTop } from '@react-navigation/native';
//IMPORT DE COMPOSANT
import MushroomItem from '../components/MushroomItem';

//IMPORT DES DONNEES
import * as data from '../../back/database/data.json';

//IMPORTS RELATIF AU STYLE
import { SIZE } from '../components/colorThemes';
import { useTheme } from '../../ThemeProvider';

//IMPORT DE FONCTION
import SortAlphabetically from '../helpers/SortAlphabetically'

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);


//*************************************** PAGE AIDE MEMOIRE**********************************************

// fonction qui retourne les espèces à afficher 
function getSpecies() {
    // tableau contenant les champignons à afficher initialisé vide
    const species = []
    // recherche de toutes les espèces, triés par ordre alphabétique
    const dataKey = data[16].sort(SortAlphabetically)

    // boucle qui rempli le tableau des espèces à afficher si leurs champs "Aide-mémoire" est à OUI
    for (let i = 0; i < dataKey.length; i++) {
        if (dataKey[i]["Aide-mémoire"] == "Oui") {
            species.push(dataKey[i])
        }
    }
    return species
}

// creation de la variable contenant l'ensemble des champignons à afficher
const speciesToDisplay = getSpecies()

const MemoryAid = ({ navigation }) => {

    // Etat, appel du mode sombre / clair
    const { THEME, isDark } = useTheme();
    const ref = React.useRef(null);
    useScrollToTop(ref);

    return (
        <View style={{ flex: 1, backgroundColor: "transparent", paddingBottom: 80 }}>
            {/* Affichage du nombre d'espèces présente*/}
            <View style={header(THEME)}>
                <View style={{ flex: 0, textAlign: "center", justifyContent: "center", backgroundColor: "transparent" }}>
                    <Text style={title(THEME)}>Aide-mémoire !</Text>
                </View>
            </View>
            <View style={{ backgroundColor: THEME.SCROLLVIEW }}>
                <Text style={subtitle(THEME)}>{"Les " + speciesToDisplay.length + " espèces les plus fréquentes: "}</Text>
                <ScrollView ref={ref} contentContainerStyle={scrollview(THEME)}>
                    {/* Affichage des espèces */}
                    <View style={{ flex: 1, paddingTop: 0, paddingBottom: 80, textAlign: "center", justifyContent: "center", backgroundColor: "transparent", borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                        <FlatList
                            data={speciesToDisplay}
                            keyExtractor={(item) => item["Nom"]}
                            renderItem={({ item }) => <MushroomItem item={item} navigation={navigation} />
                            }
                        />
                    </View>
                </ScrollView >
            </View>
        </View>
    )
}


export default MemoryAid

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/

// STYLE DYNAMIQUE : à partir de fonctions 

function scrollview(THEME) {
    return {
        flexGrow: 1,
        backgroundColor: THEME.SCROLLVIEW,
        justifyContent: 'space-between',
        paddingBottom: 80
    }
}

function header(THEME) {
    return {
        flex: 0,
        backgroundColor: THEME.HEADER,
    }
}

function title(THEME) {
    return {
        fontSize: SIZE.H1,
        textAlign: "center",
        marginTop: 50,
        marginBottom: 20,
        color: THEME.TITLE
    }
}

function subtitle(THEME) {
    return {
        fontSize: SIZE.H1_BIS,
        textAlign: "center",
        marginTop: 50,
        marginBottom: 20,
        color: THEME.TITLE_FAVORITE,
        fontWeight: "bold"
    }
}

// STYLE STATIQUE : à partir de la constante styles

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 70,
    },
    header: {
        height: 60,
        justifyContent: 'center',
        marginHorizontal: 10,
    }

})