import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Dashboard} from './dashboard/dashboard'
import { Balance } from './balance/balance';
import { Transfer } from './transfer/transfer';
import { Deposit } from './deposit/deposit';
import { TransactionHistory } from './transaction-history/transaction-history';
import { Login } from './login/login';
import { Signup } from './login/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="/balance" element={<Balance />} />
      <Route path="/transfer" element={<Transfer />} />
    </Routes>
  </BrowserRouter>
);

