import { FC, ChangeEvent } from 'react';
import { FormControl } from '@mui/material';
import BootstrapInput from './BootstrapInput';

type InputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  input: string;
};

// eslint-disable-next-line arrow-body-style
const SearchComponent: FC<InputProps> = ({ onChange, input }) => {
  return (
    <FormControl sx={{ m: 1, width: 500 }} variant="standard">
      <BootstrapInput
        id="demo-customized-textbox"
        type="text"
        placeholder="Search dog by breed"
        value={input}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default SearchComponent;
