import AboutMe from '@/components/AboutMe/AboutMe';
import ContactLinks from '@/components/Contact/ContactLinks';
import Education from '@/components/Education/Education';
import Profil from '@/components/Profil/Profil';
import Projects from '@/components/Projects/Projects';
import gsap from 'gsap';
import scrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Element } from 'react-scroll';

gsap.registerPlugin(scrollTrigger);
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/', '/');
    const blocs = gsap.utils.toArray('.bloc');
    const titles = gsap.utils.toArray('h2');
    const contactLinks = gsap.utils.toArray('.contacts .contact-icon');

    const tl = gsap.timeline();
    contactLinks.forEach((link) => {
      tl.fromTo(
        link,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 0.3 }
      );
    });
    scrollTrigger.create({
      animation: tl,
      trigger: '.contacts',
      toggleActions: 'restart pause resume reset',
    });
    titles.forEach((title) => {
      gsap.to(title, {
        x: 0,
        opacity: 1,
        duration: 2,
        borderBottom: '1px solid hsl(220,32%,30%)',
        ease: 'expo.out',
        scrollTrigger: {
          trigger: title,
          toggleActions: 'restart pause resume reset',
        },
      });
    });
    blocs.forEach((bloc) => {
      gsap.to(bloc, {
        opacity: 1,
        duration: 1,
        translateY: 0,
        ease: 'elastic.out',
        scrollTrigger: {
          trigger: bloc,
          toggleActions: 'restart pause resume reset',
        },
      });
    });
  }, []);
  return (
    <main className='px-10 pt-5'>
      <Profil />
      <AboutMe />
      <p id='projects'></p>
      <Projects />
      <Education />
      <Element
        name='contact'
        className='contacts pt-10 h-[calc(100vh-90px)] flex justify-center items-center flex-col'
      >
        <h2 className='capitalize text-2xl font-bold text-center my-20 md:text-3xl opacity-0 -translate-x-10 max-w-max mx-auto p-2'>
          Contact
        </h2>
        <ContactLinks iconsSize={50} />
      </Element>
    </main>
  );
}
