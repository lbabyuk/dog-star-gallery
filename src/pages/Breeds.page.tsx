import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Container,
  Typography
} from '@mui/material';
import { useGetBreedsQuery } from '../services/breeds';
import LoadingStatus from '../components/atoms/LoadingStatus';
import YellowArrowIcon from '../components/atoms/Icons/YellowArrowIcon';

export const Breeds = () => {
  const { data: breeds, isLoading } = useGetBreedsQuery();
  const navigate = useNavigate();

  const renderBreeds = (breeds || []).map(breed => (
    <ImageListItem
      key={breed.id}
      sx={{ boxShadow: '8px 8px 5px #000', m: 2, borderRadius: '20px' }}
    >
      <img
        src={breed.image.url}
        alt={breed.name}
        style={{ borderRadius: '20px' }}
        loading="lazy"
      />
      <ImageListItemBar
        title={
          <Typography noWrap textAlign="left">
            {breed.name}
          </Typography>
        }
        actionIcon={
          <Button
            variant="text"
            endIcon={<YellowArrowIcon />}
            onClick={() => navigate(`/breeds/${breed.id}`)}
            sx={{
              color: '#FFF',
              m: 2
            }}
          >
            Learn More
          </Button>
        }
      />
    </ImageListItem>
  ));

  return (
    <Container>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <Box>
        <ImageList>{renderBreeds}</ImageList>
      </Box>
    </Container>
  );
};
