import { LiHTMLAttributes, PropsWithChildren, useContext } from "react";
import * as SC from "./Select.styles";
import { SelectContext } from "./Select.context";

export const SelectLabel = ({ children }: PropsWithChildren) => {
  return <SC.OptionLabel>{children}</SC.OptionLabel>;
};

interface OptionProps extends LiHTMLAttributes<HTMLLIElement> {
  value: string;
}

const SelectOption = ({
  value,
  children,
  ...props
}: PropsWithChildren<OptionProps>) => {
  const { setOption } = useContext(SelectContext);

  const handleOption = () => {
    setOption(value);
  };

  return (
    <SC.OptionItem role="option" onMouseDown={handleOption} {...props}>
      {children}
    </SC.OptionItem>
  );
};

export default SelectOption;
