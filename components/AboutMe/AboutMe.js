import { AiFillCheckCircle, AiFillProject } from 'react-icons/ai';
import { BiSolidInstitution } from 'react-icons/bi';
import { MdSchool } from 'react-icons/md';
import { Element } from 'react-scroll';
import AboutBloc from './AboutBloc';

const AboutMe = () => {
  return (
    <Element name='about' className='min-h-screen'>
      <h2 className='capitalize text-2xl font-bold text-center my-20 md:text-3xl opacity-0 -translate-x-10 max-w-max mx-auto p-2'>
        à propos de moi
      </h2>
      <div className='flex flex-wrap gap-10 justify-center'>
        <AboutBloc Icon={MdSchool} title='Formation'>
          Je suis un développeur passionné et motivé qui a suivi une formation
          intensive de six mois en tant que développeur web et web mobile. Cette
          formation m'a permis d'acquérir les compétences nécessaires pour
          concevoir et développer des sites web, des applications web
          responsive.
        </AboutBloc>
        <AboutBloc Icon={BiSolidInstitution} title='Stage'>
          De plus, j'ai récemment terminé un stage de deux mois dans une
          entreprise de développement de logiciels (Consulting en sécurité). Au
          cours de ce stage, j'ai travaillé sur un projet d'application de
          traitement et dépouillement d'appels d'offre, acquérant ainsi une
          expérience précieuse dans la gestion de projets et la collaboration
          avec d'autres développeurs.
        </AboutBloc>
        <AboutBloc Icon={AiFillProject} title='Expériences'>
          J'ai également réalisé deux projets personnels au cours de ma
          formation, démontrant ainsi ma capacité à travailler de manière
          autonome et à résoudre des problèmes manière créative. Ces projets
          m'ont également permis d'appliquer les connaissances acquises au cours
          de ma formation de manière pratique et de me perfectionner dans la
          programmation.
        </AboutBloc>
        <AboutBloc Icon={AiFillCheckCircle} title='Statut'>
          Je suis désormais prêt à relever de nouveaux défis et à contribuer à
          des projets de développement web pour apporter mon expertise technique
          et ma passion pour la programmation.
        </AboutBloc>
      </div>
    </Element>
  );
};

export default AboutMe;
