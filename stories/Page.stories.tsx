import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import Index from '../pages/index'

export default {
  title: 'Page/index',
  component: Index,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Index>

export const Template: ComponentStory<typeof Index> = (args) => (
  <Index {...args} />
)
