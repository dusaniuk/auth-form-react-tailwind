import type { Meta, StoryObj } from "@storybook/react";
import { Text, type TextProps } from "./Text";

const meta = {
  title: "ui/components/Text",
  component: Text,
  args: {
    children: "Sign up",
  },
  argTypes: {
    size: {
      options: ["h1", "label"] satisfies TextProps["size"][],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "success", "error"] satisfies TextProps["color"][],
      control: { type: "radio" },
    },
  },
} satisfies Meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  name: "H1",
  args: {
    size: "h1",
    component: "h1",
    color: "primary",
  },
};

export const Label: Story = {
  args: {
    size: "label",
    component: "span",
    color: "primary",
  },
};

export default meta;
