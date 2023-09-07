import Head from 'next/head';
import Project from '../../components/Project/Project';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio - Projects</title>
      </Head>
      <main className='container main-block p-4 text-center'>
        <section className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold mx-auto my-8'>Projets</h1>
          <h2 className='text-2xl font-bold mx-auto my-8'>Projets Réalisés</h2>
          <h3 className='text-xl font-bold mx-auto my-8'>
            Voici les projets que j'ai réalisés :
          </h3>
          <Project
            link='https://chalets-et-caviar-ai.sofiane-web-dev.fr/'
            bgImg='chaletsetcaviar.png'
            altText="image page d'accueil d'un site web"
            arrayOfIcons={[{ img: 'wordpress.png', altText: 'logo wordpress' }]}
          />
          <Project
            link='https://les-films2plein-air.sofiane-web-dev.fr/'
            bgImg='lesfilmsdepleinair.png'
            altText="image page d'accueil d'un site web"
            arrayOfIcons={[
              { img: 'html_css.png', altText: 'logos HTML et CSS' },
            ]}
          />
          <h3>Projets à faire</h3>
        </section>
      </main>
    </>
  );
};

export default Projects;
