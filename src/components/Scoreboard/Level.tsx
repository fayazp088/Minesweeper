import React, { FC, ChangeEvent } from "react";
import styled from "styled-components";

export interface LevelProps {
  /**
   * Array of possible game levels
   */
  children: string[];
  /**
   * Default value
   */
  value?: string;
  /**
   * Select new lvl handler
   */
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Level: FC<LevelProps> = ({ children }) => {
  return (
    <Select>
      {children.map((child) => {
        return (
          <Option value={child} key={child}>
            {child}
          </Option>
        );
      })}
    </Select>
  );
};

const Select = styled.select`
  margin: 0;
  height: 100%;
  border-radius: 0;
  border: 0.15vw solid;
  border-color: white #9e9e9e #9e9e9e white;
  background-color: #d1d1d1;
  cursor: pointer;
`;

const Option = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0 0.2vw 0.2vw;
`;
export default Level;
