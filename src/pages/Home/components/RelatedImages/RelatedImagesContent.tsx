import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { YellowArrowIcon } from '../../../../components/atoms/Icons';
import { CustomImage, CustomButton } from '../../../../components/atoms';

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
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        gap: '20px',
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden',
        padding: '10px'
      }}
    >
      <CustomImage src={url} alt={name || 'Clicked Dog'} />
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
    </Box>
  );
};
