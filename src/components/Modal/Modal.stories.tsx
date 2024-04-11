import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";
import Button from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Design-system/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;

export const PrimaryModal: StoryObj<ModalProps> = {
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
      setIsOpen(true);
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    return (
      <>
        {isOpen ? null : (
          <Button
            onClick={handleOpen}
            size="sm"
            color="serenity"
            variant="contained"
          >
            열기
          </Button>
        )}
        <Modal isOpen={isOpen} onClose={handleClose}>
          <Modal.Backdrop />
          <Modal.Content>
            <Modal.Header>Modal 만들기</Modal.Header>
            <Modal.Body>
              모달 컴포넌트를 만들어 봅시다.
              <br />
              모달 컴포넌트를 만들어 봅시다.
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={handleClose}
                size="sm"
                color="serenity"
                variant="outlined"
              >
                취소
              </Button>
              <Button
                onClick={handleClose}
                size="sm"
                color="roseQuartz"
                variant="outlined"
              >
                확인
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};
