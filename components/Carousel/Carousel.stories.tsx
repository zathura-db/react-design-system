import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Carousel from "./Carousel";
import { DataCard } from "../InformationCard/InformationCard";
import type { Props as CarouselProps } from "./Carousel";

const meta: Meta<CarouselProps> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: { layout: "centered" },
  argTypes: {
    autoRotate: { control: "boolean" },
    buttonColour: {
      control: "select",
      options: ["orange", "black"],
    },
    className: { control: "text" },
    informationCards: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<CarouselProps>;

const mockInformationCards: DataCard[] = [
  {
    image: "/temp.jpg",
    title: "E-Commerce Platform",
    text: "A modern shopping platform with real-time inventory and payment processing.",
    linkOne: {
      href: "https://example.com/demo1",
      text: "View Demo",
    },
    linkTwo: {
      href: "https://github.com/example/project1",
      text: "View Code",
    },
  },
  {
    image: "/temp.jpg",
    title: "Task Management App",
    text: "Collaborative task manager with drag-and-drop interface and team features.",
    linkOne: {
      href: "https://example.com/demo2",
      text: "View Demo",
    },
    linkTwo: {
      href: "https://github.com/example/project2",
      text: "View Code",
    },
  },
  {
    image: "/temp.jpg",
    title: "Weather Dashboard",
    text: "Real-time weather visualization with interactive maps and forecasting.",
    linkOne: {
      href: "https://example.com/demo3",
      text: "View Demo",
    },
  },
  {
    image: "/temp.jpg",
    title: "Social Media Analytics",
    text: "Track and analyze social media metrics with beautiful charts and insights.",
    linkOne: {
      href: "https://example.com/demo4",
      text: "View Demo",
    },
    linkTwo: {
      href: "https://github.com/example/project4",
      text: "View Code",
    },
  },
];

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-20">
    <div className="w-full max-w-7xl">{children}</div>
  </div>
);

export const Default: Story = {
  render: (args) => (
    <Wrapper>
      <Carousel {...args} />
    </Wrapper>
  ),
  args: {
    informationCards: mockInformationCards,
    autoRotate: false,
    buttonColour: "orange",
  },
};

export const AutoRotate: Story = {
  render: (args) => (
    <Wrapper>
      <Carousel {...args} />
    </Wrapper>
  ),
  args: {
    informationCards: mockInformationCards,
    autoRotate: true,
    buttonColour: "orange",
  },
};

export const BlackButtons: Story = {
  render: (args) => (
    <Wrapper>
      <Carousel {...args} />
    </Wrapper>
  ),
  args: {
    informationCards: mockInformationCards,
    autoRotate: false,
    buttonColour: "black",
  },
};

export const ThreeCards: Story = {
  render: (args) => (
    <Wrapper>
      <Carousel {...args} />
    </Wrapper>
  ),
  args: {
    informationCards: mockInformationCards.slice(0, 3),
    autoRotate: false,
    buttonColour: "orange",
  },
};

export const CustomBlueButtons: Story = {
  render: (args) => (
    <Wrapper>
      <Carousel {...args} />
    </Wrapper>
  ),
  args: {
    informationCards: mockInformationCards,
    autoRotate: false,
    buttonColour: "orange",
    className: "bg-blue-500 hover:bg-blue-700",
  },
};

export const CustomPurpleButtons: Story = {
  render: (args) => (
    <Wrapper>
      <Carousel {...args} />
    </Wrapper>
  ),
  args: {
    informationCards: mockInformationCards,
    autoRotate: false,
    buttonColour: "black",
    className: "bg-purple-600 hover:bg-purple-800",
  },
};

export const CustomGreenButtons: Story = {
  render: (args) => (
    <Wrapper>
      <Carousel {...args} />
    </Wrapper>
  ),
  args: {
    informationCards: mockInformationCards,
    autoRotate: true,
    className: "bg-green-500 hover:bg-green-700",
  },
};
