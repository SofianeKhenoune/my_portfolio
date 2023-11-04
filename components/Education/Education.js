import { Element } from 'react-scroll';
const Education = () => {
  return (
    <Element name='education' className='min-h-screen'>
      <h2 className='capitalize text-2xl font-bold text-center my-15 md:text-3xl opacity-0 -translate-x-10 max-w-max mx-auto p-2 mt-20'>
        Formation
      </h2>
      <h3 className='py-10 text-center italic font-bold'>
        Langages et technologies
      </h3>
      <div className='flex flex-wrap gap-10 justify-center'></div>
      <h3 className='py-10 text-center italic font-bold'>Outils</h3>
      <div className='flex flex-wrap gap-10 justify-center'></div>
      <h3 className='py-10 text-center italic font-bold'>En cours</h3>
      <div className='flex flex-wrap gap-10 justify-center'></div>
    </Element>
  );
};

export default Education;
