import { Button } from 'flowbite-react';
import gsap from 'gsap';
import Link from 'next/link';
import { useEffect } from 'react';
import ContactLinks from '../../components/Contact/ContactLinks';
import ProfilHeader from '../../components/Header/ProfilHeader';

const ProjectPage = () => {
  useEffect(() => {
    gsap.to('.bloc', {
      opacity: 1,
      duration: 1,
      translateY: 0,
      ease: 'elastic.out',
    });
  }, []);
  return (
    <main className='h-screen flex flex-col justify-between p-10'>
      <div className='flex justify-between p-5'>
        <ProfilHeader />
        <Button
          size='lg'
          className='border border-light bg-medium hover:bg-buttonHover hover:scale-110 transition duration-500'
        >
          <Link href='/#projects' shallow={true}>
            Retourner vers les projets
          </Link>
        </Button>
      </div>
      <div className='flex-1 bloc border-light border opacity-0 translate-y-20 rounded-xl bg-medium'></div>
      <div className='self-center p-3'>
        <ContactLinks iconsSize={50} />
      </div>
    </main>
  );
};

export default ProjectPage;
