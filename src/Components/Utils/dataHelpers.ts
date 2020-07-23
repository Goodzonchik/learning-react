import TODO_ANY from './developHelpers';

export const apiUrl = 'https://api.spacexdata.com/v3/';
export const rocketImageUrl = '../rocket.png';

export const fetchData = (url: string): Promise<TODO_ANY> =>
  fetch(`${apiUrl}${url}`).then((response) => response.json());
