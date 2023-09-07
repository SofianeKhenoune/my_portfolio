const Project = ({ link, bgImg, altText, arrayOfIcons }) => {
  return (
    <div
      className='mb-20 w-[90%] h-64 relative'
      style={{
        background: `center / cover url('/images/${bgImg}') no-repeat`,
      }}
    >
      <div className='icons absolute'>
        {arrayOfIcons.map((icon) => (
          <img src={`/images/${icon.img}`} alt={icon.altText} key={icon.img} />
        ))}
      </div>
    </div>
  );
};

export default Project;
