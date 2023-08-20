import type { Meta, StoryObj } from '@storybook/react'

import { CalendarBody } from './CalendarBody'

import dayjs from 'dayjs'

import { createCalendarArray } from '@/utils/createCalendarArray'

const calendarArray = createCalendarArray()

const meta = {
  component: CalendarBody,
} satisfies Meta<typeof CalendarBody>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    calendarArray: calendarArray,
    month: dayjs().format('M'),
  },
}
