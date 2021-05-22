import React from "react";

export const initialContext_history = {
    consulted: {},
}

export function historyReducer(state, action) {
    const { mushroomName, consulted } = action.payload

    let date = Date();

    switch (action.type) {
        case 'ADD':
            return ({
                consulted: {
                    ...state.consulted, // champignons existants
                    [mushroomName]: date,

                }
            })
        case 'DELETE':
            return ({
                consulted: {
                    ...state.consulted, // champignons existants
                    [mushroomName]: undefined,

                }
            })


        case 'INIT':
            return ({
                consulted,
            })



        default:
            return state;
    }
}

export default React.createContext(initialContext_history);