module.exports = {
  default: [
    "--require features/utils/*",
    "--require index.js",
    "--require features/step_definitions/*",
    "--exit"
  ].join(" ")
};
