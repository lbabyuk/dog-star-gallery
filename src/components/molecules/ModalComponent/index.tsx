import { Modal, Box, Button, Typography, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const StyledBox = styled(Box)(() => ({
  paddingTop: '40px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  mt: 4
}));

type ModalComponent = {
  onClose: () => void;
  open: boolean;
};

export const ModalComponent = ({ open, onClose }: ModalComponent) => {
  if (!open) return null;

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Modal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          style: {
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            opacity: 0.5
          }
        }
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
          <CloseIcon
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
          sx={theme => ({
            mt: 2,
            color: theme.palette.grey[500],
            textAlign: 'center'
          })}
        >
          You will not able to recover it
        </Typography>
        <StyledBox>
          <Button
            onClick={onClose}
            sx={theme => ({ width: '45%', color: theme.palette.primary.main })}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={() => console.log('favoriteImageId')}
            variant="contained"
            sx={theme => ({ width: '45%', color: theme.palette.grey[100] })}
          >
            Delete
          </Button>
        </StyledBox>
      </Box>
    </Modal>
  );
};
