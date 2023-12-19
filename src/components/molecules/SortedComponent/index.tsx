import { ButtonGroup, Typography, styled } from '@mui/material';
import Button from '../../atoms/Button';
import { SortDownIcon } from '../../atoms/Icons/SortDownIcon';
import { SortUpIcon } from '../../atoms/Icons/SortUpIcon';

const StyledTypography = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[500],
  fontSize: 20,
  margin: 20
}));

const SortedComponent = ({ ordered }: any) => (
  <ButtonGroup variant="text" aria-label="outlined button group">
    <StyledTypography>Sort by: </StyledTypography>
    <Button onClick={() => ordered('DESC')}>
      <SortDownIcon />
    </Button>
    <Button onClick={() => ordered('ASC')}>
      <SortUpIcon />
    </Button>
  </ButtonGroup>
);

export default SortedComponent;
