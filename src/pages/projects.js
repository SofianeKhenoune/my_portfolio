import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { FaPhp, FaWordpress } from 'react-icons/fa';
import { MdOutlineScreenshotMonitor } from 'react-icons/md';
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiSymphony,
} from 'react-icons/si';

import Project from '../../components/Project/Project';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    const projects = gsap.utils.toArray('.bloc');
    projects.forEach((project) => {
      let tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: project,
            toggleActions: 'restart none none reset',
          },
        })
        .to(project, {
          opacity: 1,
          duration: 2,
          translateY: 0,
          ease: 'power1.out',
        });
    });
  }, []);
  return (
    <main className='w-full overflow-x-hidden pt-5 flex flex-wrap gap-5 justify-center'>
      <Project
        arrayOfIcons={[FaWordpress, FaPhp]}
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
          FaPhp,
          SiSymphony,
        ]}
        projectName='Chalets et Caviar'
        taskList={[
          'Projet de validation de parcours formation',
          "Mise en place d'un template Wordpress",
          "Utilsation d'Elementor",
          'Personnalisation avec PHP',
        ]}
      />
      <Project
        arrayOfIcons={[
          SiJavascript,
          SiCss3,
          SiReact,
          SiRedux,
          FaPhp,
          SiSymphony,
        ]}
        projectName='Chalets et Caviar'
        taskList={[
          'Framework VueJs',
          'Framework TailwindCSS',
          'Utilsation de NodeJs',
          'Framework Express Js',
        ]}
      />
      {/*
          <Project
            bgImg='writertalent.png'
            altText="image page d'accueil d'un site web"
            arrayOfIcons={[
              { img: 'javascript.png', altText: 'logos JavaScript' },
              { img: 'react.png', altText: 'logos React' },
              { img: 'php.png', altText: 'logos PHP' },
              { img: 'symfony.png', altText: 'logos Symfony' },
            ]}
            iconsWidth='w-5/12'
            projectName='Writer Talent'
          >
            <div className='flex flex-col items-center justify-between md:flex-row mb-5'>
              <img
                src='/images/logo-oclock.png'
                className='w-32 rounded-lg m-3'
              />
              <h2 className='font-bold'>Projet de fin de formation</h2>
            </div>
            <ul>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Utilisation de la librairie React (SPA)
              </li>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Travail en équipe (4 développeurs)
              </li>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Framework Symfony (API Rest)
              </li>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Gestion du State avec Redux
              </li>
            </ul>
          </Project>
          <h3 className='text-2xl font-bold mx-auto my-8'>Projets à faire</h3>
          <Project
            bgImg='writertalent.png'
            altText="image page d'accueil d'un site web"
            arrayOfIcons={[
              { img: 'javascript.png', altText: 'logos JavaScript' },
              { img: 'vuejs.svg', altText: 'logos Vue js' },
              { img: 'tailwind.png', altText: 'logos tailwind CSS' },
              { img: 'express.png', altText: 'logos Express Framework' },
            ]}
            iconsWidth='w-5/12'
            projectName='Author Bright'
          >
            <div className='flex flex-col items-center justify-between md:flex-row mb-5'>
              <img
                src='/images/logo-oclock.png'
                className='w-32 rounded-lg m-3'
              />
              <h2 className='font-bold'>Projet de fin de formation V2</h2>
            </div>
            <ul>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Framework VueJs
              </li>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Framework TailwindCSS
              </li>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Utilsation de NodeJs
              </li>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Framework Express Js
              </li>
            </ul>
          </Project>*/}
    </main>
  );
};

export default Projects;
