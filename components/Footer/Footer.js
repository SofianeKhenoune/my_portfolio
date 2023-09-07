import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
const Footer = () => {
  return (
    <footer className=' mx-auto text-center border-t-4 border-gray-900 mt-3 w-[90%]'>
      <div className='flex justify-center flex-wrap mb-3 items-center'>
        <p>Portfolio codé en avec :</p>
        <div className='ml-3 flex'>
          <SiJavascript size={30} className='mr-2' />
          <SiNextdotjs size={30} className='mr-2' />
          <SiReact size={30} className='mr-2' />
          <SiTailwindcss size={30} />
        </div>
      </div>
      <p>Copyright &copy; 2023</p>
    </footer>
  );
};

export default Footer;
