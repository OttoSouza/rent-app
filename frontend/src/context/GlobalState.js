import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: JSON.parse(localStorage.getItem("incomes")) || [],
  expensesTransactions: JSON.parse(localStorage.getItem("expenses")) || [],
};

export const GlobalContext = createContext(initialState);

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(state.incomeTransactions));
    localStorage.setItem(
      "expenses",
      JSON.stringify(state.expensesTransactions)
    );
  });

  const addIncome = (incomeTransactions) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransactions,
    });
  };

  const addExpenses = (expensesTransactions) => {
    dispatch({
      type: "ADD_EXPENSES",
      payload: expensesTransactions,
    });
  };

  const deleteIncome = (id) => {
    dispatch({
      type: "DELETE_INCOME",
      payload: id,
    });
  };

  const deleteExpenses = (id) => {
    dispatch({
      type: "DELETE_EXPENSES",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expensesTransactions: state.expensesTransactions,
        addIncome,
        addExpenses,
        deleteIncome,
        deleteExpenses,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
