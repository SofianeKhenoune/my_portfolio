import Head from 'next/head';
import Project from '../../components/Project/Project';
import styles from '../styles/Projects.module.scss';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio - Projects</title>
      </Head>
      <main className='main-block'>
        <section id={styles.projects}>
          <h2>Projets</h2>
          {/* projets réalisés */}
          <h3>Projets Réalisés</h3>
          <p>
            Voici les projets que j'ai déjà réalisés dans le cadre d'une
            formation antérieure
          </p>
          <Project
            link='https://chalets-et-caviar-ai.sofiane-web-dev.fr/'
            bgImg='chaletsetcaviar.png'
            altText='site chalets et caviar'
            arrayOfIcons={[{ img: 'wordpress.png', altText: 'logo wordpress' }]}
          />
          <Project
            link='https://les-films2plein-air.sofiane-web-dev.fr/'
            bgImg='lesfilmsdepleinair.png'
            altText='site les films de plein air'
            arrayOfIcons={[
              { img: 'html_css.png', altText: 'logos HTML et CSS' },
            ]}
          />
          {/*projets à faire  */}
          <h3>Projets à faire</h3>
        </section>
      </main>
    </>
  );
};

export default Projects;
