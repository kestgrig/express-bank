export function isValidDateOfBirth(dateOfBirth) {
    const today = new Date();
    const dob = new Date(dateOfBirth);
    const age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 18) {
        return 'Asmuo turi būti pilnametis (18 metų ir vyresnis)';
    }
    return '';
};