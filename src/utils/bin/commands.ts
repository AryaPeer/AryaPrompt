// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
// if the number of commands is not divisible by 7 add the \n back behind ${c}
export const help = async (args: string[]): Promise<string> => {
  return `Welcome! Here are all the available commands organized by category:

  <span class="text-light-yellow dark:text-dark-yellow">UTILITY COMMANDS:</span>
    help      - Show this help message
    sumfetch  - Display profiles summary
    about     - Learn more about me
    echo      - Echo back your input
    date      - Display current date and time

  <span class="text-light-yellow dark:text-dark-yellow">SOCIAL & CONTACT:</span>
    email     - Open email client
    github    - Visit my GitHub profile
    linkedin  - Visit my LinkedIn profile
    repo      - Open this website's repository

  <span class="text-light-yellow dark:text-dark-yellow">PROJECT & INFO:</span>
    projects  - View my favorite projects
    quote     - Random Quotes
    weather   - Check weather for a city (usage: weather [city])

  <span class="text-light-yellow dark:text-dark-yellow">SYSTEM:</span>
    clear     - Clear the terminal
    [ctrl+l]  - Alternative way to clear terminal
    [tab]     - Trigger command completion
    [↑/↓]     - Navigate command history

  <span class="text-light-gray dark:text-dark-gray">Type any command above to get started!</span>
  `;
};

const openSiteWithDelay = (url: string) => {
  setTimeout(() => {
    window.open(url);
  }, 100);
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  openSiteWithDelay(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.`;
};



// Contact
export const email = async (args: string[]): Promise<string> => {
  openSiteWithDelay(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  openSiteWithDelay(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  openSiteWithDelay(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Banner
export const banner = (args?: string[]): string => {
  return `
       d8888                           8888888b.  8888888b.   .d88888b.  888b     d888 8888888b. 88888888888 
      d88888                           888   Y88b 888   Y88b d88P" "Y88b 8888b   d8888 888   Y88b    888     
     d88P888                           888    888 888    888 888     888 88888b.d88888 888    888    888     
    d88P 888 888d888 888  888  8888b.  888   d88P 888   d88P 888     888 888Y88888P888 888   d88P    888     
   d88P  888 888P"   888  888     "88b 8888888P"  8888888P"  888     888 888 Y888P 888 8888888P"     888     
  d88P   888 888     888  888 .d888888 888        888 T88b   888     888 888  Y8P  888 888           888     
 d8888888888 888     Y88b 888 888  888 888        888  T88b  Y88b. .d88P 888   "   888 888           888     
d88P     888 888      "Y88888 "Y888888 888        888   T88b  "Y88888P"  888       888 888           888     
                          888                                                                                
                     Y8b d88P                                                                                
                      "Y88P"                                                                                 
                                                                                                                                        
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
`;
};
