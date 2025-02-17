import { ReactNode } from 'react';
import { Container, Box, Typography, styled } from '@mui/material';
import {
  CustomButton,
  MotionTransitionWrapper,
  RightArrowIcon
} from '../../atoms';

type DefaultInfoProps = {
  title: string;
  btnText?: string;
  onClick?: () => void;
  icon?: ReactNode;
};

export const StyledBox = styled(Box)(() => ({
  textAlign: 'center',
  marginTop: 4,
  height: 'auto',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const DefaultInfo = ({
  icon,
  title,
  btnText,
  onClick
}: DefaultInfoProps) => (
  <Container>
    <MotionTransitionWrapper>
      <StyledBox>
        <Typography variant="h2" align="center" m={1} p={1}>
          {title}
        </Typography>

        <CustomButton
          onClick={onClick}
          variant="textPrimary"
          endIcon={icon && <RightArrowIcon />}
        >
          {btnText}
        </CustomButton>
      </StyledBox>
    </MotionTransitionWrapper>
  </Container>
);
