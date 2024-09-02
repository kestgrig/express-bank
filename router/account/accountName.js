import { accountsData } from '../../data/accountsData.js';
import { isName } from '../../valid/isName.js';

export function getAccountName(req, res) {
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

    return res.json({ name: account.name });
}

export function updateAccountName(req, res) {
    const { name, surname } = req.params;
    const { newName } = req.body;

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

    const nameError = isName(newName);
    if (nameError) {
        return res.status(400).json({
            status: "error",
            message: nameError
        });
    }

    account.name = newName;

    return res.json({
        status: "success",
        message: "Vardas sėkmingai atnaujintas"
    });
};