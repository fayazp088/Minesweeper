import React, { FC } from "react";
import styled from "styled-components";
import { Counter } from "./Counter";
import { Level } from "./Level";
import Reset from "./Reset";

export interface ScoreboardProps {
  /**
   * time
   */
  time: string;
  /**
   * Levels
   */
  levels: string[];
  /**
   * onReset Function
   */
  onReset: () => void;
  /**
   * Mines
   */
  mines: string;
}

export const ScoreBoard: FC<ScoreboardProps> = ({
  time,
  levels,
  onReset,
  mines,
}) => {
  return (
    <Wrapper>
      <Counter>{time}</Counter>
      <Level>{levels}</Level>
      <Reset onReset={onReset} />
      <Counter>{mines}</Counter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: max-content;
  padding-bottom: 2vw;
  justify-content: space-between;
`;
