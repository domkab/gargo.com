import nextveloProeyewear480 from '../../images/nextvelo-proeyewear480.png';
import nextveloProeyewear1440 from '../../images/nextvelo-proeyewear1440.png';
import nextveloProeyewear1920 from '../../images/nextvelo-proeyewear1920.png';
import videoProduction480 from '../../images/video-production480.png';
import videoProduction1440 from '../../images/video-production1440.png';
import videoProduction1920 from '../../images/video-production1920.png';
import motoInn480 from '../../images/moto-inn480.png';
import motoInn1440 from '../../images/moto-inn1440.png';
import motoInn1920 from '../../images/moto-inn1920.png';
import hypeSix480 from '../../images/hype-six480.png';
import hypeSix1440 from '../../images/hype-six1440.png';
import hypeSix1920 from '../../images/hype-six1920.png';
import { WorkItem } from '../../types';

export const workItems: WorkItem[] = [
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
  {
    images: {
      small: hypeSix480,
      medium: hypeSix1440,
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
