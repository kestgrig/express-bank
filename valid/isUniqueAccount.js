export function isUniqueAccount(name, surname, acc) {
    return !acc.some(
        account => account.name.toLowerCase() === name.toLowerCase() &&
            account.surname.toLowerCase() === surname.toLowerCase()
    );
}