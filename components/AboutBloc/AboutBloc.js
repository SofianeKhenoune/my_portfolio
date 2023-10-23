import PropTypes from 'prop-types';
const AboutBloc = ({ children, Icon }) => {
  return (
    <div className='about-bloc flex flex-col mb-14 md:flex-row font-semibold md:w-5/6 mx-auto'>
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
      <div className='bg-slate-100 p-6 rounded-lg text-gray-950 w-95 mx-auto -mt-4 z-10 text-justify md:-ml-5 md:self-center md:mt-0'>
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
