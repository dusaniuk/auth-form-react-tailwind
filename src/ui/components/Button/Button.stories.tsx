import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta = {
  title: "ui/components/Button",
  component: Button,
  args: {
    children: "Sign up",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"] satisfies ButtonProps["variant"][],
      control: { type: "radio" },
    },
    fullWidth: {
      options: [true, false] satisfies ButtonProps["fullWidth"][],
      control: { type: "boolean" },
    },
  },
} satisfies Meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    fullWidth: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    fullWidth: true,
  },
};

export default meta;
