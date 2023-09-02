import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio - About Me</title>
      </Head>
      <main className='main-block'>
        <section id={styles.about_me}>
          <div
            id={styles.profil_img}
            className='flex-col items-center md:flex-row'
          >
            <Image
              id={styles.img_profil}
              src='/images/profil_big.webp'
              alt='Ma photo'
              width={200}
              height={200}
            />
            <div>
              <p id={styles.profil_name}>Sofiane Khenoune</p>
              <p id={styles.profil_city}>Développeur React</p>
            </div>
          </div>
          <div id={styles.profil_txt}>
            <p>
              Je suis un développeur passionné et motivé qui a suivi une
              formation intensive de six mois en tant que développeur web et web
              mobile. Cette formation m'a permis d'acquérir les compétences
              nécessaires pour concevoir et développer des sites web, des
              applications web et des applications mobiles.
            </p>
            <p>
              De plus, j'ai récemment terminé un stage de deux mois dans une
              entreprise de développement de logiciels (Consulting en sécurité).
            </p>
            <p>
              Au cours de ce stage, j'ai travaillé sur un projet d'application
              de traitement et dépouillement d'appels d'offre, acquérant ainsi
              une expérience précieuse dans la gestion de projets et la
              collaboration avec d'autres développeurs.
            </p>
            <p>
              J'ai également réalisé deux projets personnels au cours de ma
              formation, démontrant ainsi ma capacité à travailler de manière
              autonome et à résoudre des problèmes de manière créative. Ces
              projets m'ont également permis d'appliquer les connaissances
              acquises au cours de ma formation de manière pratique et de me
              perfectionner dans la programmation.
            </p>
            <p>
              Je crois désormais être prêt à relever de nouveaux défis et à
              contribuer à des projets de développement web et mobile en
              espérant apporter mon expertise technique et ma passion pour la
              programmation.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
