import { initFlowbite } from 'flowbite';
import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <Head>
        <link rel='icon' href='/images/profil-home.png' sizes='any' />
        <title>
          Portfolio - Sofiane Khenoune - Développeur Web et Web Mobile
        </title>
        <meta
          name='description'
          content='Découvrez le portfolio de Sofiane Khenoune, développeur Web et Web Mobile spécialisé React. Explorez mes projets variés et mes compétences en HTML, CSS, JavaScript.'
        />
      </Head>
      <div className='min-h-screen grid auto-rows-fr grid-rows-[auto_1fr_auto] grid-cols-[100%]'>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
