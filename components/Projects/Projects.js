import { Element } from 'react-scroll';
import Project from '../../components/Projects/Project';
import { projects } from '../../datas/projects';
const Projects = () => {
  return (
    <Element name='projects' className='min-h-screen'>
      <h2 className='capitalize text-2xl font-bold text-center my-20 md:text-3xl opacity-0 -translate-x-10 max-w-max mx-auto p-2'>
        mes projets
      </h2>
      <div className='flex flex-wrap gap-10 justify-center'>
        {projects.map((project) => (
          <Project
            key={project.slug}
            arrayOfIcons={project.icons}
            projectName={project.title}
            taskList={project.taskList}
            projectImage={project.img}
            projectDesciption={project.smallDescription}
            slug={project.slug}
          />
        ))}
      </div>
    </Element>
  );
};

export default Projects;
