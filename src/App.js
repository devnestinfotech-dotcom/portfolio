import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import './App.css';
import { AboutMe } from './components/AboutMe';
import { ContactUs } from './components/ContactUs';
import { HeroSection } from './components/HeroSection';
import { HireMe } from './components/HireMe';
import Navigation from './components/Navigation';
import { Service } from './components/Service';
import { Testimonial } from './components/Testimonial';
import { Works } from './components/Works';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
function App() {
    const [activeSection, setActiveSection] = useState('home');
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        console.log({ sections });
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log({ entry });
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.5,
        });
        sections.forEach((section) => {
            observer.observe(section);
        });
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Navigation, { activeSection: activeSection, setActiveSection: setActiveSection }), _jsx("section", { id: 'home', children: _jsx(HeroSection, {}) }), _jsx("section", { id: 'about-me', children: _jsx(AboutMe, {}) }), _jsx("section", { id: 'service', children: _jsx(Service, {}) }), _jsx("section", { id: 'projects', children: _jsx(Works, {}) }), _jsx("section", { id: 'testimonial', children: _jsx(Testimonial, {}) }), _jsx("section", { id: 'hire-me', children: _jsx(HireMe, {}) }), _jsxs("section", { id: 'contact-me', children: [_jsx(ContactUs, {}), _jsx(Footer, {})] }), activeSection !== 'home' && _jsx(ScrollToTop, {})] }));
}
export default App;
