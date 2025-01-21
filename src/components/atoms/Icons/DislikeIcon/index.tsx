import { SvgIcon, SvgIconProps } from '@mui/material';

export const DislikeIcon = (props: SvgIconProps) => {
  const { sx } = props;
  return (
    <SvgIcon sx={sx}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1926_901)">
          <rect
            width="36"
            height="36"
            rx="18"
            transform="matrix(1 0 0 -1 0 36)"
            fill="#921FED"
          />
          <path
            d="M25.5453 15.1957L26.1606 18.5718C26.1967 18.7697 26.1868 18.9726 26.1315 19.1665C26.0763 19.3603 25.977 19.5404 25.8407 19.6941C25.7043 19.8478 25.5342 19.9714 25.3423 20.0562C25.1503 20.1411 24.9411 20.1852 24.7293 20.1853H20.2076C20.102 20.1853 19.9978 20.2071 19.902 20.2491C19.8062 20.2911 19.7213 20.3524 19.653 20.4287C19.5847 20.505 19.5348 20.5945 19.5067 20.6909C19.4786 20.7874 19.4729 20.8885 19.4902 20.9872L20.0688 24.3343C20.1627 24.8778 20.1359 25.4338 19.9903 25.9669C19.9279 26.1872 19.8078 26.3889 19.6412 26.5534C19.4746 26.7179 19.2668 26.8398 19.0372 26.9077L18.9107 26.9466C18.6245 27.0338 18.3141 27.0136 18.0431 26.8904C17.7464 26.7547 17.53 26.5072 17.4497 26.2135L17.0342 24.6959C16.902 24.213 16.7098 23.7466 16.4617 23.3066C16.0995 22.6636 15.5392 22.1481 14.9562 21.6723L13.7003 20.6462C13.5261 20.5035 13.39 20.3236 13.3032 20.1214C13.2165 19.9192 13.1815 19.7003 13.2011 19.4828L13.9098 11.7104C13.941 11.3666 14.1071 11.0465 14.3751 10.8132C14.6432 10.5798 14.9938 10.4503 15.3577 10.4501H19.4142C22.4532 10.4501 25.0461 12.4576 25.5453 15.1957Z"
            fill="#FCFAFA"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4451 20.806C10.6137 20.813 10.7787 20.758 10.9056 20.6523C11.0324 20.5467 11.1113 20.3987 11.1258 20.2392L11.9724 10.9417C11.9867 10.8033 11.9711 10.6635 11.9266 10.531C11.8821 10.3984 11.8095 10.2759 11.7133 10.1708C11.6171 10.0657 11.4994 9.98034 11.3672 9.91987C11.2351 9.8594 11.0913 9.8251 10.9447 9.81908C10.7981 9.81305 10.6518 9.83542 10.5146 9.88482C10.3774 9.93422 10.2523 10.0096 10.1469 10.1064C10.0415 10.2032 9.95801 10.3193 9.90154 10.4477C9.84506 10.5761 9.81678 10.7141 9.81843 10.8532V20.1863C9.8185 20.3462 9.88372 20.5 10.0005 20.6155C10.1172 20.7309 10.2765 20.7992 10.4451 20.806Z"
            fill="#FCFAFA"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1926_901"
            x="0"
            y="0"
            width="38"
            height="38"
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
            <feOffset dx="2" dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1926_901"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1926_901"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </SvgIcon>
  );
};
