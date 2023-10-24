import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const NavBar = () => {
  const pathname = useRouter().pathname;
  const [showNav, setShowNav] = useState(false);
  const navItemStyle =
    'block py-2 px-4 text-slate-50 rounded hover:bg-white hover:text-gray-900 md:border-0 md:p-1 dark:hover:bg-gray-700 dark:hover:text-gray-950 md:dark:hover:bg-transparent hover:scale-110 transition duration-300 ease-in-out ';
  const navActiveItemStyle = `${navItemStyle} md:bg-gray-700 text-gray-950 font-bold`;
  return (
    <nav className='border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between p-4 mx-auto'>
        <Link href='/' className='flex items-center border-white'>
          <Image
            src='/images/profil.webp'
            className='mr-3 rounded-full'
            alt='profil Logo'
            width={50}
            height={50}
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white max-[1030px]:hidden'>
            Sofiane Khenoune
          </span>
        </Link>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div
          className={
            !showNav
              ? 'w-full md:block md:w-auto hidden'
              : 'w-full md:block md:w-auto'
          }
          id='navbar-default'
        >
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-2 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 '>
            <li
              onClick={() => {
                setShowNav(false);
              }}
            >
              <Link
                href='/about'
                className={
                  pathname === '/about' ? navActiveItemStyle : navItemStyle
                }
              >
                About Me
              </Link>
            </li>
            <li
              onClick={() => {
                setShowNav(false);
              }}
            >
              <Link
                href='/education'
                className={
                  pathname === '/education' ? navActiveItemStyle : navItemStyle
                }
              >
                Education
              </Link>
            </li>
            <li
              onClick={() => {
                setShowNav(false);
              }}
            >
              <Link
                href='/projects'
                className={
                  pathname === '/projects' ? navActiveItemStyle : navItemStyle
                }
              >
                Projects
              </Link>
            </li>
            <li
              onClick={() => {
                setShowNav(false);
              }}
            >
              <Link
                href='/contact'
                className={
                  pathname === '/contact' ? navActiveItemStyle : navItemStyle
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
