import { scrollTriggerAnimation } from '@/slectors/animations';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';
import { useEffect } from 'react';
import Project from '../../components/Project/Project';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.fromTo(
      'h1',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    );
    gsap.fromTo(
      'h1 + h2',
      { x: -100, color: 'black', opacity: 0 },
      { x: 0, color: 'white', duration: 2, ease: 'easein', opacity: 1 }
    );
    const projects = gsap.utils.toArray('.project');
    projects.forEach((project, index) => {
      if (index % 2 === 0) {
        gsap.fromTo(project, scrollTriggerAnimation.fromLeft, {
          ...scrollTriggerAnimation.to,
          scrollTrigger: {
            trigger: project,
            toggleActions: 'play none none reset',
          },
        });
      } else {
        gsap.fromTo(project, scrollTriggerAnimation.fromRight, {
          ...scrollTriggerAnimation.to,
          scrollTrigger: {
            trigger: project,
            toggleActions: 'play none none reset',
          },
        });
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title>Mon Portfolio - Projects</title>
      </Head>
      <main className=' p-4 text-center overflow-x-hidden'>
        <section className='flex flex-col items-center w-full'>
          <h1 className='text-5xl font-bold my-10'>Projets</h1>
          <h2 className='text-2xl font-bold mx-auto my-8'>Projets Réalisés</h2>
          <Project
            bgImg='chaletsetcaviar.png'
            altText="image page d'accueil d'un site web"
            arrayOfIcons={[
              { img: 'wordpress.png', altText: 'logo wordpress' },
              { img: 'php.png', altText: 'logo php' },
            ]}
            iconsWidth='w-5/12'
            projectName='Chalets et Caviar'
          >
            <div className='flex flex-col items-center justify-between md:flex-row mb-5'>
              <img src='/images/logo-openclassroom.png' className='w-32' />
              <h2 className='font-bold'>
                Projet de validation de parcours formation
              </h2>
            </div>
            <ul>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Mise en place d'un template Wordpress
              </li>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Utilsation d'Elementor
              </li>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Personnalisation avec PHP
              </li>
            </ul>
          </Project>
          <Project
            bgImg='lesfilmsdepleinair.png'
            altText="image page d'accueil d'un site web"
            arrayOfIcons={[
              { img: 'html_css.png', altText: 'logos HTML et CSS' },
            ]}
            projectName='Les Films de Plain Air'
          >
            <div className='flex flex-col items-center justify-between md:flex-row mb-5'>
              <img src='/images/logo-openclassroom.png' className='w-32' />
              <h2 className='font-bold'>
                Projet de validation de parcours formation
              </h2>
            </div>
            <ul>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Rédaction d'un cahier des charges
              </li>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Intégration avec HTML5 et CSS3
              </li>
              <li className='bg-slate-50 mb-3 rounded-lg p-2'>
                Responsive Design
              </li>
            </ul>
          </Project>
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
          </Project>
        </section>
      </main>
    </>
  );
};

export default Projects;
