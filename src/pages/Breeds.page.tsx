import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useGetBreedsQuery } from '../services/breeds';

export const Breeds = () => {
  const { data: breeds, isLoading } = useGetBreedsQuery();
  const navigate = useNavigate();
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {(breeds || []).map(breed => (
        <div key={breed.id}>
          <p>
            {breed.name}({breed.origin})
          </p>
          <img src={breed.image.url} alt={breed.name} width="250px" />
          <Button type="button" onClick={() => navigate(`/breeds/${breed.id}`)}>
            More
          </Button>
        </div>
      ))}
    </>
  );
};
