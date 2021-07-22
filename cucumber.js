module.exports = {
  default: [
    "--require-module jsdom-global/register",
    "--require features/utils/*",
    "--require features/step_definitions/*",
    "--require index.js",
    "--exit"
  ].join(" ")
};
