//IMPORTS FRAMEWORKS
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, Text, ScrollView, Pressable, Modal, LogBox } from "react-native";
import { useScrollToTop } from '@react-navigation/native';

//IMPORT DES ICONS
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

//IMPORTS RELATIFS AU STYLE
import { useTheme } from '../../ThemeProvider';
import { SIZE } from "../components/colorThemes";

//IMPORT DES DONNEES
import * as data from '../../back/database/data.json'

//IMPORT DES COMPOSANTS
import KeyItem from "../components/KeyItem"
import MushroomItem from "../components/MushroomItem"
import MycoButton from '../components/MycoButton';

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

let answers = []

const Identification = ({ navigation }) => {

	// Etat
	const { THEME, isDark } = useTheme();
	// Récupération des données des choix de réponses à une question
	const [dataKey, setDataKey] = useState(data[0]);
	// Etat des modals
	const [showWarning, SetshowWarning] = useState(false);
	const [isModalVisible, setModalVisible] = useState(true);

	//constante permettant de remonter au début de la scroll
	const ref = React.useRef(null);
	useScrollToTop(ref);

	// Récupération de l'état précédent
	let prevQuestion = usePrevious(dataKey)
	// Récupération des choix de réponses filtrées
	let newDataKey = []

	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, [])

	// Fonction qui va permettre de récupérer l'état précédent de la vue
	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		}, [value]);
		return ref.current;
	}

	// Fonction qui va permettre de filtrer les choix de réponses par rapport aux choix précédemments faits
	function filterKeys(dataKey) {
		newDataKey = Object.values(dataKey)
		for (let i = 0; i < length(dataKey); i++) {
			const newArray = Object.values(dataKey[i])
			if (newArray.filter(e => answers.indexOf(e) !== -1).length === answers.length) {
				continue
			}
			else {
				newDataKey.splice(i, 1, 0)
			}
		}
		for (let i = 0; i < length(dataKey); i++) {
			if (newDataKey[i] == 0) {
				newDataKey.splice(i, 1)
				i--;
			}
		}
	}
	filterKeys(dataKey)

	// Récupération du numéro de la question actuelle
	let currentQuestionID = parseInt(newDataKey[0]["ID"])
	// Récupération du numéro de la question précédente
	let getIDPreviousQuestion = parseInt(newDataKey[0]["IDPreviousQuestion"])
	// Récupération du titre de la question
	let title = newDataKey[0]["Titre"]

	// Fonction qui va permettre de récupérer les genres de champignons correspondant aux choix précédemments faits
	function getGenus() {
		const genus = []
		const array = Object.values(data[14])
		for (let i = 0; i < length(array); i++) {
			const newArray = Object.values(array[i])
			if (newArray.filter(e => answers.indexOf(e) !== -1).length === answers.length) {
				genus.push(data[14][i])
			}
		}
		return (setDataKey(genus))
	}

	// Fonction qui va permettre de récupérer les familles de champignons correspondant aux choix précédemments faits
	function getFamily() {
		const family = []
		const array = Object.values(data[15])
		for (let i = 0; i < length(array); i++) {
			const newArray = Object.values(array[i])
			if (newArray.filter(e => answers.indexOf(e) !== -1).length === answers.length) {
				family.push(data[15][i])
			}
		}
		return (setDataKey(family))
	}

	// Fonction qui va permettre de récupérer les espèces de champignons correspondant aux choix précédemments faits

	function getSpecies() {
		const species = []
		const array = Object.values(data[16])
		for (let i = 0; i < length(array); i++) {
			const newArray = Object.values(array[i])
			if (newArray.filter(e => answers.indexOf(e) !== -1).length === answers.length) {
				species.push(data[16][i])
			}
		}
		return (setDataKey(species))
	}

	// Fonction qui va permettre déterminer la longueur d'un tableau
	function length(Donnees) {
		return (Object.keys(Donnees).length)
	}

	// Fonction qui va permettre de charger les données de la question suivante
	function toTheNextQuestion(item) {
		saveAnswers(item["Nom"])
		if (parseInt(item["IDNextQuestion"]) != 14 && parseInt(item["IDNextQuestion"]) != 15 && parseInt(item["IDNextQuestion"]) != 16) {
			return (
				<View>
					<Text>{item["Nom"]}</Text>
					{setDataKey(data[parseInt(item["IDNextQuestion"])])}
				</View>

			)
		}
	}

	// Fonction qui va permettre de déterminer quand afficher les genres, familles ou espèces de champignon
	function toTheResults(item) {
		if (parseInt(item["IDNextQuestion"]) == 14) {
			return (
				getGenus()
			)
		}
		else if (parseInt(item["IDNextQuestion"]) == 15) {
			return (
				getFamily()
			)
		}
		else if (parseInt(item["IDNextQuestion"]) == 16) {
			return (
				getSpecies()
			)
		}
	}

	// Fonction qui va permettre de récupérer les données de la question précédente
	function getPreviousQuestion() {
		answers.splice(-1, 1)
		prevQuestion = data[getIDPreviousQuestion];

	}

	// Fonction qui va permettre de sauvegarder un choix de clé fait
	function saveAnswers(param) {
		answers.push(param)
		return (answers)
	}

	// Fonction qui va permettre de réinitialiser les choix de clé de l'utilisateur
	function reinitializeAnswers() {
		answers = []
	}

	// Fonction qui va permettre de créer un bouton de retour en arrière sur la même vue
	function createBackOption() {
		return (
			currentQuestionID != 0 ? // Pour tous les IDs différents de 0 (= Première question)
				<TouchableOpacity style={backButton(THEME)}
					onPress={() => {
						getPreviousQuestion();
						setDataKey(prevQuestion);
					}}
				>
					<FontAwesome5 style={{ color: THEME.BACKBUTTON }} size={30} name={"long-arrow-alt-left"} />
				</TouchableOpacity>
				: null
		)
	}

	// Fonction qui va permettre de réinitialiser toutes les données de l'identification
	function reinitializeIdentification() {
		return (
			currentQuestionID != 0 ? // Pour tous les IDs différents de 0 (= Première question)
				<TouchableOpacity style={reinitButton(THEME)}
					onPress={() => {
						reinitializeAnswers();
						setDataKey(data[0]);
					}}
				>
					<FontAwesome5 style={{ color: THEME.REINITBUTTON }} size={25} name={"undo-alt"} />
				</TouchableOpacity>
				: null
		)
	}

	// Fonction qui va permettre d'afficher des choix de réponses et non des choix de genres, familles ou espèces
	function displayKeyName(item) {
		if ((currentQuestionID != 14) && (currentQuestionID != 15) && (currentQuestionID != 16)) {
			return (
				<KeyItem item={item} navigation={navigation} />
			)
		}
	}

	// Fonction qui va permettre de naviguer vers les pages de description des genres, familles ou espèces
	function displayDescription(item) {
		for (let i = 0; i < length(data[14]); i++) {
			if (data[14][i]["Nom"] == (item["Nom"])) {
				return (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("Genres",
								{
									item: item
								})
						}>
						<MushroomItem item={item} navigation={navigation} />
					</TouchableOpacity>
				)
			}
		}

		for (let i = 0; i < length(data[15]); i++) {
			if (data[15][i]["Nom"] == (item["Nom"])) {
				return (
					<View>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("Familles",
									{
										item: item
									})
							}>
							<MushroomItem item={item} navigation={navigation} />
						</TouchableOpacity>
					</View>
				)
			}
		}
		for (let i = 0; i < length(data[16]); i++) {
			if (data[16][i]["Nom"] == (item["Nom"])) {
				return (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("Espèces",
								{
									item: item
								})
						}>
						<MushroomItem item={item} navigation={navigation} />
					</TouchableOpacity>
				)
			}
		}
	}

	// Fonction qui va permettre d'afficher un bouton spécifique aux familles qui ont des clés vers des espèces
	function displayPathToSpecies(item) {
		for (let i = 0; i < length(data[15]); i++) {
			if (data[15][i]["Nom"] == (item["Nom"])) {
				return (
					<View style={styles.container_favorite}>
						{item["IDNextQuestion"] ?
							<MycoButton primary title={"Identifier une espèce appartenant au groupe '" + item["Nom"] + "'"}
								onPress={() => {
									answers.push(item["Nom"])
									setDataKey(data[item["IDNextQuestion"]])
								}} />
							: null
						}
					</View >
				)
			}
		}
	}

	// Fonction qui va permettre de séparer visuellement les choix de réponse de l'utilisateur dans une fenêtre de rappel
	function splitAnswers() {
		return (
			<FlatList
				keyExtractor={(item, index) => String(index)}
				data={answers}
				renderItem={
					({ item }) =>
						<View>
							<Text style={splited_answers(THEME)}>- {item}</Text>
						</View>
				}
			/>
		)
	}

	return (
		<View style={{ flex: 1, backgroundColor: "transparent" }}>
			<View style={header(THEME)}>
				<View style={{ flex: 0, textAlign: "center", justifyContent: "center", backgroundColor: "transparent" }}>
					<Text style={title_header(THEME)}>Identifiez votre champignon !</Text>
				</View>
				{/* ---------------------------------- Affichage des boutons personnalisés retour, rappel et réinitialisation---------------------- */}
				<View style={{ flex: 0, flexDirection: "row", justifyContent: "space-between" }}>
					{createBackOption()}
					<View>
						{answers.length >= 1 ?
							<View >
								{/**Fenêtre contenant les informations de rappel*/}
								<Modal
									visible={showWarning}
									transparent={true}
									statusBarTranslucent
									backdropOpacity={0.3}
									onBackdropPress={() => setModalVisible(false)
									}
								>
									<View style={centered_view_Alert(THEME)}>
										<View style={alert_modal(THEME)}>
											<View style={styles.alert_body}>
												<Text style={title_modal(THEME)}>Où en suis-je ?{"\n"}</Text>
												{splitAnswers()}
											</View>
											<Pressable style={{ flexDirection: "row-reverse", alignItems: 'flex-end' }}
												onPress={() => SetshowWarning(false)}
											>
												<Text style={ok(THEME)}>OK</Text>
											</Pressable>
										</View>
									</View>
								</Modal>
								<TouchableOpacity onPress={() => SetshowWarning(true)}>
									<FontAwesome5 style={lightbulb(THEME)} name={"lightbulb"} />
								</TouchableOpacity>
							</View>
							: null}
					</View>
					{reinitializeIdentification()}
				</View>
			</View>
			{/* ---------------------------------- Affichage des clés d'identification ou des genres, familles ou espèces----------------------- */}
			<ScrollView ref={ref} contentContainerStyle={scrollview(THEME)}>
				<View>
					<Text style={titleQuestion(THEME)}>{title}</Text>
				</View>
				<View style={container(THEME)}>
					<View style={{ flex: 1, textAlign: "center", justifyContent: "center", marginTop: 30 }}>
						<View style={{ flex: 1 }}>
							<FlatList
								keyExtractor={(item) => item["Nom"].toString()}
								data={newDataKey}
								renderItem=
								{
									({ item }) =>
										<View>
											<TouchableOpacity
												onPress={() => {
													toTheNextQuestion(item)
													toTheResults(item)
												}
												}>
												<View>
													{displayKeyName(item)}
													{displayDescription(item)}
												</View>
											</TouchableOpacity>
											{displayPathToSpecies(item)}
										</View>
								}
							/>
						</View>
					</View>
				</View>
			</ScrollView >
		</View>

	);
};

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/

// STYLE DYNAMIQUE : à partir de fonctions 

function centered_view_Alert(THEME) {
	return {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
}

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
		fontSize: 24,
		textAlign: "center",
		marginTop: 50,
		marginBottom: 20,
		color: THEME.TITLE
	}
}

function container(THEME) {
	return {
		flexGrow: 1,
		backgroundColor: THEME.CONTAINER_ID,
		paddingBottom: 80,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30
	}
}

function titleQuestion(THEME) {
	return {
		fontSize: SIZE.H1_BIS,
		textAlign: "center",
		marginTop: 50,
		marginBottom: 20,
		color: THEME.TITLE_QUESTION,
		fontWeight: 'bold'
	}
}

function lightbulb(THEME) {
	return {
		fontSize: 25,
		fontWeight: "bold",
		color: THEME.LIGHTBULB,
		padding: 10,
	}
}

function backButton(THEME) {
	return {
		flexDirection: "row",
		marginLeft: 20,
		color: THEME.BACKBUTTON,
		padding: 10,
	}
}

function reinitButton(THEME) {
	return {
		flexDirection: "row",
		marginRight: 20,
		color: THEME.REINITBUTTON,
		padding: 10,
	}
}

function alert_modal(THEME) {
	return {
		width: 300,
		backgroundColor: THEME.ALERT_MODAL,
		borderColor: '#000',
		flex: 0.25
	}
}

function ok(THEME) {
	return {
		fontSize: 20,
		margin: 10,
		textAlign: 'center',
		alignItems: 'center',
		padding: 10,
		color: THEME.OK
	}
}
function title_modal(THEME) {
	return {
		fontSize: 16,
		color: THEME.TITLE_MODAL,
	}
}

function splited_answers(THEME) {
	return {
		color: THEME.SPLITED_ANSWERS,
		fontSize: 16,
	}
}

const styles = StyleSheet.create({
	alert_body: {
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		padding: 15
	},
});

export default Identification;