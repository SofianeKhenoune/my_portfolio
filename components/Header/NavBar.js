import { useState } from 'react';
import { Button, Link } from 'react-scroll';
import { navBarItems } from '../../datas/header';
import ProfilHeader from './ProfilHeader';

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const navItemStyle =
    'block py-2 px-4 text-slate-50 rounded hover:bg-buttonHover hover:scale-110 transition duration-300 capitalize border border-transparent';
  const navActiveItemStyle = `${navItemStyle} !border-light`;
  console.log(navBarItems);

  return (
    <nav className='border-gray-200 dark:bg-gray-900'>
      <div className='flex flex-wrap items-center justify-between p-4 mx-auto'>
        <ProfilHeader />
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
          <div className='font-medium capitalize flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-2 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 '>
            {navBarItems.map((item, index) => (
              <Button key={item.name + index}>
                <Link
                  to={item.to}
                  activeClass={navActiveItemStyle}
                  spy={true}
                  className={navItemStyle}
                  offset={item.offset}
                  duration={item.duration}
                  onClick={() => {
                    setShowNav(false);
                  }}
                >
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
