import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
import ContactLinks from '../Contact/ContactLinks';
const Footer = () => {
  return (
    <footer className='bg-medium border-t text-sm md:text-lg border-t-light h-20 p-4 flex md:justify-between flex-col justify-center items-center md:flex-row gap-2'>
      <div className='flex items-center gap-2  border-b border-b-light pb-1'>
        <p>Portfolio codé avec : </p>
        <SiJavascript className='m-1' />
        <SiNextdotjs className='m-1' />
        <SiReact className='m-1' />
        <SiTailwindcss className='m-1' />
      </div>
      <div className='flex items-center gap-2 md:border-b md:border-b-light pb-1'>
        <p>Contact : </p>
        <ContactLinks iconsSize={20} />
      </div>
    </footer>
  );
};

export default Footer;
