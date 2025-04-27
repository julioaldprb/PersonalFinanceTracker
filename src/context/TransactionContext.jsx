import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const TransactionContext = createContext();
export const useTransactions = () => useContext(TransactionContext);

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useLocalStorage('txs', []);

  const addTransaction = tx =>
    setTransactions([...transactions, { id: Date.now(), ...tx }]);

  const deleteTransaction = id =>
    setTransactions(transactions.filter(t => t.id !== id));

  const editTransaction = updated =>
    setTransactions(
      transactions.map(t => (t.id === updated.id ? updated : t))
    );

  return (
    <TransactionContext.Provider value={{
      transactions,
      addTransaction,
      deleteTransaction,
      editTransaction,
    }}>
      {children}
    </TransactionContext.Provider>
  );
}
