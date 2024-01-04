import Spline from '@splinetool/react-spline';
import arrowDown from '../../icons/chevron-down.svg';
import nextvelo from '../../icons/clients/nextvelo.svg';
import videoproduction from '../../icons/clients/videoproductionplus.svg';
import hype6 from '../../icons/clients/hype6.svg';
import proeyewear from '../../icons/clients/proeyewear.svg';
import motoinn from '../../icons/clients/motoinn.svg';

export const Hero: React.FC = () => {

  return (
    <section className="hero">
      <Spline
        scene="https://prod.spline.design/dJ9MEKaaSJsblfYj/scene.splinecode"
        className="hero__object"
      />

      <img
        className="hero__icon"
        src={arrowDown}
        alt="arrow icon down"
      />

      <h2 className="hero__title">
        <span className="hero__title--light">Some of the clients</span>
        <span className="hero__title--bold">I have worked with</span>
      </h2>

      <article className="hero__clients">
        <div className="hero__client-container">
          <img className="hero__client" src={nextvelo} alt="Next Velo" />
          <img className="hero__client" src={videoproduction} alt="Video Production Plus" />
        </div>

        <div className="hero__client-container">
          <img className="hero__client" src={proeyewear} alt="Pro Eye Wear" />
          <img className="hero__client" src={hype6} alt="Hype Six" />
        </div>

        <div className="hero__client-container hero__client-container--last">
          <img className="hero__client" src={motoinn} alt="Moto Inn" />
        </div>
      </article>
    </section>
  );
};
