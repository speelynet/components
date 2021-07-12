module.exports = {
  default: [
    "--require features/utils/*",
    "--require features/step_definitions/*"
  ].join(" ")
};
