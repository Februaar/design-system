import { PropsWithChildren } from "react";
import { Body } from "./Modal.styles";

const ModalBody = ({ children }: PropsWithChildren) => {
  return <Body>{children}</Body>;
};

export default ModalBody;
