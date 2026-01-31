import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./Pagination";

const meta: Meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SectionBox: React.FC<{ id: string; index: number }> = ({ id, index }) => (
  <section
    id={id}
    style={{ height: "650px" }}
    className="flex items-center justify-center border-b border-gray-200"
  >
    <div className="w-[80vw] max-w-6xl">
      <h2 className="text-2xl font-bold">{`Section ${index + 1}: ${id}`}</h2>
      <p className="mt-4 text-gray-600">This is demo content for {id}.</p>
    </div>
  </section>
);

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-white">
      <Pagination />

      {/* Render several tall sections so pagination can detect scroll position */}
      <SectionBox id="About" index={0} />
      <SectionBox id="My Stack" index={1} />
      <SectionBox id="My Experience" index={2} />
      <SectionBox id="Portfolio" index={3} />
      <SectionBox id="Contact" index={4} />
    </div>
  ),
};
