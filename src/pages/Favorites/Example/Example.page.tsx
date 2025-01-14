import { LoadingStatus } from '../../../components/molecules';
import {
  useAddFavoritesMutation,
  useDeleteFavoritesMutation,
  useGetFavoritesQuery
} from '../../../services/favorites';
import { Typography, Container, Stack, Box } from '@mui/material';
import { useGetImagesQuery } from '../../../services/images';
import { CustomImage } from '../../../components/atoms/Image';
import { GridWrapper } from '../../../components/atoms/GridWrapper';
import { CustomButton } from '../../../components/atoms/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  ICON_SIZE,
  IMAGES_LAYOUT_DATA
} from '../../../constants/imagesStyleData';
import { BorderHeartIcon } from '../../../components/atoms/Icons';

export const Example = () => {
  const { data: images } = useGetImagesQuery({
    limit: 6
  });
  const { data: favorites, isLoading } = useGetFavoritesQuery({
    sub_id: 'olena'
  });

  const [addFavoriteImage] = useAddFavoritesMutation();
  const [deleteFavoriteImage] = useDeleteFavoritesMutation();

  const favoriteIds = new Set(favorites?.map(fav => fav.image_id));

  const handleAdd = (id: string) => () => {
    addFavoriteImage({ image_id: id, sub_id: 'olena' });
  };

  const handleDelete = (id: number) => {
    deleteFavoriteImage(id);
  };

  if (isLoading) return <LoadingStatus />;

  return (
    <Container>
      <Stack>
        <Typography variant="body1"> all favorites images</Typography>
      </Stack>
      <GridWrapper>
        {favorites?.map(item => (
          <Box
            key={item.id}
            sx={{
              position: 'relative'
            }}
          >
            <CustomImage
              component="img"
              src={item.image.url}
              loading="lazy"
              sx={(theme: {
                palette: { grey: number[]; action: { hover: string } };
              }) => ({
                width: '100%',
                height: '100%',
                aspectRatio: 1,
                objectFit: 'cover',
                borderRadius: '20px',
                marginBottom: '16px',
                boxShadow: `4px 4px 0 0 ${theme.palette.grey[900]}`,
                '&:hover': {
                  boxShadow: `6px 6px 8px 0 ${theme.palette.action.hover}`
                }
              })}
            />
            <CustomButton
              variant="textSecondary"
              size="large"
              color="warning"
              endIcon={
                <FavoriteIcon
                  sx={theme => ({
                    color: theme.palette.warning.main,
                    width: '40px',
                    height: '40px'
                  })}
                />
              }
              sx={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '5px'
              }}
              onClick={() => handleDelete(item.id)}
            >
              delete
            </CustomButton>
          </Box>
        ))}
      </GridWrapper>

      <Stack>
        <Typography variant="body1"> all images images</Typography>
      </Stack>

      <Box
        sx={{
          height: '100%',
          minHeight: '70vh',
          margin: '20px 0',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
            lg: 'repeat(8, 1fr)'
          },
          gridTemplateRows: { lg: 'repeat(8, 5vw)', xs: 'auto' },
          gap: '1.5rem'
        }}
      >
        {images?.map((item, index) => {
          const isFavorite = favoriteIds.has(item.id);
          return (
            <Box
              key={item.id}
              sx={{
                position: 'relative',
                ...(IMAGES_LAYOUT_DATA[index] || {
                  gridColumn: 'span 1',
                  gridRow: 'auto'
                })
              }}
            >
              <CustomImage
                component="img"
                src={item.url}
                loading="lazy"
                sx={(theme: {
                  palette: {
                    action: { selected: string; hover: string };
                    grey: number[];
                  };
                }) => ({
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  aspectRatio: 1,
                  objectFit: 'cover',
                  borderRadius: '20px',
                  marginBottom: '16px',
                  boxShadow: isFavorite
                    ? `6px 6px 8px 0 ${theme.palette.action.selected}`
                    : `6px 6px 0 0 ${theme.palette.grey[900]}`,
                  '&:hover': {
                    boxShadow: `6px 6px 8px 0 ${theme.palette.action.hover}`
                  }
                })}
              />
              <CustomButton
                variant="textSecondary"
                sx={{
                  position: 'absolute',
                  top: { xs: '10px' },
                  right: '-5px',
                  padding: '5px'
                }}
                startIcon={
                  <BorderHeartIcon
                    sx={theme => ({
                      color: isFavorite
                        ? theme.palette.warning.main
                        : theme.palette.primary.main,
                      width: ICON_SIZE,
                      height: ICON_SIZE
                    })}
                  />
                }
                onClick={handleAdd(item.id)}
              />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};
