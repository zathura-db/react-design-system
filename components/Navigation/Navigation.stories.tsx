import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navigation } from "./Navigation";

const meta: Meta = {
  title: "Components/Navigation",
  component: Navigation,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof meta>;

const PageWrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-white">
    <div className="w-[100%]">{children}</div>
    <div className="p-10">Page content goes here (scroll to test sticky)</div>
  </div>
);

export const Default: Story = {
  render: () => (
    <PageWrap>
      <Navigation />
    </PageWrap>
  ),
};
