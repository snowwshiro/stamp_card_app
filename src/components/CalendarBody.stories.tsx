import type { Meta, StoryObj } from '@storybook/react'

import { CalendarBody } from './CalendarBody'

const meta = {
  component: CalendarBody,
} satisfies Meta<typeof CalendarBody>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
