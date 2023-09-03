import { gsap } from 'gsap';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { SiGithub, SiLinkedin, SiMinutemailer } from 'react-icons/si';

const Contact = () => {
  useEffect(() => {
    gsap.fromTo(
      '#icon-1',
      { x: -200, color: 'black' },
      { x: 0, color: 'white', duration: 2, ease:'bounce' }
    );
    gsap.fromTo(
      '#icon-3',
      { x: 200, color: 'black' },
      { x: 0, color: 'white', duration: 2, ease:'bounce'}
    );
    gsap.fromTo(
      'h1',
      { y: -200, color: 'black', display: 'none' },
      { y: 0, color: 'white', duration: 3, ease:'bounce', display: 'block'}
    );
  }, []);
  return (
    <>
      <Head>
        <title>Mon Portfolio - Contact</title>
      </Head>
      <main className='flex items-center justify-center my-8'>
        <section className='text-4xl md:text-7xl'>
          <h1 className='font-bold mb-20 text-center'>Contactez-moi</h1>
          <div className='icons flex flex-col justify-center gap-10 items-center md:flex-row'>
            <Link 
             id='icon-1' href='mailto:sofianekhenoune.dev@gmail.com'>
              <SiMinutemailer size={150} className='hover:scale-110'/>
            </Link>
            <Link
               
              id='icon-2'
              href='http://www.linkedin.com/in/sofianekhenoune'
              target='_blank'
            >
              <SiLinkedin size={150} className='hover:scale-110'/>
            </Link>
            <Link
               
              id='icon-3'
              href='http://github.com/modestman1986'
              target='_blank'
            >
              <SiGithub size={150} className='hover:scale-110'/>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
