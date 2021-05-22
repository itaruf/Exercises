import React from "react";

export const initialContext_favorite = {
    favorites: {},
}

export function favoriteReducer(state, action) {
    const { mushroomName, favorites } = action.payload

    switch (action.type) {
        // modifier
        case 'TOGGLE':
            const isFavorite = state.favorites[mushroomName]
            return ({
                favorites: {
                    ...state.favorites, // champignons existants
                    [mushroomName]: !isFavorite

                }
            })

        case 'INIT':
            return ({
                favorites,
            })



        default:
            return state;
    }
}

export default React.createContext(initialContext_favorite);