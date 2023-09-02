import Head from 'next/head';
import { SiGithub, SiLinkedin, SiMinutemailer } from 'react-icons/si';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio - Contact</title>
      </Head>
      <main className={styles.main_block}>
        <section id={styles.contact}>
          <h2>Contactez-moi</h2>
          <div>
            <SiMinutemailer />
            <a href='mailto:sofianekhenoune.dev@gmail.com'>Email</a>
          </div>
          <div>
            <SiLinkedin />
            <a
              href='http://www.linkedin.com/in/sofianekhenoune'
              target='_blank'
            >
              Linkedin
            </a>
          </div>
          <div>
            <SiGithub />
            <a href='http://github.com/modestman1986' target='_blank'>
              Github
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
