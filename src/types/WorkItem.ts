export type DescriptionPart = {
  text: string;
  isBold: boolean;
};

export type WorkItem = {
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