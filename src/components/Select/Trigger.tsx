import { PropsWithChildren, useContext } from "react";
import * as SC from "./Select.styles";
import { ArrowUpIcon, ArrowDownIcon } from "./Icon";
import { SelectContext } from "./Select.context";

const Trigger = ({ children }: PropsWithChildren) => {
  const { isOpen, option, setIsOpen } = useContext(SelectContext);

  return (
    <>
      <SC.TriggerButton
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <SC.SelectedOption>{option}</SC.SelectedOption>
        <SC.ArrowIconWrapper>
          {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </SC.ArrowIconWrapper>
        {children}
      </SC.TriggerButton>
    </>
  );
};

export default Trigger;
