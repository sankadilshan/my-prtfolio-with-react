
import NavMenu from '../NavBar/Navmenu';
import './styles.scss';

function Header() {
  return (
    <div className="flex justify-between w-full h-20 items-center fixed top-0 z-10 pl-10 header">
      <span className="absolute bg-green w-6 h-6  rotate-45  header-logo"></span>
      <div className="tracking-widest font-semibold text-1xl header-text">Sanka Dilshan</div>
      <NavMenu />
    </div>
  );
}

export default Header;
 