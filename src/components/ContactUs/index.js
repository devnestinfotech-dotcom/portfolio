import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from '@mui/material';
import { DividerComp, Grid2Container, Grid2Wrapper, Heading, IconValueBox, SectionGroup, SectionHeading, SectionWrapper, Title, ValueBox, } from './index.styles';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ContactForm } from '../ContactForm';
import useIsMobile from '../../hooks/useIsMobile';
export const ContactUs = () => {
    const isMobile = useIsMobile();
    return (_jsxs(Grid2Wrapper, { container: true, spacing: 2, children: [_jsx(Grid2Container, { size: { xs: 12, md: 5 }, children: _jsxs(SectionWrapper, { isMobile: isMobile, children: [_jsx(Heading, { children: "Let's Connect" }), _jsx(Title, { children: "Looking for help? Fill the form and start a new adventure." }), _jsx(DividerComp, {}), _jsxs(SectionGroup, { children: [_jsxs(Box, { children: [_jsxs(IconValueBox, { children: [_jsx(CallIcon, {}), _jsx(SectionHeading, { children: "Phone" })] }), _jsx(ValueBox, { children: "(+91) 9974927198" })] }), _jsxs(Box, { children: [_jsxs(IconValueBox, { children: [_jsx(EmailIcon, {}), _jsx(SectionHeading, { children: "Support" })] }), _jsx(ValueBox, { children: "devnestinfotech@gmail.com" })] }), _jsxs(Box, { children: [_jsxs(IconValueBox, { children: [_jsx(LocationOnIcon, {}), _jsx(SectionHeading, { children: "Location" })] }), _jsx(ValueBox, { children: "Rajot - 360005, Gujarat, India" })] })] })] }) }), _jsx(Grid2Container, { size: { xs: 12, md: 7 }, children: _jsx(SectionWrapper, { isMobile: isMobile, children: _jsx(ContactForm, {}) }) })] }));
};
