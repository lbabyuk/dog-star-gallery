import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { YellowArrowIcon } from '../../../components/atoms/Icons';
import { CustomImage } from '../../../components/atoms/Image';
import { CustomButton } from '../../../components/atoms/Button';

export type BreedListContentProps = {
  filteredBreed: {
    id: number;
    name: string;
    temperament: string;
    image: { id: string; url: string };
  };
};

export const BreedsListContent = ({ filteredBreed }: BreedListContentProps) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(`/breeds/${filteredBreed.id}`)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: theme => `1px solid ${theme.palette.grey[800]}`,
        padding: '16px',
        borderRadius: '8px',
        boxShadow: theme => `6px 6px 0 0  ${theme.palette.grey[900]}`,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: theme => `6px 6px 8px 0 ${theme.palette.action.hover}`
        }
      }}
    >
      <CustomImage
        component="img"
        sx={{
          width: '100%',
          aspectRatio: 1,
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '16px'
        }}
        src={filteredBreed.image.url}
        alt={filteredBreed.name}
        loading="lazy"
      />
      <Typography variant="h6">{filteredBreed.name}</Typography>

      <Typography
        variant="body1"
        sx={{
          color: theme => theme.palette.text.primary,
          marginBottom: '16px'
        }}
      >
        Temperament:{' '}
        <Typography
          component="span"
          sx={{
            color: theme => theme.palette.grey[700],
            fontSize: '1.2rem'
          }}
        >
          {filteredBreed.temperament
            ? filteredBreed.temperament
            : 'Playful, Adventures, Curious'}
        </Typography>
      </Typography>

      <Box>
        <CustomButton
          endIcon={<YellowArrowIcon />}
          onClick={() => navigate(`/breeds/${filteredBreed.id}`)}
          sx={theme => ({
            padding: '8px 16px',
            borderRadius: '6px',
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.action.selected,
            fontWeight: 400,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
              boxShadow: `2px 2px 0 0 ${theme.palette.grey[900]}`,
              color: theme.palette.grey[600]
            }
          })}
        >
          Learn More
        </CustomButton>
      </Box>
    </Box>
  );
};
