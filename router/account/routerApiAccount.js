import express from 'express';
import { accountGet } from './accountGet.js';
import { accountPost } from './accountPost.js';
import { accountPut } from './accountPut.js';
import { accountDelete } from './accountDelete.js';
import { getAccountName, updateAccountName } from './accountName.js';
import { getAccountSurname, updateAccountSurname } from './accountSurname.js';
import { getAccountDob, updateAccountDob } from './accountDob.js';


export const routerApiAccount = express.Router();

//sukurti /api/account naujai saskaitai be name ir surname (Post)
routerApiAccount.post('/account', accountPost);

//sukurti /api/account/:name-:surname  cia kiekvieno accounto rodomas vardas ir pavarde
//panaudoti (Get)-grazina name surname dob,
//panaudoti (Put) - perduoti name surname dob
//panaudoti (Delete) - istrinti tuscia sakaita

routerApiAccount
    .route('/account/:name-:surname')
    .get(accountGet)
    .put(accountPut)
    .delete(accountDelete);


routerApiAccount
    .route('/account/:name-:surname/name')
    .get(getAccountName)
    .put(updateAccountName);

// Gauti ar atnaujinti pavarde
routerApiAccount
    .route('/account/:name-:surname/surname')
    .get(getAccountSurname)
    .put(updateAccountSurname);

// Gauti ar atnaujinti gimimo data
routerApiAccount
    .route('/account/:name-:surname/dob')
    .get(getAccountDob)
    .put(updateAccountDob);