import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Toolbar, Drawer, ListItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { StyledAppBar, NavLinks, HamburgerMenu, DrawerList, NavLink, DrawerNavLink, } from './index.styles';
import useIsMobile from '../../hooks/useIsMobile';
import { HeroHello } from '../HeroSection/index.styles';
import useScrollTop from '../../common/useScrollAtTop';
const ResponsiveNavbar = ({ activeSection, setActiveSection, }) => {
    const isMobile = useIsMobile();
    const isAtTop = useScrollTop();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };
    const navItems = [
        {
            name: 'Home',
            route: 'home',
        },
        {
            name: 'About Me',
            route: 'about-me',
        },
        {
            name: 'Service',
            route: 'service',
        },
        {
            name: 'Projects',
            route: 'projects',
        },
        {
            name: 'Contact Me',
            route: 'contact-me',
        },
    ];
    const handleScrollToSection = (route) => {
        const targetSection = document.getElementById(route);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.getBoundingClientRect().top + window.pageYOffset - 64,
                behavior: 'smooth',
            });
            setActiveSection(route);
            setDrawerOpen(false);
        }
    };
    return (_jsxs(StyledAppBar, { isAtTop: isAtTop, position: "sticky", style: { padding: isMobile ? '0px 24px' : '0px 96px', zIndex: 999 }, children: [_jsxs(Toolbar, { sx: { justifyContent: 'space-between' }, style: { padding: 0 }, children: [isMobile && (_jsx(HamburgerMenu, { edge: "start", color: "inherit", onClick: () => toggleDrawer(true), children: _jsx(MenuIcon, {}) })), _jsx(HeroHello, { children: "Hiten." }), !isMobile && (_jsx(NavLinks, { children: navItems?.map((item) => (_jsx(NavLink, { href: item?.route, onClick: (e) => {
                                e.preventDefault();
                                handleScrollToSection(item?.route);
                            }, selected: item?.route === activeSection, children: item?.name }))) }))] }), isMobile && (_jsx(Drawer, { anchor: "left", open: drawerOpen, onClose: () => toggleDrawer(false), children: _jsxs(DrawerList, { children: [_jsx(IconButton, { onClick: () => toggleDrawer(false), children: _jsx(CloseIcon, {}) }), navItems?.map((item) => (_jsx(ListItem, { children: _jsx(DrawerNavLink, { onClick: () => handleScrollToSection(item?.route), selected: item?.route === activeSection, children: item?.name }) }, item?.route)))] }) }))] }));
};
export default ResponsiveNavbar;
