export const apiUrl = 'https://api.spacexdata.com/v3/';

export const fetchData = (url: string): Promise<any> =>
  fetch(`${apiUrl}${url}`).then((response) => {
    return response.json();
  });

export const moneyFormatter = (value: number = 0): string => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
};

export const numberFormatter = (value: number = 0): string => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
};

export const booleanFormatter = (value: boolean): string => {
  return value.toString();
};
