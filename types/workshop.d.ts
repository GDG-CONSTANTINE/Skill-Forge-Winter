export type workshopType = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  logo?: string;
  instructor: {
    name: string;
    bio: string;
    photo: StaticImageData | string;
  };
  workshopResourcesLink?: string;
  meetingLink?: string;
};
