import { VITE_RAPID_API_KEY } from './environment-variables';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
/* eslint-disable @typescript-eslint/no-explicit-any */
const fetchData = async (
  url: URL | string,
  options?: RequestInit
): Promise<any[]> => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export default fetchData;
