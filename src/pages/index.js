import Head from 'next/head';

import gsap from 'gsap';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  useEffect(() => {
    gsap.from('.container', { opacity: 0 });
  });
  return (
    <>
      <Head>
        <title>Mon Portfolio</title>
      </Head>
      <main className='main-block p-4'>
        <div
          className='h-full rounded-md'
          style={{
            background: 'url("images/computer.jpeg") center',
          }}
        >
          <div className='container text-[#190f33] text-center w-full'>
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
