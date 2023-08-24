import Image from 'next/image';

const Project = ({ link, bgImg, altText, arrayOfIcons }) => {
  return (
    <div className='mb-20 relative'>
      <a href={link} target='_blank'>
        <Image
          src={`/images/${bgImg}`}
          alt={altText}
          width={1000}
          height={1000}
        />
      </a>
      <div className=''>
        {arrayOfIcons.map((icon) => (
          <Image
            src={`/images/${icon.img}`}
            alt={icon.altText}
            width={200}
            height={200}
            key={icon.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
