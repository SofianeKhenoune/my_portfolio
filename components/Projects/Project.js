import { Tooltip } from 'flowbite-react';
import PropTypes, { elementType } from 'prop-types';
import { CgArrowsExpandUpRight } from 'react-icons/cg';

const Project = ({
  arrayOfIcons,
  projectName,
  taskList,
  projectDesciption,
  projectImage,
}) => {
  return (
    <div className='bloc border-light border opacity-0 translate-y-20 w-96 rounded-xl p-3 bg-medium h-auto'>
      <div className='mb-3 flex justify-between'>
        <h2 className='text-xl pb-2 border-b border-light'>{projectName}</h2>
        <Tooltip
          arrow={false}
          trigger='hover'
          placement='left'
          animation='duration-700'
          className='w-full border-light border'
          content={
            <div className='flex flex-col justify-end w-full h-auto'>
              <img src={projectImage} />
              <p className='p-2'>{projectDesciption}</p>
            </div>
          }
        >
          <CgArrowsExpandUpRight
            className='border border-light rounded-lg p-2 hover:cursor-pointer'
            size={35}
          />
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
