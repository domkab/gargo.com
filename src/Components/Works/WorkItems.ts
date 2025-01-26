import nextveloProeyewear480 from '../../images/nextvelo-proeyewear480.png';
import nextveloProeyewear1920 from '../../images/nextvelo-proeyewear1920.png';
import videoProduction480 from '../../images/video-production480.png';
import videoProduction1920 from '../../images/video-production1920.png';
import motoInn480 from '../../images/moto-inn480.png';
import motoInn1920 from '../../images/moto-inn1920.png';
import hypeSix480 from '../../images/hype-six480.png';
import hypeSix1920 from '../../images/hype-six1920.png';

export type DescriptionPart = {
  text: string;
  isBold: boolean;
};

export type WorkItem = {
  type: string;
  images: {
    small: string;
    large: string;
  };
  title: string;
  description: DescriptionPart[];
  category: string;
  link: string;
};

export const workItems: WorkItem[] = [
  {
    type: '1',
    images: {
      small: nextveloProeyewear480,
      large: nextveloProeyewear1920
    },
    title: 'nexvelo x pro eyewear',
    description: [
      { text: 'MTB pros in action, flaunting BLITZ sports glasses', isBold: false },
      { text: ' 3D animation finale highlighting the sleek design.', isBold: true }
    ],
    category: 'Videography, Video Editing, 3D Animation',
    link: 'https://www.instagram.com/nextvelo_com/reel/Cz3_oPsNMSP/',
  },
  {
    type: '2',
    images: {
      small: videoProduction480,
      large: videoProduction1920
    },
    title: 'video production+',
    description: [
      { text: '3D animation unfolds as the VP+ logo glides through ', isBold: false },
      { text: 'a realm of luminous orbs and smaller VP+ insignias.', isBold: true },
    ],
    category: '3D animation',
    link: 'https://x.com/ItsJackCole/status/1725167281431302454?s=20'
  },
  {
    type: '1',
    images: {
      small: motoInn480,
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
  {
    type: '2',
    images: {
      small: hypeSix480,
      large: hypeSix1920,
    },
    title: 'hype6',
    description: [
      {
        text: 'Creating a T-shirt design and translating it into 3D space, merging creativity and ',
        isBold: false
      },
      { text: 'technical skills for impactful marketing representation.', isBold: true },
    ],
    category: 'Graphic Design, 3D Modeling',
    link: 'https://www.instagram.com/p/Cy286HQts8G/?igsh=MnBnMGpqc3RreHhx'
  },
];