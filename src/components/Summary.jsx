import React from 'react';
import { useTransactions } from '../context/TransactionContext';

export default function Summary() {
  const { transactions } = useTransactions();

  const income = transactions
    .filter(tx => tx.type === 'income')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const expense = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = income - expense;

  return (
    <div className="summary">
  <div className="summary-item">
    <h3>Income</h3>
    <p>Rp {income.toLocaleString()}</p>
  </div>
  <div className="summary-item">
    <h3>Expense</h3>
    <p>Rp {expense.toLocaleString()}</p>
  </div>
  <div className="summary-item">
    <h3>Balance</h3>
    <p>Rp {balance.toLocaleString()}</p>
  </div>
</div>
  );
}
