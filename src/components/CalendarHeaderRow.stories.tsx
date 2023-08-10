import type { Meta, StoryObj } from '@storybook/react'

import { CalendarHeaderRow } from './CalendarHeaderRow'

const meta = {
  component: CalendarHeaderRow,
} satisfies Meta<typeof CalendarHeaderRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
