import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Counter } from "./Counter";

export default {
  title: "Scoreboard/Counter",
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const ScoreBoardCounter = Template.bind({});

ScoreBoardCounter.args = {
  children: "10",
};
