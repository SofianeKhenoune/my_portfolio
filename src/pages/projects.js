import Image from 'next/image';
import Head from 'next/head';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio - Projects</title>
      </Head>
      <main className='main-block'>
        <section id='projects'>
          <h2>Projets</h2>
          {/* projets réalisés */}
          <h3>Projets Réalisés</h3>
          <p>
            Voici les projets que j'ai déjà réalisés dans le cadre d'une
            formation antérieure
          </p>
          <div className='project'>
            <a
              href='https://chalets-et-caviar-ai.sofiane-web-dev.fr/'
              target='_blank'
            >
              <Image
                src='/images/chaletsetcaviar.png'
                alt='site chalets et caviar'
                width={1000}
                height={1000}
              />
            </a>
            <Image
              src='/images/wordpress.png'
              alt='logo wordpress'
              width={1000}
              height={1000}
            />
          </div>
          <div className='project'>
            <a
              href='https://les-films2plein-air.sofiane-web-dev.fr/'
              target='_blank'
            >
              <Image
                width={500}
                height={300}
                src='/images/lesfilmsdepleinair.png'
                alt='site les films de plein air'
              />
            </a>
            <Image
              src='/images/html_css.png'
              alt='logos HTML et CSS'
              width={1000}
              height={1000}
            />
          </div>
          {/*projets à faire  */}
          <h3>Projets à faire</h3>
          <p className='txt-projects'>
            Au cours de ma formation Développement Web &amp; Mobile, je
            réaliserai plusieurs répliques d'applications Web et d'applications
            Mobiles :
          </p>
          <div className='project'>
            <Image
              src='/images/tripadvisor.png'
              alt='tripadvisor'
              width={1000}
              height={1000}
            />
            <div>
              <h3>Tripadvisor Web</h3>
              <h4>Projet Front-End</h4>
              <ul>
                <li>Envoi automatisé de mails</li>
                <li>Caroussel de photos</li>
              </ul>
            </div>
          </div>
          <div className='project'>
            <Image
              src='/images/deliveroo.png'
              alt='deliveroo'
              width={1000}
              height={1000}
            />
            <div>
              <h3>Deliveroo Web</h3>
              <h4>Projet Front-End</h4>
              <ul>
                <li>Récupérations de données</li>
                <li>Panier de commande</li>
              </ul>
            </div>
          </div>
          <div className='project'>
            <Image
              src='/images/vinted.png'
              alt='vinted'
              width={1000}
              height={1000}
            />
            <div>
              <h3>Vinted Web</h3>
              <h4>Projet Full-Stack</h4>
              <ul>
                <li>Inscription / connexion</li>
                <li>Récupérations de données</li>
                <li>Publication d'annonces</li>
                <li>Bare de recherche</li>
                <li>Paiement</li>
                <li>Upload de photos</li>
              </ul>
            </div>
          </div>
          <div className='project'>
            <Image
              src='/images/airbnb.png'
              alt='Rbnb'
              width={1000}
              height={1000}
            />
            <div>
              <h3>Airbnb Mobile</h3>
              <h4>Projet Full-Stack</h4>
              <ul>
                <li>Inscription / connexion</li>
                <li>Modification du profil utilisateur</li>
                <li>Affichages de cartes</li>
                <li>Géolocalisation</li>
                <li>Accès à la gallerie d'images</li>
                <li>Accès à l'appareil photo</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
