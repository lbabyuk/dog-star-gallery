import { FC } from 'react';
import { ButtonGroup, Stack, styled } from '@mui/material';
import Button from '../../atoms/Button';
import { SortDownIcon } from '../../atoms/Icons/SortDownIcon';
import { SortUpIcon } from '../../atoms/Icons/SortUpIcon';
import SortedTypography from './SortedTopography';
import { SortRandomIcon } from '../../atoms/Icons/SortRandomIcon';

type Ordered = {
  ordered: (arg: string) => void;
};

const StyledButton = styled(Button)(({ theme: { palette } }) => ({
  '&:focus': {
    outline: 'none'
  },
  '&:focus svg': {
    outline: 'none',
    fill: palette.warning.main
  },
  '&:focus-visible svg': {
    outline: 'none',
    fill: palette.warning.main
  }
}));

const SortedComponent: FC<Ordered> = ({ ordered }) => (
  <Stack
    alignItems="center"
    direction="row"
    justifyContent="center"
    spacing={1}
  >
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0.5}
    >
      <SortedTypography>Sort by: </SortedTypography>
    </Stack>
    <ButtonGroup variant="text">
      <StyledButton onClick={() => ordered('RENDOM')}>
        <SortRandomIcon />
      </StyledButton>
      <StyledButton onClick={() => ordered('DESC')}>
        <SortDownIcon />
      </StyledButton>
      <StyledButton onClick={() => ordered('ASC')}>
        <SortUpIcon />
      </StyledButton>
    </ButtonGroup>
  </Stack>
);

export default SortedComponent;
