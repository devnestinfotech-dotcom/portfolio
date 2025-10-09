import { Description, Heading, SectionWrapper } from './index.styles';
import useIsMobile from '../../hooks/useIsMobile';
import { ArrowForward } from '@mui/icons-material';
import { PrimaryButton } from '../../common/common.styles';

export const HireMe = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-me');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const isMobile = useIsMobile();
  return (
    <>
      <SectionWrapper>
        <Heading>
          Do you have a Project Idea?
          <br />
          Let's discuss your project!
        </Heading>
        <Description isMobile={isMobile}>
          I'm always open to discussing new projects and creative ideas. Let's connect and build
          something amazing together.
        </Description>
        <PrimaryButton onClick={() => scrollToContact()}>
          Let's work Together
          <ArrowForward />
        </PrimaryButton>
      </SectionWrapper>
    </>
  );
};
