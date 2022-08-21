import React, { createContext, useReducer } from 'react';
import axios from '../utils/http';
import AppReducer from './AppReducer';

// Initial State

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTransactions() {
    try {
      const res = await axios.get(`api/v1/transactions`);
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.message,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`api/v1/transactions/${id}`);
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: +id,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: err.message,
      });
    }
  }

  async function addTransaction(transaction) {
    try {
      const res = await axios.post(`api/v1/transactions`, transaction);
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: err.message,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
