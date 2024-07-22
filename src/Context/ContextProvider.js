import React, { createContext, useReducer } from 'react';

import { sumItems } from '../helpers/Functions';

const initialState = {
    selectedItems : [],
    itemCounter: 0,
    total: 0,
    checkout: false
}



const cartReducer = (state, action) => {
    console.log(state)
    switch(action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems)
            }
        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItem]
            }
        case "INCREASE": 
            const indexI  = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return{
                ...state,
            }
        case "DECRAESE": 
            const indexD  = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return{
                ...state,
            }
        case "CHECKOUT":
            return{
                selectedItems : [],
                itemCounter: 0,
                total: 0,
                checkout: true
            }
        case "CLEAR":
            return{
                selectedItems : [],
                itemCounter: 0,
                total: 0,
                checkout: false
            }
        default:
            return state;
    }

}

export const cartContext = createContext();

const ContextProvider = ({children}) => { 

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <div>
            <cartContext.Provider value={{state: state, dispatch: dispatch}}>
                {children}
            </cartContext.Provider>
        </div>
    );
};

export default ContextProvider;