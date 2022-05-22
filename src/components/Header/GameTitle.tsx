import React, { FC } from "react";
import styled from "styled-components";

export interface GameTitleProps {
  name: string;
}

const GameTitleText = styled.h1`
  font-size: 2rem;
`;

const GameTitle: FC<GameTitleProps> = ({ name }) => {
  return <GameTitleText>{name}</GameTitleText>;
};

export default GameTitle;
