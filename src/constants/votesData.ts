import { CSSProperties } from 'react';

export const ICON_STYLE = { width: '45px', height: '45px' };

export const VOTES_VALUE = {
  HEART: 0,
  LIKE: 1,
  DISLIKE: -1
} as const;

export const BUTTON_STYLE = {
  margin: '8px',
  '&:focus': { outline: 'none' },
  position: 'absolute' as CSSProperties['position'],
  bottom: '10px'
};
