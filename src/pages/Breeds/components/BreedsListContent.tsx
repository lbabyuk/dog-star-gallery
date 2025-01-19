import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import {
  CustomButton,
  CardWrapper,
  CustomImage,
  YellowArrowIcon
} from '../../../components/atoms';

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
    <CardWrapper onClick={() => navigate(`/breeds/${filteredBreed.id}`)}>
      <CustomImage
        sx={{
          height: 'auto',
          borderRadius: '8px',
          marginBottom: '16px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        }}
        src={filteredBreed.image.url}
        alt={filteredBreed.name}
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
          variant="span"
          sx={{
            color: theme => theme.palette.grey[700]
          }}
        >
          {filteredBreed.temperament
            ? filteredBreed.temperament
            : 'Playful, Adventures, Curious'}
        </Typography>
      </Typography>

      <Box>
        <CustomButton
          variant="containedPrimary"
          endIcon={<YellowArrowIcon />}
          onClick={() => navigate(`/breeds/${filteredBreed.id}`)}
        >
          Learn More
        </CustomButton>
      </Box>
    </CardWrapper>
  );
};
