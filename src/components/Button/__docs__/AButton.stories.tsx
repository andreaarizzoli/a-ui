import type {Meta, StoryObj} from "@storybook/react";
import AButton from "../AButton";

const meta: Meta<typeof AButton> = {
  title: "AButton",
  component: AButton,
};

export default meta;
type Story = StoryObj<typeof AButton>;

export const Primary: Story = {
  args: {
    text: "AButton",
    primary: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("AButton"),
  },
};

export const Secondary: Story = {
  args: {
    text: "Button",
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
