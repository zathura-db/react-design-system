import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Section from "./Section";

const meta: Meta = {
  title: "Components/Section",
  component: Section,
  parameters: { layout: "centered" },
  argTypes: {
    sectionTitle: { control: "text" },
    disableHeading: { control: "boolean" },
    disableUnderline: { control: "boolean" },
    underlineColourOverride: { control: "text" },
    className: { control: "text" },
    colour: {
      control: { type: "select" },
      options: ["white", "black", "orange"],
    },
    type: { control: { type: "select" }, options: ["normal", "chevron"] },
    content: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full flex justify-center py-10">
    <div className="w-[80vw] max-w-6xl">{children}</div>
  </div>
);

const Template = (args: any) => (
  <Wrapper>
    <Section
      sectionTitle={args.sectionTitle}
      disableHeading={args.disableHeading}
      disableUnderline={args.disableUnderline}
      underlineColourOverride={args.underlineColourOverride}
      className={args.className}
      colour={args.colour}
      type={args.type}
    >
      <p className={args.colour === "white" ? "text-gray-700" : "text-white"}>
        {args.content}
      </p>
    </Section>
  </Wrapper>
);

export const Default: Story = {
  args: {
    sectionTitle: "About Me",
    disableHeading: false,
    disableUnderline: false,
    underlineColourOverride: "bg-black",
    className: "",
    colour: "white",
    type: "normal",
    content: "This is an example paragraph inside the default Section.",
  },
  render: Template,
};

export const ChevronBlack: Story = {
  args: {
    sectionTitle: "My Stack",
    disableHeading: false,
    disableUnderline: false,
    underlineColourOverride: undefined,
    className: "",
    colour: "orange",
    type: "chevron",
    content: "Chevron section with black background.",
  },
  render: Template,
};
