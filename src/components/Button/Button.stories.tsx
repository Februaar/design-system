import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Design-system/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
    },
    variant: {
      options: ["primary", "contained", "outlined"],
    },
    color: {
      control: { type: "radio" },
      options: ["serenity", "roseQuartz", "gray"],
    },
  },
};

export default meta;

export const PrimaryButton: StoryObj<ButtonProps> = {
  args: {
    size: "md",
    color: "gray",
  },
  render: (args) => {
    return (
      <>
        <Button
          size={args.size}
          variant="primary"
          color={args.color}
          _hover={{ color: "#fff", backgroundColor: "#f7cac9" }}
        >
          마우스를 올려보세요
        </Button>
      </>
    );
  },
};

export const ContainedButton: StoryObj<ButtonProps> = {
  args: {
    size: "md",
    color: "serenity",
  },
  render: (args) => {
    return (
      <>
        <Button
          size={args.size}
          variant="contained"
          color={args.color}
          _hover={{ color: "#fff", backgroundColor: "#f7cac9" }}
        >
          마우스를 올려보세요
        </Button>
      </>
    );
  },
};

export const OutlinedButton: StoryObj<ButtonProps> = {
  args: {
    color: "roseQuartz",
  },
  render: (args) => {
    return (
      <>
        <Button
          size="md"
          variant="outlined"
          color={args.color}
          _focus={{ borderColor: "#92a8d1" }}
        >
          버튼을 클릭해보세요
        </Button>
      </>
    );
  },
};
