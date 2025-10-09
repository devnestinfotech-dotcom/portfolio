import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid2 } from '@mui/material';
import { ProjectCard } from '../ProjectCard';
import { Grid2Wrapper } from './index.styles';
import { Description, Heading, SectionWrapperGray } from '../../common/common.styles';
import useIsMobile from '../../hooks/useIsMobile';
import project1 from '../../assets/projects/project1.png';
import project2 from '../../assets/projects/project2.png';
import project3 from '../../assets/projects/project3.png';
import project4 from '../../assets/projects/project4.png';
import project5 from '../../assets/projects/project5.png';
export const Works = () => {
    const isMobile = useIsMobile();
    const projectList = [
        {
            title: 'Fieldcamp',
            description: 'FieldCamp comes with all the essential features, such as scheduling, dispatching, invoicing, follow-ups, payment processing, reporting, and even customer reviews — it’s all packed into a small but mighty field service company app.',
            imgUrl: project2,
            skills: ['Reactjs', 'Typescript', 'Redux-thunk', 'MUI'],
            link: 'https://fieldcamp.com/',
        },
        {
            title: 'The Draft',
            description: 'A professional networking platform similar to LinkedIn, built with modern web technologies. It allows users to create profiles, connect with professionals, share updates, and grow their network in a secure, scalable environment.',
            imgUrl: project1,
            skills: ['Nextjs', 'Typescript', 'Redux-query', 'tailwind'],
            link: 'https://thedraft.io/',
        },
        {
            title: 'Visitingmedia',
            description: 'A platform for startups to connect with investors, mentors, and other entrepreneurs. It allows startups to create profiles, connect with investors, and grow their network in a secure, scalable environment.',
            imgUrl: project4,
            skills: ['Reactjs', 'Typescript', 'Redux-saga', '3js', 'SematicUI'],
            link: 'https://visitingmedia.com/',
        },
        {
            title: 'Breville',
            description: 'A virtual tour platform for the hospitality industry, offering immersive 360° hotel and venue experiences to simplify sales and enhance customer engagement.',
            imgUrl: project3,
            skills: ['Reactjs', 'Typescript', 'ChakraUI'],
            link: 'https://breville.com/en-us',
        },
        {
            title: 'CoreFit Gym',
            description: 'A modern single-page gym website featuring dynamic sections for services, class schedules, trainer profiles, and membership plans. Built with responsive design to showcase the gym\'s facilities and encourage visitor engagement.',
            imgUrl: project5,
            skills: ['Reactjs', 'Typescript', 'ChakraUI'],
            link: 'https://breville.com/en-us',
        },
    ];
    return (_jsxs(SectionWrapperGray, { isMobile: isMobile, children: [_jsx(Heading, { children: "My Latest Work" }), _jsx(Description, { isMobile: isMobile, children: "A showcase of my recent projects, highlighting modern design, clean code, and impactful digital experiences." }), _jsx(Grid2Wrapper, { container: true, spacing: 2, children: projectList?.map((item) => (_jsx(Grid2, { size: { xs: 12, md: 4 }, children: _jsx(ProjectCard, { title: item?.title, description: item?.description, imgUrl: item?.imgUrl, skills: item?.skills, link: item?.link }) }))) })] }));
};
