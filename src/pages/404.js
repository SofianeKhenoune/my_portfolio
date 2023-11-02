import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='main-block flex justify-center items-center h-[calc(100vh-90px)] text-center'>
      <div className='not-found text-3xl'>
        <h1 className='text-7xl '>404</h1>
        <p>Ooops...</p>
        <h2>That page cannot be found :( </h2>
        <p>
          Going back to the <Link href='/'>Homepage</Link> in 3 seconds...
        </p>
      </div>
    </main>
  );
};

export default NotFound;
