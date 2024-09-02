import { accountsData } from '../../data/accountsData.js';

export function accountGet(req, res) {
    const { name, surname, dateOfBirth } = req.params;
    //rasti acc su tokiu  name surname ir dob
    const acc = accountsData.find(account =>
        account.name.toLowerCase() === name.toLowerCase() &&
        account.surname.toLowerCase() === surname.toLowerCase() 
    );

    //jeigu nera tokio acc ismetama klaida
    if (!acc) {
        return res.json({
            status: "error",
            message: "Sąskaita nerasta"
        });
    };

    // grazinamas name surname ir dob
    return res.json(acc);
};
