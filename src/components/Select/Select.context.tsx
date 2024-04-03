import { createContext, PropsWithChildren, useState } from "react";

export interface SelectContextType {
  isOpen: boolean;
  option: string;
  setIsOpen: (isOpen: boolean) => void;
  setOption: (option: string) => void;
}

const initialSelectContext: SelectContextType = {
  isOpen: false,
  option: "",
  setIsOpen: () => {},
  setOption: () => {},
};

export const SelectContext =
  createContext<SelectContextType>(initialSelectContext);

const SelectProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [option, setOption] = useState<string>("");

  return (
    <SelectContext.Provider value={{ isOpen, option, setIsOpen, setOption }}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectProvider;
