import { v4 as uuidv4 } from "uuid";

// https://stg-office.leatherback.co/budget
// https://leatherback.co/
// https://stg-app.leatherback.co/

// https://tm.dev.youverify.co/
// https://field.dev.youverify.co/
// https://youverify.co/

// https://www.zkteco-wa.com/


export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      title: "Transaction Monitoring App",
      category: "Web Application",
      img: "images/yv-tm.png",
      link: 'https://tm.dev.youverify.co/',
    },
    {
      title: "Leatherback Website",
      category: "Web Application",
      img: "images/lb-web.png",
      link: 'https://leatherback.co/',
    },
    {
      title: "Leatherback Client App",
      category: "Web Application",
      img: "images/lb-client.png",
      link: 'https://stg-app.leatherback.co/',
    },
    {
      title: "Leatherback Office",
      category: "Web Application",
      img: "images/lb-office.png",
      link: 'https://stg-office.leatherback.co/',
    },
    {
      title: "Youverify Website",
      category: "Web Application",
      img: "images/yv-web.png",
      link: 'https://youverify.co/',
    },
    // {
    //   title: "Agent Field Portal",
    //   category: "Web Application",
    //   img: "images/web-project-2.jpg",
    //   link: 'https://field.dev.youverify.co/',
    // },
    {
      title: "ZKTeco Website",
      category: "Web Application",
      img: "images/zk-web.png",
      link: 'https://www.zkteco-wa.com/',
    },
  ],
  clientsHeading: "Some of the companies I worked for",
  clients: [
    {
      id: uuidv4(),
      title: "Amazon",
      img: "../brands/amazon_gray.png",
    },
    {
      id: uuidv4(),
      title: "Sony",
      img: "../brands/sony_gray.png",
    },
    {
      id: uuidv4(),
      title: "Adidas",
      img: "../brands/adidas_gray.png",
    },
    {
      id: uuidv4(),
      title: "FILA",
      img: "../brands/fila_gray.png",
    },
    {
      id: uuidv4(),
      title: "NB",
      img: "../brands/nb_gray.png",
    },
    {
      id: uuidv4(),
      title: "SAMSUNG",
      img: "../brands/samsung_gray.png",
    },
    {
      id: uuidv4(),
      title: "CANON",
      img: "../brands/canon_gray.png",
    },
    {
      id: uuidv4(),
      title: "PUMA",
      img: "../brands/puma_gray.png",
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "With over 5 years of dedicated experience as a frontend engineer in dynamic production environments, I've honed my skills in technologies such as React, Vue.js, and TypeScript. My journey has been marked by a commitment to delivering user-centric solutions that seamlessly blend aesthetics with functionality. From conceptualization to implementation, I thrive on translating design visions into captivating web interfaces. My proficiency extends to embracing emerging trends and technologies, ensuring that my work remains at the forefront of industry innovation. As a collaborative team player with a meticulous approach, I am enthusiastic about contributing my expertise to ambitious projects that redefine the digital landscape. Let's embark on a journey to create exceptional and impactful web experiences.",
    },
    {
      id: uuidv4(),
      bio: "I'm excited about pushing boundaries and driving innovation in the ever-evolving world of web development. Let's build something extraordinary together!",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/chinedu16",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/chinedu_16",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/chinedu-ohagwu-516904121/",
    },
    
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "mobile",
      name: "Mobile Applicaiton",
    },
    {
      id: uuidv4(),
      value: "ui-ux",
      name: "UI/UX Design",
    },
    {
      id: uuidv4(),
      value: "branding",
      name: "Branding & Animations",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
