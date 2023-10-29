import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
const Footer = () => {
  return (
    <footer className='bg-medium border-t border-t-light h-10 flex items-center'>
      <div className='flex items-center gap-2 '>
        <p>Codé avec : </p>
        <SiJavascript />
        <SiNextdotjs />
        <SiReact />
        <SiTailwindcss />
      </div>
      <div className='flex items-center gap-2 '>
        <p>Me contacter : </p>
        <SiJavascript />
        <SiNextdotjs />
        <SiReact />
        <SiTailwindcss />
      </div>
    </footer>
  );
};

export default Footer;
