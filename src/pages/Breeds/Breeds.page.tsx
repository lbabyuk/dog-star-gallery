import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { useGetBreedsQuery, Breed } from '../../services/breeds';
import {
  DefaultInfo,
  LoadingStatus,
  SearchComponent,
  TitleComponent
} from '../../components/molecules';
import { YellowArrowIcon } from '../../components/atoms/Icons';
import { StyledBox } from './BreedsStyled';
import { BreedsList } from './components/BreedsList';
import { SortBreed } from './components/SortBreed';
import { CustomButton, MotionTransitionWrapper } from '../../components/atoms';
import { TITLES_DATA } from '../../constants/titlesData';
import { useDebounce } from '../../hooks/useDebounce';
import { useVisibleImage } from '../../hooks/useVisibleImage';

export const Breeds = () => {
  const { data: breeds, isLoading } = useGetBreedsQuery({ limit: 25 });
  const [searchQuery, setSearchQuery] = useState('');
  const [sorted, setSorted] = useState<Breed[]>([]);

  const debouncedSearchTerm = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (breeds) {
      setSorted(breeds);
    }
  }, [breeds]);

  const handleSortedUp = () => {
    const sortedBreeds = [...sorted].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setSorted(sortedBreeds);
  };

  const handleSortedDown = () => {
    const sortedBreeds = [...sorted].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSorted(sortedBreeds);
  };

  const filteredBreeds = searchQuery
    ? sorted.filter(breed =>
        breed.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    : sorted;

  const { visibleData, handleShowImages, isAllVisible } = useVisibleImage(
    filteredBreeds,
    6,
    3
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (isLoading) return <LoadingStatus />;

  return (
    <Container>
      <MotionTransitionWrapper>
        <TitleComponent title={TITLES_DATA.breedsPageTitle} />
        <StyledBox>
          <SearchComponent onChange={handleChange} input={searchQuery} />
          <SortBreed
            onHandleSortDown={handleSortedDown}
            onHandleSortUp={handleSortedUp}
          />
        </StyledBox>

        {filteredBreeds?.length === 0 ? (
          <DefaultInfo title={TITLES_DATA.noBreedsFound} />
        ) : (
          <>
            <BreedsList filteredBreeds={visibleData} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              <CustomButton
                variant="textPrimary"
                onClick={handleShowImages}
                endIcon={<YellowArrowIcon />}
              >
                {isAllVisible ? 'Show Less' : 'Show More'}
              </CustomButton>
            </Box>
          </>
        )}
      </MotionTransitionWrapper>
    </Container>
  );
};
