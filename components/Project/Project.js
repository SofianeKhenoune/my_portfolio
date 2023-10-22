import { useRef } from 'react';

const Project = ({ bgImg, arrayOfIcons, children }) => {
  const projectRef = useRef(null);
  const onEnter = () => {};
  const onLeave = () => {};

  return (
    <div
      className='project w-5/6 m-auto mb-10 rounded-3xl shadow-md shadow-white overflow-hidden cursor-pointer'
      style={{
        background: `center / cover url('/images/${bgImg}') no-repeat`,
        boxShadow: '0 8px 32px 0 rgba(255,255, 255, 0.30)',
      }}
    >
      <div
        className='bg-slate-100 p-1 rounded-lg flex items-center justify-center duration-1000 flex-col md:flex-row gap-5'
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        ref={projectRef}
      >
        <div className='flex items-center flex-wrap justify-center flex-1 p-3'>
          {arrayOfIcons.map((icon) => (
            <img
              className='w-1/2 rounded-lg'
              src={`/images/${icon.img}`}
              alt={icon.altText}
              key={icon.img}
            />
          ))}
        </div>
        <div className="bg-slate-200 p-6 rounded-3xl text-gray-950 flex-1 text-sm md:text-lg"> 
            {children}
        </div>
      </div>
    </div>
  );
};

export default Project;
