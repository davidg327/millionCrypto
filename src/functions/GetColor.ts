export const getColor = (value: string) => {
    const number = parseFloat(value);
    if (number > 0) {
        return '#28A745';
    } else if (number < 0) {
        return '#DC3545';
    } else {
        return '#6C757D';
    }
};
