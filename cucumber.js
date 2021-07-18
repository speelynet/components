module.exports = {
  default: [
    "--require-module jsdom-global/register",
    "--require features/utils/*",
    "--require index.js",
    "--exit"
  ].join(" ")
};
