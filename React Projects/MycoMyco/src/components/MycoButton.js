import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Styles
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';



/**
 * Composant affichant un bouton au style uniforme sur toutes les plateformes
 * @param {string} [props.title=Bouton] - Texte affiche a l'interieur du bouton
 * @param {boolean} [props.secondary=false] - Style a appliquer
 * @param {Function} props.onPress - Fonction execute lors d'un appui court
 */
function MycoButton({ title = "Button", secondary, onPress }) {
  const props = { title, secondary, onPress };

  // Si le parametre secondaire n'est pas demandé
  return !secondary ? (
    //retour du bouton primaire
    <MycoButtonPrimary {...props} />
  ) : (
    // sinon retour du bouton secondaire
    <MycoButtonSecondary {...props} />
  );
}

// Bouton avec le style pricipal applique
function MycoButtonPrimary({ title = "Button", onPress }) {
  // Etat, appel du mode sombre / clair
  const { THEME, isDark } = useTheme();
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, button_primary(THEME)]}
        onPress={onPress}
      >
        <Text style={[text(SIZE), text_primary(THEME)]}>{title}</Text>

      </TouchableOpacity>
    </View>
  );
}

// Bouton avec le style secondaire applique
function MycoButtonSecondary({ title = "Button", onPress }) {
  // Etat, appel du mode sombre / claie
  const { THEME, isDark } = useTheme();
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, button_secondary(THEME)]}
        onPress={onPress}
      >
        <Text style={[text(SIZE), text_secondary(THEME)]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
/****************************STYLES APPLIQUES SUR LA PAGE*********************************/

// STYLE DYNAMIQUE : à partir de fonctions 

//Primaire
function button_primary(THEME) {
  return {
    backgroundColor: THEME.PRIMARY,
    borderColor: THEME.PRIMARY,
    borderWidth: 2,
  }
}
function text_primary(THEME) {
  return {
    color: THEME.SECONDARY,
  }
}

//Secondaire
function button_secondary(THEME) {
  return {
    backgroundColor: THEME.SECONDARY,
    borderColor: THEME.PRIMARY,
    borderWidth: 2,
  }
}
function text_secondary(THEME) {
  return {
    color: THEME.PRIMARY,
  }
}

//texte du bouton
function text(SIZE) {
  return {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  }
}


// STYLE DYNAMIQUE : à partir de fonctions 

const styles = StyleSheet.create({
  button: {
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    borderRadius: 100,
  },
});

export default MycoButton;