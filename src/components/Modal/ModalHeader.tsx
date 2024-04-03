import { PropsWithChildren } from "react";
import { Header } from "./Modal.styles";

const ModalHeader = ({ children }: PropsWithChildren) => {
  return <Header>{children}</Header>;
};

export default ModalHeader;
