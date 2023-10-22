import { gsap } from 'gsap';

import { scrollTriggerAnimation } from '@/slectors/animations';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { AiFillCheckCircle, AiFillProject } from 'react-icons/ai';
import { BiSolidInstitution } from 'react-icons/bi';
import { MdSchool } from 'react-icons/md';
import AboutBloc from '../../components/AboutBloc/AboutBloc';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.img-profil',
      { x: -200, color: 'black', opacity: 0 },
      { x: 0, color: 'white', duration: 3, ease: 'easein', opacity: 1 }
    );
    gsap.fromTo(
      '.profil-name',
      { x: -100, color: 'black', opacity: 0 },
      { x: 0, color: 'white', duration: 3, ease: 'easein', opacity: 1 }
    );
    gsap.fromTo(
      '.profil-job',
      { x: 100, color: 'black', opacity: 0 },
      { x: 0, color: 'white', duration: 3, ease: 'easein', opacity: 1 }
    );
    const aboutBlocs = gsap.utils.toArray('.about-bloc');
    aboutBlocs.forEach((aboutBloc, index) => {
      if (index % 2 === 0) {
        gsap.fromTo(aboutBloc, scrollTriggerAnimation.fromLeft, {
          ...scrollTriggerAnimation.to,
          scrollTrigger: {
            trigger: aboutBloc,
            toggleActions: 'play none none reset',
          },
        });
      } else {
        gsap.fromTo(aboutBloc, scrollTriggerAnimation.fromRight, {
          ...scrollTriggerAnimation.to,
          scrollTrigger: {
            trigger: aboutBloc,
            toggleActions: 'play none none reset',
          },
        });
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Mon Portfolio - About Me</title>
      </Head>
      <main className='main-block p-4 w-full overflow-x-hidden'>
        <div className='flex flex-col items-center justify-around md:flex-row text-center p-6'>
          <Image
            className='img-profil p-1 rounded-full border-white border-solid border-l-8 border-2 shadow-md shadow-white'
            src='/images/profil_big.webp'
            alt='photo de profil'
            width={200}
            height={200}
          />
          <div>
            <p className='profil-name text-3xl font-bold tracking-widest'>
              Sofiane Khenoune
            </p>
            <p className='profil-job text-2xl italic'>
              Développeur React / NextJS
            </p>
          </div>
        </div>
        <AboutBloc Icon={MdSchool}>
          Je suis un développeur passionné et motivé qui a suivi une formation
          intensive de six mois en tant que développeur web et web mobile. Cette
          formation m'a permis d'acquérir les compétences nécessaires pour
          concevoir et développer des sites web, des applications web
          responsive.
        </AboutBloc>
        <AboutBloc Icon={BiSolidInstitution}>
          De plus, j'ai récemment terminé un stage de deux mois dans une
          entreprise de développement de logiciels (Consulting en sécurité). Au
          cours de ce stage, j'ai travaillé sur un projet d'application de
          traitement et dépouillement d'appels d'offre, acquérant ainsi une
          expérience précieuse dans la gestion de projets et la collaboration
          avec d'autres développeurs.
        </AboutBloc>
        <AboutBloc Icon={AiFillProject}>
          J'ai également réalisé deux projets personnels au cours de ma
          formation, démontrant ainsi ma capacité à travailler de manière
          autonome et à résoudre des problèmes manière créative. Ces projets
          m'ont également permis d'appliquer les connaissances acquises au cours
          de ma formation de manière pratique et de me perfectionner dans la
          programmation.
        </AboutBloc>
        <AboutBloc Icon={AiFillCheckCircle}>
          Je suis désormais prêt à relever de nouveaux défis et à contribuer à
          des projets de développement web pour apporter mon expertise technique
          et ma passion pour la programmation.
        </AboutBloc>
      </main>
    </>
  );
};

export default About;
