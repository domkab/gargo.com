import nextveloProeyewear480 from '../../images/nextvelo-proeyewear480.png';
import nextveloProeyewear1440 from '../../images/nextvelo-proeyewear1440.png';
import nextveloProeyewear1920 from '../../images/nextvelo-proeyewear1920.png';
import videoProduction480 from '../../images/video-production480.png';
import videoProduction1440 from '../../images/video-production1440.png';
import videoProduction1920 from '../../images/video-production1920.png';
import motoInn480 from '../../images/moto-inn480.png';
import motoInn1440 from '../../images/moto-inn1440.png';
import motoInn1920 from '../../images/moto-inn1920.png';

type DescriptionPart = {
  text: string;
  isBold: boolean;
};

type WorkItem = {
  images: {
    small: string;
    medium: string;
    large: string;
  };
  title: string;
  description: DescriptionPart[];
  category: string;
  link: string;
};

const workItems: WorkItem[] = [
  {
    images: {
      small: nextveloProeyewear480,
      medium: nextveloProeyewear1440,
      large: nextveloProeyewear1920
    },
    title: 'nexvelo x pro eyewear',
    description: [
      { text: 'MTB pros in action, flaunting BLITZ sports glasses', isBold: false },
      { text: '3D animation finale highlighting the sleek design.', isBold: true }
    ],
    category: 'Videography, Video Editing, 3D Animation',
    link: 'https://www.instagram.com/nextvelo_com/reel/Cz3_oPsNMSP/'
  },
  {
    images: {
      small: videoProduction480,
      medium: videoProduction1440,
      large: videoProduction1920
    },
    title: 'video production+',
    description: [
      { text: '3D animation unfolds as the VP+ logo glides through ', isBold: false },
      { text: 'a realm of luminous orbs', isBold: true },
      { text: ' and smaller VP+ insignias.', isBold: false },
    ],
    category: '3D animation',
    link: 'https://x.com/ItsJackCole/status/1725167281431302454?s=20'
  },
  {
    images: {
      small: motoInn480,
      medium: motoInn1440,
      large: motoInn1920
    },
    title: 'moto inn',
    description: [
      { text: 'Drone-shot video unveils new motorcycle shops ', isBold: false },
      { text: 'with cinematic aerial views.', isBold: true },
    ],
    category: 'Videography, Video Editing',
    link: 'https://www.instagram.com/moto.inn/reel/Csf-CzMM8nz'
  },
];

export const Works: React.FC = () => {
  return (
    <section className="works">
      <h2 className="works__title">
        <span className="works__title--light">Selected </span>
        <span className="works__title--bold">Works</span>
      </h2>

      {workItems.map((item, index) => (
        <article key={index} className="work">
          <img
            src={item.images.small}
            srcSet={`
              ${item.images.small} 480w,
              ${item.images.medium} 1440w,
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
      ))}
    </section>
  )
}