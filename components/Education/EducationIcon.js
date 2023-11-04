import PropTypes from 'prop-types';
const EducationIcon = ({ iconName, skillLevel, children }) => {
  return (
    <div className='bloc opacity-0 border-light border translate-y-20 w-56 rounded-xl p-3 gap-4 bg-medium h-auto flex flex-col justify-center items-center'>
      <h4>{iconName}</h4>
      {children}
      <p>{skillLevel}</p>
    </div>
  );
};

EducationIcon.propTypes = {
  children: PropTypes.node.isRequired,

  name: PropTypes.string.isRequired,
  nbStars: PropTypes.number.isRequired,
};

export default EducationIcon;
