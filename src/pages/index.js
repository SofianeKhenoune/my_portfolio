import gsap from 'gsap';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.profil-image',
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    );
    tl.fromTo(
      '.profil-text',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    );
  });
  return (
    <>
      <Head>
        <title>Mon Portfolio</title>
      </Head>
      <main className='main-block text-white'>
        <div className='h-full rounded-md'>
          <div className='container text-center w-full flex items-center flex-col md:flex-row md:items-stretch'>
            <Image
              className='profil-image p-1 rounded-lg border-white border-solid border-l-8 border-2 shadow-md shadow-white mb-5'
              src='/images/profil_big.webp'
              alt='photo de profil'
              width={400}
              height={400}
            />
            <div className='profil-text bg-slate-200 text-[#190f33] md:-ml-5 md:-mb-10 md:mt-10 rounded-lg shadow-md shadow-white font-bold p-5 flex items-center flex-col justify-around'>
              <h1 className=''>Sofiane Khenoune</h1>
              <p className='capitalize'>développeur web et web mobile</p>
              <Link
                href='/about'
                style={{
                  background: 'radial-gradient(circle at 50%, #168d8f, #000)',
                  boxShadow: '0 8px 32px 0 rgba(255,255, 255, 0.15)',
                  backdropFilter: 'blur(5px)',
                  color: '#fff',
                  borderRadius: '1em',
                  padding: '.5em 1em',
                }}
              >
                Commençons par les présentations !
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
