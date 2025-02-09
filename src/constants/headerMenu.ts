import { HOME } from './routes';

export const headerMenu = [
  { title: 'Gallery', path: '' },
  {
    title: 'Images',
    path: HOME.IMAGES
  },
  {
    title: 'Breeds',
    path: HOME.BREEDS
  },
  {
    title: 'Votes',
    path: HOME.VOTES
  },
  {
    title: 'History',
    path: HOME.HISTORY
  }
];

export const ICON_SIZE = {
  xs: '30px',
  md: '35px'
};

export const ICON_STYLE = {
  display: 'flex',
  width: ICON_SIZE,
  height: ICON_SIZE,
  p: 0
};
