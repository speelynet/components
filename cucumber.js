module.exports = {
  default: [
    "--require-module jsdom-global/register",
    "--require features/utils/*",
    "--require features/step_definitions/*",
    "--require src/index.js",
    "--exit"
  ].join(" ")
};
