import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
const EducationIcon = ({ name, numStar, children, iconId }) => {
  let arrayStars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= numStar) {
      arrayStars.push(<BsStarFill key={i} />);
    } else if (numStar % 1 !== 0 && i === Math.ceil(numStar)) {
      arrayStars.push(<BsStarHalf key={i} />);
    } else {
      arrayStars.push(<BsStar key={i} />);
    }
  }

  return (
    <div
      id={iconId}
      className='flex flex-col justify-center m-3 p-2 rounded-xl'
      style={{
        background:
          'radial-gradient(ellipse at bottom right,rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.40), #222)',
        boxShadow: '0 8px 32px 0 rgba(255,255, 255, 0.15)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <h4>{name}</h4>
      {children}
      <div className='flex justify-center gap-1'>
        {arrayStars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    </div>
  );
};

export default EducationIcon;
