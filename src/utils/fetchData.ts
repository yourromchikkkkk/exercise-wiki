import { VITE_RAPID_API_KEY } from './environmentVariables';

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

const fetchData = async (url: URL | string, options?: RequestInit) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export default fetchData;
