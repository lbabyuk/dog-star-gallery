import { FC } from 'react';
import { ButtonGroup, Stack, Typography } from '@mui/material';
import Button from '../../atoms/Button';
import { SortDownIcon } from '../../atoms/Icons/SortDownIcon';
import { SortUpIcon } from '../../atoms/Icons/SortUpIcon';
import SortedTypography from './SortedTopography';
import { SortRandomIcon } from '../../atoms/Icons/SortRandomIcon';

type Ordered = {
  ordered: (arg: string) => void;
  order: string;
};

const SortedComponent: FC<Ordered> = ({ ordered, order }) => (
  <Stack
    alignItems="center"
    direction="row"
    justifyContent="center"
    spacing={2}
  >
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <SortedTypography>Sort by: </SortedTypography>
      <Typography
        sx={{ color: theme => theme.palette.grey[700], fontSize: '20px' }}
      >
        {order}
      </Typography>{' '}
    </Stack>
    <ButtonGroup variant="text" aria-label="Basic button group">
      <Button onClick={() => ordered('RENDOM')}>
        <SortRandomIcon />
      </Button>
      <Button onClick={() => ordered('DESC')}>
        <SortDownIcon />
      </Button>
      <Button onClick={() => ordered('ASC')}>
        <SortUpIcon />
      </Button>
    </ButtonGroup>
  </Stack>
);

export default SortedComponent;
