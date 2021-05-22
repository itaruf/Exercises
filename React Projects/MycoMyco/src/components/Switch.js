//IMPORTS FRAMEWORKS
import * as React from 'react';
import { Switch as RNSwitch } from 'react-native';

//IMPORTS RELATIFS AU STYLE
import { useTheme } from '../../ThemeProvider';

export const Switch = () => {

    // Etat, détermination du mode d'éclairage
    const { setScheme, isDark } = useTheme();

    // Fonction qui va permettre d'activer le mode d'éclairage
    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }

    {/* ---------------------------------- Création du levier avec du style ----------------------- */ }
    return (
        <RNSwitch
            trackColor={{ false: "lightgrey", true: "#212121" }}
            thumbColor={isDark ? "#05944F" : "black"}
            ios_backgroundColor="#f0f0f0"
            value={isDark} onValueChange={toggleScheme} />
    );
}