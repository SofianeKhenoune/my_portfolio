import NavBar from './NavBar';

const Header = () => {
  return (
    <header
      className='z-50 sticky left-0 right-0 top-0'
      style={{
        background: 'rgba(1, 1, 1, 0.7)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
    >
      {/* menu navigation */}
      <NavBar />
    </header>
  );
};

export default Header;
