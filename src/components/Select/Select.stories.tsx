import { Meta, StoryObj } from "@storybook/react";
import Select, { SelectProps } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Design-system/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
    },
  },
  decorators: [],
};

export default meta;

export const ExampleSelect: StoryObj<SelectProps> = {
  args: {
    size: "md",
  },
  render: (args) => {
    return (
      <>
        <Select {...args}>
          <Select.Trigger placeholder="pick your animal" />
          <Select.OptionList>
            <Select.Label>Animals</Select.Label>
            <Select.Option value="tiger">Tiger</Select.Option>
            <Select.Option value="cat">Cat</Select.Option>
            <Select.Option value="dog">Dog</Select.Option>
          </Select.OptionList>
        </Select>
      </>
    );
  },
};
