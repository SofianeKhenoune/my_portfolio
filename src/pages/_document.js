import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='fr' className='box-border m-0 p-0'>
      <Head>
        <link rel='icon' href='/images/profil-home.png' sizes='any' />
        <title>Sofiane - Portfolio</title>
      </Head>
      <body className='text-white bg-dark min-h-full font-body tracking-wider text-sm md:text-base'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
