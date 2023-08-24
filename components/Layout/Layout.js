import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div className='wrapper container mx-auto min-h-screen grid auto-rows-fr'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
