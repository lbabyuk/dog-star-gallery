import type { Preview } from '@storybook/react';
import React from 'react';
import { DogAppThemeProvider } from '../src/theme';

const preview: Preview = {
  decorators: [
    Story => (
      <DogAppThemeProvider>
        <Story />
      </DogAppThemeProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
