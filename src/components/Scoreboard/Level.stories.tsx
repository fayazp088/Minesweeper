import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Level } from "./Level";

export default {
  title: "Scoreboard/Level",
  component: Level,
} as ComponentMeta<typeof Level>;

const Template: ComponentStory<typeof Level> = (args) => <Level {...args} />;

export const ScoreBoardLevel = Template.bind({});

ScoreBoardLevel.args = {
  children: ["Beginner", "Intermediate", "Expert"],
};
