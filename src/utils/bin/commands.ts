// List of commands that do not require API calls

import config from '../../../config.json';
import sumfetch from './sumfetch';
import { quote, weather } from './api_commands';

// Help
export const help = async (args: string[]): Promise<string> => {
  return `Welcome! Here are all the available commands organized by category:

<span class="text-light-yellow dark:text-dark-yellow">UTILITY COMMANDS:</span>
help       - Show this help message
sumfetch   - Display profiles summary
about      - Learn more about me
echo       - Echo back your input
date       - Display current date and time

<span class="text-light-yellow dark:text-dark-yellow">SOCIAL & CONTACT:</span>
email      - Open email client
github     - Visit my GitHub profile
linkedin   - Visit my LinkedIn profile
repo       - Open this website's repository

<span class="text-light-yellow dark:text-dark-yellow">PROJECT & INFO:</span>
experience - Where I've worked
projects   - View my favourite projects
quote      - Random quote
weather    - Check weather for a city (usage: weather [city])

<span class="text-light-yellow dark:text-dark-yellow">SYSTEM:</span>
clear      - Clear the terminal
[ctrl+l]   - Alternative way to clear terminal
[tab]      - Trigger command completion
[↑/↓]      - Navigate command history

<span class="text-light-gray dark:text-dark-gray">Type any command above to get started!
Some standard shell builtins work too.</span>
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

type Project = {
  name: string;
  url: string;
  tech: string;
  blurb: string;
  image: { src: string; width: number; height: number; alt: string };
};

const projectList: Project[] = [
  {
    name: 'ShadowHand-RL',
    url: 'https://github.com/AryaPeer/ShadowHand-RL',
    tech: 'Python · JAX · MuJoCo MJX',
    blurb:
      'Shadow Hand manipulation on MuJoCo MJX: grasping, pick-and-place, and peg-in-hole insertion, trained with PPO.',
    image: {
      src: '/assets/projects/shadowhand.webp',
      width: 480,
      height: 360,
      alt: 'Simulated Shadow Hand inserting a peg into a hole',
    },
  },
  {
    name: 'aRTOS',
    url: 'https://github.com/AryaPeer/aRTOS',
    tech: 'C · ARM Assembly · STM32',
    blurb:
      'A preemptive RTOS for the STM32F446RE with priority scheduling, round-robin timeslicing, mutexes, semaphores, and message queues.',
    image: {
      src: '/assets/projects/artos.webp',
      width: 874,
      height: 496,
      alt: 'aRTOS test suite output showing all tests passing',
    },
  },
  {
    name: 'BallBalancer',
    url: 'https://github.com/AryaPeer/BallBalancer',
    tech: 'Python · OpenCV · C++',
    blurb:
      'Closed-loop ball balancing on a 3-DOF Stewart platform using computer vision and PID control.',
    image: {
      src: '/assets/projects/ballbalancer.webp',
      width: 536,
      height: 382,
      alt: 'Stewart platform balancing a ball',
    },
  },
];

export const projects = async (args: string[]): Promise<string> => {
  const cards = projectList
    .map(
      ({ name, url, tech, blurb, image }) =>
        `<a class="card" href="${url}" target="_blank" rel="noopener noreferrer">` +
        `<img class="card-thumb" src="${image.src}" width="${image.width}" height="${image.height}" loading="lazy" decoding="async" alt="${image.alt}">` +
        `<span class="card-body">` +
        `<span class="card-title">${name}</span>` +
        `<span class="card-meta">${tech}</span>` +
        `<span>${blurb}</span>` +
        `</span></a>`,
    )
    .join('');

  return (
    `<div class="stack">${cards}</div>` +
    `All pinned on my GitHub: <a href="https://github.com/${config.social.github}/" target="_blank" rel="noopener noreferrer"><u>github.com/${config.social.github}</u></a>`
  );
};

type Role = {
  company: string;
  title: string;
  dates: string;
  location: string;
  summary: string;
};

const roles: Role[] = [
  {
    company: 'Atomus Corporation',
    title: 'Software Engineering Intern',
    dates: 'May 2026 – Aug 2026',
    location: 'San Francisco, CA',
    summary:
      'Built Go Cloud Run jobs to ingest Cloudflare data into ClickHouse. Automated the Cloudflare onboarding flow, and stopped Supabase timeouts on several global views by replacing per-row subqueries with lateral joins and Postgres RPCs.',
  },
  {
    company: 'Shopify',
    title: 'Applied Machine Learning Intern',
    dates: 'Jan 2026 – Apr 2026',
    location: 'Toronto, ON',
    summary:
      'Built and benchmarked different architectures for credit risk, including MLPs and TabBERT, against the production model. Set up a model monitoring dashboard covering drift and feature importance tracking.',
  },
  {
    company: 'Shopify',
    title: 'Applied Machine Learning Intern',
    dates: 'May 2025 – Aug 2025',
    location: 'Toronto, ON',
    summary:
      'Built an LLM tool that extracted data from merchant financial documents and drafted loan recommendations for analysts to review. Added merchant interaction based features to the GMV forecasting pipeline, and added memory tracking to identify where runs were failing.',
  },
  {
    company: 'Wolf Advanced Technology',
    title: 'Software Developer Intern',
    dates: 'Sep 2024 – Dec 2024',
    location: 'Stouffville, ON',
    summary:
      'Built a rover simulation in Isaac Sim with ROS2 bridging so policies could be trained without hardware. Trained PPO policies for obstacle avoidance and randomized the environment between runs to avoid overfitting to a single layout. Prototyped a SLAM and perception stack using LiDAR, camera, and odometry.',
  },
  {
    company: 'Schaeffler Aerospace',
    title: 'Software Developer Intern',
    dates: 'Jan 2024 – Apr 2024',
    location: 'Stratford, ON',
    summary:
      'Wrote a multithreaded C++ program to monitor and control PID temperature controllers over Modbus TCP. Built a tool to calculate how much to mill off bearing cages, and a Python application to query the parts database and generate QR codes.',
  },
];

export const experience = async (args: string[]): Promise<string> => {
  const entries = roles
    .map(
      ({ company, title, dates, location, summary }) =>
        `<div class="card">` +
        `<span class="card-body">` +
        `<span class="card-title">${company}</span>` +
        `<span class="card-meta">${title} · ${dates} · ${location}</span>` +
        `<span>${summary}</span>` +
        `</span></div>`,
    )
    .join('');

  return (
    `<div class="stack">${entries}</div>` +
    `Full history on LinkedIn: <a href="https://www.linkedin.com/in/${config.social.linkedin}/" target="_blank" rel="noopener noreferrer"><u>linkedin.com/in/${config.social.linkedin}</u></a>`
  );
};

// Shell builtins
export const whoami = async (args: string[]): Promise<string> => {
  return config.ps1_username;
};

const directories: Record<string, (args: string[]) => Promise<string>> = {
  about,
  experience,
  projects,
  quote,
  sumfetch,
  weather,
};

export const ls = async (args: string[]): Promise<string> => {
  return Object.keys(directories).join('    ');
};

export const cd = async (args: string[]): Promise<string> => {
  const target = args[0];

  if (!target || target === '~' || target === '..' || target === '/') {
    return '';
  }

  if (!directories[target]) {
    return `cd: ${target}: No such file or directory`;
  }

  return directories[target](args.slice(1));
};

export const pwd = async (args: string[]): Promise<string> => {
  return `/home/${config.ps1_username}`;
};

export const sudo = async (args: string[]): Promise<string> => {
  return `${config.ps1_username} is not in the sudoers file. This incident has been reported.`;
};

export const uname = async (args: string[]): Promise<string> => {
  return `${config.ps1_hostname} 1.0.0 x86_64 GNU/Browser`;
};

export const exit = async (args: string[]): Promise<string> => {
  return `logout
Connection to ${config.ps1_hostname} closed. You can close the browser now.`;
};

export const sl = async (args: string[]): Promise<string> => {
  return `<span class="ascii">
      ====        ________                ___________
  _D _|  |_______/        \\__I_I_____===__|_________|
   |(_)---  |   H\\________/ |   |        =|___ ___|
   /     |  |   H  |  |     |   |         ||_| |_||
  |      |  |   H  |__--------------------| [___] |
  | ________|___H__/__|_____/[][]~\\_______|       |
  |/ |   |-----------I_____I [][] []  D   |=======|__
</span>`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `<span class="banner-art">
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
</span><span class="banner-wordmark">AryaPROMPT</span>

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'experience' to see where I've worked.
Type 'projects' to see what I've built.
`;
};
