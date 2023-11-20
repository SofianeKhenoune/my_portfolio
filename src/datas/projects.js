import { FaVuejs, FaWordpress } from 'react-icons/fa';
import { MdOutlineScreenshotMonitor } from 'react-icons/md';
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiRedux,
  SiSymphony,
  SiTailwindcss,
} from 'react-icons/si';
export const projects = [
  {
    title: 'Chalets et Caviar',
    slug: 'chalets_et_caviar',
    smallDescription:
      "Projet de validation de parcours pour la formation DWWM sur le site OpenClassroom. J'ai installé un thème et je l'ai personnalisé avec Elementor et PHP",
    desc: "Ce projet a été conçu dans le cadre de la validation du parcours de formation DWWM sur OpenClassroom. L'objectif principal était de créer un site Web en utilisant WordPress et de le personnaliser pour répondre aux besoins spécifiques du parcours de formation. J'ai commencé par la mise en place d'un thème WordPress, que j'ai ensuite modifié et adapté grâce à Elementor pour créer une interface conviviale. L'utilisation de PHP a été cruciale pour personnaliser certaines fonctionnalités, apportant ainsi des modifications spécifiques au fonctionnement du site.",
    taskList: [
      'Projet de validation de parcours formation',
      "Mise en place d'un template Wordpress",
      "Utilisation d'Elementor",
      'Personnalisation avec PHP',
    ],
    img: '/images/chalets.jpg',
    icons: [FaWordpress, SiPhp],
  },
  {
    title: 'Les Films de Plein Air',
    slug: 'les_films_de_plein_air',
    smallDescription:
      "Projet de validation de parcours pour la formation DWWM sur le site OpenClassroom. J'ai réalisé le cahier des charges, la charte graphique et l'intégration avec HTML5 et CSS3",
    desc: "Ce projet, également réalisé pour la validation du parcours DWWM sur OpenClassroom, a impliqué la création complète d'un site Web dédié aux projections de films en plein air. J'ai commencé par rédiger un cahier des charges détaillé pour définir les besoins et les fonctionnalités du site. Ensuite, j'ai travaillé sur l'intégration du site en utilisant HTML5 et CSS3, en accordant une attention particulière au design responsive pour garantir une expérience utilisateur optimale sur tous les appareils. La création de la charte graphique a été essentielle pour l'identité visuelle du site.",
    taskList: [
      "Rédaction d'un cahier des charges",
      'Intégration avec HTML5 et CSS3',
      'Charte graphique',
      'Responsive Design',
    ],
    img: '/images/films.png',
    icons: [SiHtml5, SiCss3, MdOutlineScreenshotMonitor],
  },
  {
    title: 'Writer Talent',
    slug: 'writer_talent',
    smallDescription:
      "Projet de fin de formation DWWM avec O'Clock. C'est le fruit d'une collaboration qui a duré un mois. Ce projet dispose d'une API. Le front est déployé.",
    desc: "Ce projet, réalisé en collaboration avec trois autres développeurs, a représenté le point culminant de la formation DWWM. Il s'agit d'une application complexe avec une architecture Front-End basée sur la librairie React pour une expérience utilisateur dynamique en Single Page Application (SPA). Le travail en équipe a été fondamental pour mener à bien ce projet. Le back-end a été développé avec le framework Symfony pour mettre en place une API Rest, tandis que la gestion du State a été réalisée efficacement grâce à Redux, permettant une gestion fluide des données.",
    taskList: [
      'Utilisation de la librairie React (SPA)',
      'Travail en équipe (4 développeurs)',
      'Framework Symfony (API Rest)',
      'Gestion du State avec Redux',
    ],
    img: '/images/writer.png',
    icons: [SiJavascript, SiCss3, SiReact, SiRedux, SiPhp, SiSymphony],
  },
  {
    title: 'AuthorBright (en cours ...)',
    slug: 'authorbright',
    smallDescription:
      'Deuxième version du projet Writer Talent. En collaboration avec mon binôme (équipe front), nous recodons avec le framework VueJs',
    desc: "Cette seconde version du projet 'Writer Talent' a été entreprise en collaboration avec mon binôme Christian, se concentrant sur le remaniement du Front-End avec le framework Vue.js. L'utilisation de Vue.js a permis de repenser l'interface utilisateur de manière dynamique et réactive. L'intégration du framework TailwindCSS a facilité le processus de stylisation du site, tandis que l'utilisation de Node.js et du framework Express.js a permis de créer un environnement robuste pour le développement et le déploiement.",
    taskList: [
      'Framework VueJs',
      'Framework TailwindCSS',
      'Utilisation de NodeJs',
      'Framework Express Js',
    ],
    img: '/images/writer.png',
    icons: [FaVuejs, SiTailwindcss, SiNodedotjs, SiExpress],
  },
];
