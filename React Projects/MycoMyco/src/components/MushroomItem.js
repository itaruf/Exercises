//IMPORTS FRAMEWORKS
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, LogBox } from 'react-native';

//IMPORTS DES ICONS
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

//IMPORTS DE COMPOSANTS
import ItemSeparatorView from '../components/ItemSeparatorView'

//IMPORTS RELATIF AUX DES DONNEES
import * as data from "../../back/database/data.json"
import Images from "../components/Images.js"

// IMPORTS RELATIFS AUX STYLES
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';

// IMPORTS CONTEXTES
import FavoriteContext from '../../FavoriteContext'
import HistoryContext from '../../HistoryContext'

// IMPORT RELATIF AU STOCKAGE
import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

const MushroomItem = ({ item, navigation }) => {
    // Etat, appel du mode sombre / clair
    const { THEME, isDark } = useTheme();
    // nom du champignon
    const mushroomName = item["Nom"]
    // Etat, appel des favoris
    const { state_favorite, dispatch_favorite } = useContext(FavoriteContext)
    // Etat, appel de l'historique
    const { state_history, dispatch_history } = useContext(HistoryContext)
    // champignon favori ou non
    const isFavorite = state_favorite.favorites[mushroomName];

    // stockage interne des données : mode sauvegarde
    useEffect(() => {
        return (() => {
            (async () => {
                try {
                    //sauvegarde des données
                    await AsyncStorage.setItem('@myco_history', JSON.stringify(state_history.consulted))
                } catch (e) {
                    //lance une erreur
                    console.log("Erreur :", e)
                }
            })()
        })
    }, [])

    //fonction qui permet la redirection vers les pages display en fonction de la catégorie( genre, famille ou espèce)
    function getNavigation(item) {
        // Pour les espèces
        for (let i = 0; i < Object.keys(data[16]).length; i++) {
            if (data[16][i]["Nom"] == item["Nom"])
                return (
                    navigation.navigate("Espèces",
                        {
                            item: item
                        }
                    )
                )
        }

        for (let i = 0; i < Object.keys(data[14]).length; i++) {
            // Pour les genres
            if (data[14][i]["Nom"] == item["Nom"])
                return (
                    navigation.navigate("Genres",
                        {
                            item: item
                        }
                    )
                )
        }

        for (let i = 0; i < Object.keys(data[15]).length; i++) {
            // Pour les familles
            if (data[15][i]["Nom"] == item["Nom"])
                return (
                    navigation.navigate("Familles",
                        {
                            item: item
                        }
                    )
                )
        }
    }

    //fonction qui retourne l'icone de comestibilité en fonction de la comestibilité
    function getEdibility(item) {

        return (
            item["Comestibilité"] == "Comestible" ?
                <View>
                    <FontAwesome5 style={Edibility_icon(THEME)} color={THEME.COMESTIBLE_ICON} name={"utensils"} />
                </View>
                : item["Comestibilité"] == "Toxique" ?
                    < View >
                        <FontAwesome5 style={Edibility_icon(THEME)} color={THEME.TOXIQUE_ICON} name={"skull-crossbones"} />
                    </View >
                    : item["Comestibilité"] == "Sans intérêt" ?
                        <View>
                            <FontAwesome5 style={Edibility_icon(THEME)} color={THEME.SANS_INTERET_ICON} name={"tired"} />
                        </View>
                        : null
        )
    }

    return (
        <View>
            {/* -----------------------------Item avec navigation------------------------------------------ */}
            {navigation ?
                <View>
                    <TouchableOpacity onPress={() => {
                        getNavigation(item)
                        // Ajout du champignon dans l'historique
                        dispatch_history({ type: 'ADD', payload: { mushroomName } })
                    }}
                    >
                        <View style={container(THEME)}>
                            {/* Affichage de l'image du champignon */}
                            <View style={styles.image_container}>
                                <Image style={styles.image} source={Images(item["Nom"])} />
                            </View>
                            {/* si le champignon est ajouté aux favoris, affichage d'une icone coeur rouge*/}
                            {isFavorite && (<View>
                                <FontAwesome style={{ position: 'absolute', top: 0, left: -153 }}
                                    name={isFavorite ? "heart" : "heart-o"}
                                    size={SIZE.ICON_H1}
                                    color={isFavorite ? 'red' : "transparent"}
                                />
                            </View>)}
                            <View style={styles.contents}>
                                <View style={{ flexDirection: 'row' }}>
                                    {/* Affichage des noms en francais et en latin */}
                                    <View style={styles.header}>
                                        <Text numberOfLines={0} style={name(THEME)}>{item["Nom"]}{item["Latin"] ? "\n" : null}
                                            <Text numberOfLines={0} style={latin(THEME)}>{item["Latin"]}{"\n"}</Text>
                                        </Text>
                                        {/* Affichage de la description d'un champignon */}
                                        <Text numberOfLines={4} style={Mushroom_subdescribe(THEME)}>{item["Information"]}</Text>
                                    </View>
                                    {/* Affichage de l'icone de comestibilité d'un champignon */}
                                    {getEdibility(item)}
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Barre de séparation entre chaque item */}
                    <ItemSeparatorView />
                </View>
                :
                // -----------------------------Item sans navigation------------------------------------------ 
                <View>
                    <View style={container(THEME)}>
                        {/* Affichage de l'image du champignon */}
                        <View style={styles.image_container}>
                            <Image style={styles.image} source={Images(item["Nom"])} />
                        </View>
                        {/* si le champignon est ajouté aux favoris, affichage d'une icone coeur rouge*/}
                        {isFavorite && (<View>
                            <FontAwesome style={{ position: 'absolute', top: 0, left: -156 }}
                                name={isFavorite ? "heart" : "heart-o"}
                                size={SIZE.ICON_H1}
                                color={isFavorite ? 'red' : "transparent"}
                            />
                        </View>)}
                        <View style={styles.contents}>
                            <View style={{ flexDirection: 'row' }}>
                                {/* Affichage des noms en francais et en latin */}
                                <View style={styles.header}>
                                    <Text numberOfLines={0} style={name(THEME)}>{item["Nom"]}{item["Latin"] ? "\n" : null}
                                        <Text numberOfLines={0} style={latin(THEME)}>{item["Latin"]}{"\n"}</Text>
                                    </Text>
                                    {/* Affichage de la description d'un champignon */}
                                    <Text numberOfLines={4} style={Mushroom_subdescribe(THEME)}>{item["Information"]}</Text>
                                </View>
                                {/* Affichage de l'icone de comestibilité d'un champignon */}
                                {getEdibility(item)}
                            </View>
                        </View>
                    </View>
                    {/* Barre de séparation entre chaque item */}
                    <ItemSeparatorView />
                </View>
            }
        </View>
    )
}

export default MushroomItem;

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/

// STYLE DYNAMIQUE : à partir de fonctions 
function container(THEME) {
    return {
        flexDirection: 'row',
        backgroundColor: THEME.CONTAINER_HP,
        borderRadius: 10,
        borderColor: THEME.CONTAINER_BORDER,
        borderWidth: 1,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,
        marginTop: 8
    }
}

function Edibility_icon(THEME) {
    return {
        fontSize: SIZE.ICON_H2,
        marginTop: 5,
    }
}

function Mushroom_subdescribe(THEME) {
    return {
        color: THEME.MUSHROOM_SUBDESCRIBE,
        fontSize: SIZE.H3,
        alignItems: "flex-start",
        fontWeight: "normal",
        fontStyle: "normal",
        paddingLeft: 20,
    }
}

function latin(THEME) {
    return {
        color: THEME.LATIN,
        fontSize: SIZE.H3,
        alignItems: "flex-start",
        fontStyle: "italic",
    }
}

function name(THEME) {
    return {
        color: THEME.NAME,
        fontSize: SIZE.H2,
        paddingHorizontal: 20,
        paddingRight: 10,
        fontWeight: "bold"
    }
}

// STYLE STATIQUE : à partir de la constance styles
const styles = StyleSheet.create({

    latin: {
        fontStyle: 'italic',
        fontSize: 15,
        paddingLeft: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 19,
    },
    image_container: {
        padding: 10,
    },
    image: {
        height: 150,
        width: 130,
        borderRadius: 10,
    },
    contents: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 10,
        marginEnd: 10,
    },
    header: {
        flexDirection: 'column',
        flex: 1,

    },
    description: {
        paddingTop: 10,
        flex: 1,
    }
})