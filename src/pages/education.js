import Head from 'next/head';
import Image from 'next/image';
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
const Education = () => {
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
          <div className='flex flex-wrap justify-center mb-8'>
            <EducationIcon name='HTML 5' numStar={4}>
              <FaHtml5 color='#F25320' size={150} />
            </EducationIcon>
            <EducationIcon name='CSS 3' numStar={4}>
              <FaCss3Alt color='#2091EB' size={150} />
            </EducationIcon>
            <EducationIcon name='JavaScript' numStar={3.5}>
              <SiJavascript
                color='#e4d04b'
                size={130}
                style={{
                  borderRadius: '0.5em',
                  margin: '0.5em 0',
                }}
              />
            </EducationIcon>

            <EducationIcon name='PHP' numStar={3.7}>
              <FaPhp color='#7175aa' size={150} />
            </EducationIcon>

            <EducationIcon name='React' numStar={4}>
              <FaReact color='#359DCA' size={150} />
            </EducationIcon>

            <EducationIcon name='NextJs' numStar={4}>
              <SiNextdotjs color='#000' size={150} />
            </EducationIcon>

            <EducationIcon name='MySQL' numStar={4}>
              <SiMysql color='#7175aa' size={150} />
            </EducationIcon>

            <EducationIcon name='Sass' numStar={4}>
              <SiSass color='#d16ea0' size={150} />
            </EducationIcon>

            <EducationIcon name='Bootstrap' numStar={4}>
              <SiBootstrap color='#8712fb' size={150} />
            </EducationIcon>
          </div>
          <h3 className='mb-8'>Les outils que je maîtrise:</h3>
          <div className='flex flex-wrap justify-center gap-4 mb-8'>
            <EducationIcon name='Figma' numStar={3}>
              <Image
                src='/images/figma.webp'
                width={150}
                height={150}
                alt='figma logo'
              />
            </EducationIcon>

            <EducationIcon name='Git' numStar={3}>
              <SiGit color='#7175aa' size={150} />
            </EducationIcon>
            <EducationIcon name='Mocodo' numStar={3}>
              <Image
                src='/images/mocodo.png'
                width={150}
                height={150}
                alt='logo de Mocodo'
                style={{ margin: '2.3em 0' }}
              />
            </EducationIcon>
            <EducationIcon name='Office' numStar={3}>
              <SiMicrosoftoffice color='#f40401' size={150} />
            </EducationIcon>
          </div>
          <h3 className='mb-8'>
            Les langages et technologies en cours d'acquisition :
          </h3>
          <div className='flex flex-wrap justify-center mb-8'>
            <div className='flex flex-col justify-center'>
              <h4></h4>
            </div>
            <EducationIcon name='Vue.js' numStar={2}>
              <Image
                src='/images/vuejs.svg'
                width={150}
                height={150}
                alt='logo vuejs'
                style={{ margin: '0.5em 0' }}
              />
            </EducationIcon>
            <EducationIcon name='Tailwind CSS' numStar={3}>
              <SiTailwindcss color='#08b7d4' size={150} />
            </EducationIcon>
          </div>
        </section>
      </main>
    </>
  );
};

export default Education;
