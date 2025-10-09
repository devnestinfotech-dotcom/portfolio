import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Description, Heading, SectionWrapper, SocialMediaLinksWrapper } from './index.styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useIsMobile from '../../hooks/useIsMobile';
export const Footer = () => {
    const isMobile = useIsMobile();
    return (_jsxs(SectionWrapper, { isMobile: isMobile, children: [_jsx(Heading, { children: "Hiten." }), _jsxs(Description, { children: ["\u00A9 2025 Hiten. Design & Develop with ", _jsx(FavoriteIcon, { style: { color: 'red' } })] }), _jsxs(SocialMediaLinksWrapper, { children: [_jsx(FacebookIcon, { onClick: () => window.open('https://www.facebook.com/profile.php?id=61581727723864', '_blank'), style: { cursor: 'pointer' } }), _jsx(XIcon, { onClick: () => window.open('https://x.com/DevNestInfoTech', '_blank'), style: { cursor: 'pointer' } }), _jsx(InstagramIcon, { onClick: () => window.open('https://www.instagram.com/devnestinfotech/', '_blank'), style: { cursor: 'pointer' } }), _jsx(LinkedInIcon, { onClick: () => window.open('https://www.linkedin.com/in/devnesttech-infotech-a96553389/', '_blank'), style: { cursor: 'pointer' } })] })] }));
};
