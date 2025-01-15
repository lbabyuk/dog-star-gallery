import { Box } from '@mui/material';
import { YellowArrowIcon } from '../../../../components/atoms/Icons';
import { useNavigate } from 'react-router-dom';
import { CustomImage } from '../../../../components/atoms/CustomImage';
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
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: '20px',
        justifyItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden',
        padding: '10px'
      }}
    >
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
            variant="outlinedPrimary"
          >
            Back to Gallery
          </CustomButton>
        </Box>
      </Box>
      <CustomImage
        component="img"
        loading="lazy"
        src={url}
        alt={name || 'Clicked Dog'}
      />
    </Box>
  );
};
