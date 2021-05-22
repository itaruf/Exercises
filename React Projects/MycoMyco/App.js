/*IMPORTS FRAMEWORK*/
import React, { useReducer, useEffect } from 'react'
/**/

/*IMPORTS CUSTOM COMPONENTS*/
import Navigation from "./src/navigation/Navigation"
/**/

/*IMPORT CONTEXT*/
import FavoriteContext, { favoriteReducer, initialContext_favorite } from './FavoriteContext'
import HistoryContext, { historyReducer, initialContext_history } from './HistoryContext'


/*IMPORT ASYNC*/
import AsyncStorage from '@react-native-async-storage/async-storage';

//IMPORT RELATIF AU STYLE
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './ThemeProvider';


// *************************************** APPLICATION GENERAL*********************************************

export default function App() {

  // Etat, appel du favoris
  const [state_favorite, dispatch_favorite] = useReducer(favoriteReducer, initialContext_favorite)
  // Etat, appel de l'historique
  const [state_history, dispatch_history] = useReducer(historyReducer, initialContext_history)

  // stockage interne des favoris: mode lecture
  useEffect(() => {
    (async () => {
      try {
        // lecture des données
        const value = await AsyncStorage.getItem('@myco_favorite')
        // si la valeur existe
        if (value !== null) {
          dispatch_favorite({ type: 'INIT', payload: { favorites: JSON.parse(value) } })
        }
      } catch (e) {
        //lance une erreur
        console.log("Erreur: ", e)
      }
    })()
  }, [])

  // stockage interne de l'historique : mode lecture
  useEffect(() => {
    (async () => {
      try {
        // lecture des données
        const value = await AsyncStorage.getItem('@myco_history')
        // si la valeur existe
        if (value !== null) {
          dispatch_history({ type: 'INIT', payload: { consulted: JSON.parse(value) } })
        }
      } catch (e) {
        //lance une erreur
        console.log("Erreur: ", e)
      }
    })()
  }, [])

  return (
    // Tous les composants de l'application recoive les mise à jours des contextes grace au Provider
    // Mise à jour des favoris 
    <FavoriteContext.Provider value={{ state_favorite, dispatch_favorite }}>
      {/* Mise à jour de l'hitorique */}
      <HistoryContext.Provider value={{ state_history, dispatch_history }}>
        <AppearanceProvider>
          <ThemeProvider>
            {/* La navigation permet de se déplacer dans toute l'application */}
            <Navigation />
          </ThemeProvider>
        </AppearanceProvider>
      </HistoryContext.Provider>
    </FavoriteContext.Provider>
  )

}