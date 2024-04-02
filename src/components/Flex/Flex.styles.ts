import styled from "styled-components";
import theme from "../../styles";
import { FlexProps } from "./Flex";

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap}px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Item = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${theme.colors.serenity[500]};
`;
