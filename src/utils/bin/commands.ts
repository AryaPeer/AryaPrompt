// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display my profile summary.
Type 'projects' to display a short summary of my projects + github links.
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
'sumfetch' - short summary.
'resume' - my latest resume.
'projects' - short summaries of my projects + github links`;
};

export const resume = async (args: string[]): Promise<string> => {
  openSiteWithDelay(`${config.resume_url}`);
  return 'Opening resume...';
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
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
