import {
  HeartIcon,
  LikeIcon,
  DislikeIcon
} from '../../../components/atoms/Icons';
import {
  BUTTON_STYLE,
  VOTES_VALUE,
  ICON_STYLE
} from '../../../constants/votesData';

export const votesButtonData = (
  votesImageId: string,
  handleLikeClick: (id: string, value: number) => () => void
) => {
  return [
    {
      key: 'HEART',
      sx: { ...BUTTON_STYLE, left: '50%', transform: 'translateX(-50%)' },
      onclick: handleLikeClick(votesImageId, VOTES_VALUE.HEART),
      icon: <HeartIcon sx={ICON_STYLE} />
    },
    {
      key: 'LIKE',
      sx: { ...BUTTON_STYLE, left: '10px' },
      onclick: handleLikeClick(votesImageId, VOTES_VALUE.LIKE),
      icon: <LikeIcon sx={ICON_STYLE} />
    },
    {
      key: 'DISLIKE',
      sx: { ...BUTTON_STYLE, right: '-10px' },
      onclick: handleLikeClick(votesImageId, VOTES_VALUE.DISLIKE),
      icon: <DislikeIcon sx={ICON_STYLE} />
    }
  ];
};
