// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
// if the number of commands is not divisible by 7 add the \n back behind ${c}
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
\n${c}
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display my profile summary.
Type 'projects' to display a short summary of my projects & their github links.
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
Type 'portfolio' to see short summaries of the work that I have done.
Type 'projects' to see short summaries of projects featured on my github.
`;
};

export const portfolio = async (args: string[]): Promise<string> => {
  const projectList = [
    {
      name: 'Autonomous Drone Swarm Simulation - WOLF',
      description: 'Engineered a sophisticated digital twin system for modeling and training autonomous drone swarms using NVIDIA Isaac Sim and reinforcement learning frameworks. Developed reinforcement learning algorithms (PPO, TD3, DQN) to enhance drone coordination. Designed a chatbot using LangChain and Llama 3.1-8B for seamless user interaction and system control.'
    },
    {
      name: '3D Geometry Library',
      description: 'Designed a C++ library for 3D geometry algorithms and structures, including Convex Hull, Delaunay Triangulation, and KD-Trees. CUDA-accelerated computations optimize performance, and OpenGL visualizations render geometric operations in real time.'
    },
    {
      name: 'Bearing Milling Project - Schaeffler',
      description: 'Revamped company documentation and milling processes for precision manufacturing. Used center of gravity and moment of inertia concepts to recalibrate calculations, improving accuracy and reducing errors by 32%. Created procedural guides and automation scripts for enhanced reliability.'
    },
    {
      name: 'ROSBOT',
      description: 'Developed a ROS2-based robot with real-time obstacle detection and navigation. Integrated SLAM Toolbox for mapping and localization. Built a React-based UI for remote control, enabling seamless interaction and improved flexibility.'
    },
    {
      name: 'LSTM-Based Stock Prediction',
      description: 'Built a Python application with a PyQt GUI for stock search and 60-day future predictions using an LSTM-based deep learning model. Integrated yfinance data and technical indicators like RSI and MACD for feature engineering. Tuned hyperparameters, scaled data using MinMaxScaler, and implemented early stopping to optimize prediction accuracy.'
    }
  ];

  let output = 'Here is my portfolio:\n\n';

  const columnWidths = { name: 40, description: 80 };

  output += `| ${'Project Name'.padEnd(columnWidths.name)} | ${'Description'.padEnd(columnWidths.description)} |\n`;
  output += `|${'-'.repeat(columnWidths.name + 2)}|${'-'.repeat(columnWidths.description + 2)}|\n`;

  projectList.forEach((project) => {
    let descLines = [];
    let words = project.description.split(' ');
    let currentLine = '';

    words.forEach(word => {
      if ((currentLine + word).length > columnWidths.description) {
        descLines.push(currentLine.trim());
        currentLine = word + ' ';
      } else {
        currentLine += word + ' ';
      }
    });
    if (currentLine.trim().length > 0) descLines.push(currentLine.trim());

    output += `| ${project.name.padEnd(columnWidths.name)} | ${descLines[0].padEnd(columnWidths.description)} |\n`;

    for (let i = 1; i < descLines.length; i++) {
      output += `| ${' '.repeat(columnWidths.name)} | ${descLines[i].padEnd(columnWidths.description)} |\n`;
    }

    output += `|${'-'.repeat(columnWidths.name + 2)}|${'-'.repeat(columnWidths.description + 2)}|\n`;
  });

  return output;
};
