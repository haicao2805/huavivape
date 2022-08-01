export const toMoney: (amount: number) => string = (number) => {
    return number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
};
