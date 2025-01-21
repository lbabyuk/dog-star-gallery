import { Theme } from '@mui/material';

export const overrideTypography = (theme: Theme) => {
  const isMediaMD = theme.breakpoints.up('md');
  const isMediaLG = theme.breakpoints.up('lg');

  return {
    h1: {
      lineHeight: '120%',
      fontWeight: 600,
      fontSize: 40,
      [isMediaMD]: {
        fontWeight: 500,
        fontSize: 40
      },
      [isMediaLG]: {
        fontWeight: 600,
        fontSize: 80
      }
    },
    h2: {
      lineHeight: '120%',
      fontWeight: 600,
      fontSize: 32,
      [isMediaMD]: {
        fontWeight: 500,
        fontSize: 36
      },
      [isMediaLG]: {
        fontWeight: 600,
        fontSize: 40
      }
    },
    h3: {
      fontWeight: 600,
      lineHeight: '120%',
      fontSize: 28,
      [isMediaMD]: {
        lineHeight: '140%',
        fontSize: 32
      },
      [isMediaLG]: {
        lineHeight: '120%',
        fontSize: 36
      }
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: '150%',
      fontSize: 20,
      [isMediaMD]: {
        lineHeight: '120%',
        fontSize: 24
      },
      [isMediaLG]: {
        fontSize: 32
      }
    },
    subtitle2: {
      fontWeight: 700,
      lineHeight: '141%',
      fontSize: 18,
      [isMediaMD]: {
        lineHeight: '130%',
        fontSize: 20
      },
      [isMediaLG]: {
        fontWeight: 600,
        lineHeight: '141%',
        fontSize: 24
      }
    },
    subtitle3: {
      fontWeight: 500,
      lineHeight: '141%',
      fontSize: 20,
      [isMediaMD]: {
        fontWeight: 600,
        lineHeight: '130%'
      },
      [isMediaLG]: {
        lineHeight: '120%',
        fontSize: 28
      }
    },
    subtitle4: {
      fontWeight: 600,
      lineHeight: '141%',
      fontSize: 16,
      [isMediaMD]: {
        lineHeight: '130%'
      },
      [isMediaLG]: {
        fontWeight: 700,
        lineHeight: '141%',
        fontSize: 20
      }
    },
    body1: {
      fontWeight: 400,
      lineHeight: '170%',
      fontSize: 16,
      [isMediaMD]: {
        lineHeight: '140%',
        fontSize: 18
      },
      [isMediaLG]: {
        lineHeight: '141%',
        fontSize: 20
      }
    },
    body2: {
      fontWeight: 500,
      lineHeight: '130%',
      fontSize: 12,
      [isMediaMD]: {
        fontSize: 15,
        lineHeight: '145%'
      },
      [isMediaLG]: {
        lineHeight: '150%',
        fontSize: 16
      }
    },
    semiBold1: {
      fontWeight: 600,
      lineHeight: '144%',
      fontSize: 14,
      [isMediaMD]: {
        lineHeight: '140%',
        fontSize: 17
      },
      [isMediaLG]: {
        lineHeight: '141%',
        fontSize: 20
      }
    },
    semiBold2: {
      fontWeight: 600,
      lineHeight: '170%',
      fontSize: 12,
      [isMediaMD]: {
        lineHeight: '144%',
        fontSize: 15
      },
      [isMediaLG]: {
        lineHeight: '150%',
        fontSize: 16
      }
    },
    caption1: {
      fontWeight: 500,
      lineHeight: '120%',
      fontSize: 10,
      [isMediaMD]: {
        fontSize: 12
      },
      [isMediaLG]: {
        lineHeight: '130%',
        fontSize: 14
      }
    },
    caption2: {
      fontWeight: 400,
      lineHeight: '120%',
      fontSize: 10,
      [isMediaMD]: {
        fontSize: 12
      },
      [isMediaLG]: {
        lineHeight: '130%',
        fontSize: 14
      }
    },
    span: {
      fontWeight: 400,
      lineHeight: '170%',
      fontSize: 16,
      [isMediaMD]: {
        lineHeight: '140%',
        fontSize: 18
      },
      [isMediaLG]: {
        lineHeight: '141%',
        fontSize: 20
      }
    }
  };
};
