import express from 'express';
import { withdrawal } from './withdrawal.js';
import { deposit } from './deposit.js';
import { transfer } from './transfer.js';

export const transactionRouterApi = express.Router();

// Withdrawal
transactionRouterApi.post('/withdrawal/:name-:surname', withdrawal);

// Deposit
transactionRouterApi.post('/deposit/:name-:surname', deposit);

// Transfer
transactionRouterApi.post('/transfer/from-:fromName-:fromSurname/to-:toName-:toSurname', transfer);
