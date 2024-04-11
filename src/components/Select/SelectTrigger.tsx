import { PropsWithChildren, useContext } from "react";
import * as SC from "./Select.styles";
import { SelectContext } from "./Select.context";
import { ArrowDownIcon } from "./Icon";

interface SelectTriggerProps {
  placeholder?: string;
}

const SelectTrigger = ({
  placeholder,
  children,
}: PropsWithChildren<SelectTriggerProps>) => {
  const { openSelect, closeSelect, option } = useContext(SelectContext);

  return (
    <>
      <SC.TriggerButton onClick={openSelect} onBlur={closeSelect}>
        <SC.SelectedOption>{option ? option : placeholder}</SC.SelectedOption>
        <SC.ArrowIconWrapper>
          <ArrowDownIcon />
        </SC.ArrowIconWrapper>
        {children}
      </SC.TriggerButton>
    </>
  );
};

export default SelectTrigger;
