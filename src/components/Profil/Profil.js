import Image from 'next/image';
import { SiJavascript, SiPhp, SiReact, SiRedux } from 'react-icons/si';
import { Element } from 'react-scroll';
import ContactLinks from '../Contact/ContactLinks';

const Profil = () => {
  return (
    <Element
      className='min-h-screen flex flex-col md:flex-row gap-5 items-center justify-center pt-8'
      name='home'
      id='home'
    >
      <div className='flex items-center justify-center'>
        <div className='bloc flex flex-col md:flex:row justify-center items-center opacity-0 translate-y-20'>
          <Image
            src='/images/profil-home.png'
            width={300}
            height={300}
            alt='photo de profil'
            className='mb-6 border border-light rounded-full p-2'
            priority={1}
          />
          <h2 className='border-b border-b-light text-2xl italic pb-3 font-bold md:text-3xl'>
            Sofiane Khenoune
          </h2>
        </div>
      </div>
      <div className='flex items-center justify-center md:flex-1 md:h-full'>
        <div className='bloc bg-medium border border-light p-5 rounded-lg opacity-0 translate-y-20'>
          <h1 className='italic mb-5 text-xl font-bold border-b border-b-light pb-3'>
            Développeur web et web mobile
          </h1>

          <p className='border-b border-b-light pb-3'>
            Passionné de développement web et mobile, spécialisé en JavaScript
            et React, je suis un développeur créatif et polyvalent. Fort d'une
            expertise dans la création d'interfaces dynamiques et réactives, je
            m'engage à concevoir des solutions innovantes pour offrir une
            expérience utilisateur immersive et intuitive.
          </p>

          <div className='border-b border-b-light pb-3'>
            <h3 className='italic mt-5 mb-2 font-bold'>Technologies</h3>
            <div className='flex items-center gap-2'>
              <SiJavascript
                className='javascript rounded-lg m-1'
                size={30}
                title='Logo Javascript'
              />
              <SiReact className='m-1' size={30} title='Logo React' />
              <SiPhp className='m-1' size={30} title='Logo PHP' />
              <SiRedux className='m-1' size={30} title='Logo Redux' />
            </div>
          </div>
          <div>
            <h3 className='italic mt-5 mb-2 font-bold'>Me contacter</h3>
            <ContactLinks iconsSize={30} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Profil;
