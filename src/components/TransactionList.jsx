// File: src/components/TransactionList.jsx
import React, { useState, useMemo } from 'react';
import { useTransactions } from '../context/TransactionContext';
import TransactionForm from './TransactionForm';
import CategorySelect from './CategorySelect';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function TransactionList() {
  const { transactions, deleteTransaction } = useTransactions();
  const [editing, setEditing] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');
  const [sortOrder, setSortOrder] = useState(null); // null, 'asc', 'desc'

  // apply category filter
  const filtered = useMemo(() => {
    return filterCategory
      ? transactions.filter(tx => tx.category === filterCategory)
      : transactions;
  }, [transactions, filterCategory]);

  // apply sorting on amount
  const sorted = useMemo(() => {
    if (!sortOrder) return filtered;
    const sortedList = [...filtered].sort((a, b) =>
      sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount
    );
    return sortedList;
  }, [filtered, sortOrder]);

  if (editing) {
    return (
      <div className="edit-modal">
        <h3>Edit Transaction</h3>
        <TransactionForm
          editingTx={editing}
          onFinish={() => setEditing(null)}
        />
        <button onClick={() => setEditing(null)}
        className="btn-cancel"
          >Batal</button>

      </div>
    );
  }

  const toggleSort = () => {
    if (sortOrder === 'asc') setSortOrder('desc');
    else if (sortOrder === 'desc') setSortOrder(null);
    else setSortOrder('asc');
  };

  return (
    <div className="history">
      <h3>Transaction History</h3>

      {/* Filter by Category */}
      <div className="filter">
        <label htmlFor="filterCategory">Filter by Category:</label>
        <CategorySelect
          value={filterCategory}
          onChange={setFilterCategory}
        />
        {filterCategory && (
          <button onClick={() => setFilterCategory('')} className="clear-filter">
            Clear Filter
          </button>
        )}
      </div>

      {sorted.length === 0 ? (
        <p>No transactions{filterCategory ? ` for ${filterCategory}` : ''}.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th onClick={toggleSort} style={{ cursor: 'pointer' }}>
                Amount{' '}
                {sortOrder === 'asc' && <FaSortUp />}
                {sortOrder === 'desc' && <FaSortDown />}
              </th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(tx => (
              <tr key={tx.id}>
                <td>{tx.date}</td>
                <td>{tx.type}</td>
                <td>{tx.amount.toLocaleString()}</td>
                <td>{tx.category}</td>
                <td>{tx.desc}</td>
                <td>
                  <button onClick={() => setEditing(tx)}>Edit</button>
                  <button onClick={() => {deleteTransaction(tx.id);toast.error('Transaksi berhasil dihapus!');}}>
                    Delete
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
