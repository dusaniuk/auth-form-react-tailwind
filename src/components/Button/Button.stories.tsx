import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta = {
  title: "components/Button",
  component: Button,
  args: {
    children: "Sign up",
  },
} satisfies Meta;

type Story = StoryObj<typeof meta>;

const variants: ButtonProps["variant"][] = ["primary", "secondary"];
const fullWidths: ButtonProps["fullWidth"][] = [true, false];

export const Primary: Story = {
  args: {
    variant: "primary",
    fullWidth: true,
  },
  argTypes: {
    variant: {
      options: variants,
      control: { type: "radio" },
    },
    fullWidth: {
      options: fullWidths,
      control: { type: "boolean" },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    fullWidth: true,
  },
  argTypes: {
    ...Primary.argTypes,
  },
};

export default meta;
