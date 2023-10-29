import NavBar from './NavBar';

const Header = () => {
  return (
    <header className='z-50 sticky left-0 right-0 top-0 bg-medium border-b border-b-light'>
      {/* menu navigation */}
      <NavBar />
    </header>
  );
};

export default Header;
