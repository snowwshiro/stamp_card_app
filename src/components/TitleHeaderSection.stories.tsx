import type { Meta, StoryObj } from '@storybook/react'

import { TitleHeaderSection } from './TitleHeaderSection'

const meta = {
  component: TitleHeaderSection,
} satisfies Meta<typeof TitleHeaderSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
