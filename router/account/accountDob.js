import { accountsData } from '../../data/accountsData.js';

export function getAccountDob(req, res) {
}

export function updateAccountDob(req, res) {
    const { name, surname } = req.params;
    const { dob } = req.body;

    // Find the account by name and surname
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

    account.dateOfBirth = dob;

    return res.json({
        status: "success",
        message: "Gimimo data sėkmingai atnaujinta.",
        dob: account.dateOfBirth
    });
}