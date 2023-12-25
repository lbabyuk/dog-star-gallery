import { FC, ChangeEvent } from 'react';
import { Pagination } from '@mui/material';

type PaginationProps = {
  count: number;
  page: number;
  onChange: (event: ChangeEvent<unknown>, value: number) => void;
};

const PaginationComponent: FC<PaginationProps> = ({
  count,
  page,
  onChange
}) => (
  <Pagination
    count={count}
    page={page}
    onChange={onChange}
    showFirstButton
    showLastButton
  />
);

export default PaginationComponent;
