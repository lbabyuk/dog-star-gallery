import type { Meta, StoryObj } from '@storybook/react';
import BorderHeartIcon from '.';

const meta = {
  title: 'Atoms/Icons/BorderHeartIcon',
  component: BorderHeartIcon,
  argTypes: {
    variant: {
      options: ['contained']
    }
  }
} satisfies Meta<typeof BorderHeartIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Arrow: Story = {
  args: {
    variant: 'contained'
  }
};
