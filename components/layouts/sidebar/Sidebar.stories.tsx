import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sidebar, { ISidebar } from "./Sidebar";
import { mockSidebarProps } from "./Sidebar.mocks";

export default {
  title: "layouts/Sidebar",
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSidebarProps.base,
} as ISidebar;
