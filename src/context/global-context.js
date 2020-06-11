import React, { createContext, useReducer, useContext } from 'react';

// define the context
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

// reducer
const globalReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                currentTheme: action.theme
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}!`);    
    }
}

export const GlobalProvider = ({children}) => {

    // set the default state here... useful for when user manually navigates to page
    let theme = 'welcome';

    const [state, dispatch] = useReducer(globalReducer, {
        currentTheme: theme
    })

    return  (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )

}

// custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)