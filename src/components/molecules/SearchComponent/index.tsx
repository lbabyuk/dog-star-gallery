/* eslint-disable react/jsx-props-no-spreading */
import { FC, ChangeEvent } from 'react';
import { InputBase, Paper, PaperProps, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type InputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  input: string;
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
  boxShadow: `4px 4px 0 0 ${theme.palette.grey[900]}`,
  '&:hover': {
    boxShadow: `4px 4px 0 0 ${theme.palette.primary.main}`
  }
}));

const SearchComponent: FC<InputProps> = ({ onChange, input }) => (
  <StyledPaper component="form">
    <InputBase
      type="text"
      value={input}
      onChange={onChange}
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search dog by breed"
    />

    <SearchIcon sx={{ fontSize: 26, color: 'gray', marginLeft: 1 }} />
  </StyledPaper>
);

export default SearchComponent;
