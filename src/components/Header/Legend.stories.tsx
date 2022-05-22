import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Legend } from "./Legend";

export default {
  title: "Header/Legend",
  component: Legend,
} as ComponentMeta<typeof Legend>;

const Template: ComponentStory<typeof Legend> = (args) => <Legend {...args} />;

export const MineSweeperGameLegend = Template.bind({});

MineSweeperGameLegend.args = {
  feature: "Flag",
  firstAction: "Ctrl",
  secondAction: "Alt",
};
