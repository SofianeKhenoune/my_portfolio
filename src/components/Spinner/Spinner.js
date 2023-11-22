import Image from 'next/image';
/**
 * Represents a spinner component.
 * @returns {JSX.Element} - The rendered spinner component.
 */
const Spinner = () => {
  return (
    // Main container
    <main className='flex bloc flex-col justify-center items-center h-screen'>
      {/* Profile image */}
      <Image
        src='/images/profil-home.png'
        width={150}
        height={150}
        alt='photo de profil'
        className='mb-16 border border-light rounded-full p-1'
        priority={1}
      />
      {/* Loader */}
      <div className='loader'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    </main>
  );
};

export default Spinner;
