import Image from 'next/image';
import Head from 'next/head';
import {FaHtml5, FaCss3Alt,FaPhp, FaSymfony, FaWindows, FaLinux, FaApple } from 'react-icons/fa';
import { IoLogoFigma} from 'react-icons/io5';
import { BiLogoReact, BiLogoSass, BiLogoGit, BiLogoGithub} from 'react-icons/bi';
import {DiResponsive, DiMysql, DiJavascript} from 'react-icons/di';
import styles from '../styles/Education.module.scss';
import { SiJavascript } from 'react-icons/si';
const Education = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio - Education</title>
      </Head>
      <main className='main-block'>
        <section id={styles.education}>
          <h2>Formation</h2>
          <h3>Les langages que je maîtrise:</h3>
          <div className={styles.logos}>
          <div className={styles.logo}>
            <h4>HTML 5</h4>
            <FaHtml5 color="#F25320" size={150}/>
          </div>
          <div className={styles.logo}>
            <h4>CSS 3</h4>
            <FaCss3Alt color="#2091EB" size={150}/>
          </div>
          <div className={styles.logo}>
            <h4 style={{marginBottom: '0.5em'}}>JavaScript</h4>
            <SiJavascript color="#e4d04b" size={130} style={{borderRadius: '0.5em'}}/>
          </div>
          <div className={styles.logo}>
            <h4>PHP</h4>
            <FaPhp color="#7175aa" size={150} />
          </div>
          </div>
          <h3>Les outils que je maîtrise:</h3>
          <div className={styles.logos}>
            <div className={styles.logo}>
              <h4>Figma</h4>
              <Image src="/images/figma.webp" width={150} height={150}/>
            </div>
          </div>
          <p>
            Les technologies et compétences qui sont en cours d'acquisition :
          </p>
        </section>
      </main>
    </>
  );
};

export default Education;
