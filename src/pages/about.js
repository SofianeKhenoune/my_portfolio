import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio - About Me</title>
      </Head>
      <main className='main-block'>
        <section id={styles.about_me}>
          <div id={styles.profil_img}>
            <Image
              id={styles.img_profil}
              src='/images/myphoto.png'
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
            <p></p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
