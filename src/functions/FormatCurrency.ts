export const formatCurrency = (value: string): string => {
    const number = parseFloat(value);
    if (isNaN(number)) {
        return value;
    }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(number);
};
