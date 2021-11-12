import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Subtitle } from './Subtitle'

export default {
  title: 'Subtitle',
  component: Subtitle
} as ComponentMeta<typeof Subtitle>

const Template: ComponentStory<typeof Subtitle> = args => <Subtitle {...args} />

export const Small = Template.bind({})
Small.args = {
  children: 'Subtitle SM',
  as: 'h6'
}
