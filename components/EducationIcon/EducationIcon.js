import PropTypes from 'prop-types';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
const EducationIcon = ({ name, nbStars, children, iconId }) => {
  let arrayStars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= nbStars) {
      arrayStars.push(<BsStarFill key={i} />);
    } else if (nbStars % 1 !== 0 && i === Math.ceil(nbStars)) {
      arrayStars.push(<BsStarHalf key={i} />);
    } else {
      arrayStars.push(<BsStar key={i} />);
    }
  }

  return (
    <div
      id={iconId}
      className='bloc opacity-0 border-light border translate-y-20 w-56 rounded-xl p-3 gap-4 bg-medium h-auto flex flex-col justify-center items-center'
    >
      <h4>{name}</h4>
      {children}
      <div className='flex justify-center gap-1'>
        {arrayStars.map((star, index) => (
          <span key={index + name}>{star}</span>
        ))}
      </div>
    </div>
  );
};

EducationIcon.propTypes = {
  children: PropTypes.node.isRequired,
  iconId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nbStars: PropTypes.number.isRequired,
};

export default EducationIcon;
