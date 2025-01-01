import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const HeartIcon = (props: SvgIconProps) => {
  const { sx } = props;
  return (
    <SvgIcon sx={sx}>
      <svg
        width="45"
        height="43"
        viewBox="0 0 45 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1930_968)">
          <mask
            id="mask0_1930_968"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="42"
            height="40"
          >
            <path
              d="M41.9348 0.762207H0.228516V39.2377H41.9348V0.762207Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1930_968)">
            <path
              d="M19.7946 37.6072L20.0071 37.6718C20.7886 37.9083 21.5266 38.1312 22.013 39.1086C22.0253 39.1333 22.0426 39.155 22.0638 39.1727C22.085 39.19 22.1097 39.2029 22.1361 39.2103C22.1527 39.2147 22.1698 39.2167 22.187 39.2167C22.2248 39.2167 22.2616 39.2058 22.2932 39.185C22.6519 38.9491 22.9897 38.7356 23.3105 38.5327C23.9825 38.1074 24.563 37.7405 25.1181 37.3129C27.109 35.8124 28.9256 34.0904 30.5337 32.1783C32.6473 29.6227 34.8327 26.9799 36.8901 24.2135C38.1777 22.4817 39.2753 20.5484 40.2031 18.8729C41.1313 17.1775 41.6837 15.2991 41.8226 13.3671C42.0743 10.1922 41.3266 7.33046 39.5999 4.86151C37.6784 2.11366 35.1229 0.775412 32.0099 0.878587C28.498 0.997076 25.4094 2.3525 22.8297 4.90739C22.7046 5.03715 22.5888 5.17572 22.4832 5.32201C22.2826 5.58617 22.0923 5.83694 21.8058 5.93627C18.7967 2.97692 16.4961 1.81928 13.0543 1.52258C9.52217 1.21783 6.66267 2.36479 4.55477 4.92983C3.50871 6.1977 2.59182 7.56881 1.81808 9.02239C0.168786 12.1404 -0.174889 15.457 0.798196 18.8805C1.66602 21.9362 3.11306 24.7926 5.05904 27.2912C8.94968 32.3026 13.9076 35.7739 19.7946 37.6072Z"
              fill="#FFCF32"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_1930_968"
            x="0.258301"
            y="0.873047"
            width="44.6118"
            height="41.3438"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="3" dy="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1930_968"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1930_968"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </SvgIcon>
  );
};
