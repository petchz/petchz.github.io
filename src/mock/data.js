import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Taewapon B.", // e.g: 'Name | Developer'
  lang: "", // e.g: en, es, fr, jp
  description: "Taewapon Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "",
  name: "",
  subtitle: "",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne: "",
  paragraphTwo: "",
  paragraphThree: "",
  resume: "https://www.resumemaker.online/es.php", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "linerichmenu.png",
    title: "LINE Rich Menu Manager",
    info: "Line Rich Menu Manager is the better way to manages your rich menu!",
    info2: "Using React",
    url: "https://linerichmenu.netlify.app/",
    repo: "https://github.com/petchz/linerichmenu", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "mysyllabus.png",
    title: "MY SYLLABUS",
    info:
      "My Syllabus is a website for computer engineering student who didnt know what they need to learn in a semester. This website can help student know what to learn and what selective course to choose.",
    info2: "Using HTML, CSS, Javasript and Bootstrap",
    url: "https://taewapon.site/mysyllabus/",
    repo: "https://github.com/petchz/mysyllabus", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "facebook",
      url: "https://www.facebook.com/mayazen555",
    },
    {
      id: nanoid(),
      name: "instagram",
      url: "https://www.instagram.com/petchz.jpg/",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/taewaponb/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/petchz",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
