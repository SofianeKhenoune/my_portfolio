import gsap from 'gsap';
import scrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useEffect } from 'react';
import { AiFillCheckCircle, AiFillProject } from 'react-icons/ai';
import { BiSolidInstitution } from 'react-icons/bi';
import { FaVuejs, FaWordpress } from 'react-icons/fa';
import { MdOutlineScreenshotMonitor, MdSchool } from 'react-icons/md';
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMicrosoftoffice,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiRedux,
  SiSass,
  SiSymphony,
  SiTailwindcss,
} from 'react-icons/si';
import AboutBloc from '../../components/AboutBloc/AboutBloc';
import Contact from '../../components/Contact/Contact';
import EducationIcon from '../../components/EducationIcon/EducationIcon';
import Project from '../../components/Project/Project';

gsap.registerPlugin(scrollTrigger);
export default function Home() {
  useEffect(() => {
    const blocs = gsap.utils.toArray('.bloc');
    const titles = gsap.utils.toArray('h2');
    const contactLinks = gsap.utils.toArray('#contact .bloc a');
    const tl = gsap.timeline();
    contactLinks.forEach((link) => {
      tl.fromTo(
        link,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 0.3 }
      );
    });
    scrollTrigger.create({
      animation: tl,
      trigger: '#contact',
      toggleActions: 'restart pause resume reset',
    });
    titles.forEach((title) => {
      gsap.to(title, {
        x: 0,
        opacity: 1,
        duration: 2,
        borderBottom: '1px solid hsl(220,32%,30%)',
        ease: 'elastic.out',
        scrollTrigger: {
          trigger: title,
          toggleActions: 'restart pause resume reset',
        },
      });
    });
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
  }, []);
  return (
    <main className='px-10 py-5'>
      <section
        className='home min-h-screen flex flex-col md:flex-row gap-5 items-center justify-center pt-20'
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
              priority={1}
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
        <div className='flex items-center justify-center md:flex-1 md:h-full'>
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
      </section>

      <section id='about' className='pt-10'>
        <h2 className='capitalize text-2xl font-bold mx-auto my-20 md:text-3xl opacity-0 -translate-x-10 max-w-max p-2'>
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
      </section>
      <section id='projects' className='pt-10'>
        <h2 className='capitalize text-2xl font-bold mx-auto my-20 md:text-3xl opacity-0 -translate-x-10 max-w-max p-2'>
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
      </section>
      <section id='education' className='pt-10'>
        <h2 className='capitalize text-2xl font-bold mx-auto my-20 md:text-3xl opacity-0 -translate-x-10 max-w-max p-2'>
          Formation
        </h2>
        <h3 className='py-10 text-center italic font-bold'>
          Langages et technologies
        </h3>
        <div className='flex flex-wrap gap-10 justify-center'>
          <EducationIcon iconId='icon1' name='HTML 5' nbStars={4}>
            <SiHtml5 color='#F25320' size={150} />
          </EducationIcon>
          <EducationIcon iconId='icon2' name='CSS 3' nbStars={4}>
            <SiCss3 color='#2091EB' size={150} />
          </EducationIcon>
          <EducationIcon iconId='icon3' name='JavaScript' nbStars={3.5}>
            <SiJavascript
              color='#e4d04b'
              size={130}
              style={{
                borderRadius: '0.5em',
                margin: '0.5em 0',
              }}
            />
          </EducationIcon>

          <EducationIcon iconId='icon4' name='PHP' nbStars={3.7}>
            <SiPhp color='#7175aa' size={150} />
          </EducationIcon>

          <EducationIcon iconId='icon5' name='React' nbStars={3}>
            <SiReact color='#359DCA' size={150} />
          </EducationIcon>

          <EducationIcon iconId='icon6' name='NextJs' nbStars={2.5}>
            <SiNextdotjs color='#000' size={150} />
          </EducationIcon>

          <EducationIcon iconId='icon7' name='MySQL' nbStars={3.5}>
            <SiMysql color='#7175aa' size={150} />
          </EducationIcon>

          <EducationIcon iconId='icon8' name='Sass' nbStars={3}>
            <SiSass color='#d16ea0' size={150} />
          </EducationIcon>

          <EducationIcon iconId='icon9' name='Bootstrap' nbStars={2.5}>
            <SiBootstrap color='#8712fb' size={150} />
          </EducationIcon>
          <EducationIcon iconId='icon15' name='Tailwind CSS' nbStars={3.5}>
            <SiTailwindcss color='#08b7d4' size={150} />
          </EducationIcon>
        </div>
        <h3 className='py-10 text-center italic font-bold'>Outils</h3>
        <div className='flex flex-wrap gap-10 justify-center'>
          <EducationIcon iconId='icon10' name='Figma' nbStars={3}>
            <Image
              src='/images/figma.webp'
              width={150}
              height={150}
              alt='figma logo'
            />
          </EducationIcon>

          <EducationIcon iconId='icon11' name='Git' nbStars={3.5}>
            <SiGit color='#7175aa' size={150} />
          </EducationIcon>
          <EducationIcon iconId='icon12' name='Mocodo' nbStars={3.5}>
            <Image
              src='/images/mocodo.png'
              width={150}
              height={150}
              alt='logo de Mocodo'
              style={{ margin: '2.3em 0' }}
            />
          </EducationIcon>
          <EducationIcon iconId='icon13' name='Office' nbStars={4}>
            <SiMicrosoftoffice color='#f40401' size={150} />
          </EducationIcon>
        </div>
        <h3 className='py-10 text-center italic font-bold'>En cours</h3>
        <div className='flex flex-wrap gap-10 justify-center'>
          <EducationIcon iconId='icon14' name='Vue.js' nbStars={2}>
            <Image
              src='/images/vuejs.svg'
              width={150}
              height={150}
              alt='logo vuejs'
              style={{ margin: '0.5em 0' }}
            />
          </EducationIcon>
        </div>
      </section>
      <section
        id='contact'
        className='pt-10 h-[calc(100vh-90px)] flex justify-center items-center flex-col'
      >
        <h2 className='capitalize text-2xl font-bold mx-auto my-20 md:text-3xl opacity-0 -translate-x-10 max-w-max p-2'>
          Contact
        </h2>
        <Contact iconSize={50} />
      </section>
    </main>
  );
}
