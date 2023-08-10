import '../src/app/globals.css'

import type { Preview } from '@storybook/react'

import { Toaster } from 'react-hot-toast'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withToaster = (Story, context) => {
  return (
    <>
      <Story {...context} />
      <Toaster />
    </>
  )
}

const preview: Preview = {
  decorators: [withToaster],
}

export default preview
