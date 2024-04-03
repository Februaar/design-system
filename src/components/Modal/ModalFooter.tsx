import { PropsWithChildren } from "react";
import { Footer } from "./Modal.styles";

const ModalFooter = ({ children }: PropsWithChildren) => {
  return <Footer>{children}</Footer>;
};

export default ModalFooter;
