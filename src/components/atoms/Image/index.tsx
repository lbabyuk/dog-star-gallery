import { Box } from '@mui/material';
import { ElementType, ReactNode } from 'react';

type ImageProps = {
  id?: string;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  sx?: object;
  loading?: string;
  children?: ReactNode;
  component?: ElementType;
};

export const CustomImage = ({
  id,
  src,
  alt = '',
  width,
  height,
  sx,
  children,
  component = 'img',
  loading
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
      loading={loading}
    >
      {children}
    </Box>
  );
};
