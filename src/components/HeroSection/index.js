import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Description, Grid2Container, Grid2Wrapper, HeroHello, MeName, RightContainer, RightContainerDark, SectionWrapper, ButtonWrapper, ImageContainer, } from './index.styles';
import TypewriterComponent from 'typewriter-effect';
import SocialMediaLinks from '../SocialMediaLinks';
import { PrimaryButton, SecondaryButton } from '../../common/common.styles';
import hiten from '../../assets/hitenHero.png';
import useIsMobile from '../../hooks/useIsMobile';
export const HeroSection = () => {
    const isMobile = useIsMobile();
    const scrollToContact = () => {
        const contactSection = document.querySelector('#contact-me');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    const scrollToProjects = () => {
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    return (_jsxs(Grid2Wrapper, { isMobile: isMobile, container: true, spacing: 2, children: [_jsx(Grid2Container, { isMobile: isMobile, size: { xs: 12, md: 6 }, children: _jsxs(SectionWrapper, { isMobile: isMobile, children: [_jsx(HeroHello, { children: "Hey! I'm" }), _jsx(MeName, { children: _jsx(TypewriterComponent, { options: {
                                    strings: ['Hiten Savaliya'],
                                    autoStart: true,
                                    loop: true,
                                } }) }), _jsx(Description, { children: "Building simple and beautiful things for complex interfaces is what I enjoy most about my work. I am also interested in crafting beautiful minimal products and exploring new worlds." }), _jsx(SocialMediaLinks, {}), _jsxs(ButtonWrapper, { children: [_jsx(PrimaryButton, { onClick: () => scrollToContact(), children: "Hire Me" }), _jsx(SecondaryButton, { onClick: () => scrollToProjects(), children: "See My work" })] })] }) }), _jsxs(Grid2Container, { isMobile: isMobile, size: { xs: 12, md: 6 }, children: [_jsx(ImageContainer, { src: hiten, isMobile: isMobile }), !isMobile && (_jsxs(_Fragment, { children: [_jsx(RightContainer, {}), _jsx(RightContainerDark, {})] }))] })] }));
};
