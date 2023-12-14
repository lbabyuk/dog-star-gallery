import { useNavigate, useParams } from 'react-router-dom';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button
} from '@mui/material';
import { useGetBreedsQuery } from '../services/breeds';
import LoadingStatus from '../components/atoms/LoadingStatus';

export const BreedItem = () => {
  const { breedId } = useParams();
  const { data: breeds, isLoading } = useGetBreedsQuery();
  const navigate = useNavigate();

  const breed = breeds?.find(item => item.id === Number(breedId));

  return (
    <>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <img src={breed?.image.url} alt={breed?.name} width="250px" />
      <Button onClick={() => navigate(`/breeds`)}>Back to Breeds</Button>
      <Grid item xs={4}>
        <List sx={{ width: '100%', maxWidth: 440 }}>
          <ListItem alignItems="flex-start">
            <ListItemText>
              <Typography
                component="h1"
                sx={{ fontSize: '1.65rem', m: 0, p: 0 }}
              >
                {breed?.name}
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText>
              <Typography>
                Weight:{' '}
                <span className="span">{breed?.weight.imperial} pounds</span>
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText>
              <Typography>
                Height:{' '}
                <span className="span">
                  {breed?.height.imperial} inches at the shoulder
                </span>
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText>
              <Typography>
                Life span:{' '}
                <span className="span">{breed?.life_span} years</span>
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText>
              <Typography>
                Bred for: <span className="span">{breed?.bred_for}</span>
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText>
              <Typography>
                Temperament: <span className="span">{breed?.temperament}</span>
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </>
  );
};
