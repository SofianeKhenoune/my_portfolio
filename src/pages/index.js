import gsap from 'gsap';
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
  SiRedux,
} from 'react-icons/si';
export default function Home() {
  useEffect(() => {
    gsap.to('.profil-card', {
      opacity: 1,
      duration: 1,
      translateY: 0,
      ease: 'elastic',
    });
    gsap.to('.profil-img', {
      opacity: 1,
      duration: 1,
      translateY: 0,
      ease: 'elastic',
    });
  });
  return (
    <main className='h-full flex flex-col md:flex-row p-10 gap-5'>
      <div className='flex-1 flex items-center justify-center'>
        <div className='profil-img flex flex-col md:flex:row justify-center items-center opacity-0 translate-y-10'>
          <Image
            src='/images/profil-home.png'
            width={300}
            height={300}
            alt='photo de profil'
            className='mb-6'
          />
          <Image
            src='/images/myname.svg'
            width={400}
            height={100}
            alt='Sofiane Khenoune'
            title='Sofiane Khenoune'
          />
        </div>
      </div>
      <div className='flex items-center justify-center flex-1 md:h-full'>
        <div className='profil-card bg-medium border border-light p-5 rounded-lg opacity-0 translate-y-10'>
          <h2 className='italic mb-5 text-xl font-bold border-b border-b-light pb-3'>
            Développeur web et web mobile
          </h2>

          <p className='border-b border-b-light pb-3'>
            Passionné de développement web et mobile, spécialisé en JavaScript
            et React, je suis un développeur créatif et polyvalent. Fort d'une
            expertise dans la création d'interfaces dynamiques et réactives, je
            m'engage à concevoir des solutions innovantes pour offrir une
            expérience utilisateur immersive et intuitive.
          </p>

          <div className='border-b border-b-light pb-3'>
            <h2 className='italic mt-5 mb-2 font-bold'>Technologies</h2>
            <div className='flex items-center gap-2'>
              <SiJavascript
                className='javascript rounded-lg m-2'
                size={30}
                title='Logo Javascript'
              />
              <SiReact className='m-2' size={30} title='Logo React' />
              <SiPhp className='m-2' size={30} title='Logo PHP' />
              <SiRedux className='m-2' size={30} title='Logo PHP' />
            </div>
          </div>
          <div>
            <h2 className='italic mt-5 mb-2 font-bold'>Me contacter</h2>
            <div className='flex items-center gap-2'>
              <Link href='tel:+33652294817'>
                <FaPhoneSquareAlt className='hover:scale-125 m-2' size={30} />
              </Link>
              <Link href='mailto:sofianekhenoune.dev@gmail.com'>
                <SiMinutemailer className='hover:scale-125 m-2' size={30} />
              </Link>
              <Link
                href='http://www.linkedin.com/in/sofianekhenoune'
                target='_blank'
              >
                <SiLinkedin className='hover:scale-125 m-2' size={30} />
              </Link>
              <Link href='http://github.com/modestman1986' target='_blank'>
                <SiGithub className='hover:scale-125 m-2' size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
