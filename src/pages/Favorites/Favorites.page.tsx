import { Fragment, useState } from 'react';
import {
  Box,
  Button,
  Container,
  ImageList,
  Modal,
  Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  useDeleteFavoritesMutation,
  useGetFavoritesQuery
} from '../../services/favorites';
import LoadingStatus from '../../components/atoms/LoadingStatus';
import { StyledImageListItem } from '../Main/MainStyled';
import { StyledButton, StyledPaper, StyledBox } from './FavoritesStyled';

export const Favorites = () => {
  const [open, setOpen] = useState(false);

  const { data: breeds, isLoading } = useGetFavoritesQuery({ sub_id: 'olena' });

  const [deleteFavorite] = useDeleteFavoritesMutation();

  const handleDeleteFavorite = (id: number) => {
    deleteFavorite(id);
    setOpen(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      {isLoading && (
        <div>
          <LoadingStatus />
        </div>
      )}
      <Box>
        {(breeds || []).length === 0 ? (
          <Typography variant="h4" component="h4" align="center" m={4} p={4}>
            No favorite dogs yet
          </Typography>
        ) : (
          <ImageList>
            {(breeds || []).map(breed => (
              <Fragment key={breed.id}>
                <StyledImageListItem>
                  <img
                    src={breed.image.url}
                    alt={breed.image_id}
                    loading="lazy"
                    style={{ borderRadius: '20px' }}
                  />
                  <StyledButton
                    size="large"
                    color="warning"
                    onClick={handleOpen}
                    endIcon={<DeleteIcon />}
                  >
                    Delete
                  </StyledButton>
                </StyledImageListItem>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <StyledPaper elevation={3}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      textAlign="center"
                    >
                      Delete the photo?
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, color: '#ADA7B8' }}
                      textAlign="center"
                    >
                      You will not able to recover it
                    </Typography>
                    <StyledBox>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={() => handleDeleteFavorite(breed.id)}>
                        Delete
                      </Button>
                    </StyledBox>
                  </StyledPaper>
                </Modal>
              </Fragment>
            ))}
          </ImageList>
        )}
      </Box>
    </Container>
  );
};
