import { createContext } from "react";

export interface ModalContextType {
  isOpen: boolean;
  onClose: () => void;
}

const initialModalContext: ModalContextType = {
  isOpen: false,
  onClose: () => {},
};

export const ModalContext =
  createContext<ModalContextType>(initialModalContext);
