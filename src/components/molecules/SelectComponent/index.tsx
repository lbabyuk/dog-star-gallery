import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Stack
} from '@mui/material';
import { IMAGE_TYPE_DATA } from '../../../constants/imageTypeData';

type SelectComponentProps = {
  imageType: string;
  onHandleImageTypeChange: (event: SelectChangeEvent) => void;
};

export const SelectComponent = ({
  imageType,
  onHandleImageTypeChange
}: SelectComponentProps) => (
  <Stack
    alignItems="center"
    sx={{
      minWidth: '250px',
      marginBottom: { xs: '20px', md: '0' }
    }}
  >
    <FormControl sx={{ width: '100%' }}>
      <InputLabel
        id="select-label"
        sx={{
          color: theme => theme.palette.text.primary
        }}
      >
        Image Type
      </InputLabel>
      <Select
        labelId="select-label"
        value={imageType}
        name="select"
        label="Image Format"
        onChange={onHandleImageTypeChange}
        sx={theme => ({
          borderRadius: '10px',
          height: {
            xs: '40px',
            md: '45px'
          },
          width: { sx: '100%', md: '400px' },
          boxShadow: `2px 2px 0 0 ${theme.palette.grey[900]}`,
          '&:hover': {
            boxShadow: `2px 2px 0px 0 ${theme.palette.action.hover}`
          },
          '&:focused': {
            boxShadow: `2px 2px 0px 0 ${theme.palette.action.selected}`
          }
        })}
      >
        {IMAGE_TYPE_DATA.map(item => (
          <MenuItem
            value={item.value}
            sx={{
              fontSize: '18px',
              ':hover': { color: theme => theme.palette.grey[600] }
            }}
            key={item.value}
          >
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Stack>
);
