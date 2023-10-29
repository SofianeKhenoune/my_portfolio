import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div className='min-h-screen grid auto-rows-fr grid-rows-[auto_1fr_auto] grid-cols-[100%]'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
