import express from 'express';
import { withdrawal } from './withdrawal.js';
import { deposit } from './deposit.js';
import { transfer } from './transfer.js';

export const transactionRouterApi = express.Router();

// Withdrawal
transactionRouterApi.post('/withdrawal', withdrawal);

// Deposit
transactionRouterApi.post('/deposit', deposit);

// Transfer
transactionRouterApi.post('/transfer', transfer);
