import Mail from '../../icons/Mail/Mail';
import Instagram from '../../icons/Instagram/Instagram';
import X from '../../icons/X/X';
import Discord from '../../icons/Discord/Discord';
import Phone from '../../icons/Phone/Phone';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h2 className="footer__headings">
        <span
          className="footer__heading footer__heading--light">
          Get
        </span>

        <span
          className="footer__heading">
          {' '}in Touch.
        </span>

        <p className="footer__desc">
          So that we can talk more about...
        </p>
      </h2>

      <ul className="footer__contacts" aria-label="Contact methods">
        <li className="footer__contact">
          <a
            href="mailto:laurynas.gargasas@gmail.com"
            aria-label="Email"
          >
            <Mail className="footer__contact-icon"/>
          </a>
        </li>

        <li className="footer__contact">
          <a
            href="https://www.instagram.com/gargo_productions/?igsh=MWNlbmg2endoemVtbA%3D%3D"
            aria-label="Instagram"
          >
            <Instagram className="footer__contact-icon"/>
          </a>
        </li>

        <li className="footer__contact">
          <a
            href="https://twitter.com/gargo_ll?t=5R7tXis2Qy8fS21jmBe0Ew&s=09"
            aria-label="X"
          >
            <X className="footer__contact-icon"/>
          </a>
        </li>

        <li className="footer__contact">
          <a
            href="https://discordapp.com/users/gargo666"
            aria-label="discord"
          >
            <Discord className="footer__contact-icon"/>
          </a>
        </li>

        <li className="footer__contacts-contact">
          <a
            href="+37061550539"
            aria-label="phone"
          >
            <Phone className="footer__contact-icon"/>
          </a>
        </li>
      </ul>
    </footer>
  )
}