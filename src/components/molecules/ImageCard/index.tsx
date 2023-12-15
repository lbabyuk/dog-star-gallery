import {
  Card,
  IconButton,
  styled,
  Box,
  CardActions,
  CardMedia
} from '@mui/material';
import React, { FC, PropsWithChildren, useState } from 'react';
import YellowBorderHeartIcon from '../../atoms/Icons/YellowBorderHeartIcon';
import BlackBorderHeartIcon from '../../atoms/Icons/BlackBorderHeartIcon';

type HeartIconProps = {
  state: 'active' | 'default';
};

type CardProps = {
  state: 'active' | 'default';
  image?: string;
};

export const StyledCard = styled(Card)<CardProps>(({ theme: { palette } }) => ({
  position: 'relative',
  maxWidth: 372,
  height: 408,
  border: 1,
  borderRadius: 10,
  boxShadow: `6px 6px 4px ${palette.grey[600]}`,
  '&:hover': {
    boxShadow: `6px 6px 4px ${palette.primary.main}}`
  }
}));

export const CustomCardIcon: FC<PropsWithChildren<HeartIconProps>> = ({
  state
}) => {
  if (state === 'active') {
    return <YellowBorderHeartIcon />;
  }
  if (state === 'default') {
    return <BlackBorderHeartIcon />;
  }

  throw new Error(`Invalid state: ${state}`);
};

export const CustomCard: FC<CardProps> = ({ state, image }) => (
  <Box flex={4} p={2}>
    <StyledCard state={state} image={image}>
      <CardMedia
        component="img"
        height="408px"
        width="372px"
        image={image}
        alt="dog"
        sx={{
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10
        }}
      />
      <IconButton
        aria-label="add to favorite"
        style={{
          position: 'absolute',
          top: 10,
          right: 30
        }}
      >
        <CustomCardIcon state={state} />
      </IconButton>
    </StyledCard>
  </Box>
);
