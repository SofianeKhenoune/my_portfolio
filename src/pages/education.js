import Image from 'next/image';
import Head from 'next/head';
const Education = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio - Education</title>
      </Head>
      <main className='main-block'>
        <section id='education'>
          <h2>Formation</h2>
          <p>Les technologies sur lesquelles je me forme actuellement:</p>
          <div className='logos'>
            <Image src='/images/html.png' alt='HTML' width={150} height={150} />
            <Image src='/images/css.png' alt='CSS' width={150} height={150} />
            <Image
              src='/images/javascript.png'
              alt='javascript'
              width={150}
              height={150}
            />
          </div>
          <p>
            Pochainement, je suivrai la formation
            <strong>Développement Web &amp; Mobile</strong> au
            <strong>Reacteur</strong> afin de perfectionner mes connaissances et
            d'apprendre de nouvelles technologies :
          </p>
          <div className='logos'>
            <Image
              src='/images/mongodb.png'
              alt='MangoDb'
              width={200}
              height={150}
            />
            <Image
              src='/images/react.png'
              alt='React'
              width={150}
              height={150}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Education;
