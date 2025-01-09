import { ButtonGroup, styled, Typography } from '@mui/material';
import { SortDownIcon, SortUpIcon } from '../../../components/atoms/Icons';
import { StyledButton } from '../BreedsStyled';

type SortBreedProps = {
  onHandleSortDown: () => void;
  onHandleSortUp: () => void;
};

const StyledTypography = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[500],
  textAlign: 'left',
  fontSize: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const SortBreed = ({
  onHandleSortDown,
  onHandleSortUp
}: SortBreedProps) => (
  <ButtonGroup
    variant="text"
    aria-label="text button group"
    sx={{ marginTop: { xs: '20px', md: 0, lg: 0 } }}
  >
    <StyledTypography variant="caption">Sort by:</StyledTypography>
    <StyledButton onClick={onHandleSortDown} variant="textSecondary">
      <SortDownIcon />
    </StyledButton>
    <StyledButton onClick={onHandleSortUp} variant="textSecondary">
      <SortUpIcon />
    </StyledButton>
  </ButtonGroup>
);
