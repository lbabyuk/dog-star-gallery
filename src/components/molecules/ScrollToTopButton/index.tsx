import { useEffect, useState } from 'react';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { IconButton } from '@mui/material';

export const ScrollToTopButton = () => {
  const scrolledVisible = 200;
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > scrolledVisible) {
      setVisible(true);
    } else if (scrolled <= scrolledVisible) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, [visible]);

  return (
    <IconButton
      onClick={scrollToTop}
      sx={{
        display: visible ? 'flex' : 'none',
        position: 'fixed',
        bottom: '70px',
        right: 0
      }}
    >
      <ArrowCircleUpOutlinedIcon
        sx={{ color: theme => theme.palette.primary.main }}
      />
    </IconButton>
  );
};
