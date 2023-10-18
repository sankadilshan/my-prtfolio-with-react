import Icon from "../../shared/Icon";
import "./styles.scss";

function NavBarItems({ name, classname, iconpaths}) {
  const styles = `h-full flex flex-col justify-between items-start shadow-md cursor-pointer pt-6 pb-6 pl-4 w-36 hover:w-wxx bg-center bg-no-repeat bg-cover shadow-md ${classname}`;
  return (
    <li className={styles}>
      <Icon name={classname} paths={iconpaths} size={25}/>
      <div className="text-md decoration-2 text-green">{name}</div>
    </li>
  );
}

export default NavBarItems;
