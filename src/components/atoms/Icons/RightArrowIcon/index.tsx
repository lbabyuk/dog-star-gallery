import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const RightArrowIcon = (props: SvgIconProps) => {
  const { sx } = props;
  return (
    <SvgIcon sx={sx}>
      <svg
        fill="currentColor"
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 476.491 476.491"
        xmlSpace="preserve"
      >
        <polygon points="476.491,238.246 339.952,101.706 339.952,223.246 0,223.246 0,253.246 339.952,253.246 339.952,374.786 " />
      </svg>
    </SvgIcon>
  );
};
