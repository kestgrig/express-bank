import { accountsData } from '../../data/accountsData.js';
import { isName } from '../../valid/isName.js';

export function getAccountSurname(req, res) {
    const { name, surname } = req.params;

    const account = accountsData.find(acc =>
        acc.name.toLowerCase() === name.toLowerCase() &&
        acc.surname.toLowerCase() === surname.toLowerCase()
    );

    if (!account) {
        return res.status(404).json({
            status: "error",
            message: "Sąskaita nerasta"
        });
    }

    return res.json({ surname: account.surname });
}

export function updateAccountSurname(req, res) {
    const { name, surname } = req.params;
    const { newSurname } = req.body;

    const account = accountsData.find(acc =>
        acc.name.toLowerCase() === name.toLowerCase() &&
        acc.surname.toLowerCase() === surname.toLowerCase()
    );

    if (!account) {
        return res.status(404).json({
            status: "error",
            message: "Sąskaita nerasta"
        });
    }

    const nameError = isName(newSurname);
    if (nameError) {
        return res.status(400).json({
            status: "error",
            message: nameError
        });
    }

    account.surname = newSurname;

    return res.json({
        status: "success",
        message: "Pavardė sėkmingai atnaujinta"
    });
};