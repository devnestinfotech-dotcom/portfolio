import { useTheme } from '@mui/material';
import { ArrowButton } from './index.styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export const ScrollToTop = () => {
  const theme = useTheme();
  const handleScrollToTop = () => {
    const targetSection = document.getElementById('home');

    if (targetSection) {
      window.scrollTo({
        top: targetSection.getBoundingClientRect().top + window.pageYOffset - 64,
        behavior: 'smooth',
      });
    }
  };
  return (
    <ArrowButton onClick={handleScrollToTop}>
      <ArrowUpwardIcon style={{ color: theme.palette.secondary.main }} />
    </ArrowButton>
  );
};
