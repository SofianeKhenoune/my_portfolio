import Image from 'next/image';

const Project = ({ link, bgImg, altText, arrayOfIcons }) => {
  return (
    <div className='w-5/6 h-64 flex items-center flex-col md:flex-row md:items-stretch m-auto mb-10'>
      <Image
        className='p-1 rounded-lg border-white border-solid border-l-8 border-2 shadow-md shadow-white mb-5 flex-grow'
        src={`/images/${bgImg}`}
        alt={altText}
        width={400}
        height={400}
      />
      <div className='flex bg-slate-100 rounded-lg items-center w-1/3 justify-center p-5'>
        {arrayOfIcons.map((icon) => (
          <img
            className='h-1/3'
            src={`/images/${icon.img}`}
            alt={icon.altText}
            key={icon.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
