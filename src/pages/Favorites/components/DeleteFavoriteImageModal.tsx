import { Modal, Typography, Button } from '@mui/material';
import { StyledPaper, StyledBox } from '../FavoritesStyled';

type DeleteFavoriteImageModalProps = {
  onDeleteFavorite: (id: number) => void;
  favoriteImageId: number;
  onClose: () => void;
  open: boolean;
};

export const DeleteFavoriteImageModal = ({
  open,
  onClose,
  onDeleteFavorite,
  favoriteImageId
}: DeleteFavoriteImageModalProps) => (
  <Modal open={open} onClose={onClose}>
    <StyledPaper elevation={3}>
      <Typography variant="h6" component="h2" textAlign="center">
        Delete the photo?
      </Typography>
      <Typography
        sx={{ mt: 2, color: theme => theme.palette.grey[500] }}
        textAlign="center"
      >
        You will not able to recover it
      </Typography>
      <StyledBox>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => onDeleteFavorite(favoriteImageId)}>
          Delete
        </Button>
      </StyledBox>
    </StyledPaper>
  </Modal>
);
