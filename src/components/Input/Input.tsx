import { InputHTMLAttributes, PropsWithChildren } from "react";
import * as SC from "./Input.styles";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "primary" | "outlined";
export type InputColor = "serenity" | "green";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
  size?: InputSize;
  variant?: InputVariant;
  color?: InputColor;
}

const Input = ({
  size,
  variant,
  color,
  disabled,
  ...props
}: PropsWithChildren<InputProps>) => {
  return (
    <SC.StyledInput
      size={size}
      variant={variant}
      color={color}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;
