import gsap from 'gsap';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaPhp, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.profil-text', {
      opacity: 1,
      duration: 2,
      borderRadius: 0,
      translateX: 0,
      delay: 1,
      ease: 'expo.out',
    });
    tl.to('.myname', { opacity: 1, duration: 1 });
    tl.to('.dwwm', { opacity: 1, duration: 1 });
    tl.to('.javascript', { opacity: 1, duration: 1 });
    tl.to('.react', { opacity: 1, duration: 1 });
    tl.to('.php', { opacity: 1, duration: 1 });
    tl.to('.presentation-link', { opacity: 1, duration: 1 });
  });
  return (
    <>
      <Head>
        <title>Mon Portfolio</title>
      </Head>
      <main
        className='h-screen flex z-50 flex-col md:flex-row overflow-hidden'
        style={{
          background: `center / cover url('/images/profil_big.webp') no-repeat`,
        }}
      >
        <div className='flex-1'></div>
        <div
          className='profil-text font-bold p-2 flex items-center flex-col justify-around h-1/3 md:flex-1 md:h-full opacity-0
          rounded-tl-full rounded-bl-full translate-x-full'
          style={{
            boxShadow: '0 8px 32px 0 rgba(255,255, 255, 0.30)',
            background: 'radial-gradient(circle at 50%, #4b7c7d, #000)',
          }}
        >
          <img
            className='myname opacity-0'
            src='/images/myname.svg'
            alt='Sofiane Khenoune'
            title='Sofiane Khenoune'
          />
          <img
            className='dwwm opacity-0'
            src='/images/dwwm.svg'
            alt='développeur web et web mobile'
            title='développeur web et web mobile'
          />
          <div className='icons w-2/3 flex mb-5 justify-between gap-4'>
            <SiJavascript
              className='javascript opacity-0'
              color='#e4d04b'
              size={100}
              title='Logo Javascript'
            />
            <FaReact
              className='react opacity-0'
              color='#359DCA'
              size={100}
              title='Logo React'
            />
            <FaPhp
              className='php opacity-0'
              color='#7175aa'
              size={100}
              title='Logo PHP'
            />
          </div>
          <Link
            href='/about'
            className='presentation-link bg-gray-800 rounded-lg w-4/5 opacity-0'
            style={{ boxShadow: '0 8px 32px 0 rgba(255,255, 255, 0.30)' }}
          >
            <img
              src='/images/presentations.svg'
              alt='boutton présentations'
              title='boutton pour aller sur la page about'
            />
          </Link>
        </div>
      </main>
    </>
  );
}
