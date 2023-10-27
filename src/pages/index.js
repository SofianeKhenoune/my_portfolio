import gsap from 'gsap';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaPhoneSquareAlt } from 'react-icons/fa';

import {
  SiGithub,
  SiJavascript,
  SiLinkedin,
  SiMinutemailer,
  SiPhp,
  SiReact,
} from 'react-icons/si';
export default function Home() {
  useEffect(() => {
    gsap.to('.profil-text', {
      opacity: 1,
      duration: 1,
      borderRadius: 0,
      translateY: 0,
      ease: 'expo.out',
    });
  });
  return (
    <>
      <Head>
        <title>Mon Portfolio</title>
      </Head>
      <main className='h-full flex flex-col md:flex-row overflow-hidden text-center'>
        <div className='flex-1 flex flex-col md:flex:row justify-center items-center p-10'>
          <Image
            src='/images/profil-home.png'
            width={500}
            height={500}
            alt='photo de profil'
            className='rounded-full mb-6'
          />
          <Image
            className='myname'
            src='/images/myname.svg'
            width={400}
            height={100}
            alt='Sofiane Khenoune'
            title='Sofiane Khenoune'
          />
        </div>
        <div className='profil-text font-bold p-2 flex items-center flex-col justify-around h-1/2 md:flex-1 md:h-full opacity-0 rounded-tl-full rounded-tr-full translate-y-full shadow-xl shadow-slate-50'>
          <div>
            <h2 className='italic mb-5'>Les technologies</h2>
            <div className='flex items-center'>
              <SiJavascript
                className='javascript rounded-lg m-2 flex-1'
                color='#e4d04b'
                size={50}
                title='Logo Javascript'
              />
              <SiReact
                className='react m-2 flex-1'
                color='#359DCA'
                size={50}
                title='Logo React'
              />
              <SiPhp
                className='php m-2 flex-1'
                color='#7175aa'
                size={50}
                title='Logo PHP'
              />
            </div>
          </div>
          <div>
            <h2 className='italic mb-5'>Me contacter</h2>
            <div className='flex items-center'>
              <Link href='tel:+33652294817' className='flex-1'>
                <FaPhoneSquareAlt className='hover:scale-110 m-2' size={40} />
              </Link>
              <Link
                href='mailto:sofianekhenoune.dev@gmail.com'
                className='flex-1'
              >
                <SiMinutemailer className='hover:scale-110 m-2' size={40} />
              </Link>
              <Link
                href='http://www.linkedin.com/in/sofianekhenoune'
                target='_blank'
                className='flex-1'
              >
                <SiLinkedin className='hover:scale-110 m-2' size={40} />
              </Link>
              <Link
                href='http://github.com/modestman1986'
                target='_blank'
                className='flex-1'
              >
                <SiGithub className='hover:scale-110 m-2' size={40} />
              </Link>
            </div>
          </div>
          <Link
            href='/about'
            className='presentation-link bg-gray-800 rounded-lg w-4/5'
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
