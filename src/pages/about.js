import { gsap } from 'gsap';
import TextPlugin from 'gsap/dist/TextPlugin';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(TextPlugin);

const About = () => {
  const textRef = useRef();
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
    gsap.to('.about-text', {
      duration: 100,
      text: " Je suis un développeur passionné et motivé qui a suivi une formation intensive de six mois en tant que développeur web et web mobile. <br/> <br/>Cette formation m'a permis d'acquérir les compétences nécessaires pour concevoir et développer des sites web, des applications web responsive. <br/> <br/> De plus, j'ai récemment terminé un stage de deux mois dans une entreprise de développement de logiciels(Consulting en sécurité). <br/>Au cours de ce stage, j'ai travaillé sur un projet d'application de traitement et dépouillement d'appels d'offre, acquérant ainsi une expérience précieuse dans la gestion de projets et la collaboration avec d'autres développeurs. <br/> <br/> J'ai également réalisé deux projets personnels au cours de ma formation,démontrant ainsi ma capacité à travailler de manière autonome et à résoudre des problèmes manière créative. Ces projets m'ont également permis d'appliquer les connaissances acquises au cours de ma formation de manière pratique et de me perfectionner dans la programmation. <br/> <br/> Je crois désormais être prêt à relever de nouveaux défis et à contribuer à des projets de développement web et mobile en espérant apporter mon expertise technique et ma passion pour la programmation.",
    });
  }, []);
  useEffect(() => {
    console.log(textRef.current.offsetHeight);
  }, []);

  return (
    <>
      <Head>
        <title>Mon Portfolio - About Me</title>
      </Head>
      <main className='main-block p-4 w-full'>
        <div className='flex flex-col items-center justify-around md:flex-row text-center p-6'>
          <Image
            className='img-profil p-2 rounded-full border-slate-950 border-solid border-l-8 border-2'
            src='/images/profil_big.webp'
            alt='photo de profil'
            width={200}
            height={200}
          />
          <div>
            <p className='profil-name text-3xl font-bold tracking-widest'>
              Sofiane Khenoune
            </p>
            <p className='profil-job text-2xl italic'>Développeur React</p>
          </div>
        </div>
        <div className='text-xl text-justify md:text-2xl p-6 '>
          <p className='about-text' ref={textRef}></p>
        </div>
      </main>
    </>
  );
};

export default About;
