// File: src/components/TransactionForm.jsx
import React, { useState, useEffect } from 'react';
import { useTransactions } from '../context/TransactionContext';
import CategorySelect from './CategorySelect';
import { toast } from 'react-toastify';

export default function TransactionForm({ editingTx, onFinish }) {
  const { addTransaction, editTransaction } = useTransactions();
  const [form, setForm] = useState({
    type: 'expense',
    amount: '',
    date: '',
    category: '',
    desc: '',
  });

  // Prefill form saat edit mode
  useEffect(() => {
    if (editingTx) setForm(editingTx);
  }, [editingTx]);

  const handleSubmit = e => {
    e.preventDefault();
    const payload = { 
      ...form, 
      amount: Number(String(form.amount).replace(/\./g, '')) 
    };
  
    if (editingTx) {
      editTransaction(payload);
      toast.info('Transaksi berhasil diperbarui!');
    } else {
      addTransaction(payload);
      toast.success('Transaksi berhasil ditambahkan!');
    }
  
    setForm({ type: 'expense', amount: '', date: '', category: '', desc: '' });
    if (onFinish) onFinish();
  };
  
  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="type">Tipe</label>
        <select
          id="type"
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
          required
        >
          <option value="income">Pemasukan</option>
          <option value="expense">Pengeluaran</option>
        </select>
      </div>

      <div>
        <label htmlFor="amount">Jumlah</label>
        <input
          id="amount"
          type="number"
          value={form.amount}
          onChange={e => setForm({ ...form, amount: e.target.value })}
          min="0"
          required
        />
      </div>

      <div>
        <label htmlFor="date">Tanggal</label>
        <input
          id="date"
          type="date"
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
          required
        />
      </div>

      <div>
        <CategorySelect
          value={form.category}
          onChange={value => setForm({ ...form, category: value })}
        />
      </div>

      <div>
        <label htmlFor="desc">Deskripsi</label>
        <input
          id="desc"
          type="text"
          value={form.desc}
          onChange={e => setForm({ ...form, desc: e.target.value })}
          placeholder="Opsional"
        />
      </div>

      <button type="submit">
        {editingTx ? 'Perbarui Transaksi' : 'Tambah Transaksi'}
      </button>
    </form>
  );
}
