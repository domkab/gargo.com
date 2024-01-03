import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = () => {
  const getNavLinkClass = (isActive: boolean) => {
    return isActive ? "header__nav-link header__nav-link--active" : "header__nav-link";
  };

  return (
    <header className="header">
      <h1 className="header__logo">GARGO</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink
              to="/" end
              className={({ isActive }) => getNavLinkClass(isActive)}>
              HOME
            </NavLink>
          </li>

          <li className="header__nav-item">
            <NavLink
              to="/work"
              className={({ isActive }) => getNavLinkClass(isActive)}>
              WORK
            </NavLink>
          </li>

          <li className="header__nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => getNavLinkClass(isActive)}>
              ABOUT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};