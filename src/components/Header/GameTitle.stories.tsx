import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GameTitle from "./GameTitle";

export default {
  title: "Header/Button",
  component: GameTitle,
} as ComponentMeta<typeof GameTitle>;

const Template: ComponentStory<typeof GameTitle> = (args) => {
  return <GameTitle {...args} />;
};

export const MineSweeperGameTitle = Template.bind({});

MineSweeperGameTitle.args = {
  name: "MineSweeper",
};
