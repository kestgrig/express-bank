import { accountsData } from '../../data/accountsData.js';
import { isValidAmount } from '../../valid/isValidAmount.js';

export function deposit(req, res) {
    const { amount, name, surname } = req.body;

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

    const amountError = isValidAmount(amount);
    if (amountError) {
        return res.status(400).json({
            status: "error",
            message: 'Pervedimas nepavyko'
        });
    }

    account.money += amount;

    return res.json({
        status: "success",
        message: "Pinigai sėkmingai įnešti į sąskaitą"
    });
}