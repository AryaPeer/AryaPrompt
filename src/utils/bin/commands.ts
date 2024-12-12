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
      description: 'Developed an autonomous simulation environment to explore how rover swarms can coordinate and navigate through diverse terrains. Leveraged NVIDIA Isaac Sim and reinforcement learning (PPO, TD3, DQN) to shape robust swarm behaviors. Also implemented a LangChain + Llama 3.1-8B chatbot interface for intuitive scenario setup and real-time interaction.'
    },
    {
      name: '3D Geometry Library',
      ascii: [
        "3D Geometry Library",
        "   +----+      ",
        "  /    /|      ",
        " +----+ |      ",
        " |    | +      ",
        " |    |/       ",
        " +----+        "
      ],
      description: 'Created a modular C++ library offering essential 3D geometry operations—like Convex Hull, Delaunay Triangulation, and KD-Tree construction. I’m also using this library to teach myself CUDA and OpenGL, making it both a practical toolkit and a personal learning sandbox to deepen my understanding of graphics and GPU computing.'
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
      description: 'At Schaeffler, I refined the computation methods behind bearing milling processes to accurately factor in shifts in center of gravity and inertia. By revising formulae and documentation, I improved manufacturing precision and significantly reduced calculation errors—enhancing both reliability and consistency. I also wrote new Python scripts to integrate with robotic arms, further automating the milling process in the future.'
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
      description: 'Assembled a custom ROS2 robot to dive deeper into hardware-software integration and the ROS2 ecosystem. I used 3D-printed components, integrated SLAM-based navigation, and implemented real-time obstacle avoidance. Additionally, I created a React-based interface for intuitive remote control, giving me hands-on experience with modern robotics workflows and UI design.'
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
      description: 'Developed an LSTM-powered stock forecasting tool inspired by Quantopian lectures. It uses technical indicators (RSI, MACD) and real-time data from yfinance, visualizing predictions through a PyQt-based interface. I fine-tuned hyperparameters and applied preprocessing, scaling, and early stopping techniques to achieve more reliable 60-day forecasts. Initially, the model produced simplistic up-or-down lines from a given point on the y-axis, but as it evolved, it began utilizing current date values as a starting point, generating more realistic and dynamic predictions.'
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
