import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const LeftArrowIcon = (props: SvgIconProps) => {
  const { sx } = props;
  return (
    <SvgIcon sx={sx}>
      <svg
        fill="#000000"
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 476.491 476.491"
        xmlSpace="preserve"
      >
        <polygon points="476.491,223.246 136.539,223.246 136.539,101.706 0,238.246 136.539,374.786 136.539,253.246 476.491,253.246 " />
      </svg>
    </SvgIcon>
  );
};
