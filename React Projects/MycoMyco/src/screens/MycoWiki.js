//IMPORTS FRAMEWORKS
import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, ScrollView, TextInput, Image, } from 'react-native';
import { LogBox } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//IMPORTS DE COMPOSANT 
import MushroomItem from '../components/MushroomItem';

//IMPORT DES DONNEES
import * as data from "../../back/database/data.json"

//IMPORT DE FONCTION
import DeleteOccurrences from "../helpers/DeleteOccurrences"
import SortAlphabetically from '../helpers/SortAlphabetically'

//IMPORTS RELATIF AU STYLE
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';


LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

// *************************************** PAGE MYCOWIKI*********************************************
const MycoWiki = ({ navigation }) => {

    //Etat, appel du mode sombre / clair
    const { THEME, isDark } = useTheme();

    //constante permettant de remonter au début de la scroll
    const ref = React.useRef(null);
    useScrollToTop(ref);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    // tableau contenant les champignons à afficher initialisé vide
    const array = []

    //****Utilisation de la fonction de trie par ordre alphabétique pour chaque tableau afin d'afficher les éléments dans la liste**************//
    array.push({ ...data[14] })//ajout du tableau des genres trié dans un tableau vide
    array.push({ ...data[15] }) //ajout du tableau des familles trié dans un tableau vide
    array.push({ ...data[16] }) //ajout du tableau des espèces trié dans un tableau vide

    //****Utilisation de la fonction retirant les doublons pour chaque tableau aprés modification du json (l'ajout des doublons est fait afin de réaliser le chemin divergent dans l'identification)**************//

    array[0] = (DeleteOccurrences(Object.values(array[0]))).sort(SortAlphabetically)
    array[1] = (DeleteOccurrences(Object.values(array[1]))).sort(SortAlphabetically)
    array[2] = (DeleteOccurrences(Object.values(array[2]))).sort(SortAlphabetically)

    //Etat: recharge des objets contenus dans chaque tableau
    const [genres] = useState(Object.values(array[0]))
    //genres.sort(SortAlphabetically)
    const [familles] = useState(Object.values(array[1]))
    //familles.sort(SortAlphabetically)
    const [especes] = useState(Object.values(array[2]))
    //especes.sort(SortAlphabetically)

    //recharge de la recherche pour la vider
    const [search, setSearch] = useState('');

    //on créé des recharges des tableaux qui permeteant le filtrage pour chaque catégorie
    const [filteredDataSourceGenus, setFilteredDataSourceGenus] = useState(genres);
    const [masterDataSourceGenus] = useState(genres);

    const [filteredDataSourceFamily, setFilteredDataSourceFamily] = useState(familles);
    const [masterDataSourceFamily] = useState(familles);

    const [filteredDataSourceSpecie, setFilteredDataSourceSpecie] = useState(especes);
    const [masterDataSourceSpecie] = useState(especes);

    var removeAccents = require('remove-accents');

    /**
     * Fonction qui permet une recherche filtrée en fonction du nom dans le tableau des familles 
     * @param {string} text Texte entré dans la barre de recherche
     */
    const searchFamily = (text) => {

        if (text) {
            //variable qui prend le texte entré 
            let textData
            //variable qui prend le nom de chaque objet de la liste des familles 
            let itemData
            const newData = masterDataSourceFamily.filter(
                /**
                 * Fonction qui fait la comparaison
                 * @param {object} item 
                 */
                function (item) {
                    //comparaison entre le texte entré dans la barre de recherche et chaque nom itemData de chaque objet en retirant les accents et les majuscules
                    if ((removeAccents((item["Nom"].toLowerCase()).replace(/ /g, ''))).includes(removeAccents((text.toLowerCase())).replace(/ /g, ''))) {
                        itemData = item["Nom"]
                            ? removeAccents((item["Nom"].toLowerCase()).replace(/ /g, ''))
                            : ''.toLowerCase();
                        textData = removeAccents((text.toLowerCase()).replace(/ /g, ''));
                        //renvoi vrai si le nom contient la lettre entrée
                        return (itemData.indexOf(textData) > -1);
                    }
                });
            //mise à jour de la recherche
            setFilteredDataSourceFamily(newData);
            setSearch(text);
        } else {
            setFilteredDataSourceFamily(masterDataSourceFamily);
            setSearch(text);
        }
    };

    /**
     * Fonction qui permet une recherche filtrée en fonction du nom dans le tableau des genres
     * @param {string} text Texte entré dans la barre de recherche
     */
    const searchGenus = (text) => {
        if (text) {
            //variable qui prend le texte entré 
            let textData
            //variable qui prend le nom de chaque objet de la liste des familles 
            let itemData
            const newData = masterDataSourceGenus.filter(
                function (item) {
                    //comparaison entre le texte entré dans la barre de recherche et chaque nom itemData de chaque objet en retirant les accents et les majuscules
                    if ((removeAccents((item["Nom"].toLowerCase()).replace(/ /g, ''))).includes(removeAccents((text.toLowerCase())).replace(/ /g, ''))) {
                        itemData = item["Nom"]
                            ? removeAccents((item["Nom"].toLowerCase()).replace(/ /g, ''))
                            : ''.toLowerCase();
                        textData = removeAccents((text.toLowerCase()).replace(/ /g, ''));
                        //renvoi vrai si le nom contient la lettre entrée
                        return (itemData.indexOf(textData) > -1);
                    }
                });
            //mise à jour de la recherche
            setFilteredDataSourceGenus(newData);
            setSearch(text);
        }
        else {
            setFilteredDataSourceGenus(masterDataSourceGenus);
            setSearch(text);
        }
    };

    /**
     * Fonction qui permet une recherche filtrée en fonction du nom français et du nom latin dans le tableau des espèces
     * @param {string} text Texte entré dans la barre de recherche
     */
    const searchSpecie = (text) => {

        if (text) {
            //variable qui prend le texte entré 
            let textData
            //variable qui prend le nom de chaque objet de la liste des familles 
            let itemData
            const newData = masterDataSourceSpecie.filter(
                function (item) {
                    //comparaison entre le texte entré dans la barre de recherche et chaque nom français itemData de chaque objet en retirant les accents et les majuscules
                    if ((removeAccents((item["Nom"].toLowerCase()).replace(/ /g, ''))).includes(removeAccents((text.toLowerCase())).replace(/ /g, ''))) {
                        itemData = item["Nom"]

                            ? removeAccents((item["Nom"].toLowerCase()).replace(/ /g, ''))
                            : ''.toLowerCase();
                        textData = removeAccents((text.toLowerCase()).replace(/ /g, ''));
                        //renvoi vrai si le nom contient la lettre entrée
                        return (itemData.indexOf(textData) > -1);
                    }
                    //comparaison entre le texte entré dans la barre de recherche et chaque nom latin itemData de chaque objet en retirant les accents et les majuscules
                    if ((removeAccents((item["Latin"].toLowerCase()).replace(/ /g, ''))).includes(removeAccents((text.toLowerCase())).replace(/ /g, ''))) {
                        itemData = item["Latin"]

                            ? removeAccents((item["Latin"].toLowerCase()).replace(/ /g, ''))
                            : ''.toLowerCase();
                        textData = removeAccents((text.toLowerCase()).replace(/ /g, ''));
                        //renvoi vrai si le nom contient la lettre entrée
                        return (itemData.indexOf(textData) > -1);
                    }
                });
            //mise à jour de la recherche
            setFilteredDataSourceSpecie(newData);
            setSearch(text);
        }
        else {
            setFilteredDataSourceSpecie(masterDataSourceSpecie);
            setSearch(text);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
            <View style={header(THEME)}>
                <View style={{ flex: 0, textAlign: "center", justifyContent: "center", backgroundColor: "transparent" }}>
                    <Text style={title_header(THEME)}>MycoWiki !</Text>
                </View>
                {/* Affichage de la barre de recherche */}
                <View style={SectionStyle(THEME)}>
                    <MaterialCommunityIcons style={button_search(THEME)} name="magnify" size={40} />
                    <TextInput
                        style={textInputStyle(THEME)}
                        onChangeText={(text) => {
                            searchFamily(text);
                            searchGenus(text);
                            searchSpecie(text);
                        }}
                        selectionColor={isDark ? "white" : "black"}
                        value={search}
                        underlineColorAndroid="transparent"
                        placeholder="Rechercher une famille, un genre ou une espèce"
                        placeholderTextColor={isDark ? "grey" : "grey"}
                    />
                </View>
            </View>

            <ScrollView ref={ref} contentContainerStyle={scrollview(THEME)}>
                {/* Affichage de la liste des familles */}
                <View style={{ flex: 1, paddingBottom: 80, textAlign: "center", justifyContent: "center", backgroundColor: "transparent", borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                    {filteredDataSourceFamily.length != 0 && (
                        <View>
                            <Text style={title_section(THEME)}>
                                Liste des familles
                             </Text>
                            <FlatList
                                data={filteredDataSourceFamily}
                                keyExtractor={(item) => item["Nom"].toString()}
                                renderItem={({ item }) => <MushroomItem item={item} navigation={navigation} />}
                            />
                        </View>)}
                    {filteredDataSourceGenus.length != 0 && (

                        <View>
                            {/* Affichage de la liste des genres */}
                            <Text style={title_section(THEME)}>
                                Liste des genres
                            </Text>
                            <FlatList
                                data={filteredDataSourceGenus}
                                keyExtractor={(item) => item["Nom"].toString()}
                                renderItem={({ item }) => <MushroomItem item={item} navigation={navigation} />}
                            />
                        </View>)}
                    {filteredDataSourceSpecie.length != 0 && (
                        <View>
                            {/* Affichage de la liste des espèces */}
                            <Text style={title_section(THEME)}>
                                Liste des espèces
                            </Text>
                            <FlatList
                                data={filteredDataSourceSpecie}
                                keyExtractor={(item) => item["Nom"].toString()}
                                renderItem={({ item }) => <MushroomItem item={item} navigation={navigation} />}
                            />
                        </View>)}
                    {/* Affichage d'une image et un commentaire lorsque le texte entré n'existe pas dans la base de données  */}
                    {filteredDataSourceFamily.length == 0 && filteredDataSourceGenus.length == 0 && filteredDataSourceGenus.length == 0 && (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require("../assets/mushroom_sad.png")}
                                style={{ height: 250, width: 250, marginTop: 50 }} />
                            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', padding: 10, margin: 36, color: 'grey' }}>Oh oh...aucun champignon ne correspond à votre recherche !</Text>
                        </View>
                    )}
                </View>
            </ScrollView >
        </View>
    );

};

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/

// STYLE DYNAMIQUE : à partir de fonctions
function scrollview(THEME) {
    return {
        flexGrow: 1,
        backgroundColor: THEME.SCROLLVIEW,
        justifyContent: 'space-between',
    }
}

function header(THEME) {
    return {
        flex: 0,
        backgroundColor: THEME.HEADER,
    }
}
function title_header(THEME) {
    return {
        fontSize: SIZE.H1,
        textAlign: "center",
        marginTop: 50,
        marginBottom: 20,
        color: THEME.TITLE
    }
}

function SectionStyle(THEME) {
    return {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: THEME.CONTAINER_BORDER,
        height: 40,
        borderRadius: 10,
        margin: 10,
        backgroundColor: THEME.SEARCH_BACKGROUND,
    }
}

function title_section(THEME) {
    return {
        fontSize: SIZE.H1_BIS,
        marginTop: 20,
        marginBottom: 20,
        color: THEME.TITLE_SECTION,
        textAlign: "center",
        fontWeight: "bold",
        flex: 2,
    }

}

function textInputStyle(THEME) {
    return {
        height: 40,
        borderWidth: 0.5,
        marginRight: 10,
        borderColor: THEME.BORDERCOLOR_TEXTINPUT,
        color: THEME.TEXT_INPUT,
        flex: 1.5,
    }
}

function button_search(THEME) {
    return {
        color: THEME.SEARCH_ICON,
        fontSize: SIZE.H1_BIS,
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        flex: 0
    }
}

export default MycoWiki;