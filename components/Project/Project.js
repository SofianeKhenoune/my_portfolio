import PropTypes, { elementType } from 'prop-types';

const Project = ({ arrayOfIcons, projectName, taskList }) => {
  return (
    <div className='bloc opacity-0  border-light border translate-y-20  w-96 rounded-xl p-3 bg-medium h-min'>
      <h2 className='text-xl mb-5 border-b border-light p-2'>{projectName}</h2>
      <div className='text-sm mb-5 border-b border-light'>
        <ul className='pl-7 pb-3'>
          {taskList.map((task, index) => (
            <li className='p-1 list-decimal' key={task + index}>
              {task}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center flex-wrap gap-2 justify-end'>
        {arrayOfIcons.map((Icon, index) => (
          <Icon size={30} key={Icon + index} />
        ))}
      </div>
    </div>
  );
};

Project.propTypes = {
  arrayOfIcons: PropTypes.arrayOf(elementType),
  projectName: PropTypes.string.isRequired,
  taskList: PropTypes.array.isRequired,
};

export default Project;
