export default {
  title: "Page",
  args: {
    content: "<p>Example Content</p>",
    subheading: "Placeholder Subheading"
  },
  decorators: [
    Story => `
    <style>
        body {
            padding: 0 !important;
        }
    </style>
    ${Story()}
    `
  ]
}

export const Default = ({content, subheading}) => `
<custom-page>
    ${subheading ? `<span slot="sub">${subheading}</span>`: ""}
    ${content}
</custom-page>
`;

export const LongContent = Default.bind({});
LongContent.args = {
  content: "<br>".repeat(40)
};
