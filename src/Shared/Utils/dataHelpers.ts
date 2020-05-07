export const apiUrl = 'https://api.spacexdata.com/v3/';
export const rocketImageUrl = '../rocket.png';

export const fetchData = (url: string): Promise<any> =>
  fetch(`${apiUrl}${url}`).then((response) => response.json());
