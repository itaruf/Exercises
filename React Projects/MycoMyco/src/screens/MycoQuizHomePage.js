//IMPORTS FRAMEWORKS
import React from 'react'
import { Dimensions, View, ScrollView, Image } from "react-native";
import { Text, Button, Block, } from 'galio-framework';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { LogBox } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

//IMPORT DES DONNEES
import * as data from "../../back/database/quiz.json"

//IMPORTS RELATIF AU STYLE
import { StyleSheet, } from 'react-native';
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';

LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
LogBox.ignoreLogs(['Warning: componentWillReceiveProps has been renamed']);


// *************************************** PAGE MYCOQUIZHOMEPAGE *********************************************
const MycoQuizHomePage = ({ navigation, route }) => {

    // Etat, appel du mode sombre / clair
    const { THEME, isDark } = useTheme();
    //constante qui calcule la dimension de la barre de progression en fonction de la taille de l'écran
    const barWidth = Dimensions.get('screen').width - 100;
    //constante qui contient les couleurs de la barre 
    const progressCustomStyles = { backgroundColor: '#05944F', borderRadius: 50, borderColor: '#05944F' };

    //variable contenant le score initialisé à 0
    let score = 0
    //variable contenant le nombre de questions comptées avec les objets récupérés de quiz.json
    let nombreQuestion = Object.keys(data).length - 1
    //tableau contenant le nombre de questions à partir de 0 initialisé à vide
    var list = []
    //variable pour la question actuelle initilisé à 0
    let currentQuestion = 0

    //remplissage du tableau avec le nombre de questions total
    for (var i = 0; i < nombreQuestion; i++) {
        list.push(i);
    }

    /**
     * Fonction permettant de changer l'ordre éléments dans un tableau donné grâce aux indices
     * @param {array} tab 
     */
    function randomize(tab) {
        var i, j, tmp;
        for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
        return tab;
    }

    return (
        <ScrollView contentContainerStyle={scrollview(THEME)}>
            <View style={big_container(THEME)}>
                {/* Affichage des règles pour le quiz général */}
                <View style={{ paddingTop: 30, margin: 20 }}>
                    <Text style={title_category(THEME)}>MycoQuiz - Culture générale</Text>
                </View>
                <View style={container_hp(THEME)}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons style={icon_category_game(THEME)} name="hourglass" size={50} color={'black'} />
                        <View style={styles.touchable}>
                            <Text style={title_icon(THEME)}>Sans chrono{"\n"}
                                <Text style={subtitle_icon(THEME)}>Testez vos connaissances en répondant à une série de questions sans limite de temps ! </Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={container_hp(THEME)}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons style={icon_category_game(THEME)} name="checkmark-done" size={50} color={'black'} />
                        <View style={styles.touchable}>
                            <Text style={title_icon(THEME)}>Choix unique ou multiples{"\n"}
                                <Text style={subtitle_icon(THEME)}>Plusieurs réponses sont possibles, alors réfléchissez bien avant de valider vos réponses !</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                {/* Affichage du bouton de navigation vers le MycoQuiz général */}
                <View style={{ flex: 0.5, marginTop: 20, }}>
                    <Block center style={styles.container}>
                        <View style={{ textAlign: "center", justifyContent: "center" }}>
                            <Button style={quiz_button(THEME)} round uppercase onPress={() =>
                                navigation.navigate("MycoQuiz", {
                                    list: list = randomize(list),
                                    score: score,
                                    currentQuestion: currentQuestion
                                })
                            }>
                                <Text style={quiz_button_text(THEME)}>MYCOQUIZ GÉNÉRAL</Text>
                            </Button>
                        </View>
                    </Block>
                </View>
                {/* Affichage des règles pour le quiz image*/}
                <View style={{ flex: 0.5, marginTop: 20, }}>
                    <View style={{ margin: 20 }}>
                        <Text style={title_category(THEME)}>MycoQuiz - Images</Text>
                    </View>
                    <View style={container_hp(THEME)}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons style={icon_category_game(THEME)} name="hourglass" size={50} color={'black'} />
                            <View style={styles.touchable}>
                                <Text style={title_icon(THEME)}>Sans chrono{"\n"}
                                    <Text style={subtitle_icon(THEME)}>Testez vos connaissances en sélectionnant l'image correspondant au champignon sans limite de temps !</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={container_hp(THEME)}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons style={icon_category_game(THEME)} name="checkmark" size={50} color={'black'} />
                            <View style={styles.touchable}>
                                <Text style={title_icon(THEME)}>Choix unique{"\n"}
                                    <Text style={subtitle_icon(THEME)}>Une seule réponse est possible alors réfléchissez bien avant de cliquer sur une image ! </Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* Affichage du bouton de navigation vers le MycoQuiz image*/}
                    <View style={{ flex: 1, marginTop: 20 }}>
                        <Block flex center style={styles.container}>
                            <View style={{ flex: 0, textAlign: "center", justifyContent: "center", flexDirection: "row" }}>
                                <Button style={quiz_button(THEME)} round uppercase onPress={() =>
                                    navigation.navigate("QuizImage", {
                                        score: score,
                                        currentQuestion: currentQuestion
                                    })}>
                                    <Text style={quiz_button_text(THEME)}>MYCOQUIZ IMAGES</Text>
                                </Button>
                            </View>
                        </Block>
                    </View>
                </View>
                {/* Affichage de l'échelle de la notation avec les champignons en couleur : du rouge au doré */}
                <View style={{ flex: 0.5, marginTop: 20, }}>
                    <View style={{ margin: 20 }}>
                        <Text style={title_category(THEME)}>En route vers le champignon d'or !</Text>
                    </View>
                    <Block style={block(THEME)}>
                        <View style={[styles.viewCircle, { flexDirection: "column" }]}>
                            <Ionicons style={icon_MQ(THEME)} name="star" size={35} />
                            <Text></Text>
                            <Text style={subtitle_icon(THEME)}>Obtenez un score correspondant à vos résultats : Visez le score parfait et ramassez le champi doré !{"\n"}</Text>
                            <View style={{ paddingHorizontal: 5, flexDirection: "row", marginTop: 0, justifyContent: "space-evenly", alignItems: "stretch" }}>
                                <View style={{ paddingHorizontal: 5, flexDirection: "row", marginTop: 0, justifyContent: "space-evenly", alignItems: "stretch" }}>
                                    <Image
                                        style={{ height: Dimensions.get('window').width * 0.10, width: Dimensions.get('window').width * 0.10, }}
                                        source={require("../assets/MycoQuiz/Poison_Mushroom.png")} />
                                </View>
                                <View style={{ paddingHorizontal: 5, flexDirection: "row", marginTop: 0, justifyContent: "space-evenly", alignItems: "stretch" }}>
                                    <Image
                                        style={{ height: Dimensions.get('window').width * 0.10, width: Dimensions.get('window').width * 0.10, }}
                                        source={require("../assets/MycoQuiz/Green_Mushroom.png")} />
                                </View>
                                <View style={{ paddingHorizontal: 5, flexDirection: "row", marginTop: 0, justifyContent: "space-evenly", alignItems: "stretch" }}>
                                    <Image
                                        style={{ height: Dimensions.get('window').width * 0.10, width: Dimensions.get('window').width * 0.10, }}
                                        source={require("../assets/MycoQuiz/Red_Mushroom.png")} />
                                </View>
                                <View style={{ paddingHorizontal: 5, flexDirection: "row", marginTop: 0, justifyContent: "space-evenly", alignItems: "stretch" }}>
                                    <Image
                                        style={{ height: Dimensions.get('window').width * 0.10, width: Dimensions.get('window').width * 0.10, }}
                                        source={require("../assets/MycoQuiz/Golden_Mushroom.png")} />
                                </View>
                            </View>
                            <Text>{"\n"}</Text>
                            {/* Affichage d'une barre reeprésentant la barre de progression utilisées dans les deux différents quiz */}
                            <ProgressBarAnimated
                                {...progressCustomStyles}
                                width={barWidth}
                                value={80}
                                useNativeDriver={true}
                                backgroundColorOnComplete={"red"}
                            />
                        </View>
                    </Block>
                </View>
            </View>
        </ScrollView >
    )
}

export default MycoQuizHomePage


/****************************STYLES APPLIQUES SUR LA PAGE*********************************/
// STYLE STATIQUE : à partir de la constante styles
function scrollview(THEME) {
    return {
        flexGrow: 3,
        backgroundColor: THEME.SCROLLVIEW,
        justifyContent: 'space-between',
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

function icon_category_game(THEME) {
    return {
        fontWeight: 'bold',
        color: THEME.ICON_CATEGORY_GAME
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
        flex: 3,
        paddingTop: 15,
        paddingBottom: 80,
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
        padding: 20,
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

function icon_MQ(THEME) {
    return {
        fontWeight: 'bold',
        color: THEME.ICON_STAR_MQP
    }
}

function quiz_button(THEME) {
    return {
        justifyContent: "center",
        borderColor: THEME.CONTAINER_BORDER,
        borderRadius: 20,
        borderWidth: 0.5,
        backgroundColor: THEME.QUIZ_BUTTON
    }
}

function quiz_button_text(THEME) {
    return {
        color: THEME.QUIZ_BUTTON_TEXT,
        textAlign: 'center',
        margin: 5,
    }
}

function block(THEME) {
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
// STYLES STATIQUE: à partir de la constante styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
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
    viewCircle: {
        flexDirection: "row",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});