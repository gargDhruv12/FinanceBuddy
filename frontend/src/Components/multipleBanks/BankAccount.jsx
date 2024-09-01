// src/BankAccount.js
import React from 'react';
import './bank.css'; // For styling (optional)
import { dollar } from '../../utils/Icons';

const BankAccount = () => {
  // Sample data for different types of bank accounts
  const accounts = {
    Saving: [
      {
        id: 1,
        name: 'State Bank of India',
        balance: 1200.50,
        transactions: [
          { id: 1, date: '2024-08-01', description: 'Deposit', amount: 500.00 },
          { id: 2, date: '2024-08-05', description: 'Payment', amount: -150.00 },
          { id: 3, date: '2024-08-15', description: 'Transfer', amount: -200.00 },
          { id: 4, date: '2024-08-20', description: 'Deposit', amount: 850.00 },
        ],
      },
      {
        id: 2,
        name: 'Punjab National Bank',
        balance: 340.75,
        transactions: [
          { id: 1, date: '2024-08-02', description: 'Deposit', amount: 100.00 },
          { id: 2, date: '2024-08-10', description: 'Bill Payment', amount: -60.00 },
        ],
      },
      {
        id: 3,
        name: 'City Bank',
        balance: 5000.00,
        transactions: [
          { id: 1, date: '2024-08-02', description: 'Interest', amount: 50.00 },
          { id: 2, date: '2024-08-15', description: 'Deposit', amount: 2000.00 },
        ],
      },
    ],
  };

  return (
    <div className="bank-accounts">
      <h1>Bank Accounts</h1>
      {Object.keys(accounts).map(type => (
        <div key={type} className="account-type">
          <h2>{type.charAt(0).toUpperCase() + type.slice(1)} Accounts</h2>
          {accounts[type].map(account => (
            <div key={account.id} className="bank-account">
              <div className="balance">
                <h3>{account.name}</h3>
                <p>Balance: Rs. { account.balance.toFixed(2)}</p>
              </div>
              <div className="transactions">
                <h4>Transaction History</h4>
                <ul>
                  {account.transactions.map(transaction => (
                    <li key={transaction.id}>
                      <span>{transaction.date}</span> - 
                      <span>{transaction.description}</span> - 
                      <span>Rs. {transaction.amount.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BankAccount;
