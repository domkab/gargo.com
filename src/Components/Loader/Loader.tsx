import { useEffect } from 'react';
import logo from '../../icons/Logo.png';

export const Loader: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="loader">
      <img className="loader__logo" src={logo} alt="Logo in loading screen" />
      <div className="loader__spinner"></div>
      <p className="loader__text">Welcome...</p>
    </div>
  );
};
