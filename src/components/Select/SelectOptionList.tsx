import { PropsWithChildren, useContext } from "react";
import * as SC from "./Select.styles";
import { SelectContext } from "./Select.context";

const SelectOptionList = ({ children }: PropsWithChildren) => {
  const { isOpen } = useContext(SelectContext);

  return isOpen ? <SC.DropDown>{children}</SC.DropDown> : null;
};

export default SelectOptionList;
