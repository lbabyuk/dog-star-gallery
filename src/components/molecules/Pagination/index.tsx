import {
  Container,
  Icon,
  Pagination,
  PaginationItem,
  Stack
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PaginationDotsIcon } from '../../atoms/Icons';

type PaginationComponentProps = {
  page: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

const paginationStyles = {
  padding: '10px',
  backgroundColor: 'white.main',
  height: { xs: '24px', md: '32px' },
  minWidth: { xs: '24px', md: '32px' },
  borderRadius: { xs: '8px', md: '12px' }
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
        sx={{
          ...paginationStyles,
          '& .MuiPaginationItem-root': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'grey[500]',
            opacity: 1,
            '& .MuiPagination-ul': {
              display: 'flex',
              margin: 0,
              padding: 0,
              gap: '8px',
              '& li': {
                margin: 0,
                display: 'flex',
                color: 'grey[500]'
              }
            },
            '&.Mui-disabled': {
              opacity: 1,
              color: 'grey[700]',
              backgroundColor: 'grey[600]'
            },
            '&.Mui-selected': {
              color: 'background.paper',
              backgroundColor: 'action.selected',
              boxShadow: theme => `2px 2px 0 0 ${theme.palette.grey[900]}`,
              '&:hover': {
                color: 'background.paper',
                backgroundColor: 'action.hover'
              }
            },
            '&:hover': {
              color: 'background.paper',
              backgroundColor: 'action.hover',
              borderRadius: { xs: '8px', md: '12px' }
            }
          }
        }}
        renderItem={item => {
          if (item.type === 'start-ellipsis' || item.type === 'end-ellipsis') {
            return (
              <Icon sx={{ display: 'flex' }}>
                <PaginationDotsIcon />
              </Icon>
            );
          }
          return (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              sx={{
                '&.Mui-selected ': {
                  ...paginationStyles,
                  boxShadow: '0px 0px 12px 0px rgba(31, 5, 188, 0.1)'
                }
              }}
              {...item}
            />
          );
        }}
      />
    </Stack>
  </Container>
);
