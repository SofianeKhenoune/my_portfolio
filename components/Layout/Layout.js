import { initFlowbite } from 'flowbite';
import Head from 'next/head';
import { useEffect } from 'react';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <Head><link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon"/></Head>
      <div className='min-h-screen grid auto-rows-fr w-full grid-rows-[auto_1fr_auto] grid-cols-[100%]'>
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
