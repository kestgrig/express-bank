import { accountsData } from '../../data/accountsData.js';

export function accountDelete(req, res) {
    const { name, surname } = req.params; //istraukiamas name ir surname
    const index = accountsData.findIndex(account =>
        account.name.toLowerCase() === name.toLowerCase() &&
        account.surname.toLowerCase() === surname.toLowerCase()
    );

    //patikrinti ar tokia saskaita egzistuoja, jei ne ismesti klaida su zinute

    if (index === -1) {
        return res.json({
            status: "error",
            message: "Tokia sąskaita nerasta."
        });
    }

    //patikrinti ar money didesnis uz 0, jei likutis !0 negalim istrinti.

    const account = accounts[index];

    if (account.money > 0) {
        return res.json({
            status: "error",
            message: "Sąskaita negali būti ištrinta, sąskaitos likutis turi būti 0."
        });

    }

    //jei saskaitoje nera pinigu ir ji egzistuoja istrinti accounta

    accounts.splice(index, 1);
    return res.json({
        status: "success",
        message: "Sąskaita sėkmingai ištrinta."
    });
};