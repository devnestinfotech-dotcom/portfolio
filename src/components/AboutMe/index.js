import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SecondaryButton, SectionWrapperWhite } from '../../common/common.styles';
import useIsMobile from '../../hooks/useIsMobile';
import { Container, Description, Heading, LeftContainer, ImgBox, RightContainer, BoxCard, SmallTextHeading, SmallTextHeighlight, SmallTextDesc, } from './index.styles';
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
    return (_jsx(SectionWrapperWhite, { isMobile: isMobile, children: _jsxs(Container, { isMobile: isMobile, children: [_jsxs(LeftContainer, { children: [_jsx(ImgBox, { src: hiten, isMobile: isMobile }), _jsxs(BoxCard, { isMobile: isMobile, children: [_jsx(SmallTextHeading, { children: "Web Developer" }), _jsx(SmallTextHeighlight, { children: "4.5+ " }), _jsx(SmallTextDesc, { children: "Years Experience" })] })] }), _jsxs(RightContainer, { isMobile: isMobile, children: [_jsx(Heading, { children: "I'm a Passionate Web Developer" }), _jsx(Description, { children: "I\u2019m a passionate Web Developer with 4.5+ years of experience creating sleek, modern, and user-friendly websites. From startups to growing businesses, I help bring ideas to life with clean code, responsive designs, and seamless functionality." }), _jsx(Description, { children: "I specialize in building high-performing, professional websites that are optimized for growth, usability, and long-term success." }), _jsx(SecondaryButton, { onClick: scrollToProjects, children: "See work" })] })] }) }));
};
