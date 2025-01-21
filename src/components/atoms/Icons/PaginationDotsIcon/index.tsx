import { SvgIcon, SvgIconProps } from '@mui/material';

export const PaginationDotsIcon = (props: SvgIconProps) => {
  const { sx } = props;
  return (
    <SvgIcon sx={sx}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="12"
          r="2"
          transform="rotate(90 18 12)"
          fill="#0C0D0D"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          transform="rotate(90 12 12)"
          fill="#0C0D0D"
        />
        <circle
          cx="6"
          cy="12"
          r="2"
          transform="rotate(90 6 12)"
          fill="#0C0D0D"
        />
      </svg>
      ;
    </SvgIcon>
  );
};
