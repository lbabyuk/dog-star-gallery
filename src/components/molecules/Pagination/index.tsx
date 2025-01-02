import { Container, Pagination, Stack } from '@mui/material';

type PaginationComponentProps = {
  page: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

export const PaginationComponent = ({
  page,
  onChange,
  count
}: PaginationComponentProps) => (
  <Container sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
    <Stack direction="row" alignItems="center" spacing={1}>
      <Pagination
        color="secondary"
        defaultPage={3}
        siblingCount={0}
        count={count}
        page={page}
        onChange={onChange}
      />
    </Stack>
  </Container>
);
