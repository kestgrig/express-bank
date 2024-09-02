export function isValidAmount(amount) {
    if (typeof amount !== 'number' || amount <= 0 || !Number.isInteger(amount)) {
        return 'Pinigu kiekis turi būti teigiamas sveikasis skaičius';
    }

    return '';
}