import gsap from 'gsap';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    const animation = { opacity: 0, duration: 1 };
    tl.from('.profil-image', animation);
    tl.from('.profil-text', animation);
    tl.from('.myname', animation);
    tl.from('.dwwm', animation);
    tl.from('.presentation-link', animation);
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
              className='profil-image mb-5 rounded-lg'
              src='/images/profil_big.webp'
              alt='photo de profil'
              width={400}
              height={400}
              style={{ boxShadow: '0 8px 32px 0 rgba(255,255, 255, 0.30)' }}
            />
            <div
              className='profil-text text-[#190f33] md:-ml-5 md:-mb-10 md:mt-10 rounded-lg font-bold p-5 flex items-center flex-col justify-around border-solid border-white border z-10'
              style={{
                boxShadow: '0 8px 32px 0 rgba(255,255, 255, 0.30)',
                background: 'radial-gradient(circle at 50%, #4b7c7d, #000)',
              }}
            >
              <Image
                className='myname'
                src='/images/myname.svg'
                width={600}
                height={100}
                alt='Sofiane Khenoune'
              />
              <Image
                className='dwwm'
                src='/images/dwwm.svg'
                width={600}
                height={100}
                alt='développeur web et web mobile'
              />
              <Link
                href='/about'
                className='presentation-link bg-gray-800 rounded-md border-solid border-white border'
                style={{ boxShadow: '0 8px 32px 0 rgba(255,255, 255, 0.30)' }}
              >
                <img
                  src='/images/presentations.svg'
                  alt='boutton présentations'
                />
              </Link>
            </div>
          </div>
        </div>
        <dialog>je suis une modale</dialog>
      </main>
    </>
  );
}
