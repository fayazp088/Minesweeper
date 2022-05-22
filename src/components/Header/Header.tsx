import React, { FC } from "react";

import styled from "styled-components";
import GameTitle, { GameTitleProps } from "./GameTitle";
import { Legend, LegendProps } from "./Legend";

const TopHeader = styled.header`
  text-align: center;
  position: relative;
  display: inline-block;
`;

const Header: FC<GameTitleProps & LegendProps> = ({ name, ...legendProps }) => {
  return (
    <TopHeader>
      <GameTitle name={name} />
      <Legend {...legendProps} />
    </TopHeader>
  );
};

export default Header;
