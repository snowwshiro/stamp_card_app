import type { Meta, StoryObj } from '@storybook/react'

import { Stamp } from './Stamp'

const meta = {
  component: Stamp,
} satisfies Meta<typeof Stamp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    stamped: false,
  },
}
