import { Box } from '@mui/material';
import { YellowArrowIcon } from '../../../../components/atoms/Icons';
import { useNavigate } from 'react-router-dom';
import { CustomImage } from '../../../../components/atoms/Image';
import { CustomButton } from '../../../../components/atoms/Button';

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
      <CustomImage
        component="img"
        loading="lazy"
        src={url}
        alt={name || 'Clicked Dog'}
        sx={(theme: { palette: { grey: number[] } }) => ({
          width: '100%',
          height: '100%',
          aspectRatio: 1,
          objectFit: 'cover',
          borderRadius: '20px',
          marginBottom: '16px',
          boxShadow: `6px 6px 0 0 ${theme.palette.grey[900]}`
        })}
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
          <CustomButton
            onClick={() => navigate('/')}
            endIcon={<YellowArrowIcon />}
            sx={theme => ({
              padding: '8px 16px',
              borderRadius: '6px',
              color: theme.palette.grey[900],
              border: `1px solid ${theme.palette.grey[800]}`,
              backgroundColor: theme.palette.background.paper,
              boxShadow: `4px 4px 0 0 ${theme.palette.grey[900]}`,
              fontWeight: 400,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
                color: theme.palette.grey[600]
              }
            })}
          >
            Back to Gallery
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};
