import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { FaCss3Alt, FaHtml5, FaPhp, FaReact } from 'react-icons/fa';
import {
  SiBootstrap,
  SiGit,
  SiJavascript,
  SiMicrosoftoffice,
  SiMysql,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
} from 'react-icons/si';
import EducationIcon from '../../components/EducationIcon/EducationIcon';

gsap.registerPlugin(ScrollTrigger);
const Education = () => {
  useEffect(() => {
    gsap.fromTo(
      'h2',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 4 }
    );
    gsap.fromTo(
      'h3',
      { x: -100, color: 'black', opacity: 0 },
      { x: 0, color: 'white', duration: 4, ease: 'easein', opacity: 1 }
    );
    gsap.fromTo(
      '.icons',
      { x: 100, color: 'black', opacity: 0 },
      { x: 0, color: 'white', duration: 4, ease: 'easein', opacity: 1 }
    );
  }, []);
  return (
    <>
      <Head>
        <title>Mon Portfolio - Education</title>
      </Head>
      <main className='main-block'>
        <section className='flex flex-col justify-around text-center'>
          <h2 className='text-5xl font-bold my-10'>Formation</h2>
          <h3 className='mb-8'>
            Les langages et technologies avec lesquelles j'ai réalisé des
            projets :
          </h3>
          <div className='icons flex flex-wrap justify-center mb-8'>
            <EducationIcon iconId='icon1' name='HTML 5' numStar={4}>
              <FaHtml5 color='#F25320' size={150} />
            </EducationIcon>
            <EducationIcon iconId='icon2' name='CSS 3' numStar={4}>
              <FaCss3Alt color='#2091EB' size={150} />
            </EducationIcon>
            <EducationIcon iconId='icon3' name='JavaScript' numStar={3.5}>
              <SiJavascript
                color='#e4d04b'
                size={130}
                style={{
                  borderRadius: '0.5em',
                  margin: '0.5em 0',
                }}
              />
            </EducationIcon>

            <EducationIcon iconId='icon4' name='PHP' numStar={3.7}>
              <FaPhp color='#7175aa' size={150} />
            </EducationIcon>

            <EducationIcon iconId='icon5' name='React' numStar={3}>
              <FaReact color='#359DCA' size={150} />
            </EducationIcon>

            <EducationIcon iconId='icon6' name='NextJs' numStar={2.5}>
              <SiNextdotjs color='#000' size={150} />
            </EducationIcon>

            <EducationIcon iconId='icon7' name='MySQL' numStar={3.5}>
              <SiMysql color='#7175aa' size={150} />
            </EducationIcon>

            <EducationIcon iconId='icon8' name='Sass' numStar={3}>
              <SiSass color='#d16ea0' size={150} />
            </EducationIcon>

            <EducationIcon iconId='icon9' name='Bootstrap' numStar={2.5}>
              <SiBootstrap color='#8712fb' size={150} />
            </EducationIcon>
          </div>
          <h3 className='mb-8'>Les outils que je maîtrise:</h3>
          <div className='icons flex flex-wrap justify-center gap-4 mb-8'>
            <EducationIcon iconId='icon10' name='Figma' numStar={3}>
              <Image
                src='/images/figma.webp'
                width={150}
                height={150}
                alt='figma logo'
              />
            </EducationIcon>

            <EducationIcon iconId='icon11' name='Git' numStar={3.5}>
              <SiGit color='#7175aa' size={150} />
            </EducationIcon>
            <EducationIcon iconId='icon12' name='Mocodo' numStar={3.5}>
              <Image
                src='/images/mocodo.png'
                width={150}
                height={150}
                alt='logo de Mocodo'
                style={{ margin: '2.3em 0' }}
              />
            </EducationIcon>
            <EducationIcon iconId='icon13' name='Office' numStar={4}>
              <SiMicrosoftoffice color='#f40401' size={150} />
            </EducationIcon>
          </div>
          <h3 className='mb-8'>
            Les langages et technologies en cours d'acquisition :
          </h3>
          <div className='icons flex flex-wrap justify-center mb-8'>
            <div className='flex flex-col justify-center'>
              <h4></h4>
            </div>
            <EducationIcon iconId='icon14' name='Vue.js' numStar={2}>
              <Image
                src='/images/vuejs.svg'
                width={150}
                height={150}
                alt='logo vuejs'
                style={{ margin: '0.5em 0' }}
              />
            </EducationIcon>
            <EducationIcon iconId='icon15' name='Tailwind CSS' numStar={3}>
              <SiTailwindcss color='#08b7d4' size={150} />
            </EducationIcon>
          </div>
        </section>
      </main>
    </>
  );
};

export default Education;
