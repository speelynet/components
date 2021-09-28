export default {
  title: "Header",
  args: {
    subheading: ""
  }
};

export const Default = ({subheading}) => `<custom-header>${subheading ? `<span slot="sub">${subheading}</span>` : ""}</custom-header>`;

export const Subheading = Default.bind({});
Subheading.args = {
  subheading: "Example Subheading"
};
