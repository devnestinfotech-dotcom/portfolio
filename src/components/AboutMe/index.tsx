import { SecondaryButton, SectionWrapperWhite } from '../../common/common.styles';
import useIsMobile from '../../hooks/useIsMobile';
import {
  Container,
  Description,
  Heading,
  LeftContainer,
  ImgBox,
  RightContainer,
  BoxCard,
  SmallTextHeading,
  SmallTextHeighlight,
  SmallTextDesc,
} from './index.styles';
import hiten from '../../assets/hitenAbout.png';

export const AboutMe = () => {
  const isMobile = useIsMobile();
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <SectionWrapperWhite isMobile={isMobile}>
      <Container isMobile={isMobile}>
        <LeftContainer>
          <ImgBox src={hiten} isMobile={isMobile} />
          <BoxCard isMobile={isMobile}>
            <SmallTextHeading>Web Developer</SmallTextHeading>
            <SmallTextHeighlight>4.5+ </SmallTextHeighlight>
            <SmallTextDesc>Years Experience</SmallTextDesc>
          </BoxCard>
        </LeftContainer>
        <RightContainer isMobile={isMobile}>
          <Heading>I'm a Passionate Web Developer</Heading>
          <Description>
            I’m a passionate Web Developer with 4.5+ years of experience creating sleek, modern, and
            user-friendly websites. From startups to growing businesses, I help bring ideas to life
            with clean code, responsive designs, and seamless functionality.
          </Description>
          <Description>
            I specialize in building high-performing, professional websites that are optimized for
            growth, usability, and long-term success.
          </Description>
          <SecondaryButton onClick={scrollToProjects} >See work</SecondaryButton>
        </RightContainer>
      </Container>
    </SectionWrapperWhite>
  );
};
