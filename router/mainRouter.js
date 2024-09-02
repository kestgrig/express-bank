import express from 'express';
import { routerApiAccount } from '../router/account/routerApiAccount.js';
import { transactionRouterApi } from '../router/transactions/transactionRouterApi.js';


export const mainRouter = express.Router();

mainRouter.use('/api/', routerApiAccount);
mainRouter.use('/api/', transactionRouterApi);

