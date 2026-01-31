/* eslint-disable react/no-unescaped-entities */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import HiddenInformationCard, { Props } from "./HiddenInformationCard";

const meta: Meta = {
  title: "Components/HiddenInformationCard",
  component: HiddenInformationCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This component renders hidden content for SEO purposes. It's not visible in the UI but accessible to search engines and screen readers.",
      },
    },
  },
  argTypes: {
    informationCard: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<Props>;

const mockCard = {
  image: "/temp.jpg",
  title: "Portfolio Website",
  text: "A modern, responsive portfolio built with Next.js and Tailwind CSS featuring smooth animations and optimized performance.",
  linkOne: {
    href: "https://example.com/demo",
    text: "View Demo",
  },
  linkTwo: {
    href: "https://github.com/example/portfolio",
    text: "View Code",
  },
};

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full flex flex-col items-center justify-center bg-gray-50 p-10">
    <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 mb-4 text-sm text-yellow-800">
      ⚠️ This component is hidden with{" "}
      <code className="bg-yellow-200 px-1 rounded">className="hidden"</code>. It
      won't be visible but exists in the DOM for SEO.
    </div>
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6">
      <p className="text-gray-500 text-sm mb-2">
        Component is rendered here (but hidden):
      </p>
      {children}
      <p className="text-gray-500 text-xs mt-4">
        💡 Check the DOM inspector to see the hidden content
      </p>
    </div>
  </div>
);

export const Default: Story = {
  render: (args) => (
    <Wrapper>
      <HiddenInformationCard {...args} />
    </Wrapper>
  ),
  args: {
    informationCard: mockCard,
  },
};

export const MultipleCards: Story = {
  render: (args) => (
    <Wrapper>
      <HiddenInformationCard {...args} />
      <HiddenInformationCard
        informationCard={{
          image: "/temp.jpg",
          title: "Weather App",
          text: "Real-time weather application with accurate forecasting.",
          linkOne: { href: "https://example.com/weather", text: "View Demo" },
        }}
      />
      <HiddenInformationCard
        informationCard={{
          image: "/temp.jpg",
          title: "Task Manager",
          text: "Collaborative task management with team features.",
          linkOne: { href: "https://example.com/tasks", text: "View Demo" },
          linkTwo: {
            href: "https://github.com/example/tasks",
            text: "View Code",
          },
        }}
      />
    </Wrapper>
  ),
  args: {
    informationCard: mockCard,
  },
};
