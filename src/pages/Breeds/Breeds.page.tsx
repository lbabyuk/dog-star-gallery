import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { useGetBreedsQuery, Breed } from '../../services/breeds';
import {
  DefaultInfo,
  LoadingStatus,
  SearchComponent,
  TitleComponent
} from '../../components/molecules';
import { CustomButton, MotionTransitionWrapper } from '../../components/atoms';
import { StyledBox } from './BreedsStyled';
import { BreedsList, SortBreed } from './components';
import { TITLES_DATA } from '../../constants/titlesData';
import { useDebounce, useVisibleImage } from '../../hooks';

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

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleClearInput = () => {
    setSearchQuery('');
  };

  if (isLoading) return <LoadingStatus />;

  return (
    <Container>
      <MotionTransitionWrapper>
        <TitleComponent title={TITLES_DATA.breedsPageTitle} />
        <StyledBox>
          <SearchComponent
            handleChangeInput={handleChangeInput}
            searchQuery={searchQuery}
            handleClearInput={handleClearInput}
          />
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
              <CustomButton variant="textPrimary" onClick={handleShowImages}>
                {isAllVisible ? 'Show Less' : 'Show More'}
              </CustomButton>
            </Box>
          </>
        )}
      </MotionTransitionWrapper>
    </Container>
  );
};
