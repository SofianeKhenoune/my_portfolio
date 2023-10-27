import PropTypes from 'prop-types';
const AboutBloc = ({ children, Icon }) => {
  return (
    <div
      className='about-bloc flex text-center flex-col items-center opacity-0 translate-x-full text-sm w-1/3 rounded-xl'
      style={{
        background: 'rgba(10, 10, 10,0.8)',
        boxShadow: '0 8px 32px 0 rgba(255,255, 255, 0.15)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <Icon size={200} />
      <div className='about-text p-6 rounded-lg text-slate w-95'>
        {children}
      </div>
    </div>
  );
};

AboutBloc.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
};

export default AboutBloc;
