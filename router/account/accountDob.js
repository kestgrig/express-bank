import { accountsData } from '../../data/accountsData.js';

export function getAccountDob(req, res) {
    const { name, surname } = req.params;

    // Randa paskyra pagal name ir surname
    const account = accountsData.find(acc =>
        acc.name.toLowerCase() === name.toLowerCase() &&
        acc.surname.toLowerCase() === surname.toLowerCase()
    );

    // Jeigu paskyra nerasta, klaida
    if (!account) {
        return res.status(404).json({
            status: "error",
            message: "Sąskaita nerasta"
        });
    }

    return res.json({
        status: "success",
        dob: account.dateOfBirth
    });
}