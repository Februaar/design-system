import { createContext } from "react";

export interface SelectContextType {
  isOpen: boolean;
  openSelect: () => void;
  closeSelect: () => void;
  option: string;
  setOption: (value: string) => void;
}

const initialSelectContext: SelectContextType = {
  isOpen: false,
  openSelect: () => {},
  closeSelect: () => {},
  option: "",
  setOption: () => {},
};

export const SelectContext =
  createContext<SelectContextType>(initialSelectContext);
