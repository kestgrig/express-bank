import { accounts } from '../../data/accountsData';

accountDelete.delete('/api/account/:name', (req, res) => {
    const { name } = req.params; //istraukiamas name 
    const index = accountIndex(name); //grazina saskaitos indeksa
    const account = accounts[index];  //objektas iš accounts masyvo pagal index.

    //patikrinti ar tokia saskaita egzistuoja, jei ne ismesti klaida su zinute
    //patikrinti ar money didesnis uz 0, jei likutis !0 negalim istrinti.

    if (account.money > 0) {
        return res.json({
            status: "error",
            message: "Sąskaita negali būti ištrinta, sąskaitos likutis turi būti 0."
        });
    } else if (index === -1) {
        return res.json({
            status: "error",
            message: "Tokia sąskaita nerasta."
        });

    }

    // Delete the account if balance is 0
    accounts.splice(index, 1);
    return res.json({
        status: "sėkmė",
        message: "Sąskaita sėkmingai ištrinta."
    });
});

const index = getAccountIndex(req.params.name)
if (index === -1) {
    return res.json({ status: "error", message: "No account with that name" });
} else if (accounts[index].money === 0) {
    accounts.splice(index, 1);
    return res.json({ status: "success", message: "Account deleted" });
} else if (accounts[index].money > 0) {
    return res.json({ status: "error", message: "Account balance needs to be 0" })
}
})