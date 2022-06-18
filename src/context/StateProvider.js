import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, child }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {child}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);