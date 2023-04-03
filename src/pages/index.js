import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon Portfolio</title>
      </Head>
      <main className='main-block'>
        <div className={styles.home_page}>
          <div className={styles.container}>
            <h1 className={styles.title}>Mon Portfolio</h1>
            <p>
              Bienvenue, si vous êtes sur cette page c'est que vous êtes curieux
              de savoir qui je suis et ce que je fais.
            </p>
            <Link href='/about' className={styles.about}>
              Commençons par les présentations !
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
