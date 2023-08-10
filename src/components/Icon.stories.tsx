import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from './Icon'

const meta = {
  component: Icon,
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'HiMinus',
    size: 40,
    color: 'gray-500',
  },
}
