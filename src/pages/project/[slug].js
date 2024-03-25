import Spinner from '@/components/Spinner/Spinner';
import { projects } from '@/datas/projects';
import gsap from 'gsap';
import Head from 'next/head';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import NotFound from '../404';

// This component represents a project page
// It renders the project page content or a spinner based on the loading state
const ProjectPage = () => {
  // Initialize loading state
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  // const slugs = projects.map((project) => project.slug);
  const project = projects.find((project) => project.slug === slug);

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
  return project ? (
    <>
      <Head>
        <title>{`Portfolio - Sofiane Khenoune - ${project.title}`}</title>

        <meta
          name='description'
          content={`Portfolio de Sofiane Khenoune - mon projet ${project.title}`}
        />
      </Head>
      {/* If loading is true, render the project page content*/}
      {loading ? (
        <main className='flex flex-col justify-between p-10'>
          {/* Project content */}
          <div
            key={project.slug}
            className='p-3 bloc border-light border opacity-0 translate-y-20 rounded-xl bg-medium'
          >
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
        </main>
      ) : (
        // If loading is false, render a spinner component
        <Spinner />
      )}
    </>
  ) : (
    NotFound()
  );
};

export default ProjectPage;
