export type GalleryItemProps = {
  id: string;
  url: string;
  breeds: [
    {
      id: number;
      name: string;
      breed_group: string;
    }
  ];
};
