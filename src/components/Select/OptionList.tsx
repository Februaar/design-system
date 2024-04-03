import { PropsWithChildren, useContext } from "react";
import * as SC from "./Select.styles";
import { SelectContext } from "./Select.context";

const OptionList = ({ children }: PropsWithChildren) => {
  const { isOpen } = useContext(SelectContext);

  return isOpen ? <SC.DropDown>{children}</SC.DropDown> : null;
};

export default OptionList;
