import { ComponentMeta, ComponentStory } from "@storybook/react";
import Cat, { ICatProps } from "./Cat";
import { mockCatProps } from "./Cat.mocks";

export default {
  title: "cards/Cat",
  component: Cat,
  argTypes: {},
} as ComponentMeta<typeof Cat>;

const Template: ComponentStory<typeof Cat> = (args) => <Cat {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockCatProps.base,
} as ICatProps;
