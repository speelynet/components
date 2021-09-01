import "../src/ToggleSwitch";

export default {
  title: "Toggle Switch",
  parameters: {
    actions: {
      handles: ["toggled"]
    }
  }
}

export const Default = () => `<toggle-switch></toggle-switch>`;
