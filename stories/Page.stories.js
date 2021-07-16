import "../src/Page";

export default {
  title: "Page",
  args: {
    content: "<p>Example Content</p>"
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

export const Default = ({content}) => `
<custom-page>
  <div slot="content">
    ${content}
  </div>
</custom-page>
`;
