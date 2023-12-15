import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{children}</MuiButton>
);

export default Button;
