import { roboto_slab } from '@/fonts';
import { Head, Html, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html
      lang='fr'
      className={`${roboto_slab.className} box-border m-0 p-0 scroll-smooth`}
    >
      <Head>
        <link rel='icon' href='/images/profil-home.png' sizes='any' />
        <title>
          Portfolio - Sofiane Khenoune - Développeur Web et Web Mobile
        </title>
        <meta
          name='description'
          content='Découvrez le portfolio de Sofiane Khenoune, développeur Web et Web Mobile spécialisé React. Explorez mes projets et compétences en HTML, CSS, JavaScript.'
        />
      </Head>
      <body className='text-white bg-dark text-lg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
