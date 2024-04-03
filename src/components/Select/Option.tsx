import { PropsWithChildren, useContext } from "react";
import * as SC from "./Select.styles";
import { SelectContext } from "./Select.context";

interface OptionProps {
  value: string;
}

const Option = ({ value, children }: PropsWithChildren<OptionProps>) => {
  const { setOption, setIsOpen } = useContext(SelectContext);

  const handleOptionClick = () => {
    setOption(value);
    setIsOpen(false);
  };

  return (
    <SC.OptionItem value={value} onClick={handleOptionClick}>
      {children}
    </SC.OptionItem>
  );
};

export default Option;
