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
        />
      </div>
    </Element>
  );
};

export default Projects;
