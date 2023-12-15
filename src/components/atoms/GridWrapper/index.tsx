import { FC } from 'react';
import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';

export interface GridProps extends MuiGridProps {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  image?: string;
}

const GridWrapper: FC<MuiGridProps> = ({ children, ...rest }) => (
  <MuiGrid {...rest}>{children}</MuiGrid>
);

export default GridWrapper;
