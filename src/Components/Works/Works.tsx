import nextveloProeyewear from '../../images/nextvelo-proeyewear.png';

export const Works: React.FC = () => {
  return (
    <section className="works">
      <h2 className="works__title">
        <span className="works__title--light">Selected </span>
        <span className="works__title--bold">Works</span>
      </h2>

      <article className="work">
        <img
          src={nextveloProeyewear} alt="Pro Eye Wear work image"
          className="work__image"
        />

        <h3 className="work__title">NEXTVELO X PROEYEWEAR</h3>

        <p className="work__description">
          <span className="work__description--light">
            MTB pros in action, flaunting BLITZ sports glasses.
          </span>

          <span className="work__description--bold">
            {' '} 3D animation finale highlighting the sleek design.
          </span>
        </p>

        <p className="work__category">
          Videography, Video Editing, 3D Animation
        </p>

        <a
          href="https://www.instagram.com/nextvelo_com/reel/Cz3_oPsNMSP/"
          className="work__button">
          VIEW WORK
        </a>

      </article>
    </section>
  )
}