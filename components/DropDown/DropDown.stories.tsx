import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import DropDown from "./DropDown";

const meta: Meta = {
  title: "Components/DropDown",
  component: DropDown,
  parameters: { layout: "centered" },
  argTypes: {
    primaryColour: {
      control: "select",
      options: ["Orange", "Blue", "Green", "Red", "Purple", "Black"],
    },
    className: { control: "text" },
    isOpen: { control: "boolean" },
    toggleText: { control: "object" },
    onToggle: { action: "toggled" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ProjectContent = () => (
  <div className="mt-4 space-y-4">
    <div className="bg-gray-100 rounded-md p-4 space-y-3">
      <h4 className="font-semibold text-gray-900">Authentication System</h4>
      <p className="text-sm text-gray-700 mt-1">
        Built a comprehensive authentication system with JWT tokens, OAuth
        integration, and password reset functionality.
      </p>
      <h5 className="text-sm text-gray-700 mt-1 font-semibold">
        My contributions were:
      </h5>
      <ul className="text-sm list-disc pl-5 mt-2 text-gray-700">
        <li>Implemented JWT-based authentication</li>
        <li>Integrated Google and GitHub OAuth</li>
        <li>Created password reset flow with email verification</li>
        <li>Added two-factor authentication support</li>
      </ul>
    </div>
    <div className="bg-gray-100 rounded-md p-4 space-y-3">
      <h4 className="font-semibold text-gray-900">Real-time Dashboard</h4>
      <p className="text-sm text-gray-700 mt-1">
        Developed a real-time analytics dashboard using WebSockets to display
        live metrics and user activity.
      </p>
      <h5 className="text-sm text-gray-700 mt-1 font-semibold">
        My contributions were:
      </h5>
      <ul className="text-sm list-disc pl-5 mt-2 text-gray-700">
        <li>Set up WebSocket connections for live updates</li>
        <li>Designed responsive chart components</li>
        <li>Optimized rendering for large datasets</li>
      </ul>
    </div>
    <div className="bg-gray-100 rounded-md p-4 space-y-3">
      <h4 className="font-semibold text-gray-900">API Migration</h4>
      <p className="text-sm text-gray-700 mt-1">
        Led the migration from REST to GraphQL, improving query efficiency and
        reducing over-fetching.
      </p>
    </div>
  </div>
);

const SingleProjectContent = () => (
  <div className="mt-4 space-y-4">
    <div className="bg-gray-100 rounded-md p-4 space-y-3">
      <h4 className="font-semibold text-gray-900">Authentication System</h4>
      <p className="text-sm text-gray-700 mt-1">
        Built a comprehensive authentication system with JWT tokens, OAuth
        integration, and password reset functionality.
      </p>
      <h5 className="text-sm text-gray-700 mt-1 font-semibold">
        My contributions were:
      </h5>
      <ul className="text-sm list-disc pl-5 mt-2 text-gray-700">
        <li>Implemented JWT-based authentication</li>
        <li>Integrated Google and GitHub OAuth</li>
        <li>Created password reset flow with email verification</li>
        <li>Added two-factor authentication support</li>
      </ul>
    </div>
  </div>
);

const SimpleProjectContent = () => (
  <div className="mt-4 space-y-4">
    <div className="bg-gray-100 rounded-md p-4 space-y-3">
      <h4 className="font-semibold text-gray-900">API Migration</h4>
      <p className="text-sm text-gray-700 mt-1">
        Led the migration from REST to GraphQL, improving query efficiency and
        reducing over-fetching.
      </p>
    </div>
  </div>
);

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full flex justify-center py-10 bg-gray-50">
    <div className="w-full max-w-2xl bg-white rounded-lg p-6">{children}</div>
  </div>
);

const InteractiveDropDown = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  return (
    <DropDown {...args} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
  );
};

export const Default: Story = {
  render: (args) => (
    <Wrapper>
      <InteractiveDropDown {...args}>
        <ProjectContent />
      </InteractiveDropDown>
    </Wrapper>
  ),
  args: {
    primaryColour: "Orange",
    toggleText: {
      OpenText: "View What I Have Worked On",
      CloseText: "Hide What I Have Worked On",
    },
    isOpen: false,
  },
};

export const Open: Story = {
  render: (args) => (
    <Wrapper>
      <InteractiveDropDown {...args}>
        <ProjectContent />
      </InteractiveDropDown>
    </Wrapper>
  ),
  args: {
    primaryColour: "Orange",
    toggleText: {
      OpenText: "View What I Have Worked On",
      CloseText: "Hide What I Have Worked On",
    },
    isOpen: true,
  },
};

export const BlueVariant: Story = {
  render: (args) => (
    <Wrapper>
      <InteractiveDropDown {...args}>
        <ProjectContent />
      </InteractiveDropDown>
    </Wrapper>
  ),
  args: {
    primaryColour: "Blue",
    toggleText: {
      OpenText: "Show Projects",
      CloseText: "Hide Projects",
    },
    isOpen: false,
  },
};

export const GreenVariant: Story = {
  render: (args) => (
    <Wrapper>
      <InteractiveDropDown {...args}>
        <ProjectContent />
      </InteractiveDropDown>
    </Wrapper>
  ),
  args: {
    primaryColour: "Green",
    toggleText: {
      OpenText: "Expand Details",
      CloseText: "Collapse Details",
    },
    isOpen: false,
  },
};

export const RedVariant: Story = {
  render: (args) => (
    <Wrapper>
      <InteractiveDropDown {...args}>
        <ProjectContent />
      </InteractiveDropDown>
    </Wrapper>
  ),
  args: {
    primaryColour: "Red",
    toggleText: {
      OpenText: "View More",
      CloseText: "View Less",
    },
    isOpen: false,
  },
};

export const CustomClassName: Story = {
  render: (args) => (
    <Wrapper>
      <InteractiveDropDown {...args}>
        <ProjectContent />
      </InteractiveDropDown>
    </Wrapper>
  ),
  args: {
    primaryColour: "Orange",
    className: "text-purple-600 text-lg",
    toggleText: {
      OpenText: "View What I Have Worked On",
      CloseText: "Hide What I Have Worked On",
    },
    isOpen: false,
  },
};

export const SingleProject: Story = {
  render: (args) => (
    <Wrapper>
      <InteractiveDropDown {...args}>
        <SingleProjectContent />
      </InteractiveDropDown>
    </Wrapper>
  ),
  args: {
    primaryColour: "Black",
    toggleText: {
      OpenText: "View Project Details",
      CloseText: "Hide Project Details",
    },
    isOpen: false,
  },
};

export const ProjectWithoutBulletPoints: Story = {
  render: (args) => (
    <Wrapper>
      <InteractiveDropDown {...args}>
        <SimpleProjectContent />
      </InteractiveDropDown>
    </Wrapper>
  ),
  args: {
    primaryColour: "Purple",
    toggleText: {
      OpenText: "Show Details",
      CloseText: "Hide Details",
    },
    isOpen: true,
  },
};
