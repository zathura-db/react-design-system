import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Timeline from "./Timeline";

const meta: Meta = {
  title: "Components/Timeline",
  component: Timeline,
  parameters: { layout: "centered" },
  argTypes: {
    PrimaryColour: {
      control: "select",
      options: ["Orange", "Blue", "Green", "Red", "Purple", "Black"],
    },
    Timelines: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const exampleTimeline = [
  {
    JobTitle: "Lead Tinkerer",
    companyName: "Acme Labs",
    startDate: "Jan 2021",
    endDate: "Dec 2022",
    content: [
      "Built playful tooling to prototype hardware–software interactions.",
      "Collaborated with design to ship three interactive prototypes.",
    ],
    projects: [
      {
        ShortDescription: "Noise-reactive Lamp",
        Description:
          "Designed a small appliance that changed colour with ambient audio levels.",
        BulletPoints: [
          "Embedded firmware in MicroPython",
          "Designed enclosure in CAD",
        ],
      },
    ],
  },
  {
    JobTitle: "Open Source Wrangler",
    companyName: "Community Hub",
    startDate: "Feb 2023",
    content: [
      "Maintained several community libraries and triaged incoming issues.",
    ],
    projects: [
      {
        ShortDescription: "CLI Updater",
        Description:
          "Authored a tiny CLI to manage system configuration across platforms.",
      },
      {
        ShortDescription: "Docs chatbot",
        Description:
          "Built an assistant that answers questions from project documentation.",
        BulletPoints: [
          "Integrated with vector search",
          "Added conversational fallback",
        ],
      },
    ],
  },
  {
    JobTitle: "Freelance Creator",
    companyName: "Various",
    startDate: "Mar 2024",
    content: ["Design, build and teach — small contracts and workshops."],
  },
];

export const Default: Story = {
  args: {
    PrimaryColour: "Orange",
    Timelines: exampleTimeline,
  },
  render: (args) => (
    <div className="w-full flex justify-center py-10">
      <div className="w-[80vw] max-w-6xl">
        <Timeline
          PrimaryColour={args.PrimaryColour}
          Timelines={args.Timelines}
        />
      </div>
    </div>
  ),
};
