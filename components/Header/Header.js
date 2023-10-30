import NavBar from './NavBar';

const Header = () => {
  return (
    <header className='z-50 fixed w-full bg-medium border-b border-b-light'>
      {/* menu navigation */}
      <NavBar />
    </header>
  );
};

export default Header;
