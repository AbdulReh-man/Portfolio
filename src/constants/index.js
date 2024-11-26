import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  spotiviral,
  smartdairy,
  themeforest,
  github,
  creator,
} from "../assets/index";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: backend,
  },
  {
    title: "Figma Designing",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Self Learning",
    icon: tailwind,
    iconBg: "#383E56",
    points: [
      "Self-learning journey: Covered JavaScript, Node.js (backend), and React.js (frontend) while exploring essential technologies",
      "Gained skills: Proﬁciency in TaiwindCss , Linux, Nginx, Git and GitHub.",
      "Passion for learning: Fueled by online courses and real-world projects, developed a versatile skill set for diverse ech challenges.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Seller is working hard and professional. I would recommend. Thanks!",
    name: "fiveforyou222",
    designation: "Buyer",
    company: "on Fiver",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "SpotiViral",
    description:
      "Web-based platform that allows users to search, Select, and Promote their Songs and Albums, providing a convenient and efficient solution for their needs. It offers real-time search from Spotify’s API and Secure Payments, and a user-friendly interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
    ],
    image: spotiviral,
    source_code_link: "https://spotiviral.com/",
  },
  {
    name: "Smart Dairy",
    description:
      "Dairy-Direct is an Web-Based platform connecting consumers with verified dairy producers, offering features like batch tracking, subscriptions, and AI-powered fake-review detection to ensure trust and transparency.Admins use a detailed dashboard, while consumers enjoy a secure shopping experience.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwidCss",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: smartdairy,
    source_code_link: "https://github.com/AbdulReh-man",
  },
  {
    name: "Pak Opportunity Hub ",
    description:
      "Pak Opportunity Hub is a web platform that centralizes information on government scholarships in Pakistan. It offers features like eligibility checks, agent services for guidance, real-time notifications, and secure payments. Designed for transparency and accessibility.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/AbdulReh-man",
  },
  {
    name: "Theme Forest Clone",
    description:
      "Pak Opportunity Hub is a web platform that centralizes information on government scholarships in Pakistan. It offers features like eligibility checks, agent services for guidance, real-time notifications, and secure payments. Designed for transparency and accessibility.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Booststrap",
        color: "pink-text-gradient",
      },
    ],
    image: themeforest,
    source_code_link:
      "https://abdulreh-man.github.io/html-css-js-Client-Poject/index.html",
  },
];

export { services, technologies, experiences, testimonials, projects };
