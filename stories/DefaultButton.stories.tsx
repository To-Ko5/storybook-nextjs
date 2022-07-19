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
  <DefaultButton {...args} label={text('label', 'ボタン')} onClick={() => {}} />
)

export const Template2: ComponentStory<typeof DefaultButton> = (args) => (
  <DefaultButton
    {...args}
    label={radios('label', { a: 'ボタン', b: 'button', c: 'ぼたん' }, 'ボタン')}
    onClick={() => {}}
  />
)

Template2.argTypes = {
  backgroundColor: { color: 'color' },
  padding: {
    control: { type: 'range', min: 4, max: 40, step: 1 }
  }
}
