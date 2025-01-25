import Spline from '@splinetool/react-spline';
import arrowDown from '../../icons/chevron-down.svg';
import nextvelo from '../../icons/clients/nextvelo.svg';
import videoproduction from '../../icons/clients/videoproductionplus.svg';
import hype6 from '../../icons/clients/hype6.svg';
import proeyewear from '../../icons/clients/proeyewear.svg';
import motoinn from '../../icons/clients/motoinn.svg';
import useWindowSize from '../../_utils/useWindowSize';

export const Hero: React.FC = () => {
  const [width] = useWindowSize();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <Spline
            scene="https://prod.spline.design/dJ9MEKaaSJsblfYj/scene.splinecode"
            className="hero__object"
          />
          <img
            className="hero__icon"
            src={arrowDown}
            alt="arrow icon down"
          />
          {width > 1023 ? (
            <div className="hero__clients-container">
              <h2 className="hero__title">
                <span className="hero__title--light">Some of </span>
                <span className="hero__title--bold">the clients I have worked with</span>
              </h2>
              <article className="hero__clients">
                <div className="hero__client-container">
                  <img className="hero__client hero__client--nextvelo" src={nextvelo} alt="Next Velo" />
                  <img className="hero__client hero__client--videoproduction" src={videoproduction} alt="Video Production Plus" />
                  <img className="hero__client hero__client--motoinn" src={motoinn} alt="Moto Inn" />
                  <img className="hero__client hero__client--proeyewear" src={proeyewear} alt="Pro Eye Wear" />
                  <img className="hero__client hero__client--hype6" src={hype6} alt="Hype Six" />
                </div>
              </article>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};
