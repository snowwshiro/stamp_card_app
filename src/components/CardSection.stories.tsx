import type { Meta, StoryObj } from '@storybook/react'

import { CardSection } from './CardSection'

import dayjs from 'dayjs'

import { createCalendarArray } from '@/utils/createCalendarArray'

const calendarArray = createCalendarArray()

const meta = {
  component: CardSection,
} satisfies Meta<typeof CardSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    calendarArray: calendarArray,
    month: dayjs().format('M'),
  },
}
