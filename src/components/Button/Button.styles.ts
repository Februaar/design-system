import styled from "styled-components";
import { ButtonProps } from "./Button";
import { getButtonStyles } from "./Button.utils";

export const StyledButton = styled.button<ButtonProps>`
  ${getButtonStyles}
  min-width: 65px;

  &:disabled {
    cursor: not-allowed;
  }
`;
