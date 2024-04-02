import styled from "styled-components";
import { ButtonProps } from "./Button";
import { getButtonStyles } from "./Button.utils";

export const StyledButton = styled.button<ButtonProps>`
  ${getButtonStyles}

  &:disabled {
    cursor: not-allowed;
  }
`;
