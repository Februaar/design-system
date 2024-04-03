import { PropsWithChildren } from "react";
import { Content } from "./Modal.styles";

const ModalContent = ({ children }: PropsWithChildren) => {
  return <Content>{children}</Content>;
};

export default ModalContent;
