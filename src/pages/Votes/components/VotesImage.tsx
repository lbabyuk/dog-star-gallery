import { Theme } from '@mui/material';
import { CustomImage } from '../../../components/atoms';

type VotesImageProps = {
  isActive?: boolean;
  src: string;
  alt: string;
  sx?: object;
};

export const VotesImage = ({ isActive, src, alt, sx }: VotesImageProps) => (
  <CustomImage
    src={src}
    alt={alt}
    sx={{
      position: 'absolute',
      cursor: 'pointer',
      filter: isActive ? 'none' : 'grayscale(100%)',
      boxShadow: (theme: Theme) =>
        isActive && `3px 3px 0 0 ${theme.palette.grey[900]}`,
      ...sx
    }}
  />
);
