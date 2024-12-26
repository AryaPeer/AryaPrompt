// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
// if the number of commands is not divisible by 7 add the \n back behind ${c}
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 5 === 0) {
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
Type 'portfolio' to display short summaries of the work that I have done.
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
'portfolio' - short summaries of the work that I have done.`;
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
`;
};

export const portfolio = async (args: string[]): Promise<string> => {
  const projectList = [
    {
      name: 'Autonomous Drone Swarm Simulation @ WOLF',
      ascii: [
        "Autonomous Drone Swarm Simulation @ WOLF",
        "  __      _   ",
        "o'')}____//   ",
        " `_/      )   ",
        " (_(_/-(_/    "
      ],
      description: 'Architected and implemented a sophisticated multi-agent simulation environment for autonomous drone swarm coordination using NVIDIA Isaac Sim. Developed behavioral algorithms utilizing reinforcement learning approaches (PPO, TD3, DQN) to enable swarm navigation across different terrains. Developed a natural language interface by integrating LangChain with a fine-tuned Llama 3.1-8B model, enabling dynamic scenario configuration and real-time system interaction. The simulation environment successfully demonstrated cooperative behaviors and adaptive navigation strategies.'
    },
    {
      name: '3D Geometry Library',
      ascii: [
        "3D Geometry Library",
        "   +-------+      ",
        "  /       /|      ",
        " +-------+ |      ",
        " |       | +      ",
        " |       |/       ",
        " +-------+        "
      ],
      description: 'Engineered a modular C++ library implementing fundamental 3D computational geometry algorithms, including optimized implementations of Convex Hull computation, Delaunay Triangulation, and KD-Tree construction. Currently expanding the library’s capabilities through CUDA acceleration and OpenGL visualization. This ongoing project serves as both a toolkit and a platform for exploring parallel computing and graphics programming paradigms.'
    },
    {
      name: 'Bearing Milling Project @ Schaeffler',
      ascii: [
        "Bearing Milling Project @ Schaeffler",
        "  //*  *\\\\  ",
        "  *      * ",
        "  *      * ",
        "  \\\\*  *//    "
      ],
      description: 'Spearheaded the optimization of bearing milling calculations at Schaeffler, implementing algorithms to account for dynamic center of gravity and inertial variations during the milling process. Developed comprehensive models and documentation that reduced calculation errors by a significant margin, directly reducing the amount of time spent milling bearings to reduce unbalance. Architected Python-based scripts for interfacing with industrial robotic systems, establishing a foundation for future manufacturing process automation.'
    },
    {
      name: 'ROSBOT',
      ascii: [
        "ROSBOT",
        "____________________",
        "|  _          _    |",
        "|_/ \\________/ \\___|",
        "  \\_/        \\_/     "
      ],
      description: 'Designed and constructed an autonomous robot using ROS2, incorporating custom 3D-printed components and SLAM-based navigation. Implemented object tracking algorithms and developed a modern React-based control interface, creating a comprehensive demonstration of full-stack robotics development.'
    },
    {
      name: 'LSTM-Based Stock Prediction',
      ascii: [
        "LSTM-Based Stock Prediction",
        "  |       ____ ",
        "  |      /     ",
        "  |  /\\_/     ",
        "  |_/          ",
        "  |____________"
      ],
      description: 'Developed a stock prediction model using bidirectional LSTM neural networks with attention mechanisms, integrating technical indicators (RSI, MACD, EMA) and real-time market data from yfinance. The project features time-series cross-validation, early stopping, and adaptive learning rates to improve training stability. Added experimental features like volatility adjustment, mean reversion factors, and confidence intervals to explore different prediction approaches. Built a PyQt interface for visualization, displaying 60-day forecasts alongside relevant metrics like Sharpe ratios and rolling volatility.'
    }
  ];

  let output = 'Here is my portfolio:\n\n';

  const columnWidths = { name: 40, description: 80 };

  output += `| ${'Project Name'.padEnd(columnWidths.name)} | ${'Description'.padEnd(columnWidths.description)} |\n`;
  output += `|${'-'.repeat(columnWidths.name + 2)}|${'-'.repeat(columnWidths.description + 2)}|\n`;

  projectList.forEach((project) => {
    // Split description into lines
    const words = project.description.split(' ');
    const descLines: string[] = [];
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

    // Determine the maximum number of lines needed
    const lineCount = Math.max(project.ascii.length, descLines.length);

    // Print ASCII and description lines in parallel
    for (let i = 0; i < lineCount; i++) {
      const asciiLine = project.ascii[i] || '';
      const descLine = descLines[i] || '';
      output += `| ${asciiLine.padEnd(columnWidths.name)} | ${descLine.padEnd(columnWidths.description)} |\n`;
    }

    output += `|${'-'.repeat(columnWidths.name + 2)}|${'-'.repeat(columnWidths.description + 2)}|\n`;
  });

  output += "\nType 'projects' to get repository links to a few of the projects mentioned above\n";

  return output;
};
