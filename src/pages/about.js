import { gsap } from 'gsap';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import SplitType from 'split-type';

const About = () => {
  useEffect(() => {
    const aboutText = new SplitType('.about-text', { types: 'words' });
    gsap.fromTo(
      '.img-profil',
      { x: -200, color: 'black', opacity: 0 },
      { x: 0, color: 'white', duration: 3, ease: 'easein', opacity: 1 }
    );
    gsap.fromTo(
      '.profil-name',
      { x: -100, color: 'black', opacity: 0 },
      { x: 0, color: 'white', duration: 3, ease: 'easein', opacity: 1 }
    );
    gsap.fromTo(
      '.profil-job',
      { x: 100, color: 'black', opacity: 0 },
      { x: 0, color: 'white', duration: 3, ease: 'easein', opacity: 1 }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Mon Portfolio - About Me</title>
      </Head>
      <main className='main-block p-4 w-full overflow-x-hidden'>
        <div className='flex flex-col items-center justify-around md:flex-row text-center p-6'>
          <Image
            className='img-profil p-1 rounded-full border-white border-solid border-l-8 border-2 shadow-md shadow-white'
            src='/images/profil_big.webp'
            alt='photo de profil'
            width={200}
            height={200}
          />
          <div>
            <p className='profil-name text-3xl font-bold tracking-widest'>
              Sofiane Khenoune
            </p>
            <p className='profil-job text-2xl italic'>
              Développeur React / NextJS
            </p>
          </div>
        </div>
        <div className='text-xl text-justify md:text-2xl overflow-y-hidden mb-10'>
          <p className='about-text mb-7'></p>
        </div>
      </main>
    </>
  );
};

export default About;
