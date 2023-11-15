import { initFlowbite } from 'flowbite';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  const isProjectPage = useRouter().pathname === '/project';
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <Head>
        <link rel='icon' href='/images/profil-home.png' sizes='any' />
        <title>Portfolio - Sofiane Khenoune, Développeur Web</title>
      </Head>
      <div className='min-h-screen grid auto-rows-fr grid-rows-[auto_1fr_auto] grid-cols-[100%]'>
        {!isProjectPage && <Header />}
        {children}
        {!isProjectPage && <Footer />}
      </div>
    </>
  );
};

export default Layout;
