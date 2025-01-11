import { ButtonGroup, Typography } from '@mui/material';
import { SortDownIcon, SortUpIcon } from '../../../components/atoms/Icons';
import { StyledButton } from '../BreedsStyled';

type SortBreedProps = {
  onHandleSortDown: () => void;
  onHandleSortUp: () => void;
};

const ORDERED_ICON_SIZE = { xs: '40px', lg: '48px' };

export const SortBreed = ({
  onHandleSortDown,
  onHandleSortUp
}: SortBreedProps) => (
  <ButtonGroup
    variant="text"
    aria-label="text button group"
    sx={{
      marginTop: { xs: '20px', md: 0, lg: 0 },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Typography
      variant="body1"
      color="text.primary"
      sx={{ marginRight: '5px' }}
    >
      Sort by:
    </Typography>
    <StyledButton onClick={onHandleSortDown} variant="textSecondary">
      <SortDownIcon sx={{ width: ORDERED_ICON_SIZE }} />
    </StyledButton>
    <StyledButton onClick={onHandleSortUp} variant="textSecondary">
      <SortUpIcon sx={{ width: ORDERED_ICON_SIZE }} />
    </StyledButton>
  </ButtonGroup>
);
