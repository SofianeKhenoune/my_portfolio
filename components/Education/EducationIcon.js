import PropTypes from 'prop-types';
const EducationIcon = ({ Icon, iconName, iconColor, iconSize, skillLevel }) => {
  return (
    <div className='bloc opacity-0 border-light border translate-y-20 w-56 rounded-xl p-3 gap-4 bg-medium h-auto flex flex-col justify-center items-center capitalize text-xl'>
      <h4 className='font-bold'>{iconName}</h4>
      <Icon color={iconColor} size={iconSize} title={`Logo ${iconName}`} />
      <p className='italic px-2 py-1 border border-light rounded-lg'>
        {skillLevel}
      </p>
    </div>
  );
};

EducationIcon.defaultProps = {
  iconColor: '#fff',
  iconSize: 150,
};
EducationIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  skillLevel: PropTypes.string.isRequired,
};

export default EducationIcon;
