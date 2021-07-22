import "../src/Header";

export default {
  title: "Header",
  args: {
    subheading: "Placeholder Subheading"
  }
};

export const Default = ({subheading}) => `<custom-header>${subheading ? `<span slot="sub">${subheading}</span>` : ""}</custom-header>`;
