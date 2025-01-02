import { Modal, Box, Button, Typography, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Image } from '../../atoms/Image';

export const StyledBox = styled(Box)(() => ({
  paddingTop: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));
type ModalComponent = {
  onDeleteFavorite: (id: number) => void;
  favoriteImageId: number;
  onClose: () => void;
  open: boolean;
};

export const ModalComponent = ({
  open,
  onClose,
  onDeleteFavorite,
  favoriteImageId
}: ModalComponent) => (
  <Modal
    open={open}
    onClose={onClose}
    slotProps={{
      backdrop: { style: { cursor: 'pointer' } }
    }}
  >
    <Box
      sx={theme => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        height: 'auto',
        borderRadius: '12px',
        bgcolor: theme.palette.secondary.main,
        transform: 'translate(-50%, -50%)',
        width: {
          xs: '328px',
          md: '556px',
          lg: '596px'
        },
        padding: {
          xs: '30px',
          md: '32px 48px',
          lg: '40px 64px'
        }
      })}
    >
      <Button
        type="button"
        onClick={onClose}
        sx={{
          position: 'absolute',
          minWidth: 'auto',
          padding: 0,
          top: { xs: '10px', lg: '16px' },
          right: { xs: '10px', lg: '16px' },
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }}
      >
        <Image
          width="48px"
          height="48px"
          component={CloseIcon}
          sx={{
            width: { xs: '24px', md: '36px' },
            height: { xs: '24px', md: '36px' },
            color: '#5F556D',
            '&:hover': {
              color: '#A239F4'
            }
          }}
        />
      </Button>
      <Typography variant="h6" component="h2" textAlign="center">
        Delete the photo?
      </Typography>
      <Typography
        sx={{
          mt: 2,
          color: theme => theme.palette.grey[500],
          textAlign: 'center'
        }}
      >
        You will not able to recover it
      </Typography>
      <StyledBox>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => onDeleteFavorite(favoriteImageId)}>
          Delete
        </Button>
      </StyledBox>
    </Box>
  </Modal>
);
