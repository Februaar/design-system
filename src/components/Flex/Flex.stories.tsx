import { Meta, StoryObj } from "@storybook/react";
import { Item } from "./Flex.styles";
import Flex, { FlexProps } from "./Flex";

const meta: Meta<FlexProps> = {
  title: "Design-system/Flex",
  component: Flex,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: {
      control: { type: "radio" },
      options: ["row", "column"],
    },
    alignItems: {
      control: { type: "select" },
      options: [
        "flex-start",
        "center",
        "space-between",
        "space-around",
        "flex-end",
      ],
    },
    justifyContent: {
      control: { type: "select" },
      options: [
        "flex-start",
        "center",
        "space-between",
        "space-around",
        "flex-end",
      ],
    },
  },
};

export default meta;

export const RowFlex: StoryObj<FlexProps> = {
  args: {
    width: "100%",
    height: "200px",
    direction: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 15,
  },
  render: (args) => {
    return (
      <Flex {...args}>
        <Item />
        <Item />
        <Item />
      </Flex>
    );
  },
};
