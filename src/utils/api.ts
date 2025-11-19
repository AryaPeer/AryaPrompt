import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  const reposToDisplay = ['DataFrameLibrary', 'Video-Cleaner'];

  const filteredData = data.filter(repo => reposToDisplay.includes(repo.name));

  return filteredData;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://thequoteshub.com/api/random-quote?format=json');
  return {
    quote: `“${data.text}” — ${data.author}`,
  };
};