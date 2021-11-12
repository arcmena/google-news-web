import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Heading } from './Heading'

export default {
  title: 'Heading',
  component: Heading
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />

export const Small = Template.bind({})
Small.args = {
  children: 'Heading SM',
  as: 'h3'
}
