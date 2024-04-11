import { css } from "styled-components";
import theme from "../../styles";
import { InputProps, InputSize } from "./Input";

interface InputSizeProps {
  fontSize: string;
  padding: string;
}

const inputTypebySize: { [key in InputSize]: InputSizeProps } = {
  sm: {
    fontSize: theme.sizes.fontSize.sm,
    padding: "10px 12px",
  },
  md: {
    fontSize: theme.sizes.fontSize.md,
    padding: "12px 16px",
  },
  lg: {
    fontSize: theme.sizes.fontSize.lg,
    padding: "14px 20px",
  },
};

const inputColorType = {
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
  const sizeProps = size ? inputTypebySize[size] : null;
  const colorProps = color ? inputColorType[color] : null;

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
