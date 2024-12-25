import { Container, Pagination, Stack } from '@mui/material';

type PaginationComponentProps = {
  page: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

const PaginationComponent = ({
  page,
  onChange,
  count
}: PaginationComponentProps) => (
  <Container
    maxWidth="md"
    sx={{ p: 2, display: 'flex', justifyContent: 'center' }}
  >
    <Stack direction="row" alignItems="center" spacing={1}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        siblingCount={1}
        boundaryCount={1}
        showFirstButton
        showLastButton
      />
    </Stack>
  </Container>
);

export default PaginationComponent;
