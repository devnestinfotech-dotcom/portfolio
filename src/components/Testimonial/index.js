import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { TestimonialCard } from '../TestimonialCard';
import { Description, Heading, SectionWrapperWhite } from '../../common/common.styles';
import { HeaderWrapper } from './index.styles';
import useIsMobile from '../../hooks/useIsMobile';
export const Testimonial = () => {
    const isMobile = useIsMobile();
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    };
    const testiMonials = [
        {
            name: 'Inba',
            description: 'It’s rare to find someone so reliable and consistent. Updates, fixes, and support are always handled quickly, making the whole experience stress-free.',
            address: 'India',
            ratting: 5,
        },
        {
            name: 'Ravi Basker',
            description: 'Communication was clear from start to finish. The development process was smooth, and the project was completed on time without any issues.',
            address: 'USA',
            ratting: 5,
        },
        {
            name: 'Rohith',
            description: 'As a startup, we needed a fast and scalable website. Hiten built a site that not only looks sleek but is also easy to manage and update. He truly understands business needs.',
            address: 'India',
            ratting: 5,
        },
        {
            name: 'gabriel',
            description: 'We had a creative design in mind, and Hiten brought it to life flawlessly. The site feels interactive, smooth, and visually stunning. His frontend skills are top-notch.',
            address: 'Poland',
            ratting: 5,
        },
    ];
    return (_jsxs(SectionWrapperWhite, { isMobile: isMobile, children: [_jsxs(HeaderWrapper, { children: [_jsx(Heading, { children: "Client's Review" }), _jsx(Description, { isMobile: isMobile, children: "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development." })] }), _jsx(OwlCarousel, { className: "owl-theme", ...options, children: testiMonials?.map((item) => (_jsx(TestimonialCard, { designation: item?.address, name: item?.name, feedback: item?.description, rating: item?.ratting }))) })] }));
};
