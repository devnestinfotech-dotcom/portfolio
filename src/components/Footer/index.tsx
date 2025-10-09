import { Description, Heading, SectionWrapper, SocialMediaLinksWrapper } from './index.styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useIsMobile from '../../hooks/useIsMobile';

export const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <SectionWrapper isMobile={isMobile}>
      <Heading>Hiten.</Heading>
      <Description>
        © 2025 Hiten. Design & Develop with <FavoriteIcon style={{ color: 'red' }} />
      </Description>
      <SocialMediaLinksWrapper>
        <FacebookIcon onClick={() => window.open('https://www.facebook.com/profile.php?id=61581727723864', '_blank')} style={{ cursor: 'pointer' }} />
        <XIcon onClick={() => window.open('https://x.com/DevNestInfoTech', '_blank')} style={{ cursor: 'pointer' }} />
        <InstagramIcon onClick={() => window.open('https://www.instagram.com/devnestinfotech/', '_blank')} style={{ cursor: 'pointer' }} />
        <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/devnesttech-infotech-a96553389/', '_blank')} style={{ cursor: 'pointer' }} />
      </SocialMediaLinksWrapper>
    </SectionWrapper>
  );
};
