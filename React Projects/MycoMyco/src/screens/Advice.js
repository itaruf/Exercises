import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView, Image } from "react-native";
import { useState } from "react";
import { useScrollToTop } from '@react-navigation/native';
//IMPORT DES ICONS
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
//IMPORTS RELATIFS AU STYLE
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';
import ItemSeparatorView from '../components/ItemSeparatorView'

const Advice = ({ navigation }) => {

  const { THEME, isDark } = useTheme();
  //Recharge les données de l'affichage des textes
  const [shouldShow1, setShouldShow1] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);
  const [shouldShow3, setShouldShow3] = useState(false);
  const [shouldShow4, setShouldShow4] = useState(true);
  //constante permettant de remonter au début de la scroll
  const ref = React.useRef(null);
  useScrollToTop(ref);

  return (
    <ScrollView ref={ref} contentContainerStyle={scrollview(THEME)}>
      {/* Affichage des conseils pour la cueillette */}
      <View style={header(THEME)}>
        <View style={{ flex: 0, textAlign: "center", justifyContent: "center", backgroundColor: "transparent" }}>
          <Text style={title(THEME)}> Conseils et préparations !</Text>
        </View>
      </View>
      <View style={container_hp(THEME)}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons style={icon_category_game(THEME)} name="basket" size={50} color={'black'} />
          <View style={styles.touchable}>
            <Text style={title_icon(THEME)}>Cueillir des champignons en toute sécurité{"\n"}
              <Text style={subtitle_icon(THEME)}>Lisez attentivement les 3 étapes suivantes, cela vous garantira une cueillette sans danger !</Text>
            </Text>
          </View>
        </View>
      </View>
      <ItemSeparatorView />
      <View style={subcontainer_hp(THEME)}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons style={icon_category_game(THEME)} name="circle-outline" size={30} />
          <TouchableOpacity style={styles.touchable} onPress={() => setShouldShow1(!shouldShow1)}>
            <Text style={title_icon(THEME)}>Avant la cueillette</Text>
          </TouchableOpacity>
          <MaterialIcons onPress={() => setShouldShow1(!shouldShow1)}
            name={!shouldShow1 ? "keyboard-arrow-down" : "keyboard-arrow-up"}
            size={28}
            color={THEME.ICON_ADVICE}
          />
        </View>
      </View>
      {shouldShow1 ? (//les should affichent les textes en cas de clique
        <View>
          <View style={{ paddingLeft: 40 }}>
            <View style={subcontainer_text_advice(THEME)}>
              <Text style={title_icon(THEME)}>{"\n"}
                <Text style={text_for_advice(THEME)}>
                  Prévoir un panier en osier, une caisse ou un carton pour déposer ses champignons. Surtout, n’utilisez jamais de sacs en plastique, ils accélèrent le pourrissement.{"\n"}
                </Text>
              </Text>
              <View style={styles.images}>
                <Image source={require('../assets/Advice/panier.png')} />
              </View>
              <Text style={title_icon(THEME)}>{"\n"}
                <Text style={text_for_advice(THEME)}>
                  Votre contenant doit être suffisamment grand pour séparer les différentes espèces et ainsi éviter le mélange de morceaux de champignons vénéneux avec des champignons comestibles.{"\n"}
                </Text>
              </Text>
              <View style={styles.images}>
                <Image source={require('../assets/Advice/separation.png')} />
              </View>
              <Text style={title_icon(THEME)}>{"\n"}
                <Text style={text_for_advice(THEME)}>
                  Choisir un lieu de cueillette loin des sites pollués : bords de route, aires industrielles, décharges, pâturages, car les champignons absorbent les polluants auxquels ils sont exposés.{"\n"}
                </Text>
              </Text>
              <View style={styles.images}>
                <Image source={require('../assets/Advice/pollution.png')} />
              </View>
              <Text style={title_icon(THEME)}>{"\n"}
                <Text style={text_for_advice(THEME)}>
                  Se renseigner sur les structures qui peuvent aider à identifier une cueillette en cas de doute : certains pharmaciens ou les associations de mycologie de votre région.{"\n"}
                </Text>
              </Text>
              <View style={styles.images}>
                <Image source={require('../assets/Advice/pharmacie.png')} />
              </View>
            </View>
          </View>
        </View>) : null


      }
      <View style={subcontainer_hp(THEME)}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons style={icon_category_game(THEME)} name="circle-slice-4" size={30} />
          <TouchableOpacity style={styles.touchable} onPress={() => setShouldShow2(!shouldShow2)}>
            <Text style={title_icon(THEME)}>Pendant la cueillette</Text>
          </TouchableOpacity>
          <MaterialIcons onPress={() => setShouldShow2(!shouldShow2)}
             name={!shouldShow2 ? "keyboard-arrow-down" : "keyboard-arrow-up"}
             size={28}
             color={THEME.ICON_ADVICE}
          />
        </View>
      </View>
      {
        shouldShow2 ? (
          <View>
            <View style={{ paddingLeft: 40 }}>
              <View style={subcontainer_text_advice(THEME)}>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Ne ramasser que les champignons que vous connaissez parfaitement : certains champignons vénéneux hautement toxiques ressemblent beaucoup aux espèces comestibles.{"\n"}
                  </Text>
                </Text>
                <View style={styles.images}>
                  <Image source={require('../assets/Advice/ressemblance.png')} />
                </View>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Attention ! Des champignons vénéneux peuvent pousser à l’endroit où vous avez cueilli des champignons comestibles une autre année.{"\n"}
                  </Text>
                </Text>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Au moindre doute sur l’état ou l’identification d’un des champignons récoltés, ne pas consommer la récolte avant de l’avoir fait contrôler par un pharmacien ou une association de mycologie.{"\n"}
                  </Text>
                </Text>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Cueillir uniquement les spécimens en bon état et prélever la totalité du champignon (pied et chapeau) afin d’en permettre l’identification.{"\n"}
                  </Text>
                </Text>
                <View style={styles.images}>
                  <Image source={require('../assets/Advice/prelevement.png')} />
                </View>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Eviter de ramasser les jeunes spécimens qui n'ont pas fini de se former, ce qui favorise les confusions, et les vieux spécimens qui risquent d'être abîmés ou colonisés par des vers ou des insectes.
            </Text>
                </Text>
              </View>
            </View>
          </View>) : null
      }
      <View style={subcontainer_hp(THEME)}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons style={icon_category_game(THEME)} name="circle-slice-8" size={30} />
          <TouchableOpacity style={styles.touchable} onPress={() => setShouldShow3(!shouldShow3)}>
            <Text style={title_icon(THEME)}>Après la cueillette</Text>
          </TouchableOpacity>
          <MaterialIcons onPress={() => setShouldShow3(!shouldShow3)}
            name={!shouldShow3 ? "keyboard-arrow-down" : "keyboard-arrow-up"}
            size={28}
            color={THEME.ICON_ADVICE}
          />
        </View>
      </View>
      <ItemSeparatorView />
      {
        shouldShow3 ? (
          <View>
            <View style={{ paddingLeft: 40 }}>
              <View style={subcontainer_text_advice(THEME)}>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Se laver soigneusement les mains.
            </Text>
                </Text>
                <View style={styles.images}>
                  <Image source={require('../assets/Advice/mains.png')} />
                </View>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Prendre une photo de votre récolte avant la cuisson : elle sera utile en cas d’intoxication pour décider du traitement adéquat.
            </Text>
                </Text>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Conserver les champignons en évitant tout contact avec d’autres aliments au réfrigérateur (maxi 4°C) et les consommer dans les deux jours après la cueillette.{"\n"}
                  </Text>
                </Text>
                <View style={styles.images}>
                  <Image source={require('../assets/Advice/temperature.png')} />
                </View>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Ne jamais consommer les champignons crus et cuire chaque espèce séparément et suffisamment : 20 à 30 minutes à la poêle ou 15 minutes à l'eau bouillante avec rejet de l’eau de cuisson. Cela détruit parasites et bactéries, et rend certaines espèces comestibles (shiitake, morilles, certains bolets).{"\n"}
                  </Text>
                </Text>
                <View style={styles.images}>
                  <Image source={require('../assets/Advice/cuisson.png')} />
                </View>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Consommer les champignons en quantité raisonnable, soit 150 à 200 grammes par adulte et par semaine.{"\n"}
                  </Text>
                </Text>
                <View style={styles.images}>
                  <Image source={require('../assets/Advice/consommation.png')} />
                </View>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Ne jamais proposer de  champignons cueillis à de jeunes enfants et éviter aux seniors (haut risque de déshydratation et de décès en cas d’intoxication) et aux femmes enceinte d’en consommer (certaines bactéries ou parasites comme la toxoplasmose, à risque pour le fœtus, sont présents dans la terre et pourraient les infecter).{"\n"}
                  </Text>
                </Text>
                <View style={styles.images}>
                  <Image source={require('../assets/Advice/enfants.png')} />
                </View>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Ne pas consommer de champignon identifié au moyen d’une application de reconnaissance de champignons sur smartphone via photos, en raison du risque élevé d’erreur.{"\n"}
                  </Text>
                </Text>
                <View style={styles.images}>
                  <Image source={require('../assets/Advice/photos.png')} />
                </View>
                <Text style={title_icon(THEME)}>{"\n"}
                  <Text style={text_for_advice(THEME)}>
                    Ne pas consommer de champignons commercialisés par des non professionnels, « à la sauvette ».{"\n"}
                  </Text>
                </Text>
              </View>
            </View>
          </View>) : null
      }
      {/*Button rediction vers la page conseils de préparation (mushroomrecipe)*/}

      <View style={container_hp(THEME)}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons style={icon_category_game(THEME)} name="chef-hat" size={50} color={'black'} />
          <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate("Preparation")}>
            <Text style={title_icon(THEME)}>Préparer et consommer des champignons{"\n"}
              <Text style={subtitle_icon(THEME)}>Visitez notre temple du GOÛT! </Text>
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons onPress={() => navigation.navigate("Preparation")}
              name={"chevron-double-right"}
              size={28}
              color={THEME.ICON_ADVICE}
            />
         
          </View>
        </View>
      </View>
      <ItemSeparatorView />
      <View style={container_hp(THEME)}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons style={icon_category_game(THEME)} name="bottle-tonic-skull" size={50} color={'black'} />
          <TouchableOpacity style={styles.touchable} onPress={() => setShouldShow4(!shouldShow4)}>
            <Text style={title_icon(THEME)}>En cas d'intoxication</Text>
          </TouchableOpacity>
          <MaterialIcons onPress={() => setShouldShow4(!shouldShow4)}
            name={!shouldShow4 ? "keyboard-arrow-down" : "keyboard-arrow-up"}
            size={28}
            color={THEME.ICON_ADVICE}
          />
        </View>
      </View>
      <ItemSeparatorView />
      {
        shouldShow4 ? (
          <View style={container_text_advice(THEME)}>
            <Text style={title_icon(THEME)}>{"\n"}
              <Text style={text_for_advice(THEME)}>
                En cas de détresse vitale (perte de connaissance, détresse respiratoire, etc.), appelez le 15 ou le 112.{"\n"}{"\n"}
              </Text>
              <Text style={text_for_advice(THEME)}>
                En cas d’apparition de symptômes suite à une consommation de champignons (diarrhées, vomissements, nausées, tremblements, vertiges, troubles de la vue, etc.), appelez immédiatement un Centre antipoison en mentionnant cette consommation.{"\n"}{"\n"}
              </Text>
              <Text style={text_for_advice(THEME)}>
                Il est utile de noter les heures du ou des derniers repas, l’heure de survenue des premiers signes et de conserver les restes de la cueillette pour identification.{"\n"}{"\n"}
              </Text>
            </Text>
            <View style={styles.images}>
              <Image source={require('../assets/Advice/tableau.png')} />
            </View>
          </View>) : null
      }
      {/* Il s'agit d'un lien vers le site de l'anses dont les informations de cette vue sont extraites. */}

      <View style={container_text_advice(THEME)}>
        <Text style={title_icon(THEME)}>{"\n"}
          <Text style={text_for_advice(THEME)}>Pour plus d'informations consultez le site suivant :  {"\n"}{"\n"}</Text>
          <Text style={[text_for_advice(THEME), { fontWeight: "bold" }]} onPress={() => Linking.openURL('https://www.anses.fr/fr/content/infographie-la-cueillette-des-champignons-0')}>https://www.anses.fr/fr/content/infographie-la-cueillette-des-champignons-0 {"\n"}{"\n"}</Text>
          <Text style={text_for_advice(THEME)}>Il est à noter que toutes les informations précédentes en sont extraites.</Text>
        </Text>
      </View>
    </ScrollView >
  );
};
/****************************STYLES APPLIQUES SUR LA PAGE*********************************/
// STYLE DYNAMIQUE : à partir de fonctions

function scrollview(THEME) {
  return {
    flexGrow: 1,
    backgroundColor: THEME.SCROLLVIEW,
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

function icon_category_game(THEME) {
  return {
    fontWeight: 'bold',
    color: THEME.ICON_CATEGORY_GAME
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

function subtitle_icon(THEME) {
  return {
    color: THEME.SUBTITLE_ICON,
    fontSize: SIZE.H3,
    alignItems: "flex-start",
    textAlign: "left",
    fontWeight: "normal",
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

function subcontainer_hp(THEME) {
  return {
    flexDirection: "row",
    margin: 10,
    marginLeft: 20,
    padding: 20,
    justifyContent: "center",
    backgroundColor: THEME.CONTAINER_HP,
    borderRadius: 15,
    alignItems: "center",
  }
}

function container_text_advice(THEME) {
  return {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 0,
    backgroundColor: "transparent",
    borderRadius: 15,
  }
}

function subcontainer_text_advice(THEME) {
  return {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingLeft: 20,
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
    alignItems: "flex-start",
    textAlign: "left",
    fontWeight: "normal",
  }
}
// STYLE STATIQUE : à partir de la constante styles
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "white"
  },
  touchable: {
    backgroundColor: "transparent",
    marginBottom: 0,
    borderColor: "lightgrey",
    borderRadius: 30,
    flex: 1,
  },
  images: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Advice
