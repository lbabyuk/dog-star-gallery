import { useNavigate, useParams } from 'react-router-dom';
import {
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  ImageList,
  ImageListItem,
  Container
} from '@mui/material';
import { useGetBreedsQuery } from '../../services/breeds';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import Image from '../../components/atoms/Image';
import YellowArrowIcon from '../../components/atoms/Icons/YellowArrowIcon';
import GridWrapper from '../../components/atoms/GridWrapper';

import './BreedItem.css';

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
      <Container maxWidth="xl" sx={{ p: 2 }}>
        <Box maxWidth="xl" className="box">
          <GridWrapper container columnSpacing={1} rowSpacing={1} height="70vh">
            <Grid item xs={5}>
              <img
                src={breed?.image.url}
                alt={breed?.name}
                style={{
                  boxShadow: '8px 8px 10px #000',
                  margin: '20px',
                  borderRadius: '20px',
                  width: '300px'
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <ImageList cols={1} variant="standard" className="image-list">
                {(breeds || []).map(item => (
                  <ImageListItem key={item.id} sx={{ width: '125px' }}>
                    <Image
                      src={item.image.url}
                      alt={item.name}
                      className="image"
                      aria-hidden="true"
                      onClick={() => navigate(`/breeds/${item.id}`)}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
            <Grid item xs={5}>
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
                      <span className="span">
                        {breed?.weight.imperial} pounds
                      </span>
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
                      Temperament:{' '}
                      <span className="span">{breed?.temperament}</span>
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={() => navigate(`/breeds`)}
                    variant="outlined"
                    endIcon={<YellowArrowIcon />}
                    sx={{
                      color: '#000',
                      boxShadow: '6px 6px 4px #000'
                    }}
                  >
                    Back to Breeds
                  </Button>
                </ListItem>
              </List>
            </Grid>
          </GridWrapper>
        </Box>
      </Container>
    </>
  );
};
