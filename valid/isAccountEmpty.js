export function isAccountEmpty(account, amount) {
    if (account.money < amount) {
        return 'Nepakanka lėšų sąskaitoje';
    }
    return '';
}