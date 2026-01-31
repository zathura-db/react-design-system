import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Footer from "./Footer";

const meta: Meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () =>
    React.createElement(
      "div",
      { className: "w-full flex justify-center py-10" },
      React.createElement(
        "div",
        { className: "w-[80vw] max-w-6xl" },
        React.createElement(Footer)
      )
    ),
};
