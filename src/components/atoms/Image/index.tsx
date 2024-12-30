import { FC } from 'react';

type ImageProps = {
  id?: string;
  src: string;
  alt: string;
  width?: string;
  height?: string;
  style?: object;
  className?: string;
};

const Image: FC<ImageProps> = ({
  id,
  src,
  alt,
  width,
  height,
  style,
  className
}) => (
  <img
    id={id}
    src={src}
    alt={alt}
    width={width}
    height={height}
    style={style}
    className={className}
  />
);

export default Image;
