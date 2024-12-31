import { FC, ChangeEvent } from 'react';
import { InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type InputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  input: string;
};

const SearchComponent: FC<InputProps> = ({ onChange, input }) => (
  <Paper
    component="form"
    sx={{
      p: '4px 10px',
      display: 'flex',
      alignItems: 'center',
      width: { xs: '100%', md: '500px', lg: '500px' },
      borderRadius: 4,
      borderColor: theme => theme.palette.grey[500],
      boxShadow: theme => `4px 4px 0 0 ${theme.palette.grey[900]}`,
      '&:hover': {
        boxShadow: theme => `4px 4px 0 0 ${theme.palette.primary.main}`
      }
    }}
  >
    <InputBase
      type="text"
      value={input}
      onChange={onChange}
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search dog by breed"
    />

    <SearchIcon sx={{ fontSize: 26, color: 'gray', marginLeft: 1 }} />
  </Paper>
);

export default SearchComponent;
