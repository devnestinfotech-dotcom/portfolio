import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SectionWrapper, SocialButton } from './index.styles';
const SocialMediaLinks = () => {
    return (_jsxs(SectionWrapper, { children: [_jsx(SocialButton, { onClick: () => window.open('https://www.facebook.com/profile.php?id=61581727723864', '_blank'), children: _jsx(FacebookIcon, {}) }), _jsx(SocialButton, { onClick: () => window.open('https://x.com/DevNestInfoTech', '_blank'), children: _jsx(XIcon, {}) }), _jsx(SocialButton, { onClick: () => window.open('https://www.instagram.com/devnestinfotech/', '_blank'), children: _jsx(InstagramIcon, {}) }), _jsx(SocialButton, { onClick: () => window.open('https://www.linkedin.com/in/devnesttech-infotech-a96553389/', '_blank'), children: _jsx(LinkedInIcon, {}) })] }));
};
export default SocialMediaLinks;
