import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["./public"],
  features: {
    interactions: false,
    actions: false,
  },
  managerHead: (head) => `
    ${head}
  `,
  previewHead: (head) => `${head}`,
};
export default config;
