import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, Image, Dimensions, Modal, LogBox } from "react-native";
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button, Block } from 'galio-framework';

//IMPORT DES ICONS
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

//IMPORTS RELATIFS AU STYLE
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';

//IMPORT DE COMPOSANTS
import * as data from '../../back/database/quiz.json'
import Images from "../components/Images.js"
import RandomizeArray from "../helpers/RandomizeArray"

// Initialisation du numéro de la questiona actuelle à 0
let currentQuestion = 0
// Initialisation du nombre de question (dynamique)
let numberOfQuestions = Object.keys(data).length - 1
// Initlisation du score à 0
let score = 0
// Initialisation du pourcentage à 0
let percentage = 0
// Initialisation du commentaire (bonne/mauvaise réponse) à vide
let comment = ''
// Initialisation d'une variable booléenne qui va déterminer l'affichage du commentaire ou non
let bool
// Initalisation du nombre de % de remplissage question après question de la barre de progression
const progress = 100 / numberOfQuestions

const MycoQuiz = ({ route, navigation }) => {

    LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    LogBox.ignoreLogs(['Warning: componentWillReceiveProps has been renamed']);

    // Etat
    // Recharge des données de la question actuelle
    let [questionData, setquestionData] = useState(data[route.params.list[0]])
    // Recharge avec affichage de la correction ou des choix de réponse 
    let [shouldShow, setShouldShow] = useState(true);
    // Recharge avec avec le % de progression 
    let [progressBar, setProgressBar] = useState(0)
    // Récupération du titre de la question
    let title = questionData[0]["Titre"]
    /*Initialisation de variables déterminant les conditions de jeux*/
    let nbRightAnswers = 0;
    let nbFalseAnswers = 0;
    let answers = []
    let countTrue = 0
    let countFalse = 0

    // Etat d'affichage de la fenêtre bonne ou mauvaise réponse
    const [modalVisible, setModalVisible] = useState(false);
    // Récupération de la largeur de l'écran 
    const barWidth = Dimensions.get('screen').width - 45;
    // Style de la barre de progression
    const progressCustomStyles = { backgroundColor: '#05944F', borderRadius: 50, borderColor: '#05944F' };
    // Fonction qui va permettre de déterminer quand afficher cette fenêter ou non
    const showModal = () => { setModalVisible(true); setTimeout(() => { setModalVisible(false); }, 800); };
    // Etat du mode d'éclairage actuel
    const { THEME, isDark } = useTheme();

    // Réinitialisation du score
    if (route.params.score == 0) {
        score = route.params.score
        route.params.score++
    }

    // Réinitialisation du numéro de la question actuelle
    if (route.params.currentQuestion == 0) {
        currentQuestion = route.params.currentQuestion
        route.params.currentQuestion++
    }

    // Mélange des choix de réponses
    shouldShow ? RandomizeArray(questionData) : null

    // Fonction qui va permettre de déterminer le nombre de réponses correctes ou fausses pour une question donnée
    function getRightAnswers(questionData) {
        for (let i = 0; i < Object.keys(questionData).length; i++) {
            if (questionData[i]["Status"] == "TRUE") {
                nbRightAnswers++;
            }
            else {
                nbFalseAnswers++;
            }
        }
    }
    getRightAnswers(questionData)

    // fonction qui va permettre de sauvegarder le ou les choix de réponses faits par l'utilisateur
    function saveAnswers(checked, item) {
        if (checked) {
            answers.push(item["Choix"])
        }
        else {
            for (let i = 0; i < answers.length; i++) {
                if (answers[i] == item["Choix"]) {
                    answers.splice(i, 1)
                }
            }
        }
    }

    // Fonction qui va permettre d'afficher des éléments d'indications du succès ou non de l'utilisateur puis des éléments de corrections
    function setResults(countTrue) {
        if (countTrue == nbRightAnswers) {
            comment = "Bonne"
            bool = true
            showModal()
            score++
            answers = []
            setProgressBar(progressBar + progress)
            setShouldShow(!shouldShow)
        }
        else {
            comment = "Mauvaise"
            bool = false
            showModal()
            answers = []
            setProgressBar(progressBar + progress)
            setShouldShow(!shouldShow)
        }
    }

    // Fonction qui va permettre de vérifier la validité des réponses de l'utilisateur
    function checkAnswers(questionData) {
        countTrue = 0;
        for (let i = 0; i < answers.length; i++) {
            for (let j = 0; j < Object.keys(questionData).length; j++) {
                if (answers[i] == questionData[j]["Choix"]) {
                    if (questionData[j]["Status"] == "FALSE") {
                        countFalse++;
                    }
                }
            }
        }
        for (let i = 0; i < answers.length; i++) {
            for (let j = 0; j < Object.keys(questionData).length; j++) {
                if (answers[i] == questionData[j]["Choix"]) {
                    if (questionData[j]["Status"] == "TRUE") {
                        countTrue++;
                    }
                    else if (questionData[j]["Status"] == "FALSE") {
                        countTrue = -1;
                        return (setResults(countTrue));
                    }
                }
            }
        }
        setResults(countTrue)
    }

    // Fonction qui va permettre d'afficher visuellement la correction
    function getResults() {
        return (
            <View>
                <FlatList
                    style={{ marginTop: 10 }}
                    keyExtractor={(item) => item["Choix"].toString()}
                    data={questionData}
                    renderItem=
                    {
                        ({ item }) =>
                            <View style={container_choices_mq(THEME)}>
                                <BouncyCheckbox
                                    style={{ flex: 0 }}
                                    isChecked={false}
                                    disabled={true}
                                    iconStyle={{ borderColor: "grey" }}
                                    size={30}
                                    textColor="#000"
                                    unfillColor={item["Status"] == "TRUE" ? "#05944F" : "#db3e32"}
                                    fillColor="black"
                                    fontFamily="JosefinSans-Regular"
                                />
                                {item["Status"] == "TRUE" ?
                                    <View style={{ flexDirection: "row", flex: 0.75 }}>
                                        <Text style={[right_answers_mq(THEME), { marginTop: 10, marginBottom: 10, marginRight: 10 }]}>
                                            {item["Choix"]}
                                        </Text>
                                    </View>
                                    :
                                    <View style={{ flexDirection: "row", flex: 0.75 }}>
                                        <Text style={[false_answers_mq(THEME), { marginTop: 10, marginBottom: 10, marginRight: 10 }]}>
                                            {item["Choix"]}
                                        </Text>
                                    </View>
                                }
                            </View>
                    }
                />
            </View>
        )
    }

    // Fonction qui va permettre de calculer le score de l'utilisateur
    function calculScore() {
        percentage = score / numberOfQuestions * 100
    }

    // Fonction qui va permettre de récupérer une image relative à un champignon
    function getPicture() {
        for (let i = 0; i < Object.keys(questionData).length; i++) {
            if (questionData[i]["Status"] == "TRUE") {
                return (
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image style={styles.image} source={Images(questionData[i]["Choix"])} />
                    </View>
                )
            }
        }
    }

    return (
        <ScrollView contentContainerStyle={scrollview_mq(THEME)}>
            {/* ---------------------------------- Affichage de la fenêtre indiquant le succès ou non de l'utilisateur à la question ----------------------- */}
            <View style={{ textAlign: "center", justifyContent: "center", alignItems: "center", flex: 0 }}>
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    statusBarTranslucent
                    backdropOpacity={0.3}
                >
                    <View style={view_alert_mq(THEME)}>
                        <View style={alert_modal_mq(THEME)}>
                            <View style={styles.alert_body}>
                                {bool ?
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesome5 style={smile_icon_mq(THEME)} name="laugh" />
                                        <Text style={[right_answers_mq(THEME), styles.comment]}>
                                            {comment} réponse !
                                        </Text>
                                    </View>
                                    :
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesome5 style={sad_icon_mq(THEME)} name="frown-open" />
                                        <Text style={[false_answers_mq(THEME), styles.comment]}>
                                            {comment} réponse !
                                        </Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            {/* ---------------------------------- Affichage des indicateurs sur le score et la progression de l'utilisateur ----------------------- */}
            <View style={{ flex: 0, flexDirection: "row", justifyContent: "flex-end", borderRadius: 5 }}>
                <Text style={score_mq(THEME)} >Score actuel :{"\n"}{score}/{numberOfQuestions}</Text>
            </View>
            <View style={{ backgroundColor: header(THEME), justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
                <Text style={percentage_mq(THEME)}>{parseInt(progressBar)}%</Text>
                <ProgressBarAnimated
                    {...progressCustomStyles}
                    width={barWidth}
                    value={progressBar}
                    useNativeDriver={true}
                    backgroundColorOnComplete={'#05944F'}
                />
                <Text style={question_mq(THEME)}>Q°{currentQuestion + 1}: {title}</Text>
            </View>
            <View style={{ paddingBottom: 80, flex: 2 }}>
                {/* ---------------------------------- Affichage des choix de réponses possibles pour une question----------------------- */}
                <View style={{ flex: 0 }}>
                    <View style={{ justifyContent: "center", textAlign: "center" }}>
                        {
                            questionData[0]["Type"] == "Image" ? getPicture() : null
                        }
                    </View>
                    {
                        shouldShow ?
                            <View>
                                <FlatList
                                    style={{ marginTop: 10 }}
                                    keyExtractor={(item) => item["Choix"].toString()}
                                    data={questionData}
                                    renderItem=
                                    {
                                        ({ item }) =>
                                            <View style={container_choices_mq(THEME)}>
                                                <BouncyCheckbox
                                                    style={{ flex: 0 }}
                                                    isChecked={false}
                                                    size={30}
                                                    textColor="#000"
                                                    iconStyle={{ borderColor: "white" }}
                                                    unfillColor="white"
                                                    fillColor="black"
                                                    fontFamily="JosefinSans-Regular"
                                                    onPress={(checked) => {
                                                        saveAnswers(checked, item)
                                                    }}
                                                />
                                                <Text style={choices_mq(THEME)}>
                                                    {item["Choix"]}
                                                </Text>
                                            </View>
                                    }
                                />
                            </View>
                            : null
                    }
                    {
                        currentQuestion != numberOfQuestions - 1 ? // Si la question actuelle est la dernière
                            !shouldShow ?
                                getResults()
                                : null
                            : !shouldShow ?
                                getResults()
                                : null
                    }
                </View>
                {/* ---------------------------------- Affichage des boutons "valider" ou "suivant" suivant l'état actuel de la page----------------------- */}
                <View style={{ flex: 2 }}>
                    <Block flex center style={styles.container}>
                        <View style={{ flex: 0, textAlign: "center", justifyContent: "center" }}>
                            {
                                shouldShow ?
                                    <Button style={button_mq(THEME)} color="black" round uppercase onPress={() => {
                                        checkAnswers(questionData)
                                    }} // Vérifier les réponses entrées
                                    >
                                        Valider
                                </Button>
                                    : null
                            }
                            {
                                currentQuestion != numberOfQuestions - 1 ? // Si la question actuelle est la dernière
                                    !shouldShow ?
                                        <Button style={button_mq(THEME)} round uppercase color="black"
                                            onPress={() => {
                                                currentQuestion++;
                                                setquestionData(data[route.params.list[currentQuestion]])
                                                setShouldShow(!shouldShow)
                                            }
                                            }
                                        >
                                            SUIVANT
                                        </Button>
                                        : null
                                    : !shouldShow ?
                                        <View>
                                            <Button style={button_mq(THEME)} color="black" round uppercase
                                                onPress={() => {
                                                    calculScore();
                                                    navigation.navigate("Résultats", {
                                                        score: score,
                                                        percentage: percentage,
                                                        numberOfQuestions: numberOfQuestions
                                                    })
                                                }
                                                }
                                            >
                                                RÉSULTATS
                                            </Button>
                                        </View>
                                        : null
                            }
                        </View>
                    </Block>
                </View>
            </View>
        </ScrollView >
    );
}

export default MycoQuiz

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/

// STYLE DYNAMIQUE : à partir de fonctions 

function header(THEME) {
    return {
        flex: 0,
        backgroundColor: THEME.HEADER,
    }
}

function scrollview_mq(THEME) {
    return {
        flexGrow: 1,
        backgroundColor: THEME.SCROLLVIEW,
        justifyContent: 'space-between',
    }
}

function choices_mq(THEME) {
    return {
        flex: 0.75,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        color: THEME.CHOICES_MQ,
    }
}

function button_mq(THEME) {
    return {
        justifyContent: "center",
        borderColor: THEME.BORDER_BUTTON_MQ,
        borderWidth: 0.5,
        color: THEME.BUTTON_MQ,
        backgroundColor: THEME.BACKGROUND_BUTTON_MQ,
        textAlign: "center",
        margin: 20,
        flex: 0
    }
}

function container_choices_mq(THEME) {
    return {
        flexDirection: "row",
        marginTop: 5,
        paddingHorizontal: 0.5,
        marginRight: 20,
        marginLeft: 20,
        padding: 10,
        justifyContent: "center",
        backgroundColor: THEME.CONTAINER_HP,
        borderRadius: 15,
        alignItems: "center",
        borderColor: THEME.BORDER_CONTAINER_CHOICES_MQ,
    }
}

function question_mq(THEME) {
    return {
        textAlign: "center",
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        fontSize: 16,
        color: THEME.QUESTION_MQ,
    }
}

function score_mq(THEME) {
    return {
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        color: THEME.SCORE_MQ,
        flex: 0.25,
    }
}

function percentage_mq(THEME) {
    return {
        textAlign: "center",
        color: THEME.PERCENTAGE_MQ,
        marginBottom: 10,
    }
}

function view_alert_mq(THEME) {
    return {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.BACKGROUND_VIEW_MODAL_MQ,
        borderColor: THEME.BORDER_VIEW_MODAL_MQ,
    }
}

function alert_modal_mq(THEME) {
    return {
        width: 300,
        backgroundColor: THEME.BACKGROUND_ALERT_MODAL_MQ,
        borderColor: THEME.BORDER_ALERT_MODAL_MQ,
        flex: 0.25
    }
}

function right_answers_mq(THEME) {
    return {
        color: THEME.RIGHT_ANSWERS_MQ,
    }
}

function false_answers_mq(THEME) {
    return {
        color: THEME.FALSE_ANSWERS_MQ,
    }
}

function smile_icon_mq(THEME) {
    return {
        fontSize: 22,
        color: THEME.SMILE_ICON_MQ,
    }
}

function sad_icon_mq(THEME) {
    return {
        fontSize: 22,
        color: THEME.SAD_ICON_MQ,
    }
}

// STYLE STATIQUE : à partir de la constante styles

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    image: {
        height: 180,
        width: 170,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    alert_body: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 15,
        flexDirection: "row",
        borderColor: "white",
        borderWidth: 1,
    },
    comment: {
        fontSize: SIZE.H1_BIS,
        textAlign: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
});