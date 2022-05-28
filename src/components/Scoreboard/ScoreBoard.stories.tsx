import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ScoreBoard } from "./ScoreBoard";

export default {
  title: "Scoreboard/ScoreBoard",
  component: ScoreBoard,
} as ComponentMeta<typeof ScoreBoard>;

const Template: ComponentStory<typeof ScoreBoard> = (args) => (
  <ScoreBoard {...args} />
);

export const ScoreBoardContainer = Template.bind({});

ScoreBoardContainer.args = {
  time: "00:00",
  levels: ["Beginner", "Intermediate", "Expert"],
  mines: "0",
};
