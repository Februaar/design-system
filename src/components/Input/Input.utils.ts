import { css } from "styled-components";
import theme from "../../styles";
import { InputProps, InputSize } from "./Input";

interface InputSizeProps {
  fontSize: string;
  padding: string;
}

const InputTypebySize: { [key in InputSize]: InputSizeProps } = {
  sm: {
    ...theme.sizes.input.sm,
  },
  md: {
    ...theme.sizes.input.md,
  },
  lg: {
    ...theme.sizes.input.lg,
  },
};

const InputColorType = {
  serenity: {
    inputColor: theme.colors.serenity[200],
    hoverColor: theme.colors.serenity[300],
    borderColor: theme.colors.serenity[500],
  },
  green: {
    inputColor: theme.colors.green[200],
    hoverColor: theme.colors.green[300],
    borderColor: theme.colors.green[500],
  },
};

export const getInputStyles = ({
  size,
  variant,
  color,
}: InputProps): ReturnType<typeof css> => {
  const sizeProps = size ? InputTypebySize[size] : null;
  const colorProps = color ? InputColorType[color] : null;

  return css`
    font-size: ${sizeProps?.fontSize};
    padding: ${sizeProps?.padding};
    border: none;
    outline: none;
    border-radius: 12px;
    color: ${color ? "#222" : "inherit"};
    background-color: transparent;

    ${variant === "primary" &&
    css`
      background-color: ${colorProps?.inputColor};

      &:hover {
        background-color: ${colorProps?.hoverColor};
        transition: all 0.3s all;
      }
    `}

    ${variant === "outlined" &&
    css`
      border: 1px solid ${colorProps?.borderColor};

      &:hover {
        border-color: ${colorProps?.hoverColor};
        transition: all 0.3s ease-in-out;
      }
    `}

    &:focus {
      border: 2px solid ${colorProps?.borderColor};
    }
  `;
};
