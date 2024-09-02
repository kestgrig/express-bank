import { accountsData } from '../../data/accountsData.js';
import { isName } from '../../valid/isName.js';
import { isValidDateOfBirth } from '../../valid/isValidDateOfBirth.js';
import { isUniqueAccount } from '../../valid/isUniqueAccount.js';

export function accountPost(req, res) {
    const { name, surname, dateOfBirth } = req.body;

    const nameError = isName(name);
    const surnameError = isName(surname);
    const dobError = isValidDateOfBirth(dateOfBirth);

    if (nameError || surnameError || dobError) {
        return res.status(400).json({
            status: "error",
            message: nameError || surnameError || dobError
        });
    }

    if (!isUniqueAccount(name, surname, accountsData)) {
        return res.status(400).json({
            status: "error",
            message: "Ši sąskaita jau egzistuoja"
        });
    }

    accountsData.push({ name, surname, dateOfBirth, money: 0 });
    return res.status(201).json({
        status: "success",
        message: "Sąskaita sėkmingai sukurta"
    });
};