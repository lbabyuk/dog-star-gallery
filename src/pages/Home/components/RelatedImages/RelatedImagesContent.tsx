import { Box, Button } from '@mui/material';
import { YellowArrowIcon } from '../../../../components/atoms/Icons';
import { useNavigate } from 'react-router-dom';

type RelatedImagesContentProps = {
  name: string;
  url: string;
};

export const RelatedImagesContent = ({
  name,
  url
}: RelatedImagesContentProps) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr' },
        gap: '60px',
        flexGrow: 1,
        overflowX: 'hidden',
        padding: '10px'
      }}
    >
      <Box
        component="img"
        loading="lazy"
        src={url}
        alt={name || 'Clicked Dog'}
        sx={{
          width: '100%',
          height: '100%',
          aspectRatio: 1,
          objectFit: 'cover',
          borderRadius: '20px',
          marginBottom: '16px',
          boxShadow: theme => `6px 6px 0 0 ${theme.palette.grey[900]}`
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        <Box>
          <Button
            onClick={() => navigate('/')}
            endIcon={<YellowArrowIcon />}
            sx={{
              padding: '8px 16px',
              borderRadius: '6px',
              color: theme => theme.palette.grey[900],
              border: theme => `1px solid ${theme.palette.grey[800]}`,
              backgroundColor: theme => theme.palette.background.paper,
              boxShadow: theme => `4px 4px 0 0 ${theme.palette.grey[900]}`,
              fontWeight: 400,
              '&:hover': {
                backgroundColor: theme => theme.palette.action.hover,
                color: theme => theme.palette.grey[600]
              }
            }}
          >
            Back to Gallery
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
