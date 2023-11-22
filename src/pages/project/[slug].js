import Spinner from '@/components/Spinner/Spinner';
import { projects } from '@/datas/projects';
import gsap from 'gsap';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// This component represents a project page
// It renders the project page content or a spinner based on the loading state
const ProjectPage = () => {
  // Initialize loading state
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  // Run this effect whenever the loading state changes
  useEffect(() => {
    // Set loading state to true
    setLoading(true);

    // Animate the bloc element using gsap library
    gsap.to('.bloc', {
      opacity: 1,
      duration: 1,
      translateY: 0,
      ease: 'elastic.out',
    });
  }, [loading]);

  // Render different content based on the loading state
  return loading ? (
    // If loading is true, render the project page content
    <main className='h-auto flex flex-col justify-between p-10'>
      {/* Project content */}
      <div className='flex-1 bloc border-light border opacity-0 translate-y-20 rounded-xl bg-medium mt-20'>
        {projects.map((project) => {
          if (project.slug === slug) {
            return (
              <div key={project.slug} className='p-3'>
                {/* Project image */}
                <Image
                  width={400}
                  height={400}
                  src={project.img}
                  alt={project.title}
                  className='rounded-xl w-full lg:w-auto lg:float-left mb-3 lg:mr-5 border border-light'
                  priority
                />
                {/* Project title */}
                <h1 className='text-xl font-bold lg:text-3xl pb-2 mb-3 border-b border-light'>
                  {project.title}
                </h1>
                {/* Project description */}
                <p className='text-justify text-base md:text-lg leading-7 lg:leading-9'>
                  {project.desc}
                </p>
                {/* Project icons */}
                <div className='flex items-center flex-wrap gap-2 justify-end border-t border-light mt-5 pt-5'>
                  {project.icons.map((Icon, index) => (
                    <Icon size={30} key={Icon + index} />
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>
    </main>
  ) : (
    // If loading is false, render a spinner component
    <Spinner />
  );
};

export default ProjectPage;
