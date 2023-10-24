import PropTypes from 'prop-types';
const AboutBloc = ({ children, Icon, classNames }) => {
  return (
    <div
      className={`about-bloc flex flex-col mb-14 md:flex-row text-center md:w-5/6 mx-auto text-sm opacity-0 translate-x-full ${classNames}`}
    >
      <div
        className='flex justify-center items-center p-8 rounded-lg'
        style={{
          background:
            'radial-gradient(ellipse at bottom right,rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.40), #222)',
          boxShadow: '0 8px 32px 0 rgba(255,255, 255, 0.15)',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Icon size={200} />
      </div>
      <div className='about-text bg-slate-100 p-6 rounded-lg text-gray-950 w-95 mx-auto -mt-4 z-10 md:-ml-5 md:self-center md:mt-0'>
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
