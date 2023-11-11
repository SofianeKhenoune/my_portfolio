import PropTypes, { elementType } from 'prop-types';
import Tooltip from '../Tooltip/Tooltip';

const Project = ({
  arrayOfIcons,
  projectName,
  taskList,
  projectDesciption,
  projectImage,
}) => {
  return (
    <div className='bloc border-light border opacity-0 translate-y-20 w-full lg:w-96 rounded-xl p-3 bg-medium h-auto'>
      <div className='mb-3 flex justify-between'>
        <h2 className='text-xl pb-2 border-b border-light'>{projectName}</h2>
        <Tooltip>
          <img src={projectImage} className='h-full' />
          <p>{projectDesciption}</p>
        </Tooltip>
      </div>
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
  projectDesciption: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
};

export default Project;
