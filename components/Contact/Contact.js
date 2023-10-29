import Link from 'next/link';
import { FaPhoneSquareAlt } from 'react-icons/fa';

import { SiGithub, SiLinkedin, SiMinutemailer } from 'react-icons/si';

const Contact = () => {
  return (
    <div className='flex items-center'>
      <Link href='tel:+33652294817' className='flex-1'>
        <FaPhoneSquareAlt className='hover:scale-110 m-2' size={40} />
      </Link>
      <Link href='mailto:sofianekhenoune.dev@gmail.com' className='flex-1'>
        <SiMinutemailer className='hover:scale-110 m-2' size={40} />
      </Link>
      <Link
        href='http://www.linkedin.com/in/sofianekhenoune'
        target='_blank'
        className='flex-1'
      >
        <SiLinkedin className='hover:scale-110 m-2' size={40} />
      </Link>
      <Link
        href='http://github.com/modestman1986'
        target='_blank'
        className='flex-1'
      >
        <SiGithub className='hover:scale-110 m-2' size={40} />
      </Link>
    </div>
  );
};

Contact.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Contact;
