import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  const reposToDisplay = ['ROSBOT', 'LSTM-Stock-Predictor', 'Geometric3D-Library', 'DF_DS_LIB'];

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
  const quote = "The only thing worse than losing is never trying.";
  const author = "Mike Ma";
  return {
    quote: `“${quote}” — ${author}`,
  };
};
