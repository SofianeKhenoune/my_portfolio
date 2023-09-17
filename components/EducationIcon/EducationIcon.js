import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
const EducationIcon = ({ name, numStar, children }) => {
  let arrayStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < numStar) {
      arrayStars.push(<AiFillStar />);
    } else {
      arrayStars.push(<AiOutlineStar />);
    }
  }

  return (
    <div className='flex flex-col justify-center mr-2'>
      <h4>{name}</h4>
      {children}
      <div className='flex justify-center'>{arrayStars.map((el) => el)}</div>
    </div>
  );
};

export default EducationIcon;
