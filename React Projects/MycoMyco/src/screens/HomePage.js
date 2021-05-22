//IMPORTS FRAMEWORKS
import React, { useRef, useState } from 'react'
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, LogBox, Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';

//IMPORT DES ICONS
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { AntDesign } from 'react-native-vector-icons';

//IMPORTS RELATIFS AU STYLE
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';
import { Switch } from '../components/Switch';

//IMPORT DE COMPOSANTS
import ItemSeparatorView from '../components/ItemSeparatorView'
import data from "../../back/database/data.json"
import RecipeItem from '../components/RecipeItem';
import DeleteOccurrences from "../helpers/DeleteOccurrences"

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);
LogBox.ignoreLogs(['Warning: Encountered two children with the same key, ']);

const HomePage = ({ navigation }) => {

    // Etat, appel du favoris
    const { THEME, isDark } = useTheme();

    // Récupération des données des champignons
    const mushrooms = (data[14]).concat(data[15]).concat(data[16])
    DeleteOccurrences(mushrooms)
    // Récupération des dimensions de l'écran
    let windowWidth = Dimensions.get('window').width;
    let [x, setX] = useState(0)
    let [y, setY] = useState(0)
    let windowHeight = Dimensions.get('window').height
    const scrollViewRef = useRef();

    const slowlyScrollDown = () => {
        scrollViewRef.current.scrollTo({ x: 0, y: y, animated: true });
    }

    const slowlyScrollDown2 = () => {
        scrollViewRef.current.scrollTo({ x: 0, y: windowHeight * 1.5, animated: true });
    }

    const slowlyScrollTop = () => {
        scrollViewRef.current.scrollTo({ x: windowHeight * 1.5, y: 0, animated: true });
    }

    function setMeasure(layout) {
        setY(layout.y / 1.5)
    }
    return (
        <ScrollView ref={scrollViewRef} persistentScrollbar={true} contentContainerStyle={scrollview(THEME)}>
            {/* En tête de la page */}
            <View style={header(THEME)}>
                <View style={{ flex: 0, textAlign: "center", justifyContent: "center", backgroundColor: "transparent" }}>
                    <Text style={title(THEME)}>MycoMyco</Text>
                </View>
            </View>
            <StatusBar backgroundColor={THEME.STATUSBAR} />
            {/* Affichage du switch pour changer le mode sombre / clair */}
            <View style={{ flexDirection: "row-reverse" }}>
                <View style={{ alignItems: "flex-end", backgroundColor: "transparent", width: 50 }} >
                    <Switch />
                </View>
            </View>

            <View style={big_container(THEME)}>
                <View style={{ flexDirection: 'row', margin: 5, flex: 1 }}>
                    {/* Affichage du logo champignon  */}
                    <Image
                        source={require("../assets/mushroom.png")}
                        style={{ height: 130, width: 130, margin: 20, borderRadius: 100, }} />
                    {/* Message de bienvenue */}
                    <View style={{ flex: 1, paddingTop: 20 }}>
                        <View style={{ flexDirection: "row", backgroundColor: "transparent" }} >
                            <Text style={text_intro(THEME)}>Bienvenue ! </Text>
                            <TouchableOpacity
                                style={{
                                    color: THEME.TITLE_CATEGORY,
                                    justifyContent: "center", alignItems: "center", paddingHorizontal: 10
                                }}
                                onPress={
                                    slowlyScrollDown
                                }>
                                <AntDesign
                                    name={"down"}
                                    size={20.5}
                                    color={THEME.SUBTEXT_INTRO}
                                />
                            </TouchableOpacity>

                        </View>
                        <Text style={[subtext_intro(THEME), { fontSize: 16, fontWeight: 'normal' }]}>{"\n"}Voici MycoMyco, l'application qui te permet d'identifier un champignon !</Text>
                    </View>
                </View>


                {/* ---------------------------------- Message d'avertissement------------------------ */}

                <View style={container_hp(THEME)}>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                        <Ionicons style={icon_category(THEME)} name="alert-outline" size={50} color={'black'} />
                        <View style={styles.touchable}>
                            <Text style={title_icon(THEME)}>
                                <Text style={subtitle_icon(THEME)}>L'application n'est pas responsable de vos actions. Soyez vigilants dans l'identification de votre champignon.{"\n"}{"\n"}Il est recommandé de consulter un pharmacien afin d'avoir des informations sûres concernant la comestibilité ou non d'un champignon. </Text>
                            </Text>
                        </View>
                    </View>
                </View>
                {/* ---------------------------------- Affichage des photos de champignons ----------------------- */}

                <View style={{ paddingTop: 15, marginTop: 15, paddingHorizontal: 20 }}>
                    <Carousel
                        layout={"default"}
                        inactiveSlideShift={5}
                        activeSlideAlignment="start"
                        inactiveSlideOpacity={0.7}
                        contentContainerCustomStyle={{ justifyContent: "center", }}
                        sliderWidth={windowWidth}
                        itemWidth={200}
                        useScrollView={true}
                        data={mushrooms}
                        autoplay={true}
                        loop={true}
                        keyExtractor={(item) => item["Nom"].toString()}
                        renderItem={({ item }) => <RecipeItem item={item} />}
                    />
                </View>


                {/* Affichage des catégories secondaires de l'application */}
                <View style={{ paddingTop: 5, margin: 20 }}>
                    <View style={{ flexDirection: "row", backgroundColor: "transparent" }} >
                        <Text style={title_category(THEME)}>Catégories</Text>
                        <TouchableOpacity
                            style={{
                                color: THEME.TITLE_CATEGORY,
                                justifyContent: "center", alignItems: "center", paddingHorizontal: 10
                            }}
                            onPress={
                                slowlyScrollDown2
                            }>
                            <AntDesign
                                name={"down"}
                                size={20.5}
                                color={THEME.SUBTEXT_INTRO}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Onglet jeux */}
                <View style={container_hp(THEME)}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons style={icon_category_game(THEME)} name="game-controller" size={50} color={'black'} />
                        <TouchableOpacity style={styles.touchable} onPress={() =>
                            // navigation vers le quizz
                            navigation.navigate("MycoQuizHomePage", {})
                        }>
                            <Text style={title_icon(THEME)}>Testez nos Quizz !{"\n"}
                                <Text style={subtitle_icon(THEME)}>Mettez vos connaissances à l'épreuve grâce à une série de jeux ludiques actuellement disponible. </Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Composant qui sépare les ongles */}
                <ItemSeparatorView />

                {/* Onglet Favoris */}
                <View style={container_hp(THEME)}>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons style={icon_category_heart(THEME)} name="heart" size={50} color={'black'} />
                        <TouchableOpacity style={styles.touchable} onPress={() =>
                            // redirection vers la page favoris
                            navigation.navigate("Favoris", {})
                        }>
                            <Text style={title_icon(THEME)}>Favoris{"\n"}
                                <Text style={subtitle_icon(THEME)}>Gardez à portée de main vos champignons préférés pour les retrouver plus tard. </Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Composant qui sépare les ongles */}
                <ItemSeparatorView />

                {/* Onglet Historique */}
                <View
                    style={container_hp(THEME)}
                    onLayout={event => {
                        const layout = event.nativeEvent.layout;
                        setMeasure(layout)
                        y = layout.y;
                        //console.log(layout.y)
                        x = layout.x;
                        // console.log(layout.x)
                    }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons style={icon_category_history(THEME)} name="history" size={50} color={'black'} />
                        <TouchableOpacity style={styles.touchable} onPress={() =>
                            //redirection vers la pages favoris
                            navigation.navigate("Historique", {})
                        }>
                            <Text style={title_icon(THEME)}>Historique{"\n"}
                                <Text style={subtitle_icon(THEME)}>Vous avez perdu de vue un champignon ? Pas de panique, consultez votre historique. C'est par ici ! </Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Affichage de la légende des icons de comestibilité  */}
                <View style={{ paddingTop: 5, margin: 20 }}>
                    <View style={{
                        color: THEME.TITLE_CATEGORY,
                        flexDirection: "row", backgroundColor: "transparent"
                    }} >
                        <Text style={title_category(THEME)}>Comestibilité</Text>
                        <TouchableOpacity
                            style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}
                            onPress={slowlyScrollTop} >
                            <AntDesign
                                name={"up"}
                                size={20.5}
                                color={THEME.SUBTEXT_INTRO}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={container_hp(THEME)}>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 20, flex: 3 }}>
                        {/* ICONE COMESTIBLE */}
                        <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome5 style={Edibility_icon(THEME)} color={THEME.COMESTIBLE_ICON} name={"utensils"} />
                            <Text style={text_edibility(THEME)} >Comestible</Text>
                        </View>
                        {/* ICONE TOXIQUE */}
                        <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome5 style={Edibility_icon(THEME)} color={THEME.TOXIQUE_ICON} name={"skull-crossbones"} />
                            <Text style={text_edibility(THEME)}>Toxique</Text>
                        </View>
                        {/* ICONE D'UNE COMESTIBILITE SANS INTERET */}
                        <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome5 style={Edibility_icon(THEME)} color={THEME.SANS_INTERET_ICON} name={"tired"} />
                            <Text style={text_edibility(THEME)}> Sans intérêt </Text>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView >
    )
}

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/

// STYLE DYNAMIQUE : à partir de fonctions 
export default HomePage

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

function title(THEME) {
    return {
        fontSize: SIZE.H1,
        textAlign: "center",
        marginTop: 50,
        marginBottom: 20,
        color: THEME.TITLE
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

function icon_category_history(THEME) {
    return {
        fontWeight: 'bold',
        color: THEME.ICON_CATEGORY_HISTORY
    }
}

function icon_category_game(THEME) {
    return {
        fontWeight: 'bold',
        color: THEME.ICON_CATEGORY_GAME
    }
}

function icon_category_heart(THEME) {
    return {
        fontWeight: 'bold',
        color: THEME.ICON_CATEGORY_HEART
    }
}

function subtitle_icon(THEME) {
    return {
        color: THEME.SUBTITLE_ICON,
        fontSize: SIZE.H3,
        alignItems: "flex-start",
        textAlign: "left",
        fontWeight: "normal",
    }
}

function big_container(THEME) {
    return {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 20,
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: THEME.BIG_CONTAINER,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    }
}

function container_hp(THEME) {
    return {
        flexDirection: "row",
        margin: 10,
        padding: 10,
        justifyContent: "center",
        backgroundColor: THEME.CONTAINER_HP,
        borderRadius: 15,
        alignItems: "center",
    }
}

function title_category(THEME) {
    return {
        color: THEME.TITLE_CATEGORY,
        fontSize: 20,
        fontWeight: 'bold'
    }
}

function Edibility_icon(THEME) {
    return {
        paddingHorizontal: 20,
        fontSize: 30,
        marginTop: 10,

    }
}

function text_edibility(THEME) {
    return {
        color: THEME.TEXT_EDIBILITY,
        fontSize: SIZE.H3
    }
}

function text_intro(THEME) {
    return {
        fontSize: 24,
        fontWeight: 'bold',
        color: THEME.TEXT_INTRO
    }
}


function subtext_intro(THEME) {
    return {
        fontSize: 24,
        fontWeight: 'bold',
        color: THEME.SUBTEXT_INTRO
    }
}

function icon_category(THEME) {
    return {
        fontWeight: 'bold',
        color: THEME.ICON_CATEGORY
    }
}

// STYLE STATIQUE : à partir de la constante styles
const styles = StyleSheet.create({
    textAvertissement: {
        color: "black",
        fontSize: 14,
        alignItems: "flex-start",
        paddingHorizontal: 20,
        textAlign: "left",
        fontWeight: "600"
    },
    touchable: {
        backgroundColor: "transparent",
        marginBottom: 10,
        borderColor: "lightgrey",
        borderRadius: 30,
        flex: 1,
    },
})