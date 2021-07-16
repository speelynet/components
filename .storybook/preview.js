import {themes} from "@storybook/theming";
import {prefersDark} from "storybook-dark-mode/dist/Tool";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: prefersDark.matches ? themes.dark : themes.light
  }
};
