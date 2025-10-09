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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log({ entry });
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <section id={'home'}>
        <HeroSection />
      </section>
      <section id={'about-me'}>
        <AboutMe />
      </section>
      <section id={'service'}>
        <Service />
      </section>
      <section id={'projects'}>
        <Works />
      </section>
      <section id={'testimonial'}>
        <Testimonial />
      </section>
      <section id={'hire-me'}>
        <HireMe />
      </section>
      <section id={'contact-me'}>
        <ContactUs />
        <Footer />
      </section>
      {activeSection !== 'home' && <ScrollToTop />}
    </>
  );
}

export default App;
