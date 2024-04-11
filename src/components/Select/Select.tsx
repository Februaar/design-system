import React, { PropsWithChildren } from "react";
import * as SC from "./Select.styles";
import { SelectContext } from "./Select.context";
import { useSelect } from "./Select.hooks";
import SelectTrigger from "./SelectTrigger";
import SelectOptionList from "./SelectOptionList";
import SelectOption, { SelectLabel } from "./SelectOption";

export type SelectSize = "sm" | "md" | "lg";

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: SelectSize;
  value?: string;
}

const Select = ({
  size,
  value,
  children,
  ...props
}: PropsWithChildren<SelectProps>) => {
  const { isOpen, openSelect, closeSelect, option, setOption } = useSelect({
    value,
  });

  return (
    <SelectContext.Provider
      value={{ isOpen, openSelect, closeSelect, option, setOption }}
    >
      <SC.SelectContainer size={size} {...props}>
        {children}
      </SC.SelectContainer>
    </SelectContext.Provider>
  );
};

export default Select;

Select.Trigger = SelectTrigger;
Select.OptionList = SelectOptionList;
Select.Label = SelectLabel;
Select.Option = SelectOption;
