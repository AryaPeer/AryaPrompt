// Commands that are safe to land on directly: no arguments, no window.open.
const linkableCommands = [
  'about',
  'experience',
  'projects',
  'quote',
  'sumfetch',
  'help',
];

module.exports = {
  agentRules: false,
  async rewrites() {
    return linkableCommands.map((command) => ({
      source: `/${command}`,
      destination: '/',
    }));
  },
};
