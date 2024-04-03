import { PropsWithChildren } from "react";
import { ModalContext } from "./Modal.context";
import ModalBackdrop from "./ModalBackdrop";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
