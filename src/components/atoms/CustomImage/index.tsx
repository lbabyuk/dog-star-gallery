import { Box, Theme } from '@mui/material';
import { ElementType, ReactNode } from 'react';

type ImageProps = {
  id?: string;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  sx?: {};
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
  children
}: ImageProps) => {
  return (
    <Box
      component="img"
      loading="lazy"
      id={id}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sx={(theme: Theme) => ({
        display: 'block',
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        objectFit: 'cover',
        borderRadius: '20px',
        boxShadow: `6px 6px 0 0 ${theme.palette.grey[900]}`,
        '&:hover': {
          boxShadow: `6px 6px 8px 0 ${theme.palette.action.hover}`
        },
        ...sx
      })}
    >
      {children}
    </Box>
  );
};
