import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import { DefaultButton } from "../components/DefalutButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DefaultButton",
  component: DefaultButton,
  decorators: [withKnobs],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DefaultButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DefaultButton> = (args) => (
  <DefaultButton label={text("label", "ボタン")} onClick={() => {}} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  label: "Button",
};
