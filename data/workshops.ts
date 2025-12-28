import { workshopType } from "@/types/workshop";
import gitGithub from "@/assets/git-github.svg";
import modernBackend from "@/assets/modern-backend.svg";
import aiCompanion from "@/assets/ai-companion.svg";
import reactGsap from "@/assets/react-gsap.svg";
import explainableAi from "@/assets/explainableAi.svg";
import abdeldjallil from "@/assets/abd-eldjallil.jpg";
import mouad from "@/assets/mouad.jpg";
import gbemisola from "@/assets/gbemisola.jpg";
import asma from "@/assets/asma.jpeg";
import pic from "@/assets/pic.png";

const data: workshopType[] = [
  {
    id: "workshop-1",
    title: "Git and GitHub",
    description:
      "Learn the fundamentals of version control using Git and GitHub, including branching, merging, and collaboration workflows.",
    date: "2025-12-29",
    time: "1:00 PM - 2:30 PM",
    location: "Socode School, Constantine",
    logo: gitGithub,
    instructor: {
      name: "Abd eldjallil Meskali",
      bio: "Web Developer | UI/UX Designer",
      photo: abdeldjallil,
    },
    workshopResourcesLink: "git-workshop.rar",
  },

  {
    id: "workshop-2",
    title: "How Modern Backends work, Design to Production",
    description:
      "This workshop gives a clear, practical overview of how modern backend systems work from designing APIs to running them in production using Node.js. Participants will explore backend architecture, understand Node.js and Express.js, build CRUD flows, and learn the basics of deployment.",
    date: "2025-12-30",
    time: "2:00 PM - 4:00 PM",
    location: "Socode School, Constantine",
    logo: modernBackend,
    instructor: {
      name: "Mouad Amireche",
      bio: "Back-end Developer",
      photo: mouad,
    },
  },
  {
    id: "workshop-3",
    title: "Animating the Web: A Hands-on React + GSAP",
    description:
      "Learn the fundamentals of React and GSAP to build dynamic, animated user interfaces. Create smooth load and scroll-based animations while understanding how logic and motion work together.",
    date: "2025-12-31",
    time: "1:00 PM - 3:00 PM",
    location: "Socode School, Constantine",
    logo: reactGsap,
    instructor: {
      name: "Abd eldjallil Meskali",
      bio: "Web Developer | UI/UX Designer",
      photo: abdeldjallil,
    },
  },
  {
    id: "workshop-4",
    title: "Build Your First AI Companion",
    description:
      "Go beyond basic chatbots and build your first interactive AI companion with personality, real-time web access, and lip-synced speech using Google Gemini CLI and Python (ADK).",
    date: "2026-01-03",
    time: "10:00 PM - 9:30 PM",
    location: "Online, Google Meet",
    logo: aiCompanion,
    instructor: {
      name: "Gbemisola Esho",
      bio: "Founder Connectobridge | Cloud Security Engineer | Google Developer Expert Cloud (GDE)",
      photo: gbemisola,
    },
  },
  {
    id: "workshop-6",
    title: "Explainable AI in Healthcare",
    description:
      "A concise introduction to Explainable AI (XAI) for healthcare: why explainability matters, key techniques like Grad-CAM and feature attribution, and practical medical imaging examples to improve transparency and clinical trust.",
    date: "2025-12-31",
    time: "19:00 - 20:30",
    location: "Online",
    logo: explainableAi,
    instructor: {
      name: "Asma Merabet",
      bio: "Backend and AI engineer at deepminds, AI researcher, PhD student, GDE in AI, GDG Setif Organizer",
      photo: asma,
    },
  },
];

export default data;
