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
routerApiAccount
    .route('/account')
    .post(accountPost);

//sukurti /api/account/:name-:surname  cia kiekvieno accounto rodomas vardas ir pavarde
//panaudoti (Get)-grazina name surname dob,
//panaudoti (Put) - perduoti name surname dob
//panaudoti (Delete) - istrinti tuscia sakaita

routerApiAccount
    .route('/account/:name-:surname')
    .get(accountGet)
    .put(accountPut)
    .delete(accountDelete);


//vardui gauti
routerApiAccount
    .get('/account/:name-:surname/name', getAccountName)
    .put('/account/:name-:surname/name', updateAccountName);

//pavardei 
routerApiAccount
    .get('/account/:name-:surname/surname', getAccountSurname)
    .put('/account/:name-:surname/surname', updateAccountSurname);

//gimimo datai
routerApiAccount
    .get('/account/:name-:surname/dob', getAccountDob)
    .put('/account/:name-:surname/dob', updateAccountDob);