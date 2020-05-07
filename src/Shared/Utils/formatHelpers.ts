export const money = (value: number = 0): string => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
};

export const pint = (value: number = 0): string => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
};

export const bool = (value: boolean): string => value.toString();

export const size = (size: { meters: number; feet: number }): string =>
  `${size.meters}meters/${size.feet}feet`;
