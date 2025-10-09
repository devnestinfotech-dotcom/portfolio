import { useState } from 'react';
import { Toolbar, Drawer, ListItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  StyledAppBar,
  NavLinks,
  HamburgerMenu,
  DrawerList,
  NavLink,
  DrawerNavLink,
} from './index.styles';
import useIsMobile from '../../hooks/useIsMobile';
import { HeroHello } from '../HeroSection/index.styles';
import useScrollTop from '../../common/useScrollAtTop';

const ResponsiveNavbar = ({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const isMobile = useIsMobile();
  const isAtTop = useScrollTop();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
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

  const handleScrollToSection = (route: string) => {
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

  return (
    <StyledAppBar
      isAtTop={isAtTop}
      position="sticky"
      style={{ padding: isMobile ? '0px 24px' : '0px 96px', zIndex: 999 }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }} style={{ padding: 0 }}>
        {isMobile && (
          <HamburgerMenu edge="start" color="inherit" onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </HamburgerMenu>
        )}

        <HeroHello>Hiten.</HeroHello>

        {!isMobile && (
          <NavLinks>
            {navItems?.map((item) => (
              <NavLink
                href={item?.route}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(item?.route);
                }}
                selected={item?.route === activeSection}
              >
                {item?.name}
              </NavLink>
            ))}
          </NavLinks>
        )}
      </Toolbar>

      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
          <DrawerList>
            <IconButton onClick={() => toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
            {navItems?.map((item) => (
              <ListItem key={item?.route}>
                <DrawerNavLink
                  onClick={() => handleScrollToSection(item?.route)} // Smooth scroll on click
                  selected={item?.route === activeSection}
                >
                  {item?.name}
                </DrawerNavLink>
              </ListItem>
            ))}
          </DrawerList>
        </Drawer>
      )}
    </StyledAppBar>
  );
};

export default ResponsiveNavbar;
