/* eslint-disable react/jsx-props-no-spreading */
import { Icon, Pagination, PaginationItem, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PaginationDotsIcon } from '../../atoms';
import {
  PAGINATION_STYLE,
  SVG_SIZE
} from '../../../constants/paginationStyleData';

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
  <Stack
    direction="row"
    alignItems="center"
    spacing={1}
    sx={{
      justifyContent: { xs: 'center', sm: 'flex-end' }
    }}
  >
    <Pagination
      color="secondary"
      defaultPage={3}
      siblingCount={1}
      count={count}
      page={page}
      onChange={onChange}
      sx={theme => ({
        ...PAGINATION_STYLE,
        '& .MuiPaginationItem-root': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.text.primary,
          opacity: 1,
          '& .MuiPagination-ul': {
            display: 'flex',
            margin: 0,
            padding: 0,
            gap: '8px',
            '& li': {
              margin: 0,
              display: 'flex',
              color: theme.palette.grey[500]
            }
          },
          '&.Mui-disabled': {
            opacity: 1,
            color: theme.palette.grey[700],
            backgroundColor: theme.palette.grey[600]
          },
          '&.Mui-selected': {
            color: theme.palette.background.paper,
            backgroundColor: theme.palette.action.selected,
            boxShadow: `2px 2px 0 0 ${theme.palette.grey[900]}`,
            '&:hover': {
              color: theme.palette.background.paper,
              backgroundColor: theme.palette.action.hover
            }
          },
          '&:hover': {
            color: theme.palette.background.paper,
            backgroundColor: theme.palette.action.hover,
            borderRadius: PAGINATION_STYLE.borderRadius
          }
        }
      })}
      renderItem={item => {
        if (item.type === 'start-ellipsis' || item.type === 'end-ellipsis') {
          return (
            <Icon
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <PaginationDotsIcon
                sx={{
                  width: SVG_SIZE,
                  height: SVG_SIZE
                }}
              />
            </Icon>
          );
        }
        return (
          <PaginationItem
            slots={{
              previous: ArrowBackIcon,
              next: ArrowForwardIcon
            }}
            sx={{
              fontSize: { xs: '16px', md: '18px', lg: '20px' },
              '&.Mui-selected ': {
                ...PAGINATION_STYLE,
                boxShadow: theme => `2px 2px 0 0 ${theme.palette.grey[900]}`
              },
              svg: {
                width: SVG_SIZE,
                height: SVG_SIZE
              }
            }}
            {...item}
          />
        );
      }}
    />
  </Stack>
);
