import { CustomImage } from '../../../components/atoms/Image';

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
      loading="lazy"
      sx={{
        position: 'absolute',
        borderRadius: '20px',
        display: 'block',
        width: '100%',
        height: '100%',
        boxShadow: `4px 4px 0 0 #212121`,
        cursor: 'pointer',
        filter: isActive ? 'none' : 'grayscale(100%)',
        ...sx
      }}
    />
  );
};
