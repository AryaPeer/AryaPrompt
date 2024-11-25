// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';
import config from '../../../config.json';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  
  if (projects.length === 0) {
    return "No pinned repositories found.";
  }

  const repositoryList = projects.map(
    (repo) => 
      `<a href="${repo.html_url}" target="_blank"><u>${repo.name}</u></a> - ${repo.description || "No description provided"}`
  ).join('<br>');

  return `<br>Here are my favourite personal projects:<br>${repositoryList}<br><br>All pinned on my GitHub: <a href="https://github.com/${config.social.github}/" target="_blank"><u>https://github.com/${config.social.github}/</u></a>`;
};


export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
