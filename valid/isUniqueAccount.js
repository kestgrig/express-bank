export function isUniqueAccount(name, surname, accounts) {
    return !accounts.some(
        account => account.name.toLowerCase() === name.toLowerCase() &&
            account.surname.toLowerCase() === surname.toLowerCase()
    );
}