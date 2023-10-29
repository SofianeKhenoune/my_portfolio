import PropTypes from 'prop-types';
const AboutBloc = ({ children, Icon, title }) => {
  return (
    <div className='about-bloc flex flex-col opacity-0 translate-x-full text-sm max-w-96 rounded-xl m-5 p-6 bg-neutral-950/80 shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] backdrop-blur-[5px]'>
      <div className='flex flex-row flex-wrap items-center justify-between mb-5'>
        <h2 className='text-xl underline'>{title}</h2>
        <Icon size={50} className='mr-5' />
      </div>
      <div className='about-text rounded-lg text-slate w-95'>{children}</div>
    </div>
  );
};

AboutBloc.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default AboutBloc;
