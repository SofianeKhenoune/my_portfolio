import { Element } from 'react-scroll';
import { language, languages, tools } from '../../datas/education';
import EducationIcon from './EducationIcon';

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
        {languages.map((language, index) => (
          <EducationIcon
            key={language.name + index}
            iconName={language.name}
            Icon={language.icon}
            iconColor={language.color}
            iconSize={language.size}
            skillLevel={language.skillLevel}
          />
        ))}
      </div>
      <h3 className='py-10 text-center italic font-bold'>Outils</h3>
      <div className='flex flex-wrap gap-10 justify-center'>
        {tools.map((tool, index) => (
          <EducationIcon
            key={tool.name + index}
            iconName={tool.name}
            Icon={tool.icon}
            iconColor={tool.color}
            iconSize={tool.size}
            skillLevel={tool.skillLevel}
          />
        ))}
      </div>
      <h3 className='py-10 text-center italic font-bold'>En cours</h3>
      <div className='flex flex-wrap gap-10 justify-center'>
        {language.map((language, index) => (
          <EducationIcon
            key={language.name + index}
            iconName={language.name}
            Icon={language.icon}
            iconColor={language.color}
            iconSize={language.size}
            skillLevel={language.skillLevel}
          />
        ))}
      </div>
    </Element>
  );
};

export default Education;
