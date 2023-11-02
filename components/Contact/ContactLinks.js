import PropTypes from 'prop-types';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { SiGithub, SiLinkedin, SiMinutemailer } from 'react-icons/si';
import ContactItem from './ContactItem';

const ContactLinks = ({ iconsSize }) => {
  return (
    <div className='flex items-center gap-2'>
      <ContactItem
        href='tel:+33652294817'
        title='Téléphone : +33652294817'
        Icon={FaPhoneSquareAlt}
        iconSize={iconsSize}
      />
      <ContactItem
        href='mailto:sofianekhenoune.dev@gmail.com'
        title='Email : sofianekhenoune.dev@gmail.com'
        Icon={SiMinutemailer}
        iconSize={iconsSize}
      />
      <ContactItem
        href='http://www.linkedin.com/in/sofianekhenoune'
        title='Lien vers LinkedIn'
        Icon={SiLinkedin}
        iconSize={iconsSize}
        target='_blank'
      />
      <ContactItem
        href='https://github.com/SofianeKhenoune'
        title='Lien vers GitHub'
        Icon={SiGithub}
        iconSize={iconsSize}
        target='_blank'
      />
    </div>
  );
};

ContactLinks.propTypes = {
  iconsSize: PropTypes.number,
};

export default ContactLinks;
