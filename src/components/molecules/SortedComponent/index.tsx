import { FC } from 'react';
import { ButtonGroup } from '@mui/material';
import Button from '../../atoms/Button';
import { SortDownIcon } from '../../atoms/Icons/SortDownIcon';
import { SortUpIcon } from '../../atoms/Icons/SortUpIcon';
import SortedTypography from './SortedTopography';

type Ordered = {
  ordered: (arg: string) => void;
};

const SortedComponent: FC<Ordered> = ({ ordered }) => (
  <ButtonGroup variant="text" aria-label="outlined button group">
    <SortedTypography>Sort by: </SortedTypography>
    <Button onClick={() => ordered('DESC')}>
      <SortDownIcon />
    </Button>
    <Button onClick={() => ordered('ASC')}>
      <SortUpIcon />
    </Button>
  </ButtonGroup>
);

export default SortedComponent;
