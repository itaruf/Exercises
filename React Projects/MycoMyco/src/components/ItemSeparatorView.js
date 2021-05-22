//IMPORTS FRAMEWORKS
import React from 'react';
import { View } from 'react-native';
//IMPORTS RELATIF AU STYLE
import { useTheme } from '../../ThemeProvider';

//Composant pour améliorer le style visuelle ,utilisé dans toutes les vues
const ItemSeparatorView = () => {
    // Etat, appel du mode sombre / clair
    const { THEME, isDark } = useTheme();

    return (
        <View
            style={separator(THEME)}
        />
    );
}

export default ItemSeparatorView

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/
// STYLE DYNAMIQUE : à partir de fonctions 
function separator(THEME) {
    return {
        height: 1,
        backgroundColor: THEME.SEPARATOR,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 5,
        marginBottom: 5
    }
}
