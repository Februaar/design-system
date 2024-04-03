import React, { PropsWithChildren } from "react";
import * as SC from "./Select.styles";
import SelectProvider from "./Select.context";
import Trigger from "./Trigger";
import OptionList from "./OptionList";
import Option from "./Option";

export type SelectSize = "sm" | "md" | "lg";

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: SelectSize;
}

const Select = ({
  size,
  children,
  ...props
}: PropsWithChildren<SelectProps>) => {
  return (
    <SelectProvider>
      <SC.SelectContainer size={size} {...props}>
        {children}
      </SC.SelectContainer>
    </SelectProvider>
  );
};

export default Select;

Select.Trigger = Trigger;
Select.OptionList = OptionList;
Select.Option = Option;
