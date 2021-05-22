//IMPORTS FRAMEWORKS
import * as React from 'react';
import { Switch } from 'react-native';

//IMPORTS RELATIFS AU STYLE
import { useTheme } from '../../ThemeProvider';

export const Toggle = () => {

    // Etat, détermination du mode d'éclairage
    const { setScheme, isDark } = useTheme();

    // Fonction qui va permettre d'activer le mode d'éclairage
    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }

    {/* ---------------------------------- Création du levier avec du style ----------------------- */ }
    return (
        <Switch value={isDark} onValueChange={toggleScheme} />
    );
}