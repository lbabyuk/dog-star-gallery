import { Box } from '@mui/material';
import { CustomButton } from '../../../components/atoms';
import { VOTES_BUTTONS_DATA } from './voteButtonsData';
import { VotesImage } from './VotesImage';
import { CustomSlider } from '../../../components/molecules/CustomSlider.tsx/CustomSlider';

type VotesImagesProps = {
  handleLikeClick: (id: string, value: number) => () => void;
  votesImages: { id: string; url: string }[];
};

export const VotesSlider = ({
  handleLikeClick,
  votesImages
}: VotesImagesProps) => (
  <Box>
    <CustomSlider
      slidesPerView="auto"
      centeredSlides
      effect="coverflow"
      coverflowEffectConfig={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
      }}
      showPagination
      showNavigation
      className="mySwiper"
      data={votesImages || []}
      getKey={item => item.id}
      renderItem={(item, { isActive }) =>
        isActive ? (
          <>
            <VotesImage src={item.url} alt={item.id} isActive />

            {VOTES_BUTTONS_DATA(item.id, handleLikeClick).map(itemBtn => (
              <CustomButton
                variant="textSecondary"
                key={itemBtn.key}
                onClick={itemBtn.onclick}
                startIcon={itemBtn.icon}
                sx={itemBtn.sx}
              />
            ))}
          </>
        ) : (
          <VotesImage src={item.url} alt={item.id} />
        )
      }
    />
  </Box>
);
