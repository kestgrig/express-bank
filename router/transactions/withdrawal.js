import { accountsData } from '../../data/accountsData.js';
import { isValidAmount } from '../../valid/isValidAmount.js';
import { isAccountEmpty } from '../../valid/isAccountEmpty.js';

export function withdrawal(req, res) {
    const { amount } = req.body;
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

    const amountError = isValidAmount(amount);
    if (amountError) {
        return res.status(400).json({
            status: "error",
            message: "Pinigų išėmimas negalimas"
        });
    }

    const accountError = isAccountEmpty(account, amount);
    if (accountError) {
        return res.status(400).json({
            status: "error",
            message: accountError
        });
    }

    account.money -= amount;

    return res.json({
        status: "success",
        message: "Pinigai sėkmingai išimti"
    });
};