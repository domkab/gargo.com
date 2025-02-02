import { useEffect, useState } from 'react';
import logo from '../../icons/logo.png';

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (sectionId: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getNavLinkClass = (sectionId: string) => {
    return activeSection === sectionId
      ? "header__nav-link header__nav-link--active"
      : "header__nav-link";
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about'];
      const currentSection = sections.find(sectionId => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const sectionBottom = sectionTop + section.offsetHeight;

          return window.scrollY >= sectionTop && window.scrollY < sectionBottom;
        }
        return false;
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection || 'home');
      }
    };

    // Execute the scroll handling on initial load
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="site logo" />
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#home"
              onClick={e => handleNavClick('home', e)}
              className={getNavLinkClass('home')}
            >
              HOME
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#work"
              onClick={e => handleNavClick('work', e)}
              className={getNavLinkClass('work')}
            >
              WORK
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#about"
              onClick={e => handleNavClick('about', e)}
              className={getNavLinkClass('about')}
            >
              ABOUT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};