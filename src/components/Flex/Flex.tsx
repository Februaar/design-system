import { PropsWithChildren, CSSProperties } from "react";
import * as SC from "./Flex.styles";

export type FlexDirection = "row" | "column";
export type FlexAlignItems =
  | "flex-start"
  | "center"
  | "space-between"
  | "space-around"
  | "flex-end";
export type FlexJustifyContent =
  | "flex-start"
  | "center"
  | "space-between"
  | "space-around"
  | "flex-end";

export interface FlexProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  direction?: FlexDirection;
  alignItems?: FlexAlignItems;
  justifyContent?: FlexJustifyContent;
  gap?: number;
}

const Flex = ({
  width = "auto",
  height = "auto",
  direction = "row",
  alignItems = "center",
  justifyContent = "center",
  gap = 0,
  children,
  ...props
}: PropsWithChildren<FlexProps>) => {
  return (
    <SC.StyledFlex
      width={width}
      height={height}
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      {...props}
    >
      {children}
    </SC.StyledFlex>
  );
};

export default Flex;
