import { Button } from 'flowbite-react';

import Link from 'next/link';
import ContactLinks from '../../components/Contact/ContactLinks';
import ProfilHeader from '../../components/Header/ProfilHeader';

const ProjectPage = () => {
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
      <div className='flex-1'></div>
      <div className='self-center p-3'>
        <ContactLinks className='' />
      </div>
    </main>
  );
};

export default ProjectPage;
