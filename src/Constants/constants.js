import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  memoryGame,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Salut, je suis content que tu consultes mon portfolio !",

    "🇫🇷 Je m'appelle Rayan et j'ai 20 ans, je suis passionné par l'informatique depuis petit. Spécialisé dans le développement de logiciels, j'ai tout de même une grande soif de connaissances dans des domaines variés.",
    "J'ai énormément de centres d'intérêt dont la musique, le skateboard, les animaux, etc.",
    "🇬🇧 My name is Rayan, I'm 20. I have been interested in IT since I was a child. Tending to focus more on software development, I still have an unquenchable thirst for knowledge whatever the subject. I have a variety of interests such as music, skateboard, animals, ect.",
    "Télécharger mon CV ici."
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Tic-Tac-Toe Python",
    description: 'Tic-Tac-Toe en Python Natif avec un robot intégré',
    image: memoryGame,
    source_code_link: 'https://github.com/rayan-tarbi/tic-tac-toe',
    demo_link: 'https://github.com/rayan-tarbi/tic-tac-toe',
  },
  {
    name: 'Fansite',
    description: 'Fansite pour le groupe de reggae TRYO réalisé en groupe de 3 ',
    image: "https://media.giphy.com/media/hdgsNz8VTSS0nzWpvR/giphy.gif",
    source_code_link: 'https://github.com/rayan-tarbi/fansite',
    demo_link: 'https://github.com/rayan-tarbi/fansite',
  },
  {
    name: 'Coming Soon',
    description: 'Coming Soon',
    image: "https://media.giphy.com/media/dgVQkiSSL4TsZDrXYx/giphy.gif?cid=790b76112652xnmtoewdm9bmadyi6wrnkb627k0f53fyjm8y&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    source_code_link: 'https://github.com/bl33h/clientSerhttps://github.com/rayan-tarbi/verChat',
    demo_link: 'https://github.com/rayan-tarbi/',
  },
  {
    name: 'Coming Soon',
    description: 'Coming Soon',
    image: "https://media.giphy.com/media/dgVQkiSSL4TsZDrXYx/giphy.gif?cid=790b76112652xnmtoewdm9bmadyi6wrnkb627k0f53fyjm8y&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    source_code_link: 'https://github.com/bl33h/clientSerhttps://github.com/rayan-tarbi/verChat',
    demo_link: 'https://github.com/rayan-tarbi/',
  },
  {
    name: 'Coming Soon',
    description: 'Coming Soon',
    image: "https://media.giphy.com/media/dgVQkiSSL4TsZDrXYx/giphy.gif?cid=790b76112652xnmtoewdm9bmadyi6wrnkb627k0f53fyjm8y&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    source_code_link: 'https://github.com/bl33h/clientSerhttps://github.com/rayan-tarbi/verChat',
    demo_link: 'https://github.com/rayan-tarbi/',
  },{
    name: 'Coming Soon',
    description: 'Coming Soon',
    image: "https://media.giphy.com/media/dgVQkiSSL4TsZDrXYx/giphy.gif?cid=790b76112652xnmtoewdm9bmadyi6wrnkb627k0f53fyjm8y&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    source_code_link: 'https://github.com/bl33h/clientSerhttps://github.com/rayan-tarbi/verChat',
    demo_link: 'https://github.com/rayan-tarbi/',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      "J'aimerais encore m'améliorer même si ce n'est pas mon domaine de prédilection",
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    "Je stylise mon expérience web grâce à cet outil, j'aime beaucoup",
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    "Cet outil est incroyable, vraiment facile d'accès et j'adore faire de nouvelles choses avec",
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      "Novice avec quelques tests effectués, hâte d'en savoir plus",
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    "Débutant, en cours d'amélioration",
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    "J'ai assimilé toutes les fonctions de Git",
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      "J'utilise tous les jours GitHub dans mes projets, ça m'aide beaucoup",
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      "1 projet à mon actif, soif d'en apprendre davantage ",
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      "Acteullement en cours de familiarisation avec Node",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
