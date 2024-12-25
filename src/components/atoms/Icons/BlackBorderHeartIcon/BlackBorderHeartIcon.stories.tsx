import type { Meta, StoryObj } from '@storybook/react';
import BlackBorderHeartIcon from '.';

const meta = {
  title: 'Atoms/Icons/BlackBorderHeartIcon',
  component: BlackBorderHeartIcon,
  argTypes: {
    variant: {
      options: ['contained']
    }
  }
} satisfies Meta<typeof BlackBorderHeartIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Arrow: Story = {
  args: {
    variant: 'contained'
  }
};
