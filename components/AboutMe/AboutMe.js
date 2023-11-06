import { Element } from 'react-scroll';
import { aboutMeInfos } from '../../datas/about';
import AboutBloc from './AboutBloc';

const AboutMe = () => {
  return (
    <Element name='about' className='min-h-screen'>
      <h2 className='capitalize text-2xl font-bold text-center my-20 md:text-3xl opacity-0 -translate-x-10 max-w-max mx-auto p-2'>
        à propos de moi
      </h2>
      <div className='flex flex-wrap gap-10 justify-center'>
        {aboutMeInfos.map((aboutBloc, index) => (
          <AboutBloc
            Icon={aboutBloc.icon}
            title={aboutBloc.title}
            key={aboutBloc.icon + index}
          >
            {aboutBloc.text}
          </AboutBloc>
        ))}
      </div>
    </Element>
  );
};

export default AboutMe;
