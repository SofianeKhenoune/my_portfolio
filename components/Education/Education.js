import Image from 'next/image';
import {
  SiBootstrap,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMicrosoftoffice,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiSass,
  SiTailwindcss,
} from 'react-icons/si';
import { Element } from 'react-scroll';
import EducationIcon from '../../components/Education/EducationIcon';
const Education = () => {
  return (
    <Element name='education' className='min-h-screen'>
      <h2 className='capitalize text-2xl font-bold text-center my-15 md:text-3xl opacity-0 -translate-x-10 max-w-max mx-auto p-2 mt-20'>
        Formation
      </h2>
      <h3 className='py-10 text-center italic font-bold'>
        Langages et technologies
      </h3>
      <div className='flex flex-wrap gap-10 justify-center'>
        <EducationIcon iconId='icon1' name='HTML 5' nbStars={4}>
          <SiHtml5 color='#F25320' size={150} />
        </EducationIcon>
        <EducationIcon iconId='icon2' name='CSS 3' nbStars={4}>
          <SiCss3 color='#2091EB' size={150} />
        </EducationIcon>
        <EducationIcon iconId='icon3' name='JavaScript' nbStars={3.5}>
          <SiJavascript
            color='#e4d04b'
            size={130}
            style={{
              borderRadius: '0.5em',
              margin: '0.5em 0',
            }}
          />
        </EducationIcon>

        <EducationIcon iconId='icon4' name='PHP' nbStars={3.7}>
          <SiPhp color='#7175aa' size={150} />
        </EducationIcon>

        <EducationIcon iconId='icon5' name='React' nbStars={3}>
          <SiReact color='#359DCA' size={150} />
        </EducationIcon>

        <EducationIcon iconId='icon6' name='NextJs' nbStars={2.5}>
          <SiNextdotjs color='#000' size={150} />
        </EducationIcon>

        <EducationIcon iconId='icon7' name='MySQL' nbStars={3.5}>
          <SiMysql color='#7175aa' size={150} />
        </EducationIcon>

        <EducationIcon iconId='icon8' name='Sass' nbStars={3}>
          <SiSass color='#d16ea0' size={150} />
        </EducationIcon>

        <EducationIcon iconId='icon9' name='Bootstrap' nbStars={2.5}>
          <SiBootstrap color='#8712fb' size={150} />
        </EducationIcon>
        <EducationIcon iconId='icon15' name='Tailwind CSS' nbStars={3.5}>
          <SiTailwindcss color='#08b7d4' size={150} />
        </EducationIcon>
      </div>
      <h3 className='py-10 text-center italic font-bold'>Outils</h3>
      <div className='flex flex-wrap gap-10 justify-center'>
        <EducationIcon iconId='icon10' name='Figma' nbStars={3}>
          <Image
            src='/images/figma.webp'
            width={150}
            height={150}
            alt='figma logo'
          />
        </EducationIcon>

        <EducationIcon iconId='icon11' name='Git' nbStars={3.5}>
          <SiGit color='#7175aa' size={150} />
        </EducationIcon>
        <EducationIcon iconId='icon12' name='Mocodo' nbStars={3.5}>
          <Image
            src='/images/mocodo.png'
            width={150}
            height={150}
            alt='logo de Mocodo'
            style={{ margin: '2.3em 0' }}
          />
        </EducationIcon>
        <EducationIcon iconId='icon13' name='Office' nbStars={4}>
          <SiMicrosoftoffice color='#f40401' size={150} />
        </EducationIcon>
      </div>
      <h3 className='py-10 text-center italic font-bold'>En cours</h3>
      <div className='flex flex-wrap gap-10 justify-center'>
        <EducationIcon iconId='icon14' name='Vue.js' nbStars={2}>
          <Image
            src='/images/vuejs.svg'
            width={150}
            height={150}
            alt='logo vuejs'
            style={{ margin: '0.5em 0' }}
          />
        </EducationIcon>
      </div>
    </Element>
  );
};

export default Education;
