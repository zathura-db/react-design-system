import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import DirectionButtons, { Props } from "./DirectionButtons";

const meta: Meta = {
  title: "Components/DirectionButtons",
  component: DirectionButtons,
  parameters: { layout: "centered" },
  argTypes: {
    buttonColour: {
      control: "select",
      options: ["orange", "black"],
    },
    buttonClassName: { control: "text" },
    onPrevious: { action: "previous clicked" },
    onNext: { action: "next clicked" },
  },
};

export default meta;
type Story = StoryObj<Props>;

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full flex justify-center py-10 bg-gray-50">
    <div className="w-full max-w-xl">{children}</div>
  </div>
);

export const Orange: Story = {
  render: (args) => (
    <Wrapper>
      <DirectionButtons {...args} />
    </Wrapper>
  ),
  args: {
    buttonColour: "orange",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
  },
};

export const Black: Story = {
  render: (args) => (
    <Wrapper>
      <DirectionButtons {...args} />
    </Wrapper>
  ),
  args: {
    buttonColour: "black",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [count, setCount] = React.useState(0);
    return (
      <Wrapper>
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold text-gray-700">
            Slide {count + 1}
          </div>
          <DirectionButtons
            {...args}
            onPrevious={() => setCount((prev) => Math.max(0, prev - 1))}
            onNext={() => setCount((prev) => Math.min(10, prev + 1))}
          />
        </div>
      </Wrapper>
    );
  },
  args: {
    buttonColour: "orange",
  },
};

export const CustomBlueColor: Story = {
  render: (args) => (
    <Wrapper>
      <DirectionButtons {...args} />
    </Wrapper>
  ),
  args: {
    buttonClassName: "text-blue-500 w-8 h-8",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
  },
};

export const CustomRedLargeIcons: Story = {
  render: (args) => (
    <Wrapper>
      <DirectionButtons {...args} />
    </Wrapper>
  ),
  args: {
    buttonClassName: "text-red-500 w-8 h-8",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
  },
};

export const CustomPurpleSmallIcons: Story = {
  render: (args) => (
    <Wrapper>
      <DirectionButtons {...args} />
    </Wrapper>
  ),
  args: {
    buttonClassName: "text-purple-600 w-4 h-4",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
  },
};
