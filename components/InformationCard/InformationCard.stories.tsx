import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import InformationCard, { Props } from "./InformationCard";

const meta: Meta = {
  title: "Components/InformationCard",
  component: InformationCard,
  parameters: { layout: "centered" },
  argTypes: {
    cardWidth: { control: { type: "range", min: 240, max: 400, step: 10 } },
    fade: { control: "text" },
    buttonClassName: { control: "text" },
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
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
};

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-20">
    {children}
  </div>
);

export const Default: Story = {
  render: (args) => (
    <Wrapper>
      <InformationCard {...args} />
    </Wrapper>
  ),
  args: {
    informationCard: mockCard,
    cardWidth: 320,
    fade: "opacity-100 scale-100 z-10",
    buttonClassName:
      "bg-themeOrange hover:bg-themeBlack text-white font-semibold py-3 px-4 transition-colors duration-200 text-center",
  },
};

export const Faded: Story = {
  render: (args) => (
    <Wrapper>
      <InformationCard {...args} />
    </Wrapper>
  ),
  args: {
    informationCard: mockCard,
    cardWidth: 320,
    fade: "opacity-50 scale-90",
    buttonClassName:
      "bg-themeOrange hover:bg-themeBlack text-white font-semibold py-3 px-4 transition-colors duration-200 text-center",
  },
};

export const SingleButton: Story = {
  render: (args) => (
    <Wrapper>
      <InformationCard {...args} />
    </Wrapper>
  ),
  args: {
    informationCard: {
      image: "/temp.jpg",
      title: "Weather App",
      text: "Real-time weather application with beautiful UI and accurate forecasting for any location worldwide.",
      linkOne: {
        href: "https://example.com/weather",
        text: "View Demo",
      },
      stack: ["React", "OpenWeather API", "CSS3"],
    },
    cardWidth: 320,
    fade: "opacity-100 scale-100 z-10",
    buttonClassName:
      "bg-themeOrange hover:bg-themeBlack text-white font-semibold py-3 px-4 transition-colors duration-200 text-center",
  },
};

export const BlackButtons: Story = {
  render: (args) => (
    <Wrapper>
      <InformationCard {...args} />
    </Wrapper>
  ),
  args: {
    informationCard: mockCard,
    cardWidth: 320,
    fade: "opacity-100 scale-100 z-10",
    buttonClassName:
      "bg-themeBlack hover:bg-themeOrange text-white font-semibold py-3 px-4 transition-colors duration-200 text-center",
  },
};

export const Mobile: Story = {
  render: (args) => (
    <Wrapper>
      <InformationCard {...args} />
    </Wrapper>
  ),
  args: {
    informationCard: mockCard,
    cardWidth: 240,
    fade: "opacity-100 scale-100 z-10",
    buttonClassName:
      "bg-themeOrange hover:bg-themeBlack text-white font-semibold py-3 px-4 transition-colors duration-200 text-center",
  },
};

export const LongContent: Story = {
  render: (args) => (
    <Wrapper>
      <InformationCard {...args} />
    </Wrapper>
  ),
  args: {
    informationCard: {
      image: "/temp.jpg",
      title: "E-Commerce Platform with Advanced Features",
      text: "A comprehensive e-commerce solution featuring real-time inventory management, secure payment processing, advanced analytics dashboard, and seamless user experience across all devices.",
      linkOne: {
        href: "https://example.com/shop",
        text: "Live Site",
      },
      linkTwo: {
        href: "https://github.com/example/shop",
        text: "Source Code",
      },
      stack: ["Node.js", "React", "MongoDB", "Stripe", "AWS"],
    },
    cardWidth: 320,
    fade: "opacity-100 scale-100 z-10",
    buttonClassName:
      "bg-themeOrange hover:bg-themeBlack text-white font-semibold py-3 px-4 transition-colors duration-200 text-center",
  },
};

export const WithImageHoverZoom: Story = {
  render: (args) => (
    <Wrapper>
      <InformationCard {...args} />
    </Wrapper>
  ),
  args: {
    informationCard: {
      image: "/temp.jpg",
      title: "Project with Hover Effect",
      text: "This card demonstrates the hover zoom effect on the image. Hover over the image to see the smooth scaling animation.",
      linkOne: {
        href: "https://example.com/demo",
        text: "View Demo",
      },
      linkTwo: {
        href: "https://github.com/example",
        text: "GitHub",
      },
      stack: ["Vue.js", "Nuxt", "SCSS"],
      scaleImage:
        "hover:scale-110 transition-transform duration-500 ease-in-out origin-center",
    },
    cardWidth: 320,
    fade: "opacity-100 scale-100 z-10",
    buttonClassName:
      "bg-themeOrange hover:bg-themeBlack text-white font-semibold py-3 px-4 transition-colors duration-200 text-center",
  },
};

export const WithManyStackTags: Story = {
  render: (args) => (
    <Wrapper>
      <InformationCard {...args} />
    </Wrapper>
  ),
  args: {
    informationCard: {
      image: "/temp.jpg",
      title: "Full Stack Application",
      text: "A comprehensive full-stack application showcasing expertise across multiple technologies and frameworks.",
      linkOne: {
        href: "https://example.com/app",
        text: "Live Demo",
      },
      linkTwo: {
        href: "https://github.com/example/app",
        text: "Source",
      },
      stack: [
        "TypeScript",
        "React",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "Redis",
        "GraphQL",
        "Jest",
      ],
    },
    cardWidth: 320,
    fade: "opacity-100 scale-100 z-10",
    buttonClassName:
      "bg-themeOrange hover:bg-themeBlack text-white font-semibold py-3 px-4 transition-colors duration-200 text-center",
  },
};

export const NoStackTags: Story = {
  render: (args) => (
    <Wrapper>
      <InformationCard {...args} />
    </Wrapper>
  ),
  args: {
    informationCard: {
      image: "/temp.jpg",
      title: "Simple Project",
      text: "A simple project card without stack tags to demonstrate the clean layout.",
      linkOne: {
        href: "https://example.com/simple",
        text: "View Project",
      },
    },
    cardWidth: 320,
    fade: "opacity-100 scale-100 z-10",
    buttonClassName:
      "bg-themeOrange hover:bg-themeBlack text-white font-semibold py-3 px-4 transition-colors duration-200 text-center",
  },
};
