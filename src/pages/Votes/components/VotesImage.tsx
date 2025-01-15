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
        ...sx
      }}
    />
  );
};
