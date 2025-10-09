import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SectionWrapper, SocialButton } from './index.styles';

const SocialMediaLinks = () => {
  return (
    <SectionWrapper>
      <SocialButton
        onClick={() =>
          window.open('https://www.facebook.com/profile.php?id=61581727723864', '_blank')
        }
      >
        <FacebookIcon />
      </SocialButton>
      <SocialButton onClick={() => window.open('https://x.com/DevNestInfoTech', '_blank')}>
        <XIcon />
      </SocialButton>
      <SocialButton
        onClick={() => window.open('https://www.instagram.com/devnestinfotech/', '_blank')}
      >
        <InstagramIcon />
      </SocialButton>
      <SocialButton
        onClick={() =>
          window.open('https://www.linkedin.com/in/devnesttech-infotech-a96553389/', '_blank')
        }
      >
        <LinkedInIcon />
      </SocialButton>
    </SectionWrapper>
  );
};

export default SocialMediaLinks;
