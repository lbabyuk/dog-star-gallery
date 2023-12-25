/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Grid,
  Box,
  Container,
  List,
  ListItemText,
  ListItem
} from '@mui/material';
import { useGetBreedsQuery } from '../../services/breeds';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import {
  Item,
  TypographyElement,
  ButtonElement,
  ImageElement
} from './BreedItemStyled';
import './BreedItem.css';
import PowIcon from '../../components/atoms/Icons/PowIcon';
import YellowArrowIcon from '../../components/atoms/Icons/YellowArrowIcon';
import BreedImageList from './BreedImageList/BreedImageList';
import powGroup from '../../assets/path-group.png';

export const BreedItem: FC = () => {
  const { breedId } = useParams();
  const { data: breeds, isLoading } = useGetBreedsQuery();
  const navigate = useNavigate();

  const breed = (breeds || []).find(item => item.id === Number(breedId));

  return (
    <>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <Container maxWidth="xl" className="container">
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={1}
            columns={{ xs: 4, md: 12 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={5}>
              <Item elevation={0}>
                <img
                  className="breed-image"
                  src={breed?.image.url}
                  alt={breed?.name}
                />
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item elevation={0}>
                <List sx={{ width: '100%' }}>
                  <ListItem>
                    <ListItemText>
                      <TypographyElement>
                        {breed?.name}{' '}
                        <span>
                          <PowIcon />
                        </span>{' '}
                      </TypographyElement>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <TypographyElement>
                        Bred for:{' '}
                        <span className="span">{breed?.bred_for}</span>
                      </TypographyElement>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <TypographyElement>
                        Breed group:{' '}
                        <span className="span">{breed?.breed_group}</span>
                      </TypographyElement>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <TypographyElement>
                        Life span:{' '}
                        <span className="span">{breed?.life_span}</span>
                      </TypographyElement>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <TypographyElement>
                        Temperament:{' '}
                        <span className="span">{breed?.temperament}</span>
                      </TypographyElement>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ButtonElement
                      onClick={() => navigate(`/breeds`)}
                      endIcon={<YellowArrowIcon />}
                    >
                      Back to Breeds
                    </ButtonElement>
                  </ListItem>
                </List>
              </Item>
            </Grid>

            <Grid item xs={2}>
              <BreedImageList />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <ImageElement
            src={powGroup}
            alt="powGroup"
            className="powGroup-image"
          />
        </Box>
      </Container>
    </>
  );
};
