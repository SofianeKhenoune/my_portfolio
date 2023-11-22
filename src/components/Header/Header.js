import NavBar from './NavBar';

const Header = () => {
  return (
    <header className='z-50 sticky w-full bg-medium border-b border-b-light top-0 max-h-[10vh]'>
      {/* menu navigation */}
      <NavBar />
    </header>
  );
};

export default Header;
