import React, { createContext, useContext, useReducer } from "react";

export const Context = createContext();

export const Provider = ({ reducer, initialState, child }) => (
    <Context.Provider value={useReducer(reducer, initialState)}>
        {child}
    </Context.Provider>
)

export const useStateValue = () => useContext(Context);