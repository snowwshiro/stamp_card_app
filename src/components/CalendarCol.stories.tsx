import type { Meta, StoryObj } from '@storybook/react'

import { CalendarCol } from './CalendarCol'

const meta = {
  component: CalendarCol,
} satisfies Meta<typeof CalendarCol>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    date: '2021-08-01',
    day: '1',
  },
}
