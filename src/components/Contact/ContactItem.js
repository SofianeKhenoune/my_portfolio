import Link from 'next/link';
import PropTypes from 'prop-types';

Link;
const ContactItem = ({ href, Icon, iconSize, title, target }) => {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
  return (
    <Link href={href} target={target} rel={rel} className='contact-icon'>
      <Icon className='hover:scale-125 m-1' size={iconSize} title={title} />
    </Link>
  );
};

ContactItem.defaultProps = {
  target: '',
  iconSize: 30,
};

ContactItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ContactItem;
