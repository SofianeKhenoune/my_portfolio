import PropTypes from 'prop-types';
const AboutCard = ({ children, Icon, title }) => {
  return (
    <div className='bloc border-light border opacity-0 translate-y-20 w-96 rounded-xl p-3 bg-medium h-auto'>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-xl mb-5 border-b border-light p-1'>{title}</h2>
        <Icon size={50} className='border border-light p-2 rounded-md' />
      </div>
      <p>{children}</p>
    </div>
  );
};

AboutCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default AboutCard;
