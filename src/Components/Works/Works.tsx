import { workItems } from './WorkItems';
import chevron from '../../icons/arrowRightIcon.svg';

export const Works: React.FC = () => {
  return (
    <section className="works" id="work">
      <div className="container">
        <div className="works__content">
          <h2 className="works__title">
            <span className="works__title--light">Selected </span>
            <span className="works__title--bold">Projects</span>
          </h2>

          {workItems.map((item, index) => (
            <article key={index} className={`work work-${item.type}`}>
              <img
                src={item.images.small}
                srcSet={`${item.images.small} 480w, ${item.images.large} 1920w`}
                sizes="(max-width: 768px) 100vw, 1920px"
                alt={`${item.title} work image`}
                className={`work__image work__image--${item.type}`}
                loading="lazy"
              />

              <div className={`work__wrapper-description-desktop work__wrapper-description-desktop--${item.type}`}>
                <h3 className="work__title">{item.title}</h3>

                <p className="work__description">
                  {item.description.map((part, partIndex) => (
                    <span
                      key={partIndex}
                      className={part.isBold ? 'work__description--bold' : 'work__description--light'}
                    >
                      {part.text}
                    </span>
                  ))}
                </p>

                <p className="work__category">
                  {item.category}
                </p>

                <p className="work__category">
                  {item.client}
                </p>

                <a
                  href={item.link}
                  className="work__button"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  VIEW
                  <img className='work__button--icon' src={chevron} alt="chevron icon pointing right" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};