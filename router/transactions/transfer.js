import { accountsData } from '../../data/accountsData.js';
import { isValidAmount } from '../../valid/isValidAmount.js';
import { isAccountEmpty } from '../../valid/isAccountEmpty.js';

export function transfer(req, res) {
    const { amount } = req.body;
    const { fromName, fromSurname, toName, toSurname } = req.params;

    //  ar visi reikalingi duomenys 
    if (!amount || !fromName || !fromSurname || !toName || !toSurname) {
        return res.status(400).json({
            status: "error",
            message: "Trūksta reikalingų duomenų"
        });
    }

    const fromAccount = accountsData.find(acc =>
        acc.name.toLowerCase() === fromName.toLowerCase() &&
        acc.surname.toLowerCase() === fromSurname.toLowerCase()
    );

    const toAccount = accountsData.find(acc =>
        acc.name.toLowerCase() === toName.toLowerCase() &&
        acc.surname.toLowerCase() === toSurname.toLowerCase()
    );

    //ar saskaitos rastos
    if (!fromAccount || !toAccount) {
        return res.status(404).json({
            status: "error",
            message: "Viena iš sąskaitų nerasta"
        });
    }

    //ar tinkamas skaicius
    const amountError = isValidAmount(amount);
    if (amountError) {
        return res.status(400).json({
            status: "error",
            message: "Pervedimas negalimas"
        });
    }

    // amount i skaiciu jei tinkamas
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum)) {
        return res.status(400).json({
            status: "error",
            message: "Neteisingas skaiciaus formatas"
        });
    }

    //ar galima pervesti is saskaitos
    const fromAccountError = isAccountEmpty(fromAccount, amount);
    if (fromAccountError) {
        return res.status(400).json({
            status: "error",
            message: fromAccountError
        });
    }

    //ar tai skaiciai
    if (typeof fromAccount.money !== 'number' || typeof toAccount.money !== 'number') {
        return res.status(500).json({
            status: "error",
            message: "Serverio klaida: neteisingas sąskaitos formatas"
        });
    }

    fromAccount.money -= amount;
    toAccount.money += amount;

    return res.json({
        status: "success",
        message: "Pinigai sėkmingai pervesti"
    });
}

