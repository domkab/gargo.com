import mail from '../../icons/mail.svg'
import instagram from '../../icons/ig.svg';
import x from '../../icons/x.svg';
import discord from '../../icons/discord.svg'
import phone from '../../icons/phone.svg'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h2 className="footer__headings">
        <span className="footer__heading--light">Get</span>
        <span className="footer__heading">{' '}in Touch.</span>

        <p className="footer__desc">So that we can talk more about...</p>
      </h2>

      <ul className="footer__contacts" aria-label="Contact methods">
        <li className="footer__contact">
          <a
            href="/"
            aria-label="Email"
          >
            <img src={mail} alt="Email" />
          </a>
        </li>

        <li className="footer__contact">
          <a
            href="/"
            aria-label="Instagram"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </li>

        <li className="footer__contact">
          <a
            href="/"
            aria-label="X"
          >
            <img src={x} alt="X" />
          </a>
        </li>

        <li className="footer__contact">
          <a
            href="/"
            aria-label="discord"
          >
            <img src={discord} alt="discord" />
          </a>
        </li>

        <li className="footer__contacts-contact">
          <a
            href="/"
            aria-label="phone"
          >
            <img src={phone} alt="phone" />
          </a>
        </li>
      </ul>
    </footer>
  )
}