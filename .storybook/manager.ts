// .storybook/manager.ts
import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  brandTitle: "My Design System",
  brandUrl: "https://danielbarrow.dev",
  base: "dark",
});

addons.setConfig({
  theme: theme,
});
