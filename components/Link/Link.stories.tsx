import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import LinkText from "./Link";

const meta: Meta = {
  title: "Components/Link",
  component: LinkText,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper: React.FC<{ children: React.ReactNode; dark?: boolean }> = ({
  children,
  dark,
}) => (
  <div className="w-full flex justify-center py-8">
    <div className="w-[80vw] max-w-6xl">
      <div className={dark ? "p-6 bg-gray-800" : ""}>{children}</div>
    </div>
  </div>
);

export const Default: Story = {
  render: () => (
    <Wrapper>
      <p className="text-lg">
        This is an example link:{" "}
        <LinkText href="#" linkColour="red">
          Visit my stack
        </LinkText>
      </p>
    </Wrapper>
  ),
};

export const BoldRed: Story = {
  render: () => (
    <Wrapper>
      <p className="text-lg">
        Bold red link:{" "}
        <LinkText href="#" linkColour="red" fontWeight="bold">
          Bold Link
        </LinkText>
      </p>
    </Wrapper>
  ),
};

export const BlackNormal: Story = {
  render: () => (
    <Wrapper>
      <p className="text-lg">
        Black link:{" "}
        <LinkText href="#" linkColour="black">
          Black Link
        </LinkText>
      </p>
    </Wrapper>
  ),
};

export const WhiteOnDark: Story = {
  render: () => (
    <Wrapper dark>
      <p className="text-lg">
        White link on dark background:{" "}
        <LinkText href="#" linkColour="white" fontWeight="bold">
          White Link
        </LinkText>
      </p>
    </Wrapper>
  ),
};
