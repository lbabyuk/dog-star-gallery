import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const YellowArrowIcon = (props: SvgIconProps) => {
  const { sx } = props;
  return (
    <SvgIcon sx={sx}>
      <svg
        width="27"
        height="16"
        viewBox="0 0 27 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 1.75L26 8.25M26 8.25L16 14.25M26 8.25H1"
          stroke="#FFCF32"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
