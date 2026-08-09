// List of commands that require API calls

import { escapeHtml, getQuote, getWeather } from '../api';

export const quote = async (args: string[]): Promise<string> => {
  const { text, author } = await getQuote();

  return `<div class="quote"><span class="quote-text">&ldquo;${escapeHtml(
    text,
  )}&rdquo;</span><span class="quote-author">&mdash; ${escapeHtml(
    author,
  )}</span></div>`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return `<span class="ascii">${escapeHtml(String(weather))}</span>`;
};
