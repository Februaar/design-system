import { ButtonHTMLAttributes, PropsWithChildren, CSSProperties } from "react";
import * as SC from "./Button.styles";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "contained" | "outlined";
export type ButtonColor = "serenity" | "roseQuartz" | "gray";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  _hover?: CSSProperties;
  _focus?: CSSProperties;
}

const Button = ({
  size,
  variant,
  color,
  _hover,
  _focus,
  disabled,
  onClick,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <SC.StyledButton
      size={size}
      variant={variant}
      color={color}
      _hover={_hover}
      _focus={_focus}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </SC.StyledButton>
  );
};

export default Button;
