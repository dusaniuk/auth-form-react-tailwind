import { StoryObj } from "@storybook/react";
import { EyeClosedIcon } from "./EyeClosedIcon";
import { EyeIcon } from "./EyeIcon";
import { StarIcon } from "./StarIcon";
import { Text } from "@ui/components/Text";

const IconsMap = {
  Eye: EyeIcon,
  "Eye Closed": EyeClosedIcon,
  "Blinking Star": StarIcon,
};

const meta = {
  title: "ui/icons",
};

type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  render: () => (
    <div className="grid gap-4 grid-cols-8">
      {Object.entries(IconsMap).map(([name, Icon]) => (
        <div className="flex flex-col items-center" key={name}>
          <div className="min-h-10">
            <Icon />
          </div>
          <Text>{name}</Text>
        </div>
      ))}
    </div>
  ),
};

export default meta;
