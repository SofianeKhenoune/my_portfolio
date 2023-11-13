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
import { Element } from 'react-scroll';
import Project from '../../components/Projects/Project';
const Projects = () => {
  return (
    <Element name='projects' className='min-h-screen'>
      <h2 className='capitalize text-2xl font-bold text-center my-20 md:text-3xl opacity-0 -translate-x-10 max-w-max mx-auto p-2'>
        mes projets
      </h2>
      <div className='flex flex-wrap gap-10 justify-center'>
        <Project
          arrayOfIcons={[FaWordpress, SiPhp]}
          projectName='Chalets et Caviar'
          taskList={[
            'Projet de validation de parcours formation',
            "Mise en place d'un template Wordpress",
            "Utilsation d'Elementor",
            'Personnalisation avec PHP',
          ]}
          projectImage='/images/chalets.jpg'
          projectDesciption="Projet de validation de parcours pour la formation DWWM sur le site OpenClassroom. J'ai installé un thème et je l'ai personnalisé avec Elementor et PHP"
        />
        <Project
          arrayOfIcons={[SiHtml5, SiCss3, MdOutlineScreenshotMonitor]}
          projectName='Les Films de Plein Air'
          taskList={[
            "Rédaction d'un cahier des charges",
            'Intégration avec HTML5 et CSS3',
            'Charte graphique',
            'Responsive Design',
          ]}
          projectImage='/images/films.png'
          projectDesciption="Projet de validation de parcours pour la formation DWWM sur le site OpenClassroom. J'ai réalisé le cahier des charges, la charte graphique et l'intégration avec HTML5 et CSS3"
        />
        <Project
          arrayOfIcons={[
            SiJavascript,
            SiCss3,
            SiReact,
            SiRedux,
            SiPhp,
            SiSymphony,
          ]}
          projectName='Writer Talent'
          taskList={[
            'Utilisation de la librairie React (SPA)',
            'Travail en équipe (4 développeurs)',
            'Framework Symfony (API Rest)',
            'Gestion du State avec Redux',
          ]}
          projectImage='/images/writer.png'
          projectDesciption="Projet de fin de formation DWWM avec O'Clock. C'est le fruit d'une collaboration qui a duré un mois. Ce projet dispose d'une API. Le front est déployé."
        />
        <Project
          arrayOfIcons={[FaVuejs, SiTailwindcss, SiNodedotjs, SiExpress]}
          projectName='AuthorBright'
          taskList={[
            'Framework VueJs',
            'Framework TailwindCSS',
            'Utilsation de NodeJs',
            'Framework Express Js',
          ]}
          projectImage='/images/writer.png'
          projectDesciption='Deuxième version du projet Writer Talent. En collaboration avec mon binôme (équipe front), nous recodons avec le framework VueJs'
        />
      </div>
    </Element>
  );
};

export default Projects;
