import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta = {
  title: "components/TextInput",
  component: TextInput,
  args: {
    type: "text",
    placeholder: "Type something...",
  },
  render: (args) => (
    <div className="flex flex-col p-8 bg-slate-200 max-w-[379px]">
      <TextInput {...args} />
    </div>
  ),
} as Meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
  },
};

export const Password: Story = {
  args: {
    type: "password",
  },
};

export default meta;
