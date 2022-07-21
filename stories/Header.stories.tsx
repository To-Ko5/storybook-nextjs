import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from '../components/Header'

export default {
  title: 'components/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Header>

export const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
)

Template.argTypes = {
  backgroundColor: { color: 'color' },
  padding: {
    control: { type: 'range', min: 4, max: 40, step: 1 }
  }
}
