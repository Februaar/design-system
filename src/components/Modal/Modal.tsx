import { PropsWithChildren } from "react";
import { ModalContext } from "./Modal.context";
import * as SC from "./Modal.styles";
import ModalBackdrop from "./ModalBackdrop";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalContent = ({ children }: PropsWithChildren) => {
  return <SC.Content>{children}</SC.Content>;
};

export const ModalHeader = ({ children }: PropsWithChildren) => {
  return <SC.Header>{children}</SC.Header>;
};

export const ModalBody = ({ children }: PropsWithChildren) => {
  return <SC.Body>{children}</SC.Body>;
};

export const ModalFooter = ({ children }: PropsWithChildren) => {
  return <SC.Footer>{children}</SC.Footer>;
};

const Modal = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      {isOpen ? <>{children}</> : null}
    </ModalContext.Provider>
  );
};

export default Modal;

Modal.Backdrop = ModalBackdrop;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
