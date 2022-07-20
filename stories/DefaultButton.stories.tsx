import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withKnobs, text, radios, select } from '@storybook/addon-knobs'

import { DefaultButton } from '../components/DefalutButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/DefaultButton',
  component: DefaultButton,
  decorators: [withKnobs]
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DefaultButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof DefaultButton> = (args) => (
  <DefaultButton {...args} onClick={() => {}} />
)

export const Template2: ComponentStory<typeof DefaultButton> = (args) => (
  <DefaultButton {...args} onClick={() => {}} />
)

Template.argTypes = {
  label: { control: 'text' }
}

Template2.argTypes = {
  label: { control: 'radio', options: ['ボタン', 'button', 'ぼたん'] },
  backgroundColor: { color: 'color' },
  padding: {
    control: { type: 'range', min: 4, max: 40, step: 1 }
  }
}
