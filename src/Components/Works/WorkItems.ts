import nextveloProeyewear480 from '../../images/nextvelo-proeyewear480.png';
import nextveloProeyewear1920 from '../../images/nextvelo-proeyewear1920.webp';
import biogutoImage from '../../images/Bioguto-1920x1080.jpg';
import vpImage from '../../images/vpImage.jpg';
import impulsImage from '../../images/ImpulsImage.jpg';

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
  client: string;
};

export const workItems: WorkItem[] = [
  {
    type: '1',
    images: {
      small: biogutoImage,
      large: biogutoImage
    },
    title: 'bioguto',
    description: [
      {
        text: `A 3D promotional video showcasing Bioguto's vitamin supplements.`,
        isBold: false
      },
      {
        text: ` The animation emphasizes health and vitality through natural textures, vibrant droplets, and soft lighting.`,
        isBold: true
      }
    ],
    category: `Responsibilities: Modelling, texturing & shading, animation, lighting, compositing`,
    client: 'For: NOIR production',
    link: `https://www.behance.net/gallery/217864339/Bioguto-Vitamin-A-D3-K2`,
  },
  {
    type: '2',
    images: {
      small: vpImage,
      large: vpImage
    },
    title: 'Vilniaus paukštynas',
    description: [
      { text: '2D/3D animation of Vilniaus paukštynas history, celebrating their 60th anniversary ', isBold: false },
      { text: `that emphasizes the company's journey over six decades.`, isBold: true },
    ],
    category: 'Responsibilities: 3D chicken animation, composition, color correction',
    client: 'For: NOIR production',
    link: 'https://www.youtube.com/watch?v=4mv92g7csEY'
  },
  {
    type: '1',
    images: {
      small: impulsImage,
      large: impulsImage
    },
    title: 'impuls',
    description: [
      { text: '3D melting ice-cream animation for a sports center ', isBold: false },
      { text: 'emphasizing the start of summer.', isBold: true },
    ],
    category: 'Responsibilities: 3D modelling, texturing & shading, 3D animation ',
    client: 'For: NOIR production',
    link: 'https://www.instagram.com/moto.inn/reel/Csf-CzMM8nz'
  },
  {
    type: '2',
    images: {
      small: nextveloProeyewear480,
      large: nextveloProeyewear1920
    },
    title: 'gearro x pro eyewear',
    description: [
      { text: 'MTB pros in action, flaunting BLITZ sports glasses', isBold: false },
      { text: ' 3D animation finale highlighting the sleek design.', isBold: true }
    ],
    category: 'Videography, Video Editing, 3D Animation',
    client: 'For: Gearro',
    link: 'https://www.instagram.com/nextvelo_com/reel/Cz3_oPsNMSP/',
  },
];