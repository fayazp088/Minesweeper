import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Reset from "./Reset";

export default {
  title: "Scoreboard/Reset",
  component: Reset,
} as ComponentMeta<typeof Reset>;

const Template: ComponentStory<typeof Reset> = (args) => <Reset {...args} />;

export const ScoreBoardReset = Template.bind({});

ScoreBoardReset.args = {};
