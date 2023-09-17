import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
const EducationIcon = ({ name, numStar, children }) => {
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
    <div className='flex flex-col justify-center mr-2'>
      <h4>{name}</h4>
      {children}
      <div className='flex justify-center'>
        {arrayStars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    </div>
  );
};

export default EducationIcon;
