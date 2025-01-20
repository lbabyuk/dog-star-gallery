import { CustomImage } from '../../../../components/atoms';

export const RelatedImage = ({
  item
}: {
  item: { id: string; url: string };
}) => <CustomImage key={item.id} src={item.url} alt="Related Dog" />;
