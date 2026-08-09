import axios from 'axios';

const quoteAuthor = 'Friedrich Nietzsche';
const maxQuoteLength = 280;
const maxQuoteAttempts = 3;
let quoteTotal = 0;

export const escapeHtml = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

const getAuthorPage = async (page: number) => {
  const authorId = encodeURIComponent(quoteAuthor).replace(/%20/g, '+');
  const { data } = await axios.get(
    `https://thequoteshub.com/api/authors/${authorId}`,
    { params: { page, page_size: 1 } },
  );
  return data;
};

const getAuthorTotal = async () => {
  if (!quoteTotal) {
    const data = await getAuthorPage(1);
    quoteTotal = data.pagination.total;
  }
  return quoteTotal;
};

export const getQuote = async () => {
  const total = await getAuthorTotal();
  let quote;

  for (let attempt = 0; attempt < maxQuoteAttempts; attempt++) {
    const page = Math.floor(Math.random() * total) + 1;
    const data = await getAuthorPage(page);
    quote = data.quotes[0];

    if (quote.text.length <= maxQuoteLength) {
      break;
    }
  }

  return {
    text: quote.text.trim(),
    author: quote.author,
  };
};
