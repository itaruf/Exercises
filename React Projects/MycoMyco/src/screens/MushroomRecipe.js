//IMPORT FRAMEWORK
import React from 'react'
import { View, Text, ScrollView, Dimensions, LogBox, StyleSheet } from "react-native"
import { useState } from 'react';
//IMPORT DE COMPOSANTS
import dataRecipe from '../../back/database/recipe.json'
import RecipeItem from '../components/RecipeItem';
//IMPORTS RELATIFS AU STYLE
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';
import Carousel from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

LogBox.ignoreLogs(['Warning: Encountered two children with the same key, ']);
//Vue recupérant les conseils et préparations ayant un affichage des recettes.
const MushroomRecipe = ({ navigation }) => {

    //newDataRecipe = Object.values(dataRecipe)
    const [dataRecipe1, setdataRecipe1] = useState(dataRecipe[0])
    // Etat, appel du mode sombre / clair
    const { THEME, isDark } = useTheme();
    // Récupération de la largeur de l'écran 
    const windowWidth = Dimensions.get('window').width;

    LogBox.ignoreLogs(['Warning: Encountered two children with the same key, ']);

    return (
        <ScrollView contentContainerStyle={scrollview(THEME)}>
            {/* Affichage des conseils pour la préparation */}
            <View style={container_hp(THEME)}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.touchable}>
                        <MaterialCommunityIcons style={icon_category_game(THEME)} name="knife" size={35} />
                        <Text style={title_icon(THEME)}>
                            Alors, comment préparer les champignons ?
                        </Text>
                    </View>
                </View>
            </View>
            <View style={container_text_advice(THEME)}>
                <Text style={title_icon(THEME)}>{"\n"}
                    <Text style={text_for_advice(THEME)}>
                        Rien de plus simple:{"\n"}{"\n"}Les champignons sont très fragiles et doivent être rapidement préparés.
                        Occupez-vous de cette tâche dès votre retour. Commencer toujours par les parer, c'est-à-dire retirer les parties abîmées et les bouts terreux. {"\n"}{"\n"}
                        Ceci fait, vous pouvez les nettoyer. Ne les faites jamais tremper dans l'eau : ils s'engorgent et leurs sucs sont dilués.{"\n"}{"\n"}
                        S'ils sont vraiment sales, passez-les rapidement sous un filet d'eau. Sinon préférez les essuyer avec un linge humide ou les gratter (et non les éplucher) à l'aide d'un couteau.
                     </Text>
                </Text>
            </View>
            <View style={container_hp(THEME)}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.touchable} >
                        <MaterialCommunityIcons style={icon_category_game(THEME)} name="stove" size={35} />
                        <Text style={title_icon(THEME)}>
                            Passons aux fourneaux !
                       </Text>
                    </View>
                </View>
            </View>
            <View style={container_text_advice(THEME)}>
                <Text style={title_icon(THEME)}>{"\n"}
                    <Text style={text_for_advice(THEME)}>
                        Si vous voulez les déguster tout de suite, il faut les faire suer.{"\n"}{"\n"}
                        En effet, un champignon sauvage ne se mange jamais cru.{"\n"}{"\n"}
                        Seuls les champignons de Paris auront l'honneur de finir en carpaccio arrosés d'huile d'olive.{"\n"}{"\n"}
                        Tout autre type de champignons, entiers ou émincés, doivent impérativement être cuits dans une poêle, à découvert sur feu moyen, voire fort.
                        Une fois l'eau de végétation évaporée, accommodez-les à votre guise.{"\n"}{"\n"}
                        Laissez aller votre créativité, les champignons sauvages s'accommodent de toutes les façons. À part pour les champignons de Paris, EVITEZ L'AIL !
                     </Text>
                </Text>
            </View>
            <View style={container_hp(THEME)}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.touchable} >
                        <MaterialCommunityIcons style={icon_category_game(THEME)} name="format-list-numbered" size={35} />
                        <Text style={title_icon(THEME)}>
                            Des recettes ? En voici quelques-unes !
                       </Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                {/* Affichage des recettes avec la redirection vers la page Recipe */}
                <Carousel
                    layout={"default"}
                    inactiveSlideShift={5}
                    activeSlideAlignment="start"
                    contentContainerCustomStyle={{ justifyContent: "center", }}
                    sliderWidth={windowWidth}
                    itemWidth={200}
                    useScrollView={true}
                    data={dataRecipe1}
                    autoplay={true}
                    loop={true}
                    keyExtractor={(item) => item["Nom"].toString()}
                    renderItem={({ item }) => <RecipeItem item={item} navigation={navigation} />}
                />
            </View>
        </ScrollView>
    )
}

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

function icon_category_game(THEME) {
    return {
        fontWeight: 'bold',
        color: THEME.ICON_CATEGORY_GAME
    }
}

function container_hp(THEME) {
    return {
        flexDirection: "row",
        margin: 10,
        padding: 20,
        justifyContent: "center",
        backgroundColor: THEME.CONTAINER_HP,
        borderRadius: 15,
        alignItems: "center",
    }
}

function title_icon(THEME) {
    return {
        color: THEME.TITLE_ICON,
        fontSize: SIZE.ICON_H3,
        alignItems: "flex-start",
        paddingHorizontal: 20,
        textAlign: "left",
        fontWeight: "bold",
    }
}

function container_text_advice(THEME) {
    return {
        flexDirection: "column",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        paddingLeft: 5,
        paddingRight: 20,
        paddingBottom: 20,
        marginTop: 0,
        backgroundColor: "transparent",
        borderRadius: 15,
    }
}

function text_for_advice(THEME) {
    return {
        color: THEME.TEXT_FOR_ADVICE,
        fontSize: SIZE.H3,
        padding: 15,
        fontWeight: "normal"
    }
}

// STYLE STATIQUE : à partir de la constante styles
const styles = StyleSheet.create({
    touchable: {
        backgroundColor: "transparent",
        marginBottom: 0,
        borderColor: "lightgrey",
        borderRadius: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    }
});


export default MushroomRecipe

