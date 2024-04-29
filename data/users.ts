import { Category } from "~/types/categorie.type";
import type { Card } from "~/types/card.type";
import {
  FrontendTechnology,
  BackendTechnology,
  DesignTechnology,
  MobileTechnology,
  DevOpsTechnology,
  Web3Technology,
  DataTechnology,
  CybersecurityTechnology,
} from "~/types/technologies.type";

export const usersDev: Card[] = [
  {
    name: "Gomez jacob",
    link: "https://www.linkedin.com/in/jacob-ambroise-david-gomez-989b151b9/",
    linkSlug: "jacobgomez.dev",
    tags: [Category.Frontend, Category.Backend, Category.DevOps],
    technology: [
      FrontendTechnology.HTML,
      FrontendTechnology.CSS,
      FrontendTechnology.TailwindCSS,
      FrontendTechnology.VueJS,
      FrontendTechnology.NuxtJS,
      BackendTechnology.NodeJS_AdonisJS,
      DevOpsTechnology.Docker,
    ],
    description:
      "FullStack js web developer, working with #vue, #nuxt #js #ts #adonis",
    socials: {
      twitter: "gojanda325",
      github: "jacobGomez325",
      linkedin: "jacob-ambroise-david-gomez-989b151b9",
    },
  },
  {
    name: "Jivaros GBETO",
    link: "https://www.linkedin.com/in/jivaros-gbeto/",
    linkSlug: "jivaros-gbeto.dev",
    tags: [
      Category.Frontend,
      Category.Backend,
      Category.DevOps,
      Category.Mobile,
    ],
    technology: [
      BackendTechnology.NodeJS_AdonisJS,
      BackendTechnology.NodeJS_NestJS,
      FrontendTechnology.VueJS,
      FrontendTechnology.ReactJS,
      DevOpsTechnology.Docker,
      MobileTechnology.Flutter,
    ],
    description:
      "Software developer and code lover(Node | Nest | Adonis | React | Vue | SQL | Docker | Flutter )",
    socials: {
      twitter: "JivarosG",
      github: "MrJIvaros",
      linkedin: "jjivaros-gbeto",
    },
  },
  {
    name: "Lionel K.",
    link: "open.kattis.com/users/kitihounel",
    linkSlug: "kitihounel.dev",
    tags: [Category.Backend],
    technology: [],
    description: "Fullstack  dev",
    socials: null,
  },
  {
    name: "DEGNON Tobi",
    link: "https://oluwatobi.dev",
    linkSlug: "oluwatobi.dev",
    tags: [Category.Frontend, Category.Backend],
    description: "Software engineer working with #python, #django #htmx",
    technology: [BackendTechnology.Python_Django, FrontendTechnology.HTMX],
    socials: {
      twitter: "tobidegnon",
      github: "Tobi-De",
      linkedin: "",
    },
  },
  {
    name: "SAGBO Aimé",
    link: "https://www.linkedin.com/in/sagbo-aim%C3%A9-b72067171?trk=contact-info",
    linkSlug: "sagbo-aime.dev",
    tags: [Category.Frontend, Category.Backend, Category.Mobile],
    technology: [
      FrontendTechnology.ReactJS,
      FrontendTechnology.VueJS,
      BackendTechnology.NodeJS_NestJS,
      MobileTechnology.Flutter,
    ],
    description:
      "Fullstack Web Developper (Js/Ts/VueJs/Docker/MongoDB) & Mobile Developer (Flutter)",
    socials: {
      twitter: "",
      github: "Goldy98",
      linkedin: "sagbo-aimé-b72067171",
    },
  },
  {
    name: "AINON Rhétice",
    link: "https://www.linkedin.com/in/rh%C3%A9tice-ainon-849557196/",
    linkSlug: "rheticeainon.dev",
    tags: [Category.Frontend, Category.Backend, Category.Mobile],
    technology: [
      BackendTechnology.Python_Django,
      FrontendTechnology.ReactJS,
      BackendTechnology.PHP_Laravel,
      MobileTechnology.ReactNative,
    ],
    description:
      "FullStack web and mobile developer, working with #js #python #php, #react #reactnative #django #laravel",
    socials: {
      twitter: "RheticeAinon",
      github: "DRhetice",
      linkedin: "rhétice-ainon-849557196",
    },
  },
  {
    name: "Judicaël AHYI",
    link: "https://www.judicael-ahyi.com",
    linkSlug: "judicael-ahyi.com",
    tags: [
      Category.SWE,
      Category.Backend,
      Category.DevOps,
      Category.Cybersecurity,
    ],
    technology: [
      BackendTechnology.PHP_Laravel,
      BackendTechnology.Python,
      BackendTechnology.Python_Flask,
      BackendTechnology.NodeJS_Koa,
      BackendTechnology.NodeJS_Express,
      BackendTechnology.Java_SpringBoot,
      FrontendTechnology.HTML,
      FrontendTechnology.CSS,
      FrontendTechnology.TailwindCSS,
      DataTechnology.MySQL,
      DataTechnology.PostgreSQL,
      DataTechnology.MongoDB,
      DataTechnology.Redis,
      DevOpsTechnology.Docker,
      DevOpsTechnology.Terraform,
    ],
    description:
      "Software Engineer (#PHP #Laravel #Python #Java) & DevSecOps (Junior).",
    socials: {
      twitter: "JudicaelAhyi",
      github: "ludndev",
      linkedin: "judicael-ahyi",
    },
  },
  {
    name: "MEDEHOU Elikem",
    link: "https://www.linkedin.com/in/juniormedehou/",
    linkSlug: "elikemmedehou.com",
    tags: [Category.Mobile, Category.Backend, Category.DevOps],
    technology: [
      BackendTechnology.NodeJS_Express,
      FrontendTechnology.NextJS,
      BackendTechnology.NodeJS_Express,
      MobileTechnology.Flutter,
      DevOpsTechnology.Docker,
    ],
    description: "Flutter and Backend Developer",
    socials: {
      twitter: "elikemmedehou",
      github: "NemesisX1",
      linkedin: "juniormedehou",
    },
  },

  {
    name: "DOSSEH Shalom",
    link: "https://www.linkedin.com/in/shalom-dosseh-4a484a262/",
    linkSlug: "dossehshalom.dev",
    tags: [Category.Data, Category.DevOps, Category.Web3],
    technology: [
      DevOpsTechnology.Docker,
      DataTechnology.Pandas,
      DataTechnology.NumPy,
      DataTechnology.ScikitLearn,
      DataTechnology.TensorFlow,
      DataTechnology.SQL,
      DevOpsTechnology.Git_versionControl,
      DevOpsTechnology.Jenkins,
      DevOpsTechnology.Ansible,
      DevOpsTechnology.Kubernetes,
      Web3Technology.Solidity,
    ],
    description: "Problem Solver and Data Driven Innovator",
    socials: {
      twitter: "",
      github: "AnalyticAce",
      linkedin: "shalom-dosseh-4a484a262",
    },
  },

  {
    name: "Loïc Farel",
    link: "http://loicfarel.netlify.app/",
    linkSlug: "loicfarel.dev",
    tags: [Category.Frontend, Category.Backend],
    technology: [
      FrontendTechnology.VueJS,
      FrontendTechnology.NuxtJS,
      FrontendTechnology.TailwindCSS,
    ],
    description:
      "Web Developer (Js/Ts/VueJs/NuxtJS/MongoDB). I build exceptional and accessible digital solutions for the web.",
    socials: {
      twitter: "loicfarel",
      github: "loicfarel",
      linkedin: "loicfarele",
    },
  },
  {
    name: "Freddy Agbona",
    link: "https://fredthedev.com",
    linkSlug: "fredthedev.com",
    tags: [
      Category.Frontend,
      Category.Backend,
      Category.DataTechnology,
      Category.DevOps,
    ],
    technology: [
      FrontendTechnology.HTML,
      FrontendTechnology.CSS,
      FrontendTechnology.Bootstrap,
      FrontendTechnology.TailwindCSS,
      FrontendTechnology.JavaScript,
      FrontendTechnology.VueJS,
      FrontendTechnology.NuxtJS,
      BackendTechnology.PHP,
      BackendTechnology.PHP_Laravel,
      BackendTechnology.Java_SpringBoot,
      DataTechnology.SQL,
      DataTechnology.MySQL,
      DataTechnology.PostgreSQL,
      DevOpsTechnology.Docker,
      DevOpsTechnology.Git_versionControl,
    ],
    description:
      "Software Developer who thrives on tackling stimulating challenges in web application design. My core strength lies in my problem-solving abilities and collaborative teamwork, allowing me to make substantial contributions to high-impact projects.My stacks are : Php, Java, Spring Boot, VueJS, Nuxt, Docker.",
    socials: {
      twitter: "fredthedev",
      github: "fredagbona",
      linkedin: "fredthedev",
    },
  },
  {
    name: "JOSIAS DADY Lauryne",
    link: "https://www.linkedin.com/in/lauryne-josias-dady-3a4b051b4/",
    linkSlug: "josiaslauryne.dev",
    tags: [Category.Frontend],
    technology: [
      FrontendTechnology.VueJS,
      FrontendTechnology.TailwindCSS,
      FrontendTechnology.HTML,
      FrontendTechnology.CSS,
    ],
    description:
      "Frontend web developer, working with #vuejs, and learning #react",
    socials: {
      twitter: "",
      github: "lauryne1",
      linkedin: "lauryne-josias-dady-3a4b051b4",
    },
    {
      name: "Arnaud ADJOVI",
      link: "https://www.linkedin.com/in/arnaud-adjovi/",
      linkSlug: "arnaudadjovi.dev",
      tags: [Category.Frontend, Category.Backend, Category.DevOps, Category.Design],
      technology: [
        FrontendTechnology.HTML, 
        FrontendTechnology.CSS, 
        FrontendTechnology.JavaScript, 
        FrontendTechnology.ReactJS, 
        FrontendTechnology.JSX, 
        
        BackendTechnology.PHP,
        BackendTechnology.PHP_Laravel,
        BackendTechnology.NodeJS_Express,

        DataTechnology.SQL,
        DataTechnology.MySQL,

        DevOpsTechnology.Git_versionControl        
      ],
      description: "FullStack web developer, working with #react #Laravel #PHP",
      socials: {
        twitter: "_aploon",
        github: "aploon",
        linkedin: "arnaud-adjovi",
      },
    },
  },
];
