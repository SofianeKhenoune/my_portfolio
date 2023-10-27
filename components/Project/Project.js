import PropTypes from 'prop-types';
import { useState } from 'react';

const Project = ({
  bgImg,
  arrayOfIcons,
  iconsWidth,
  children,
  projectName,
}) => {
  const multiIcons = arrayOfIcons.length > 1;
  const [showDescProject, setShowDescProject] = useState(false);

  const toggleShowDescProject = () => {
    setShowDescProject((prev) => !prev);
  };

  return (
    <div
      className='project w-5/6 m-auto mb-16 rounded-3xl shadow-md shadow-white opacity-0 translate-x-full'
      style={{
        background: `center / cover url('/images/${bgImg}') no-repeat`,
        boxShadow: '0 8px 32px 0 rgba(255,255, 255, 0.30)',
      }}
    >
      <div
        className={`project-name flex justify-between items-center absolute right-2 left-2 bottom-2 bg-gradient-to-r from-green-700 to-gray-900 hover:from-gray-900 hover:to-green-700 px-3 py-3 text-slate-50 font-bold italic rounded-2xl shadow shadow-stone-50 z-10 ${
          showDescProject ? 'hidden' : 'block'
        }`}
      >
        <h2 className='text-sm md:text-lg'>{projectName}</h2>
        <span
          className='bg-slate-50  p-1 text-gray-950 font-bold rounded-full w-7 h-7 flex justify-center items-center cursor-pointer z-30'
          title="Plus d'information"
          onClick={toggleShowDescProject}
        >
          ?
        </span>
      </div>
      <div
        className={`z-0 bg-slate-100 p-1 rounded-3xl flex items-center justify-center transition duration-1000 flex-col lg:flex-row gap-5 ${
          showDescProject ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => {
          setShowDescProject(false);
        }}
      >
        <div
          className={`flex items-center flex-wrap justify-center flex-1 h-full p-3 ${
            multiIcons && 'gap-3'
          }`}
        >
          {arrayOfIcons.map((icon) => (
            <img
              className={`${iconsWidth}`}
              src={`/images/${icon.img}`}
              alt={icon.altText}
              key={icon.img}
            />
          ))}
        </div>
        <div className='bg-slate-200 p-6 rounded-3xl text-gray-950 text-sm md:text-lg flex-1'>
          {children}
        </div>
      </div>
    </div>
  );
};

Project.defaultProps = {
  iconsWidth: 'w-1/2',
};

Project.propTypes = {
  arrayOfIcons: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
    })
  ),
  bgImg: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  iconsWidth: PropTypes.string,
  projectName: PropTypes.string.isRequired,
};

export default Project;