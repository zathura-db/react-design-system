import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import StarBackground from "./StarBackground";

type Args = {
  children: string;
  layer1_count: number;
  layer1_size: number;
  layer1_duration: number;
  layer1_colorStart: string;
  layer1_colorEnd: string;
  layer2_count: number;
  layer2_size: number;
  layer2_duration: number;
  layer2_colorStart: string;
  layer2_colorEnd: string;
  layer3_count: number;
  layer3_size: number;
  layer3_duration: number;
  layer3_colorStart: string;
  layer3_colorEnd: string;
};

const meta: Meta<Args> = {
  title: "Components/StarBackground",
  component: StarBackground,
  parameters: { layout: "fullscreen" },
  argTypes: {
    children: { control: "text" },
    layer1_count: { control: { type: "number", min: 0, max: 2000, step: 10 } },
    layer1_size: { control: { type: "number", min: 0, max: 10, step: 1 } },
    layer1_duration: { control: { type: "number", min: 1, max: 500, step: 1 } },
    layer1_colorStart: { control: "color" },
    layer1_colorEnd: { control: "color" },

    layer2_count: { control: { type: "number", min: 0, max: 2000, step: 10 } },
    layer2_size: { control: { type: "number", min: 0, max: 10, step: 1 } },
    layer2_duration: { control: { type: "number", min: 1, max: 500, step: 1 } },
    layer2_colorStart: { control: "color" },
    layer2_colorEnd: { control: "color" },

    layer3_count: { control: { type: "number", min: 0, max: 2000, step: 10 } },
    layer3_size: { control: { type: "number", min: 0, max: 10, step: 1 } },
    layer3_duration: { control: { type: "number", min: 1, max: 500, step: 1 } },
    layer3_colorStart: { control: "color" },
    layer3_colorEnd: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<Args>;

const Template = (args: Args) => {
  const layerConfigs: Array<{
    count: number;
    size: number;
    duration: number;
    colorRange: [string, string];
  }> = [
    {
      count: args.layer1_count,
      size: args.layer1_size,
      duration: args.layer1_duration,
      colorRange: [args.layer1_colorStart, args.layer1_colorEnd],
    },
    {
      count: args.layer2_count,
      size: args.layer2_size,
      duration: args.layer2_duration,
      colorRange: [args.layer2_colorStart, args.layer2_colorEnd],
    },
    {
      count: args.layer3_count,
      size: args.layer3_size,
      duration: args.layer3_duration,
      colorRange: [args.layer3_colorStart, args.layer3_colorEnd],
    },
  ];

  return (
    <div style={{ height: "700px" }}>
      <StarBackground layerConfigs={layerConfigs}>
        <div className="px-4">
          <h1 className="text-4xl font-bold">Starfield Preview</h1>
          <p className="mt-4 max-w-2xl">{args.children}</p>
        </div>
      </StarBackground>
    </div>
  );
};

export const Default: Story = {
  args: {
    children:
      "This is a preview of the starfield background. Adjust layer controls to see changes.",
    layer1_count: 500,
    layer1_size: 1,
    layer1_duration: 50,
    layer1_colorStart: "#ffffff",
    layer1_colorEnd: "#ffcccc",

    layer2_count: 250,
    layer2_size: 2,
    layer2_duration: 100,
    layer2_colorStart: "#ffffff",
    layer2_colorEnd: "#99ccff",

    layer3_count: 120,
    layer3_size: 3,
    layer3_duration: 200,
    layer3_colorStart: "#ffffff",
    layer3_colorEnd: "#ff99ff",
  },
  render: Template,
};
