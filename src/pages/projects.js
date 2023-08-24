import Head from 'next/head';
import Project from '../../components/Project/Project';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio - Projects</title>
      </Head>
      <main className='main-block'>
        <section className='flex flex-col items-center'>
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
            arrayOfIcons={[{ img: 'wordpress.png', altText: 'logo wordpress' }]}
          />
          <Project
            link='https://les-films2plein-air.sofiane-web-dev.fr/'
            bgImg='lesfilmsdepleinair.png'
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
