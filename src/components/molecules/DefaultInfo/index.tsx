import { ReactNode } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { CustomButton } from '../../atoms';
import { YellowArrowIcon } from '../../atoms/Icons';

type DefaultInfoProps = {
  title: string;
  btnText?: string;
  onClick?: () => void;
  icon?: ReactNode;
};
export const DefaultInfo = ({
  icon,
  title,
  btnText,
  onClick
}: DefaultInfoProps) => {
  return (
    <Container>
      <Box
        sx={{
          textAlign: 'center',
          mt: 4,
          height: 'auto',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h2" align="center" m={1} p={1}>
          {title}
        </Typography>

        <CustomButton
          onClick={onClick}
          variant="textPrimary"
          endIcon={icon && <YellowArrowIcon />}
        >
          {btnText}
        </CustomButton>
      </Box>
    </Container>
  );
};
