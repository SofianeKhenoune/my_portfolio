import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaAngry, FaSmile } from 'react-icons/fa';
import { IoExit } from 'react-icons/io5';

const NotFound = () => {
  const router = useRouter();
  const [smile, setSmile] = useState(false);

  return (
    <main className='main-block flex justify-center items-center text-center p-5'>
      <div className='not-found text-2xl md:text-4xl'>
        <h1 className='text-7xl md:text-9xl'>404</h1>
        <p>Ooops...</p>
        <h2>Cette page est introuvable :( </h2>
        {smile ? (
          <FaSmile
            color='#f4d508'
            size='100'
            className='hand block mx-auto my-2'
          />
        ) : (
          <FaAngry
            color='#f4d508'
            size='100'
            className='hand block mx-auto my-2'
          />
        )}
        <p>
          <Link
            href='/'
            className='flex gap-2 items-center p-3 bg-button max-w-max mx-auto my-5 rounded-lg hover:bg-medium hover:scale-110 border border-transparent transition duration-300 text-dark hover:text-white hover:border-light'
            onClick={() => router.push('/')}
            onMouseEnter={() => {
              setSmile(true);
            }}
            onMouseLeave={() => {
              setSmile(false);
            }}
          >
            Par ici la sortie
            <IoExit className='mt-2' />
          </Link>
        </p>
      </div>
    </main>
  );
};

export default NotFound;
