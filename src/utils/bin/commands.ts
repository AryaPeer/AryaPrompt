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
      name: 'Autonomous Drone Simulations @ WOLF',
      ascii: [
        "Autonomous Drone Simulations @ WOLF",
        "  __      _   ",
        "o'')}____//   ",
        " `_/      )   ",
        " (_(_/-(_/    "
      ],
      description: 'Led development of an advanced Drone simulation environment using NVIDIA Isaac Sim and ROS2, implementing PPO/DQN reinforcement learning algorithms that achieved 93% success in navigation tasks. Integrated extended Kalman filters for sensor fusion of LiDAR and radar data, while implementing real-time SLAM and object detection through Nav2 & torchvision.'
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
      description: 'Engineered a modular C++ library implementing fundamental 3D computational geometry algorithms, including implementations of Convex Hull, Delaunay Triangulation, and KD-Tree construction. Currently expanding the library’s capabilities through CUDA acceleration and OpenGL visualization. This ongoing project serves as both a toolkit and a platform for exploring parallel computing and graphics programming.'
    },
    {
      name: 'Ask An AI',
      ascii: [
        "Ask An AI",
        "    .--.",
        "   |o_o |",
        "   |:_/ |",
        "  //   \\ \\",
        " (|     | )"
      ],
      description: 'Engineered an innovative audio-based Q&A application featuring real-time multi-speaker voice identification and advanced audio processing. Implemented sophisticated speech-to-text conversion using Facebook Demucs and OpenAI Whisper, enhanced by spectral clustering for speaker diarization. Applied DSP techniques including spectral subtraction and bandpass filtering for superior noise reduction.'
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
      description: 'Developed a sophisticated financial forecasting platform utilizing bidirectional LSTM networks with attention mechanisms for 30-day market predictions. Implemented advanced features including time-series cross-validation, adaptive learning rates, and MinMaxScaler data normalization. Created a comprehensive trading strategy simulation system using Backtrader, incorporating technical indicators and real-time market data.'
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
