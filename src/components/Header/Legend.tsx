import React, { FC } from "react";
import styled from "styled-components";

export interface LegendProps {
  /**
   * Feature
   */
  feature: string;
  /**
   * first Action
   */
  firstAction: string;
  /**
   * Second Action
   */
  secondAction: string;
}

export const Legend: FC<LegendProps> = ({
  feature,
  firstAction,
  secondAction,
}) => {
  return (
    <Parent>
      <strong>{feature}: </strong>
      <Flag>
        <FirstAction>{firstAction}</FirstAction> +{" "}
        <SecondAction>{secondAction}</SecondAction>
      </Flag>
    </Parent>
  );
};

const Parent = styled.legend`
  font-size: 1em;
  margin: 0 auto;
  line-height: 1.25em;
`;

const FirstAction = styled.span`
  color: #ec433c;
`;

const SecondAction = styled.span`
  color: #2a48ec;
`;

const Flag = styled.code`
  background-color: #e3e3e3;
`;

export default Legend;
