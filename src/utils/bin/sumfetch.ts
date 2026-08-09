import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@         ${config.ps1_hostname}
 @@                         @@@     @@
@@        @@@                        @@       <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@
        @@@                  @@@ @@
         @|  @@@@@@@@@@@@@@@@   @@
         @|                      @@

`;
  }

  const art = `           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓
▐▓                                 ▐▓
▐▓      > A R Y A P R O M P T      ▐▓
▐▓                                 ▐▓
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀`;

  const info = `sumfetch
-----------
 ABOUT
 ${config.name}
 <u><a href="${config.repo}" target="_blank" rel="noopener noreferrer">Github Repository</a></u>
-----------
 CONTACT
 <u><a href="mailto:${config.email}" target="_blank" rel="noopener noreferrer">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank" rel="noopener noreferrer">github.com/${config.social.github}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank" rel="noopener noreferrer">linkedin.com/in/${config.social.linkedin}</a></u>`;

  return `<span class="fetch"><span class="fetch-art">${art}</span><span class="fetch-info">${info}</span></span>`;
};

export default sumfetch;
