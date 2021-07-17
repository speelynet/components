module.exports = {
  default: [
    "--require-module jsdom-global/register",
    "--require features/utils/*",
    "--require index.js",
    "--require features/step_definitions/*",
    "--exit"
  ].join(" ")
};
