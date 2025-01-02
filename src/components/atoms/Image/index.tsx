import { Box } from '@mui/material';
import { ElementType, ReactNode } from 'react';

type ImageProps = {
  id?: string;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  sx?: object;
  children?: ReactNode;
  component?: ElementType;
};

export const Image = ({
  id,
  src,
  alt = '',
  width,
  height,
  sx,
  children,
  component = 'img'
}: ImageProps) => {
  return (
    <Box
      id={id}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sx={sx}
      component={component}
    >
      {children}
    </Box>
  );
};
