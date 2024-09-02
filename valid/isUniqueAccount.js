export function isUniqueAccount(name, surname, accounts) {
    return !accounts.some(
        acc => acc.name.toLowerCase() === name.toLowerCase() &&
            acc.surname.toLowerCase() === surname.toLowerCase()
    );
}