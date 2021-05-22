//IMPORTS FRAMEWORKS
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, BackHandler } from "react-native";
import { Button, Block, } from 'galio-framework';
import { LogBox } from 'react-native';

//IMPORTS RELATIF AU STYLE
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';

// *************************************** PAGE MYCOQUIZRESULTS *********************************************
const MycoQuizResults = ({ route, navigation }) => {

    LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

    //récupération du score du quiz général grâce à route
    let score = route.params.score
    //récupération du score du quiz général ou du quiz image grâce à route dans la variable percentage
    let percentage = Math.round(route.params.percentage)
    //récupération du nombre de questions du quiz général ou du quiz image grâce à route dans la variablee numberOfQuestions
    let numberOfQuestions = route.params.numberOfQuestions
    // Etat, appel du mode sombre / clair
    const { THEME, isDark } = useTheme();
    //Empêcher le retour vers le quiz général ou le quiz image avec le bouton retour en arrière natif
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () =>
            BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    /**
     * Fonction permettant d'afficher le résultat: la bonne image en fonction du pourcentagee obtenu
     * */
    function getResults() {
        switch (true) {
            case (percentage < 33):
                return (
                    <View style={styles.icon}>
                        <Image
                            style={{ height: 100, width: 100, }}
                            source={require("../assets/MycoQuiz/Poison_Mushroom.png")} />
                        <Text style={grades_text_mqr(THEME)}>Échec...{"\n"}Un maître est avant tout {"\n"}un éternel étudiant ! Révisez !</Text>
                    </View>
                )
            case (percentage >= 33 && percentage < 66):
                return (
                    <View style={styles.icon}>
                        <Image
                            style={{ height: 100, width: 100 }}
                            source={require("../assets/MycoQuiz/Green_Mushroom.png")} />
                        <Text style={grades_text_mqr(THEME)}>Moyen...{"\n"}Assagissez-vous et mûrissez en {"\n"}un champignon rouge la prochaine fois !</Text>
                    </View>
                )
            case (percentage >= 66 && percentage < 99):
                return (
                    <View style={styles.icon}>
                        <Image
                            style={{ height: 100, width: 100 }}
                            source={require("../assets/MycoQuiz/Red_Mushroom.png")} />
                        <Text style={grades_text_mqr(THEME)}>Bravo !{"\n"}Continuez votre quête vers {"\n"}le saint champignon d'or !</Text>
                    </View>
                )
            case (percentage == 100):
                return (
                    <View style={styles.icon}>
                        <Image
                            style={{ height: 100, width: 100 }}
                            source={require("../assets/MycoQuiz/Golden_Mushroom.png")} />
                        <Text style={grades_text_mqr(THEME)}>Excellent !{"\n"}Vous êtes le maître des champignons !</Text>
                    </View>
                )
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
            <ScrollView contentContainerStyle={scrollview_mqr(THEME)}>
                {/* Affichage des résultats */}
                <View style={big_container(THEME)}>
                    {getResults()}
                    <View style={container_hp(THEME)}>
                        <View style={{ flexDirection: 'row', flex: 0 }}>
                            <View style={styles.touchable}>
                                <Text style={results_text_mqr(THEME)}>{percentage}% SCORE</Text>
                                {score == 0 || score == 1 ?
                                    <Text style={results_subtext_mqr(THEME)}>Vous avez obtenu un total de {"\n"}{score} bonne réponse sur {numberOfQuestions} questions posées !</Text>
                                    : <Text style={results_subtext_mqr(THEME)}>Vous avez obtenu un total de {"\n"}{score} bonnes réponses sur {numberOfQuestions} questions posées !</Text>
                                }
                            </View>
                        </View>
                    </View>
                    {/* Bouton de navigation(redirection) vers le MycoQuieHomePage */}
                    <Block flex center style={styles.container}>
                        <View style={{ flex: 0.5, textAlign: "center", justifyContent: "center" }}>
                            <Button style={button_mqr(THEME)} round uppercase
                                onPress={() =>
                                    navigation.navigate("MycoQuizHomePage", {
                                    }
                                    )
                                }>MycoQuiz
                             </Button>
                        </View>
                    </Block>
                </View>
            </ScrollView>
        </ View>
    )
}

export default MycoQuizResults

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/
// STYLE DYNAMIQUE : à partir de fonctions 
function scrollview_mqr(THEME) {
    return {
        flexGrow: 1,
        backgroundColor: THEME.SCROLLVIEW,
        justifyContent: 'space-between',
    }
}

function grades_text_mqr(THEME) {
    return {
        marginTop: 10,
        fontSize: 17,
        color: THEME.GRADES_TEXT_MQR,
        flex: 0.5,
        textAlign: "center",
        justifyContent: "center",
    }
}

function results_text_mqr(THEME) {
    return {
        color: THEME.RESULTS_TEXT_MQR,
        textAlign: "center",
        justifyContent: "center",
        flex: 0,
        marginTop: 5,
        fontSize: SIZE.H2,
        paddingRight: 5,
        paddingLeft: 5,
    }
}

function results_subtext_mqr(THEME) {
    return {
        color: THEME.RESULTS_SUBTEXT_MQR,
        textAlign: "center",
        justifyContent: "center",
        flex: 0,
        marginTop: 5,
        fontSize: SIZE.H2,
        paddingRight: 5,
        paddingLeft: 5,
    }
}


function button_mqr(THEME) {
    return {
        justifyContent: "center",
        borderColor: THEME.BORDER_BUTTON_MQR,
        borderWidth: 0.5,
        color: THEME.BUTTON_MQR,
        backgroundColor: THEME.BACKGROUND_BUTTON_MQR,
        textAlign: "center",
        margin: 20,
        flex: 0
    }
}


function big_container(THEME) {
    return {
        flex: 0.5,
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
        marginRight: 20,
        marginLeft: 20
    }
}


// STYLES STATIQUE: à partir de la constante styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5
    },
    touchable: {
        backgroundColor: "transparent",
        marginBottom: 10,
        borderColor: "lightgrey",
        borderRadius: 30,
        flex: 1,
    },
});
