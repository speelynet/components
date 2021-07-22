const subheadings = [
  "Crust included",
  "The speeliest of nets",
  `Now ${Math.floor(Math.random() * 899 + 101)}% more speely`,
  "It's dot com"
];

export default function subheading() {
  return subheadings[Math.floor(Math.random() * subheadings.length)] + "!";
}
