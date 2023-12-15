import { FC } from 'react';

type ImageProps = {
  id?: string;
  src: string;
  alt: string;
  width?: string;
  height?: string;
  sx?: object;
  style?: object;
  className?: string;
  onClick?: () => void;
};

const Image: FC<ImageProps> = ({ alt, src, ...rest }) => (
  <img src={src} alt={alt} {...rest} />
);

export default Image;
