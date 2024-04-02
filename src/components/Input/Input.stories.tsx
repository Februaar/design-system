import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Design-system/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
    },
    variant: {
      options: ["primary", "outlined"],
    },
    color: {
      control: { type: "radio" },
      options: ["serenity", "green"],
    },
  },
};

export default meta;

export const PrimaryInput: StoryObj<InputProps> = {
  args: {
    size: "md",
    color: "serenity",
  },
  render: (args) => {
    return (
      <>
        <Input size={args.size} variant="primary" color={args.color}></Input>
      </>
    );
  },
};

export const OutlinedInput: StoryObj<InputProps> = {
  args: {
    size: "md",
    color: "green",
  },
  render: (args) => {
    return (
      <>
        <Input size={args.size} variant="outlined" color={args.color}></Input>
      </>
    );
  },
};
