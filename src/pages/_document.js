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
      </Head>
      <body className='text-white bg-dark text-lg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
