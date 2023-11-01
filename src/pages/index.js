import gsap from 'gsap';
import scrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useEffect } from 'react';
import { AiFillCheckCircle, AiFillProject } from 'react-icons/ai';
import { BiSolidInstitution } from 'react-icons/bi';
import { FaPhp, FaVuejs, FaWordpress } from 'react-icons/fa';
import { MdOutlineScreenshotMonitor, MdSchool } from 'react-icons/md';
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
import AboutBloc from '../../components/AboutBloc/AboutBloc';
import Contact from '../../components/Contact/Contact';
import Project from '../../components/Project/Project';

gsap.registerPlugin(scrollTrigger);
export default function Home() {
  useEffect(() => {
    const blocs = gsap.utils.toArray('.bloc');
    blocs.forEach((bloc) => {
      gsap.to(bloc, {
        opacity: 1,
        duration: 1,
        translateY: 0,
        ease: 'elastic.out',
        scrollTrigger: {
          trigger: bloc,
          toggleActions: 'restart pause resume reset',
        },
      });
    });
  });
  return (
    <main className='px-10 py-5'>
      <div
        className='home md:h-[100vh] flex flex-col md:flex-row gap-5'
        id='home'
      >
        <div className='flex items-center justify-center'>
          <div className='bloc flex flex-col md:flex:row justify-center items-center opacity-0 translate-y-20'>
            <Image
              src='/images/profil-home.png'
              width={300}
              height={300}
              alt='photo de profil'
              className='mb-6 border border-light rounded-full p-1'
            />
            <Image
              src='/images/myname.svg'
              width={400}
              height={100}
              alt='Sofiane Khenoune'
              title='Sofiane Khenoune'
              className='border-b border-b-light border-b-'
            />
          </div>
        </div>
        <div className='flex items-center justify-center flex-1 md:h-full'>
          <div className='bloc bg-medium border border-light p-5 rounded-lg opacity-0 translate-y-20'>
            <h1 className='italic mb-5 text-xl font-bold border-b border-b-light pb-3'>
              Développeur web et web mobile
            </h1>

            <p className='border-b border-b-light pb-3'>
              Passionné de développement web et mobile, spécialisé en JavaScript
              et React, je suis un développeur créatif et polyvalent. Fort d'une
              expertise dans la création d'interfaces dynamiques et réactives,
              je m'engage à concevoir des solutions innovantes pour offrir une
              expérience utilisateur immersive et intuitive.
            </p>

            <div className='border-b border-b-light pb-3'>
              <h3 className='italic mt-5 mb-2 font-bold'>Technologies</h3>
              <div className='flex items-center gap-2'>
                <SiJavascript
                  className='javascript rounded-lg m-1'
                  size={30}
                  title='Logo Javascript'
                />
                <SiReact className='m-1' size={30} title='Logo React' />
                <SiPhp className='m-1' size={30} title='Logo PHP' />
                <SiRedux className='m-1' size={30} title='Logo Redux' />
              </div>
            </div>
            <div>
              <h3 className='italic mt-5 mb-2 font-bold'>Me contacter</h3>
              <Contact iconSize={30} />
            </div>
          </div>
        </div>
      </div>

      <div id='about' className='pt-10 md:h-[100vh]'>
        <h2 className='capitalize text-lg font-bold text-center my-20 md:text-3xl'>
          à propos de moi
        </h2>
        <div className='flex flex-wrap gap-10 justify-center'>
          <AboutBloc Icon={MdSchool} title='Formation'>
            Je suis un développeur passionné et motivé qui a suivi une formation
            intensive de six mois en tant que développeur web et web mobile.
            Cette formation m'a permis d'acquérir les compétences nécessaires
            pour concevoir et développer des sites web, des applications web
            responsive.
          </AboutBloc>
          <AboutBloc Icon={BiSolidInstitution} title='Stage'>
            De plus, j'ai récemment terminé un stage de deux mois dans une
            entreprise de développement de logiciels (Consulting en sécurité).
            Au cours de ce stage, j'ai travaillé sur un projet d'application de
            traitement et dépouillement d'appels d'offre, acquérant ainsi une
            expérience précieuse dans la gestion de projets et la collaboration
            avec d'autres développeurs.
          </AboutBloc>
          <AboutBloc Icon={AiFillProject} title='Expériences'>
            J'ai également réalisé deux projets personnels au cours de ma
            formation, démontrant ainsi ma capacité à travailler de manière
            autonome et à résoudre des problèmes manière créative. Ces projets
            m'ont également permis d'appliquer les connaissances acquises au
            cours de ma formation de manière pratique et de me perfectionner
            dans la programmation.
          </AboutBloc>
          <AboutBloc Icon={AiFillCheckCircle} title='Statut'>
            Je suis désormais prêt à relever de nouveaux défis et à contribuer à
            des projets de développement web pour apporter mon expertise
            technique et ma passion pour la programmation.
          </AboutBloc>
        </div>
      </div>
      <div id='projects' className='pt-10 md:h-[100vh]'>
        <h2 className='capitalize text-lg font-bold text-center my-20 md:text-3xl'>
          mes projets
        </h2>
        <div className='flex flex-wrap gap-10 justify-center'>
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
      </div>
    </main>
  );
}
