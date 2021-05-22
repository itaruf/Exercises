//IMPORTS FRAMEWORK
import React, { useEffect, useContext, useState } from 'react'
import { LogBox, BackHandler, Modal, View, Text, StyleSheet, TouchableOpacity, SectionList, Alert, ScrollView } from "react-native"
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
//IMPORTS DE COMPOSANTS
import MushroomItem from '../components/MushroomItem';
import MycoButton from '../components/MycoButton';

//IMPORT POUR LE STOCKAGE
import AsyncStorage from '@react-native-async-storage/async-storage';

//IMPORT DE CONTEXTE
import FavoriteContext from '../../FavoriteContext';

//IMPORTS RELATIF AU STYLE
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';
//IMPORT DES IMAGES DE LA GALERIE
import Gallery from '../components/Gallery';


// *************************************** FICHE DESCRIPTIVE *********************************************

LogBox.ignoreLogs(['react-native-image-gallery, Please provide dimensions of your local images']);
LogBox.ignoreAllLogs();

//Warning: componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.
//react-native-image-gallery, Please provide dimensions of your local images
const MushroomDetails = ({ route }) => {

  // nom du champignon
  const mushroomName = route.params.item["Nom"]
  // type de champignon : ID= 16 pour espèce, 15 pour famille et 14 pour genre
  const mushroomID = route.params.item["ID"]
  // Etat, appel du favoris
  const { state_favorite, dispatch_favorite } = useContext(FavoriteContext)
  // champignon favori ou non
  const isFavorite = state_favorite.favorites[mushroomName];
  // Etat, appel du mode sombre / clair
  const { THEME, isDark } = useTheme();

  // stockage interne des données : mode sauvegarde
  useEffect(() => {
    return (() => {
      (async () => {
        try {
          // sauvegarde des données
          await AsyncStorage.setItem('@myco_favorite', JSON.stringify(state_favorite.favorites))
        } catch (e) {
          // lance une erreur
          console.log("Erreur :", e)
        }
      })()
    })
  }, [])

  // variables pour l'état de l'ouverture des onglets (true = ouvert | false = fermé)
  const [expanded, setExpanded] = useState(false); //classification
  const [expanded2, setExpanded2] = useState(false); //caractéristiques
  const [expanded3, setExpanded3] = useState(false); // description
  const [expanded4, setExpanded4] = useState(false); //galerie

  // ---------------------------------------------------CARACTERISTIQUES------------------------------------------------------------------------------------------------
  // recherche du champ qui nous interesse : Description
  let identification = route.params.item["Description"] != "" ? route.params.item["Description"] : "Aucune caractéristique : Information indisponible.";

  // Separation des clés dans un tableau chaque élement du tab est 
  // une chaine de caractère comprenant la  clé suivi de sa description
  let separateKeys = identification.split(".");

  // tableau où chaque élement est un tableau composé de la clé en index 0, et de la description en index 1
  let separateInformations = [];
  for (let i = 0; i < separateKeys.length; i++) {
    separateInformations.push(separateKeys[i].split(':'));
  }

  // separation des clés et des informations dans deux tableaux distincts
  let keys_index = [];
  let informations = [];
  for (let i = 0; i < separateInformations.length - 1; i++) {
    keys_index.push(separateInformations[i][0]);
    informations.push(separateInformations[i][1])
  }

  // changement de la forme des tableaux
  // ["info1_1, info1_2, info1_3" , "info2_1, info2_2" ] => 
  // [ [info1_1, info1_2, info1_3] , [info2_1, info2_2] ]
  let informations_index = [];
  for (let i = 0; i < informations.length; i++) {
    informations_index.push(informations[i].split(','));
  }

  //regroupement des données dans un tableau d'objet manipulable
  const DATA = keys_index.map((key, index) => {
    const d = {
      title: key,
      data: informations_index[index]
    }
    return d
  })

  // ---------------------------------------------------CLASSIFICATION------------------------------------------------------------------------------------------------
  const classification_attribute = []
  const classification_info = []

  switch (mushroomID) {
    // Espèces
    case 16:
    case "16":
      classification_attribute.push("Nom de l'espèce", "Nom scientifique", "Famille")
      classification_info.push([route.params.item["Nom"]], [route.params.item["Latin"]], [route.params.item["Famille"]])
      break
    // Familles
    case 15:
    case "15":
      classification_attribute.push(["Nom de la famille"])
      classification_info.push([route.params.item["Nom"]])
      break
    // Genres
    case 14:
    case "14":
      classification_attribute.push(["Nom du genre"])
      classification_info.push([route.params.item["Nom"]])
      break
  }

  // regroupement des données dans un tableau d'objet manipulable
  const CLASSIFICATION = classification_attribute.map((key, index) => {
    const d = {
      title: key,
      data: classification_info[index]
    }
    return d
  })

  const [isModalVisible, setModalVisible] = useState(false)

  const closeModal = () => { if (isModalVisible) { setModalVisible(false) } }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', closeModal)
    return () => BackHandler.removeEventListener('hardwareBackPress', closeModal)
  }, [])

  return (
    <ScrollView style={scrollview(THEME)}>
      <MushroomItem item={route.params.item} />

      {/* ---------RETRAIT ET AJOUT DES FAVORIS--------------*/}
      <View style={styles.container_favorite}>
        {/* si le champignon est deja favoris */}
        {isFavorite ? <MycoButton secondary title="- RETIRER DES FAVORIS"
          onPress={() => {
            // Changement de l'état du favoris: passage en faux (non favoris)
            dispatch_favorite({ type: 'TOGGLE', payload: { mushroomName } });
            Alert.alert("Le champignon a bien été retiré des favoris")
          }} />
          // sinon si le champignon n'est pas dans les favoris 
          :
          <MycoButton title="+ AJOUTER AUX FAVORIS"
            onPress={() => {
              // Changement de l'état du favoris: passage en faux (non favoris)
              dispatch_favorite({ type: 'TOGGLE', payload: { mushroomName } });
              Alert.alert("Le champignon a bien été ajouté aux favoris")
            }} />
        }
      </View>


      {/* ---------ONGLET CLASSIFICATION DE LA LISTE DEROULANTE--------------*/}
      <TouchableOpacity style={table_head(THEME)} onPress={() => setExpanded(!expanded)}>
        <Text style={table_header(SIZE, THEME)}>Classification</Text>
        <View>
          {/* Icone d'ouverture d'onglet */}
          <MaterialIcons style={{marginHorizontal:10}}
            name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={28}
            color={THEME.ICON_DISPLAY}
          />
        </View>
      </TouchableOpacity>
      {/* si l'onglet est ouvert alors affichage de la liste */}
      {expanded && (
        <View style={styles.container_infos}>
          <SectionList
            sections={CLASSIFICATION}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) =>
              <View style={styles.item}>
                <Text style={description(SIZE, THEME)}>{item}</Text>
              </View>}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={header(SIZE, THEME)}>{title}</Text>
            )}
          />
        </View>
      )}
      {/* ---------ONGLET CARACTERISTIQUE DE LA LISTE DEROULANTE--------------*/}
      <TouchableOpacity style={table_head(THEME)} onPress={() => setExpanded2(!expanded2)}>
        <Text style={table_header(SIZE, THEME)}>Caractéristiques</Text>
        <View>
          {/* Icone d'ouverture d'onglet */}
          <MaterialIcons style={{marginHorizontal:10}}
            name={expanded2 ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={28}
            color={THEME.ICON_DISPLAY}
          />
        </View>
      </TouchableOpacity>
      {/* si l'onglet est ouvert alors affichage de la liste */}
      {expanded2 && (
        <View style={styles.container_infos}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) =>
              <View style={styles.item}>
                <Text style={description(SIZE, THEME)}>{item}</Text>
              </View>}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={header(SIZE, THEME)}>{title}</Text>
            )}
          />
        </View>
      )}
      {/* ---------ONGLET DESCRIPTION DE LA LISTE DEROULANTE--------------*/}
      <TouchableOpacity style={table_head(THEME)} onPress={() => setExpanded3(!expanded3)}>
        <Text style={table_header(SIZE, THEME)}>Description</Text>
        <View>
          {/* Icone d'ouverture d'onglet */}
          <MaterialIcons style={{marginHorizontal:10}}
            name={expanded3 ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={28}
            color={THEME.ICON_DISPLAY}
          />
        </View>
      </TouchableOpacity>
      {/* si l'onglet est ouvert alors affichage de la description */}
      {expanded3 && (
        <View style={styles.table}>
          <Text style={description(SIZE, THEME)}>{route.params.item["Information"] != "" ? route.params.item["Information"] : "Aucune description disponible"}</Text>
        </View>
      )}
      {/* ---------ONGLET GALERIE DE LA LISTE DEROULANTE--------------*/}
      <TouchableOpacity style={table_head(THEME)} onPress={() => {
        setModalVisible(true)
      }
      }>
        <Text style={table_header(SIZE, THEME)}>Galerie</Text>
        <View>
          {/* Icone d'ouverture d'onglet */}
          <MaterialCommunityIcons style={{marginHorizontal:10}}
            name={ "chevron-double-right"}
            size={28}
            color={THEME.ICON_DISPLAY}
          />
           
        </View>
      </TouchableOpacity>
      {/* si l'onglet est ouvert alors affichage des images dans la galerie*/}
      {/*{expanded4 && (
        <View>
          {/*<MycoButton title="VOIR LA GALERIE"
            onPress={() => setModalVisible(true)} />*/}
      <Modal visible={isModalVisible}
        transparent={true}
        hardwareAccelerated={true}
        onRequestClose={closeModal}
        animationType={"non"}
        style={{ backgroundColor: "black" }}>
        <TouchableOpacity
          style={{ backgroundColor: "transparent" }}
          onPress={closeModal}
        >
          <MaterialCommunityIcons style={{ padding: 15 }} color="transparent" name="arrow-left" size={25} />
        </TouchableOpacity>
        {Gallery(route.params.item["Nom"])}
      </Modal>
    </ScrollView >
  )
}

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/

// STYLE DYNAMIQUE : à partir de fonctions 
function scrollview(THEME) {
  return {
    flex: 1,
    backgroundColor: THEME.SCROLLVIEW,
    paddingTop: 10,
  }
}

function table_header(SIZE, THEME) {
  return {
    flex: 1,
    fontSize: SIZE.H1_BIS,
    fontWeight: "bold",
    paddingLeft: 10,
    color: THEME.TABLE_HEADER,
  }
}

function table_head(THEME) {
  return {
    paddingVertical: 16,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEME.TABLE_HEAD,
    borderRadius: 10,
    marginHorizontal: 10,
  }
}

function header(SIZE, THEME) {
  return {
    fontSize: SIZE.H2_BIS,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
    color: THEME.HEADER_DISPLAY,
  }
}

function description(SIZE, THEME) {
  return {
    fontSize: SIZE.H2,
    color: THEME.DESCRIPTION,
  }
}

// STYLE STATIQUE : à partir de la constante styles
const styles = StyleSheet.create({


  container_infos: {
    flex: 1,
    marginHorizontal: 20,
  },

  container_favorite: {
    marginHorizontal: 10,
    marginBottom: 18,
  },

  table: {
    paddingHorizontal: 22,
    paddingVertical: 5,
  },

  album: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  item: {
    padding: 15,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    borderBottomColor: 'lightgrey',
  },

  image: {
    height: 120,
    width: 120,
    margin: 5,
  },

})

export default (MushroomDetails)
