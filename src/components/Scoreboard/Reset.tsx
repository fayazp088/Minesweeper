import React, { FC, useState } from "react";
import styled from "styled-components";

export interface ResetProps {
  onReset: () => void;
}

export const Reset: FC<ResetProps> = ({ onReset }) => {
  const [click, setClick] = useState(false);

  const onMouseDown = () => setClick(true);
  const onMouseUp = () => setClick(false);

  return (
    <Button
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseDown}
      onClick={onReset}
    >
      {click ? "😇" : "😁"}
    </Button>
  );
};

const Button = styled.button`
  font-size: 1.5vw;
  cursor: pointer;
  font-weight: 700;
  border-width: 0.15vw;
  border-style: solid;
  background-color: #d1d1d1;
  border-color: white #9e9e9e #9e9e9e white;
`;

export default Reset;
