import { accountsData } from '../../data/accountsData.js';
import { isName, isValidDateOfBirth, isUniqueAccount } from '../../helpers/validation.js';

export const accountPost = (req, res) => {
    const { name, surname, dateOfBirth } = req.body;

    // Patikrinimai
    let errorMessage = isName(name) || isName(surname) || isValidDateOfBirth(dateOfBirth);
    if (errorMessage) {
        return res.status(400).json({ message: errorMessage });
    }

    // Tikriname, ar sąskaita jau egzistuoja
    if (!isUniqueAccount(name, surname, accountsData)) {
        return res.status(400).json({ message: 'Tokia sąskaita jau egzistuoja.' });
    }

    // Sukuriame naują sąskaitą
    const newAccount = {
        name,
        surname,
        dateOfBirth,
        money: 0
    };
    accountsData.push(newAccount);

    return res.status(201).json(newAccount);
};