import NavBarItems from "../NavBarItems";
import portfolio from '../../../assets/portfolio.json'

function NavMenu() {
  const {navItems} = portfolio
  return (
    <div className="w-full h-20 flex justify-end">
      <div className="relative top-0 z-1">
        <ul className="list-none flex row h-20 w-full">
         {navItems.map((item, index) => <NavBarItems name={item.name} classname={item.classname} iconpaths={item.paths} key={index}/>)}
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
