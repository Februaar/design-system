import { css } from "styled-components";
import theme from "../../styles";
import { ButtonProps, ButtonSize } from "./Button";

interface ButtonSizeProps {
  fontSize: string;
  padding: string;
  borderRadius: string;
}

const ButtonTypebySize: { [key in ButtonSize]: ButtonSizeProps } = {
  sm: {
    ...theme.sizes.button.sm,
  },
  md: {
    ...theme.sizes.button.md,
  },
  lg: {
    ...theme.sizes.button.lg,
  },
};

const ButtonColorType = {
  serenity: {
    buttonColor: theme.colors.serenity[300],
    borderColor: theme.colors.serenity[500],
  },
  roseQuartz: {
    buttonColor: theme.colors.roseQuartz[300],
    borderColor: theme.colors.roseQuartz[500],
  },
  gray: {
    buttonColor: theme.colors.gray[300],
    borderColor: theme.colors.gray[500],
  },
};

export const getButtonStyles = ({
  size,
  variant,
  color,
  _hover,
  _focus,
}: ButtonProps): ReturnType<typeof css> => {
  const sizeProps = size ? ButtonTypebySize[size] : null;
  const colorProps = color ? ButtonColorType[color] : null;

  return css`
    font-size: ${sizeProps?.fontSize};
    padding: ${sizeProps?.padding};
    border: none;
    border-radius: ${sizeProps?.borderRadius};
    color: ${color ? "#000" : "inherit"};
    background-color: transparent;
    border-color: ${colorProps?.borderColor};

    ${variant === "primary" &&
    css`
      color: ${colorProps?.buttonColor};
    `}

    ${variant === "outlined" &&
    css`
      border: 1px solid ${colorProps?.borderColor};
    `}

    ${variant === "contained" &&
    css`
      background-color: ${colorProps?.buttonColor};
    `}
    
    &:hover {
      ${_hover &&
      css`
        color: ${_hover.color};
        background-color: ${_hover.backgroundColor};
      `}
    }

    &:focus {
      ${_focus &&
      css`
        border-color: ${_focus.borderColor};
      `}
    }
  `;
};
