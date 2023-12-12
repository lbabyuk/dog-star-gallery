import type { Meta, StoryObj } from '@storybook/react';
import { CustomComponent } from '.';

const meta = {
  title: 'Atoms/Custom Component',
  component: CustomComponent,
  argTypes: {
    variant: {
      options: ['contained', 'outlined'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof CustomComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'outlined',
    children: 'Button'
  }
};
