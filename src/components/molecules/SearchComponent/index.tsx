import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const SearchComponent = () => {
  <Stack spacing={2} sx={{ width: 300 }}>
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={(breeds || []).map(breed => breed.name)}
      renderInput={params => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: 'search'
          }}
        />
      )}
    />
  </Stack>;
};

export default SearchComponent;
