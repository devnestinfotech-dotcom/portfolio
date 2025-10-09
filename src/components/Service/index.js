import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid2 } from '@mui/material';
import { ServiceCard } from '../ServiceCard';
import { 
// Description,
Grid2Wrapper,
// Heading,
 } from './index.styles';
import { useTheme } from '@mui/material/styles';
import { Description, Heading, SectionWrapperGray } from '../../common/common.styles';
import useIsMobile from '../../hooks/useIsMobile';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import IntegrationInstructionsTwoToneIcon from '@mui/icons-material/IntegrationInstructionsTwoTone';
export const Service = () => {
    const theme = useTheme();
    const isMobile = useIsMobile();
    const serviceList = [
        {
            title: 'Custom Website Development',
            description: 'I build fully responsive, fast, and user-friendly websites using modern technologies like React, Next.js, and TypeScript — designed to engage visitors and drive results.',
            icon: LanguageTwoToneIcon,
        },
        {
            title: 'Frontend Development',
            description: 'Clean, pixel-perfect, and SEO-optimized frontend development that ensures your website looks stunning on every device while offering a seamless user experience.',
            icon: CodeTwoToneIcon,
        },
        {
            title: 'UI/UX Implementation',
            description: 'Turning Figma, XD, or Sketch designs into interactive web pages with attention to detail, usability, and accessibility.',
            icon: DesignServicesTwoToneIcon,
        },
        {
            title: 'Performance Optimization',
            description: 'Boost your website speed, SEO ranking, and overall performance with optimized code, caching, and best development practices.',
            icon: SpeedTwoToneIcon,
        },
        {
            title: 'Website Maintenance & Support',
            description: 'Ongoing support, updates, and bug fixes to keep your website secure, fast, and up to date with the latest technologies.',
            icon: BuildTwoToneIcon,
        },
        {
            title: 'API Integration & Dynamic Features',
            description: 'Integration of third-party APIs, payment gateways, and custom features to make your website more dynamic and business-ready.',
            icon: IntegrationInstructionsTwoToneIcon,
        },
    ];
    return (_jsxs(SectionWrapperGray, { isMobile: isMobile, children: [_jsx(Heading, { children: "What do i offer?" }), _jsx(Description, { isMobile: isMobile, children: "With 4.5+ years of experience, I provide complete web development solutions that are modern, scalable, and tailored to your business goals. From design to deployment, I help brands establish a strong digital presence with high-performing websites." }), _jsx(Grid2Wrapper, { container: true, spacing: 4, children: serviceList?.map((item) => {
                    const Icon = item?.icon;
                    return (_jsx(Grid2, { size: { xs: 12, md: 4 }, minHeight: '200px', children: _jsx(ServiceCard, { title: item?.title, description: item?.description, icon: _jsx(Icon, { style: {
                                    color: theme.palette.secondary.main,
                                    height: '40px',
                                    width: '40px',
                                } }) }) }));
                }) })] }));
};
