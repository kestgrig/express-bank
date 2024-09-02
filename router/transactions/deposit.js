import { accountsData } from '../../data/accountsData.js';
import { isValidAmount } from '../../valid/isValidAmount.js';

export function deposit(req, res) {
    const { amount } = req.body;
    const { name, surname } = req.params;

    // Patikrinti ar yra nurodytos reikalingos vertes
    if (!amount || !name || !surname) {
        return res.status(400).json({
            status: "error",
            message: "Trūksta reikalingų duomenų"
        });
    }

    // Saskaita pagal varda ir pavarde
    const account = accountsData.find(acc =>
        acc.name.toLowerCase() === name.toLowerCase() &&
        acc.surname.toLowerCase() === surname.toLowerCase()
    );

    // ar saskaita yra
    if (!account) {
        return res.status(404).json({
            status: "error",
            message: "Sąskaita nerasta"
        });
    }

    //  ar amount yra tinkamas skaicius
    const amountError = isValidAmount(amount);
    if (amountError) {
        return res.status(400).json({
            status: "error",
            message: "Pervedimas nepavyko: netinkama suma"
        });
    }

    //  ar account.money yra skaicius
    if (typeof account.money !== 'number') {
        return res.status(500).json({
            status: "error",
            message: "Serverio klaida: neteisingas sąskaitos formatas"
        });
    }


    account.money += parseFloat(amount);

    return res.json({
        status: "success",
        message: "Pinigai sėkmingai įnešti į sąskaitą"
    });
}