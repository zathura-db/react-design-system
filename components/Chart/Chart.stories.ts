import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Chart, { Skill } from "./Chart";

type ChartProps = {
  chartTitle: string;
  chartColour: string;
  skills: Skill[];
};

const meta: Meta<ChartProps> = {
  title: "Components/Chart",
  component: Chart,
  parameters: { layout: "centered" },
  argTypes: {
    chartColour: {
      control: "select",
      options: ["bg-themeBlue", "bg-themeRed", "bg-themeGreen"],
    },

    chartTitle: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<ChartProps>;

const exampleSkills: Skill[] = [
  { name: "Typescript", level: 90 },
  { name: "React", level: 80 },
  { name: "NextJS", level: 75 },
  { name: "Tailwind", level: 70 },
];

export const Default: Story = {
  args: {
    chartTitle: "Frontend Skills",
    chartColour: "bg-themeBlue",
    skills: exampleSkills,
  },
  render: (args) =>
    React.createElement(
      "div",
      { className: "w-full flex justify-center py-10" },
      React.createElement(
        "div",
        { className: "w-[80vw] max-w-6xl flex justify-center" },
        React.createElement(Chart, args)
      )
    ),
};
