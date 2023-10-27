import PropTypes from 'prop-types';
const AboutBloc = ({ children, Icon }) => {
  return (
    <div
      className='about-bloc flex text-center flex-col justify-center items-center w-full h-screen opacity-0 translate-x-full text-sm '
      style={{
        background:
          'radial-gradient(ellipse at bottom right,rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.40), #222)',
        boxShadow: '0 8px 32px 0 rgba(255,255, 255, 0.15)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <Icon size={200} />
      <div className='about-text bg-slate-100 p-6 rounded-lg text-gray-950 w-95'>
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
