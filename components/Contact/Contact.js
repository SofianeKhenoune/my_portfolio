import Link from 'next/link';
import { FaPhoneSquareAlt } from 'react-icons/fa';

import { SiGithub, SiLinkedin, SiMinutemailer } from 'react-icons/si';

const Contact = ({ iconSize }) => {
  return (
    <div className='bloc flex items-center gap-2'>
      <Link href='tel:+33652294817'>
        <FaPhoneSquareAlt
          className='hover:scale-125 m-1'
          size={iconSize}
          title='Téléphone : +33652294817'
        />
      </Link>
      <Link href='mailto:sofianekhenoune.dev@gmail.com'>
        <SiMinutemailer
          className='hover:scale-125 m-1'
          size={iconSize}
          title='Email : sofianekhenoune.dev@gmail.com'
        />
      </Link>
      <Link href='http://www.linkedin.com/in/sofianekhenoune' target='_blank'>
        <SiLinkedin
          className='hover:scale-125 m-1'
          size={iconSize}
          title='Lien vers LinkedIn'
        />
      </Link>
      <Link href='http://github.com/modestman1986' target='_blank'>
        <SiGithub
          className='hover:scale-125 m-1'
          size={iconSize}
          title='Lien vers GitHub'
        />
      </Link>
    </div>
  );
};

export default Contact;
