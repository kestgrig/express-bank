import { accountsData } from '../../data/accountsData.js';
import { isName } from '../../valid/isName.js';
import { isValidDateOfBirth } from '../../valid/isValidDateOfBirth.js';

//Atnaujina paskyros info
export function accountPut(req, res) {
    const { name, surname } = req.params;
    const { newName, newSurname, newDateOfBirth } = req.body;

    // Rasti paskyra 
    const account = accountsData.find(acc =>
        acc.name.toLowerCase() === name.toLowerCase() &&
        acc.surname.toLowerCase() === surname.toLowerCase()
    );

    // Jei paskyra nerasta, klaida
    if (!account) {
        return res.status(404).json({
            status: "error",
            message: "Sąskaita nerasta"
        });
    }

    // Atnaujinti varda jei jis pateiktas
    if (newName) {
        const nameError = isName(newName);
        if (nameError) {
            return res.status(400).json({
                status: "error",
                message: nameError
            });
        }
        account.name = newName;
    }

    // Atnaujina pavarde jei ji pateikta
    if (newSurname) {
        const surnameError = isName(newSurname);
        if (surnameError) {
            return res.status(400).json({
                status: "error",
                message: surnameError
            });
        }
        account.surname = newSurname;
    }

    // Atnaujina dob jei ji pateikta
    if (newDateOfBirth) {
        const dobError = isValidDateOfBirth(newDateOfBirth);
        if (dobError) {
            return res.status(400).json({
                status: "error",
                message: dobError
            });
        }
        account.dateOfBirth = newDateOfBirth;
    }

    return res.json({
        status: "success",
        message: "Sąskaita sėkmingai atnaujinta"
    });
}