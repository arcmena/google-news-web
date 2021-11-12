import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Paragraph } from './Paragraph'

export default {
  title: 'Paragraph',
  component: Paragraph
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = args => (
  <Paragraph {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  as: 'p'
}
