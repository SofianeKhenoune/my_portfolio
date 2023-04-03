import Image from 'next/image';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio - Contact</title>
      </Head>
      <main className='main-block'>
        <section id='contact'>
          <h2>Contactez-moi</h2>
          <div>
            <Image src='/images/mail.jpg' alt='email' width={32} height={32} />
            <a href='mailto:sofianekhenoune.dev@gmail.com'>
              sofianekhenoune.dev@gmail.com
            </a>
          </div>
          <div>
            <Image src='/images/linkedin.png' alt='' width={32} height={32} />
            <a
              href='http://www.linkedin.com/in/sofianekhenoune'
              target='_blank'
            >
              https://www.linkedin.com/sofianekhenoune
            </a>
          </div>
          <div>
            <Image
              src='/images/github.png'
              alt='github'
              width={32}
              height={32}
            />
            <a href='http://github.com/modestman1986' target='_blank'>
              https://github.com/
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
