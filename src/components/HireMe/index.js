import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    return (_jsx(_Fragment, { children: _jsxs(SectionWrapper, { children: [_jsxs(Heading, { children: ["Do you have a Project Idea?", _jsx("br", {}), "Let's discuss your project!"] }), _jsx(Description, { isMobile: isMobile, children: "I'm always open to discussing new projects and creative ideas. Let's connect and build something amazing together." }), _jsxs(PrimaryButton, { onClick: () => scrollToContact(), children: ["Let's work Together", _jsx(ArrowForward, {})] })] }) }));
};
