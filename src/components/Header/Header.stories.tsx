import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Header";

export default {
  title: "Header/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const MineSweeperHeader = Template.bind({});

MineSweeperHeader.args = {
  name: "MineSweeper",
  feature: "Flag",
  firstAction: "Ctlr",
  secondAction: "Alt",
};
