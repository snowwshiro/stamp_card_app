import type { Meta, StoryObj } from '@storybook/react'

import { CardSection } from './CardSection'

const meta = {
  component: CardSection,
} satisfies Meta<typeof CardSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
