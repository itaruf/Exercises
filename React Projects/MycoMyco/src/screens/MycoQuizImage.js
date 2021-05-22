import React, { useMemo, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, ScrollView, Dimensions } from "react-native";
import * as data from '../../back/database/data.json';
import { Button } from 'galio-framework';
import Images from "../components/Images.js";
//IMPORT DES ICONS
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import ProgressBarAnimated from 'react-native-progress-bar-animated';
//IMPORTS RELATIFS AU STYLE
import { SIZE } from '../components/colorThemes';
import { useTheme } from '../../ThemeProvider';

//Initialisation variable globale nombre de questions
global.QUESTION_COUNT = 10
var numberOfQuestions
//Initialisation variables pour le modal bonne ou mauvaise réponse
var bool
var comment = ""
var score = 0
// Initalisation du nombre de % de remplissage question après question de la barre de progression
const progress = 100 / global.QUESTION_COUNT
// Récupération de la largeur de l'écran 
const barWidth = Dimensions.get('screen').width - 45;
// Style de la barre de progression
const progressCustomStyles = { backgroundColor: '#05944F', borderRadius: 50, borderColor: '#05944F', justifyContent: 'center' };

// fonction qui récupère le tableau des noms des espèces
function getSpecies() {

    const dataKey = data[16]
    const species = []

    for (let i = 0; i < dataKey.length; i++) {
        species.push(dataKey[i]["Nom"])
    }
    return species
}

// fonction qui récupère le tableau des noms des familles et genres
function getFamilyGenus() {

    const dataKey = []
    dataKey.push(data[14].concat(data[15]))
    const familyGenus = []

    for (let j = 0; j < dataKey.length; j++) {
        for (let i = 0; i < dataKey[j].length; i++) {
            familyGenus.push(dataKey[j][i]["Nom"])
        }
    }
    return familyGenus
}

//récupération du tableau contenant le nom des espèces ainsi que des familles et genres
const species = getSpecies()
const familyGenus = getFamilyGenus()

function getAll() {
    const all = species.concat(familyGenus)
    return all
}

// Melange de Fisher Yates
function shuffle(tab) {
    /*
     Pour i allant de n − 1 à 1 faire :
         j ← entier aléatoire entre 0 et i
         échanger a[j] et a[i]
    */
    const res = [...tab]; // copie de tab

    for (let i = tab.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i - 1))
        let temp = res[i]
        res[i] = res[j]
        res[j] = temp
    }
    return res;
}
//Récupère une partie d'un tableau mélangé excepté "el"
function pickExcept(tab, el, count) {
    // picksExcept(alphabet, 'r', 3)
    const shuffledTab = shuffle(tab); // ['a', 'z', 'r', 'b', 'e', ...]
    const shuffledExcept = shuffledTab.filter(letter => letter != el); // ['a', 'z', 'b', ...]
    const picks = shuffledExcept.slice(0, count);  // ['a', 'z', 'b']

    return picks;
}

const QuizzQuestion = ({ number, answer, wrongAnswers, onNext, navigation }) => {
    //récupération du style
    const { THEME, isDark } = useTheme();

    const propositions = useMemo(() => {
        return shuffle(shuffle([...wrongAnswers, answer]))
    }, [answer])

    const [selected, setSelected] = useState(null)
    const [submited, setSubmited] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const showModal = () => { setModalVisible(true); setTimeout(() => { setModalVisible(false); }, 800); };
    let [progressBar, setProgressBar] = useState(0)

    function handleSelect(index) {
        setSelected(index)
    }

    // fonction qui passe à la question suivante
    function handleNext() {
        setSubmited(false)
        setSelected(null)
        onNext()
    }

    // fonction qui valide le choix de l'utilisateur pour les images.   
    function handleSubmit() {
        setSubmited(true)
        if (propositions[selected] == answer) {
            score++
            setProgressBar(progressBar + progress)
            comment = "Bonne"
            bool = true
            showModal()
        }
        else {
            setProgressBar(progressBar + progress)
            comment = "Mauvaise"
            bool = false
            showModal()
        }
    }

    return (
        <ScrollView contentContainerStyle={scrollview(THEME)}>
            <View style={{ textAlign: "center", justifyContent: "center", alignItems: "center", flex: 1 }}>
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
            <View>
                <View style={styles.container_score}>
                    <Text style={score_mq(THEME)}>Score actuel : {"\n"}{score}/{global.QUESTION_COUNT}</Text>
                </View>
                <View style={{ backgroundColor: header(THEME), justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
                    <Text style={percentage_mq(THEME)}>{parseInt(progressBar)}%</Text>
                    <ProgressBarAnimated
                        {...progressCustomStyles}
                        width={barWidth}
                        value={progressBar}
                        useNativeDriver={true}
                        backgroundColorOnComplete={"#05944F"}
                    />
                    <Text style={question_mq(THEME)}>Q°{number}: Quelle image correspond à {answer} ?</Text>
                </View>
                <View style={scrollview(THEME)}>
                    {!submited ?
                        <View style={{ flex: 0 }}>
                            <View style={styles.images}>
                                <View style={styles.row}>
                                    <TouchableOpacity onPress={() => handleSelect(0)}>
                                        <Image source={Images(propositions[0])} style={selected == 0 ? border_image_mq(THEME) : styles.image} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleSelect(1)}>
                                        <Image source={Images(propositions[1])} style={selected == 1 ? border_image_mq(THEME) : styles.image} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.row}>
                                    <TouchableOpacity onPress={() => handleSelect(2)}>
                                        <Image source={Images(propositions[2])} style={selected == 2 ? border_image_mq(THEME) : styles.image} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleSelect(3)}>
                                        <Image source={Images(propositions[3])} style={selected == 3 ? border_image_mq(THEME) : styles.image} />
                                    </TouchableOpacity>
                                </View>
                                <Button style={button_mq(THEME)} color="black" round uppercase onPress={handleSubmit}>
                                    VALIDER
                                  </Button>
                            </View>
                        </View>
                        :
                        <View>
                            <View style={styles.images}>
                                <View style={styles.row}>
                                    <TouchableOpacity >
                                        <Image source={Images(propositions[0])} style={propositions[0] === answer ? styles.imageTrue : styles.imageFalse} />
                                    </TouchableOpacity>
                                    <TouchableOpacity >
                                        <Image source={Images(propositions[1])} style={propositions[1] === answer ? styles.imageTrue : styles.imageFalse} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.row}>
                                    <TouchableOpacity >
                                        <Image source={Images(propositions[2])} style={propositions[2] === answer ? styles.imageTrue : styles.imageFalse} />
                                    </TouchableOpacity>
                                    <TouchableOpacity >
                                        <Image source={Images(propositions[3])} style={propositions[3] === answer ? styles.imageTrue : styles.imageFalse} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.button}>
                                    {numberOfQuestions != global.QUESTION_COUNT ?
                                        <Button style={button_mq(THEME)} color="black" round uppercase onPress={handleNext}>
                                            SUIVANT
                                        </Button>
                                        :
                                        <Button style={button_mq(THEME)} color="black" round uppercase onPress={() =>
                                            navigation.navigate("Résultats", {
                                                score: score,
                                                percentage: (score / global.QUESTION_COUNT) * 100,
                                                numberOfQuestions: global.QUESTION_COUNT
                                            })}>
                                            RÉSULTATS
                                         </Button>
                                    }
                                </View>
                            </View>
                        </View>
                    }
                </View>
            </View>
        </ScrollView >
    )
}

// fonction qui crée un component Quizz
const Quizz = ({ answers, propositions, propositions2, navigation }) => {
    const [questNum, setQuestNum] = useState(0)
    numberOfQuestions = questNum + 1
    const { THEME, isDark } = useTheme();
    var wrongAnswers = []

    // fonction qui incrémente le numéro des questions affichées
    function handleNext() {
        setQuestNum(questNum + 1)
    }

    // fonction qui séléctionne les mauvaises réponses en fonction des espèces ou des familles et genres
    function chooseWrong() {
        if (species.includes(answers[questNum])) {
            wrongAnswers = pickExcept(propositions, answers[questNum], 3)
        }
        else if (familyGenus.includes(answers[questNum])) {
            wrongAnswers = pickExcept(propositions2, answers[questNum], 3)
        }
        return wrongAnswers
    }

    return (
        <View style={{ flex: 1 }}>
            { questNum < global.QUESTION_COUNT ? (
                <View>
                    <QuizzQuestion number={questNum + 1} answer={answers[questNum]} wrongAnswers={chooseWrong()} onNext={handleNext} navigation={navigation} />
                </View>
            )
                :
                (
                    navigation.navigate("Résultats", {
                        score: score,
                        percentage: (score / global.QUESTION_COUNT) * 100,
                        numberOfQuestions: global.QUESTION_COUNT
                    })
                )}
        </View>
    )
}

const MQ = ({ route, navigation }) => {

    if (route.params.score == 0) {
        score = route.params.score
        route.params.score++
    }

    const { THEME, isDark } = useTheme();
    const species = getSpecies()
    const familyGenus = getFamilyGenus()
    const all = getAll()
    const shuffledSpecies = shuffle(species)
    const shuffledFamilyGenus = shuffle(familyGenus)
    const shuffledAll = shuffle(all)
    // Nombre de questions
    // Recuperation des reponses
    const questionMushrooms = shuffledAll.slice(0, QUESTION_COUNT)

    return (
        <View style={scrollview(THEME)}>
            <Quizz answers={questionMushrooms} propositions={shuffledSpecies} propositions2={shuffledFamilyGenus} navigation={navigation} onFinished={() => { }} />
        </View >
    )
}

export default MQ

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

function question_mq(THEME) {
    return {
        marginTop: 10,
        marginBottom: 10,
        flex: 0.25,
        textAlign: 'center',
        fontSize: 16,
        color: THEME.QUESTION_MQ,
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
function percentage_mq(THEME) {
    return {
        textAlign: "center",
        color: THEME.PERCENTAGE_MQ,
        marginBottom: 10,
        flex: 0.5
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
function border_image_mq(THEME) {
    return {
        height: 170,
        width: 170,
        margin: 5,
        borderRadius: 10,
        borderWidth: 3.5,
        borderColor: THEME.BORDER_IMAGE_MQ,
    }
}

function sad_icon_mq(THEME) {
    return {
        fontSize: 22,
        color: THEME.SAD_ICON_MQ,
    }
}

const styles = StyleSheet.create({

    images: {
        alignItems: 'center',
    },
    image: {
        height: 170,
        width: 170,
        margin: 5,
        borderRadius: 10,
        borderWidth: 1.5,
    },
    imageTrue: {
        height: 170,
        width: 170,
        margin: 5,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: "#05944F"
    },
    imageFalse: {
        height: 170,
        width: 170,
        margin: 5,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: "red"
    },
    alert_body: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 15,
        flexDirection: "row",
    },
    row: {
        flexDirection: 'row',
    },
    comment: {
        fontSize: SIZE.H1_BIS,
        textAlign: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    container_question: {
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
    },

    container_score: {
        alignItems: 'flex-end',
    },
})