import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CardContent } from './CardContent'

export default {
  title: 'CardContent',
  component: CardContent
} as ComponentMeta<typeof CardContent>

const Template: ComponentStory<typeof CardContent> = args => (
  <CardContent {...args} />
)

export const DefaultData = Template.bind({})
DefaultData.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  paragraph: 'Paragraph',
  buttonLabel: 'Button',
  buttonAction: () => console.log('clicked')
}
