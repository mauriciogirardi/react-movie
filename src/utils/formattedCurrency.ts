const formattedCurrency = (value: number): string =>
  Number(value).toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

export default formattedCurrency;
