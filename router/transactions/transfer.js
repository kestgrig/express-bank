import { accountsData } from '../../data/accountsData.js';
import { isValidAmount } from '../../valid/isValidAmount.js';
import { isAccountEmpty } from '../../valid/isAccountEmpty.js';

export function transfer(req, res) {
    const { fromName, fromSurname, toName, toSurname, amount } = req.body;

    const fromAccount = accountsData.find(acc =>
        acc.name.toLowerCase() === fromName.toLowerCase() &&
        acc.surname.toLowerCase() === fromSurname.toLowerCase()
    );

    const toAccount = accountsData.find(acc =>
        acc.name.toLowerCase() === toName.toLowerCase() &&
        acc.surname.toLowerCase() === toSurname.toLowerCase()
    );

    if (!fromAccount || !toAccount) {
        return res.status(404).json({
            status: "error",
            message: "Viena iš sąskaitų nerasta"
        });
    }

    const amountError = isValidAmount(amount);
    if (amountError) {
        return res.status(400).json({
            status: "error",
            message: "Pervedimas negalimas"
        });
    }

    const fromAccountError = isAccountEmpty(fromAccount, amount);
    if (fromAccountError) {
        return res.status(400).json({
            status: "error",
            message: fromAccountError
        });
    }

    fromAccount.money -= amount;
    toAccount.money += amount;

    return res.json({
        status: "success",
        message: "Pinigai sėkmingai pervesti"
    });
}