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
          <Select.Trigger />
          <Select.OptionList>
            <Select.Option value="option 1">option 1</Select.Option>
            <Select.Option value="option 2">option 2</Select.Option>
            <Select.Option value="option 3">option 3</Select.Option>
          </Select.OptionList>
        </Select>
      </>
    );
  },
};
