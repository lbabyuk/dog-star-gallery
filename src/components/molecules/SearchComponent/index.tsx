/* eslint-disable react/jsx-props-no-spreading */
import { FC, ChangeEvent } from 'react';
import {
  Divider,
  InputBase,
  Paper,
  PaperProps,
  styled,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

type InputProps = {
  handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
  handleClearInput: () => void;
};

interface StyledPaperProps extends PaperProps {
  component?: React.ElementType;
}

export const StyledPaper = styled((props: StyledPaperProps) => (
  <Paper {...props} />
))(({ theme }) => ({
  padding: '4px 10px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '500px'
  },
  [theme.breakpoints.up('lg')]: {
    width: '500px'
  },
  borderRadius: 4,
  borderColor: theme.palette.grey[500],
  border: `1px solid ${theme.palette.grey[800]}`,
  boxShadow: `3px 3px 0 0 ${theme.palette.grey[900]}`,
  '&:hover': {
    boxShadow: `3px 3px 0px 0 ${theme.palette.action.hover}`
  },
  '&:focused': {
    boxShadow: `3px 3px 0px 0 ${theme.palette.action.selected}`
  }
}));

export const SearchComponent: FC<InputProps> = ({
  handleChangeInput,
  searchQuery,
  handleClearInput
}) => (
  <StyledPaper component="form">
    <SearchIcon
      sx={{
        fontSize: { xs: 20, sm: 25 },
        color: theme => theme.palette.grey[500],
        marginLeft: 1
      }}
    />
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    <InputBase
      type="text"
      name="searchInput"
      fullWidth
      value={searchQuery}
      onChange={handleChangeInput}
      placeholder="Search dog by name..."
    />
    {searchQuery ? (
      <IconButton onClick={handleClearInput}>
        <ClearIcon
          sx={{
            fontSize: { xs: 20, sm: 18 },
            color: theme => theme.palette.grey[500]
          }}
        />
      </IconButton>
    ) : null}
  </StyledPaper>
);
