import type { Meta, StoryObj } from '@storybook/react';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { CustomButton } from '../../components/atoms';
import { PowIcon, YellowArrowIcon } from '../../components/atoms/Icons';

const meta = {
  title: 'Stories/Button',
  component: CustomButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    endIcon: { control: false },
    startIcon: { control: false }
  }
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const withIconProps = {
  endIcon: <YellowArrowIcon data-testid="end-icon" />
};

export const WithIconContainedPrimary: Story = {
  args: {
    children: 'Learn more',
    variant: 'containedPrimary',
    ...withIconProps
  }
};

export const WithIconsContainedPrimary: Story = {
  args: {
    children: 'Show Related',
    variant: 'containedPrimary',
    startIcon: <PowIcon data-testid="start-icon" />,
    ...withIconProps
  }
};

export const WithIconOutlinedPrimary: Story = {
  args: {
    children: 'Back to Breeds',
    variant: 'outlinedPrimary',
    ...withIconProps
  }
};

export const WithIconTextPrimary: Story = {
  args: {
    children: 'Load More',
    variant: 'textPrimary',
    ...withIconProps
  }
};

export const Text: Story = {
  args: {
    children: 'Delete',
    variant: 'textSecondary'
  }
};

export const IconButtonP: Story = {
  args: {
    variant: 'textSecondary',
    children: (
      <ArrowCircleUpOutlinedIcon
        sx={{ color: theme => theme.palette.primary.main }}
      />
    )
  }
};
