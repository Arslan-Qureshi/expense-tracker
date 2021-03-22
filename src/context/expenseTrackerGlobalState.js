import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import * as ActionsType from "./ActionsType";
// dummy initial State

const initialState = {
  transactions: [],
};

// create the Global state using createContext

export const GlobalContext = createContext(initialState);

// context provider this is a higher order component which wrap the children components

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({
      type: ActionsType.DELETE_TRANSACTION,
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: ActionsType.ADD_TRANSACTION,
      payload: transaction,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
