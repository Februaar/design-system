import styled from "styled-components";
import { InputProps } from "./Input";
import { getInputStyles } from "./Input.utils";

export const StyledInput = styled.input<InputProps>`
  ${getInputStyles}

  &:disabled {
    cursor: not-allowed;
  }
`;
