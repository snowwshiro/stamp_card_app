import type { Meta, StoryObj } from '@storybook/react'

import { Svg } from './Svg'

const meta = {
  component: Svg,
} satisfies Meta<typeof Svg>

export default meta
type Story = StoryObj<typeof meta>

export const Flower: Story = {
  args: {
    name: 'flower',
  },
}
