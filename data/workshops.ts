import { workshopType } from '@/types/workshop';
import gitGithub from '@/assets/git-github.svg'
import abdeldjallil from '@/assets/abd-eldjallil.jpg'

const data: workshopType[] = [
  {
    id: 'workshop-1',
    title: 'Git and GitHub',
    description:
      'Learn the fundamentals of version control using Git and GitHub, including branching, merging, and collaboration workflows.',
    date: '2025-12-29',
    time: '1:00 PM - 3:00 PM',
    location: 'Socode School, Constantine',
    logo: gitGithub,
    instructor: {
      name: 'Abd eldjallil Meskali',
      bio: 'Web Developer | UI/UX Designer',
      photo: abdeldjallil,
    },
  },
  // {
  //   id: 'workshop-2',
  //   title: 'Building Modern Web Apps with React',
  //   description:
  //     'Learn how to build modern web applications using React, including hooks, state management, and component architecture.',
  //   date: '2024-07-15',
  //   time: '10:00 AM - 4:00 PM',
  //   location: 'Tech Hub, Downtown',
  //   instructor: {
  //     name: 'Jane Doe',
  //     bio: 'Senior Frontend Developer with 10 years of experience in building scalable web applications.',
  //     photo: '/instructors/jane-doe.jpg',
  //   },
  // },
  // {
  //   id: 'workshop-3',
  //   title: 'Building Modern Web Apps with React',
  //   description:
  //     'Learn how to build modern web applications using React, including hooks, state management, and component architecture.',
  //   date: '2024-07-15',
  //   time: '10:00 AM - 4:00 PM',
  //   location: 'Tech Hub, Downtown',
  //   instructor: {
  //     name: 'Jane Doe',
  //     bio: 'Senior Frontend Developer with 10 years of experience in building scalable web applications.',
  //     photo: '/instructors/jane-doe.jpg',
  //   },
  // },
];

export default data;
