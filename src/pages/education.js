import Head from 'next/head';
import Image from 'next/image';
import { FaCss3Alt, FaHtml5, FaPhp, FaReact } from 'react-icons/fa';
import {
  SiBootstrap,
  SiGit,
  SiJavascript,
  SiMicrosoftoffice,
  SiMysql,
  SiNextdotjs,
  SiSass,
} from 'react-icons/si';
import styles from '../styles/Education.module.scss';
const Education = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio - Education</title>
      </Head>
      <main className='main-block'>
        <section id={styles.education}>
          <h2>Formation</h2>
          <h3>
            Les langages et technologies avec lesquelles j'ai réalisé des
            projets :
          </h3>
          <div className={styles.logos}>
            <div className={styles.logo}>
              <h4>HTML 5</h4>
              <FaHtml5 color='#F25320' size={150} />
            </div>
            <div className={styles.logo}>
              <h4>CSS 3</h4>
              <FaCss3Alt color='#2091EB' size={150} />
            </div>
            <div className={styles.logo}>
              <h4 style={{ marginBottom: '0.5em' }}>JavaScript</h4>
              <SiJavascript
                color='#e4d04b'
                size={130}
                style={{ borderRadius: '0.5em' }}
              />
            </div>
            <div className={styles.logo}>
              <h4>PHP</h4>
              <FaPhp color='#7175aa' size={150} />
            </div>
            <div className={styles.logo}>
              <h4>React</h4>
              <FaReact color='#359DCA' size={150} />
            </div>
            <div className={styles.logo}>
              <h4>NextJs</h4>
              <SiNextdotjs color='#000' size={150} />
            </div>
            <div className={styles.logo}>
              <h4>MySQL</h4>
              <SiMysql color='#7175aa' size={150} />
            </div>
            <div className={styles.logo}>
              <h4>Sass</h4>
              <SiSass color='#d16ea0' size={150} />
            </div>
            <div className={styles.logo}>
              <h4>Bootstrap</h4>
              <SiBootstrap color='#8712fb' size={150} />
            </div>
          </div>
          <h3>Les outils que je maîtrise:</h3>
          <div className={styles.logos}>
            <div className={styles.logo}>
              <h4>Figma</h4>
              <Image src='/images/figma.webp' width={150} height={150} />
            </div>
            <div className={styles.logo}>
              <h4>Git</h4>
              <SiGit color='#7175aa' size={150} />
            </div>
            <div
              className={styles.logo}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '2em',
              }}
            >
              <h4>Mocodo</h4>
              <Image src='/images/mocodo.png' width={150} height={150} />
            </div>
            <div className={styles.logo}>
              <h4>Office</h4>
              <SiMicrosoftoffice color='#f40401' size={150} />
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
