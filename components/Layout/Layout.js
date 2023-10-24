import { initFlowbite } from 'flowbite';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  const pathname = useRouter().pathname;
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div className='wrapper min-h-screen grid auto-rows-fr w-full'>
      {pathname !== '/' && <Header />}
      {children}
    </div>
  );
};

export default Layout;
