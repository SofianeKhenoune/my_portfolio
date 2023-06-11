import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  /*useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/');
    }, 5000);
  }, []);*/

  return (
    <main className='main-block'>
      <div className='not-found'>
        <h1>Ooops...</h1>
        <h2>That page cannot be found :( </h2>
        <p>
          Going back to the <Link href='/'>Homepage</Link> is 5 seconds...
        </p>
      </div>
    </main>
  );
};

export default NotFound;
