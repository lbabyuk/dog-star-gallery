import { JSX } from 'react';
import {
  DislikeIcon,
  LikeIcon,
  HeartIcon
} from '../../../components/atoms/Icons';

export const voteIconData: Record<number, JSX.Element> = {
  0: <HeartIcon />,
  1: <LikeIcon />,
  2: <DislikeIcon />
};

export const voteMessageData: Record<number, string> = {
  0: 'you love this photo',
  1: 'you like this photo',
  2: 'you dislike this photo'
};
export const getVoteFeedback = (value: number) => ({
  voteIcon: voteIconData[value] || voteIconData[2],
  voteMessage: voteMessageData[value] || 'you dislike this photo'
});
