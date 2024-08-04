import type { Meta, StoryObj } from "@storybook/react";
import { StarIcon } from "./StarIcon";

const meta = {
  title: "ui/icons/StarIcon",
  component: StarIcon,
} satisfies Meta;

type Story = StoryObj<typeof meta>;

export const XS: Story = {
  args: {
    size: "xs",
  },
};

export const SM: Story = {
  args: {
    size: "sm",
  },
};

export const MD: Story = {
  args: {
    size: "md",
  },
};

export const LG: Story = {
  args: {
    size: "lg",
  },
};

export const TwoLG: Story = {
  args: {
    size: "2-lg",
  },
};

export default meta;
