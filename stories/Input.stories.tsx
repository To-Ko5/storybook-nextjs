import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withKnobs, text, radios, select } from '@storybook/addon-knobs'
import { Input } from '../components/Input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: Input
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Input> = (args) => (
  <Input
    {...args}
    onFocus={() => {
      console.log('on focos')
    }}
  />
)

Template.argTypes = {
  color: { color: 'color' },
  borderColor: { color: 'color' },
  placeholder: { text: text('label', 'ボタン') }
}
