import PropTypes, { node } from 'prop-types';

const Project = ({ arrayOfIcons, projectName, taskList }) => {
  return (
    <div className='project opacity-0  border-light border translate-x-full  max-w-96 rounded-xl m-5 p-3 bg-medium h-min'>
      <h2 className='text-xl mb-5 border-b border-light p-2'>{projectName}</h2>
      <div className='text-sm mb-5 border-b border-light'>
        <ul className='pl-7 pb-3'>
          {taskList.map((task) => (
            <li className='p-1 list-decimal'>{task} </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center flex-wrap gap-2 justify-end'>
        {arrayOfIcons.map((Icon) => (
          <Icon size={30} />
        ))}
      </div>
    </div>
  );
};

Project.defaultProps = {
  iconsWidth: 'w-1/2',
};

Project.propTypes = {
  arrayOfIcons: PropTypes.arrayOf(node),
  projectName: PropTypes.string.isRequired,
  taskList: PropTypes.array.isRequired,
};

export default Project;
