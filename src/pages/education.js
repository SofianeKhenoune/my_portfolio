import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Education.module.scss';
const Education = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio - Education</title>
      </Head>
      <main className='main-block'>
        <section id={styles.education}>
          <h2>Formation</h2>
          <p>Les technologies que je maîtrise:</p>
          <div className={styles.logos}>
            <Image src='/images/html.png' alt='HTML' width={150} height={150} />
            <Image src='/images/css.png' alt='CSS' width={150} height={150} />
            <Image
              src='/images/javascript.png'
              alt='javascript'
              width={150}
              height={150}
            />
            <Image
              src='/images/react.png'
              alt='React'
              width={190}
              height={150}
            />
          </div>
          <p>
            Les technologies et compétences qui sont en cours d'acquisition :{' '}
          </p>

          <div className={styles.logos}>
            <Image
              src='/images/mongodb.png'
              alt='MangoDb'
              width={200}
              height={150}
              style={{ backgroundColor: '#fff', borderRadius: '1em' }}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Education;
