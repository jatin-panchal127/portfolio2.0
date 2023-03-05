import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  anantha,
  tvr,
  jixxywear,
  jixxynotes,
  jixxynews,
  jixxyblog,
  todo,
} from "../assets";

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
    title: "Web Designer",
    icon: mobile,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Jr. Software Developer Intern",
    company_name: "Anantha Insights",
    icon: anantha,
    iconBg: "#383E56",
    date: "May 2021 - September 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Jr. Software Developer",
    company_name: "Anantha Insights",
    icon: anantha,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TVR",
    description:
      "Web-based platform that allows users to watch live feed of the cameras by simply configuring details. It can also do recordings and user can download it completely or partially.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "golang",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: tvr,
    source_code_link: "private",
  },
  {
    name: "Jixxywear | Crwn Clothing",
    description:
      "E-commerce Web application that allows users to search and buy trending and pocket friendly apparels/clothings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "netlify",
        color: "pink-text-gradient",
      },
    ],
    image: jixxywear,
    source_code_link: "https://github.com/jatin-panchal127/crwn-clothing",
  },
  {
    name: "Jixxy News",
    description:
      "A single place to find your news where you can find and read news of every genre. Now stay upto date with all the trendy topics all around the globe",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "newsapi",
        color: "orange-text-gradient",
      },
    ],
    image: jixxynews,
    source_code_link: "https://github.com/jatin-panchal127/jixxy-news",
  },
  {
    name: "Jixxy Notes",
    description:
      "A comprehensive notes creating platform that allows users to create, read, update, delete their notes curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: jixxynotes,
    source_code_link: "https://github.com/jatin-panchal127/jnotes",
  },
  {
    name: "Jixxy Blog",
    description:
      "A Blog website where users can simply add blogs in markdown files and it is listed in blog section, ready to be explore.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "gatsby",
        color: "text-purple-400",
      },
      {
        name: "ssr",
        color: "pink-text-gradient",
      },
    ],
    image: jixxyblog,
    source_code_link: "https://github.com/jatin-panchal127/gatsby-blog",
  },
  {
    name: "Todo",
    description:
      "A Simple Todo Web Application which provides an easy and interactive UI for your task tracking, now don't get lost to do your task",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "text-purple-500",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/jatin-panchal127/todo",
  },
];

export { services, technologies, experiences, testimonials, projects };
