import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { TransactionProvider } from './context/TransactionContext';
import Summary from './components/Summary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import { FaWallet } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle class 'dark-mode' di <body> tiap kali darkMode berubah
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <TransactionProvider>
      <div className={darkMode ? 'App dark' : 'App'}>
        <header className="header">
          <h1 className="title">
            <FaWallet style={{ marginRight: 8, color: darkMode ? '#bb86fc' : '#4caf50' }} />
            Personal Finance Tracker
          </h1>
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="toggle-mode"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        <Summary />
        <TransactionForm />
        <TransactionList />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover
        />
      </div>
    </TransactionProvider>
  );
}

export default App;
