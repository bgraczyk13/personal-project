import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
// Wraps app and provides the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
// Pull info from the data layer
export const useStateValue = () => useContext(StateContext);