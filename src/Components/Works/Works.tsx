import useWindowSize from '../../_utils/useWindowSize';
import { workItems } from './WorkItems'

export const Works: React.FC = () => {
  const [width] = useWindowSize();

  return (
    <section id="work" className="works">
      <h2 className="works__title">
        <span className="works__title--light">Selected </span>
        <span className="works__title--bold">Works</span>
      </h2>

      {width > 1023 ? (
        workItems.map((item, index) => (
          <article key={index} className={`work work-${item.type}`}>
            <img
              src={item.images.large}
              srcSet={`
                ${item.images.small} 480w,
                ${item.images.medium} 1024w,
                ${item.images.large} 1920w
              `}
              sizes="(max-width: 480px) 480px, (max-width: 1440px) 1440px, 1920px"
              alt={`${item.title} work image`}
              className={`work__image work__image--${item.type}`}
            />

            <div className={`work__wrapper-description-desktop--${item.type}`}>
              <h3 className="work__title">{item.title}</h3>
              <p className="work__description">
                {item.description.map((part, partIndex) => (
                  <span key={partIndex} className={
                    part.isBold
                      ? 'work__description--bold'
                      : 'work__description--light'}
                  >
                    {part.text}
                  </span>
                ))}
              </p>
              <p className="work__category">
                {item.category}
              </p>
              <a
                href={item.link}
                className="work__button"
                rel="noopener noreferrer" target="_blank"
              >
                VIEW WORK
              </a>
            </div>
          </article>
        ))
      ) : (
        workItems.map((item, index) => (
          <article key={index} className={`work work--${item.type}`}>
            <img
              src={item.images.small}
              srcSet={`
                ${item.images.small} 480w,
                ${item.images.medium} 1024w,
                ${item.images.large} 1920w
              `}
              sizes="(max-width: 480px) 480px, (max-width: 1440px) 1440px, 1920px"
              alt={`${item.title} work image`}
              className="work__image"
            />

            <h3 className="work__title">{item.title}</h3>

            <p className="work__description">
              {item.description.map((part, partIndex) => (
                <span key={partIndex} className={
                  part.isBold
                    ? 'work__description--bold'
                    : 'work__description--light'}
                >
                  {part.text}
                </span>
              ))}
            </p>
            <p className="work__category">
              {item.category}
            </p>
            <a
              href={item.link}
              className="work__button"
              rel="noopener noreferrer" target="_blank"
            >
              VIEW WORK
            </a>
          </article>
        ))
      )}
    </section>
  );
};