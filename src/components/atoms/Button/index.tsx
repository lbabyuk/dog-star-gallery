/* eslint-disable react/jsx-props-no-spreading */
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  children?: React.ReactNode;
  sx?: object;
  variant?:
    | 'containedPrimary'
    | 'textPrimary'
    | 'textSecondary'
    | 'outlinedPrimary';
}

export const CustomButton = ({
  children,
  sx,
  variant,
  ...rest
}: ButtonProps) => (
  <MuiButton {...rest} sx={sx} variant={variant}>
    {children}
  </MuiButton>
);
