export const apiUrl = 'https://api.spacexdata.com/v3/';

export const fetchData = (url: string): Promise<any> =>
  fetch(`${apiUrl}${url}`).then((response) => {
    return response.json();
  });
