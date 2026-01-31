import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["red", "orange", "blue", "green", "purple", "black"],
    },
    display: { control: { type: "select" }, options: ["inline", "block"] },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const OnBlack: Story = {
  args: {
    children: "Click me",
    color: "red",
    display: "block",
  },
  render: (args) =>
    React.createElement(
      "div",
      {
        style: {
          backgroundColor: "#000",
          padding: "40px",
          display: "inline-block",
        },
      },
      React.createElement(Button, args),
    ),
};

export const OnWhite: Story = {
  args: {
    children: "Click me",
    color: "red",
    display: "block",
  },
  render: (args) =>
    React.createElement(
      "div",
      {
        style: {
          backgroundColor: "#fff",
          padding: "40px",
          display: "inline-block",
        },
      },
      React.createElement(Button, args),
    ),
};

// Color Variants
export const RedButton: Story = {
  args: {
    children: "Red Button",
    baseColour: "red",
    hoverStyle: "redOffset",
  },
};

export const OrangeButton: Story = {
  args: {
    children: "Orange Button",
    baseColour: "orange",
    hoverStyle: "orangeOffset",
  },
};

export const BlueButton: Story = {
  args: {
    children: "Blue Button",
    baseColour: "blue",
    hoverStyle: "blueOffset",
  },
};

export const GreenButton: Story = {
  args: {
    children: "Green Button",
    baseColour: "green",
    hoverStyle: "greenOffset",
  },
};

export const PurpleButton: Story = {
  args: {
    children: "Purple Button",
    baseColour: "purple",
    hoverStyle: "purpleOffset",
  },
};

export const BlackButton: Story = {
  args: {
    children: "Black Button",
    baseColour: "black",
    hoverStyle: "blackOffset",
  },
};

export const OrangeOutlineButton: Story = {
  args: {
    children: "Orange Outline",
    baseColour: "orangeOutline",
    hoverStyle: "orangeFill",
  },
};

// Size Variants
export const SmallButton: Story = {
  args: {
    children: "Small Button",
    baseColour: "blue",
    buttonSize: "small",
  },
};

export const LargeButton: Story = {
  args: {
    children: "Large Button",
    baseColour: "blue",
    buttonSize: "large",
  },
};

// Display Variants
export const InlineButton: Story = {
  args: {
    children: "Inline Button",
    baseColour: "green",
    display: "inline",
  },
};

export const BlockButton: Story = {
  args: {
    children: "Block Button",
    baseColour: "green",
    display: "block",
  },
};

// Hover Style Variants
export const WhiteHoverButton: Story = {
  args: {
    children: "White Hover Outline",
    baseColour: "purple",
    hoverStyle: "white",
  },
};

export const OrangeFillHoverButton: Story = {
  args: {
    children: "Orange Fill on Hover",
    baseColour: "orangeOutline",
    hoverStyle: "orangeFill",
  },
};

// Combined Variants
export const SmallBlockButton: Story = {
  args: {
    children: "Small Block",
    baseColour: "red",
    buttonSize: "small",
    display: "block",
  },
};

export const LargeInlineButton: Story = {
  args: {
    children: "Large Inline",
    baseColour: "orange",
    buttonSize: "large",
    display: "inline",
  },
};

// Disabled State
export const DisabledButton: Story = {
  args: {
    children: "Disabled Button",
    baseColour: "blue",
    disabled: true,
  },
};

// Interactive Examples
export const WithClickHandler: Story = {
  args: {
    children: "Click Me!",
    baseColour: "green",
    onClick: () => alert("Button clicked!"),
  },
};

// Multiple Buttons Example
export const AllColorsShowcase: Story = {
  render: () =>
    React.createElement(
      "div",
      { style: { display: "flex", flexDirection: "column", gap: "12px" } },
      React.createElement(
        Button,
        { baseColour: "red", hoverStyle: "redOffset" },
        "Red",
      ),
      React.createElement(
        Button,
        { baseColour: "orange", hoverStyle: "orangeOffset" },
        "Orange",
      ),
      React.createElement(
        Button,
        { baseColour: "blue", hoverStyle: "blueOffset" },
        "Blue",
      ),
      React.createElement(
        Button,
        { baseColour: "green", hoverStyle: "greenOffset" },
        "Green",
      ),
      React.createElement(
        Button,
        { baseColour: "purple", hoverStyle: "purpleOffset" },
        "Purple",
      ),
      React.createElement(
        Button,
        { baseColour: "black", hoverStyle: "blackOffset" },
        "Black",
      ),
      React.createElement(
        Button,
        { baseColour: "orangeOutline", hoverStyle: "orangeFill" },
        "Orange Outline",
      ),
    ),
};

export const SizeComparison: Story = {
  render: () =>
    React.createElement(
      "div",
      { style: { display: "flex", gap: "12px", alignItems: "center" } },
      React.createElement(
        Button,
        { baseColour: "blue", buttonSize: "small" },
        "Small",
      ),
      React.createElement(
        Button,
        { baseColour: "blue", buttonSize: "large" },
        "Large",
      ),
    ),
};
