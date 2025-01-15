import { Theme } from '@mui/material';
import { CustomImage } from '../../../components/atoms/CustomImage';

type VotesImageProps = {
  isActive?: boolean;
  src: string;
  alt: string;
  sx?: object;
};

export const VotesImage = ({ isActive, src, alt, sx }: VotesImageProps) => {
  return (
    <CustomImage
      src={src}
      alt={alt}
      sx={{
        position: 'absolute',
        cursor: 'pointer',
        filter: isActive ? 'none' : 'grayscale(100%)',
        boxShadow: (theme: Theme) =>
          isActive && `6px 6px 8px 0 ${theme.palette.action.hover}`,
        ...sx
      }}
    />
  );
};
