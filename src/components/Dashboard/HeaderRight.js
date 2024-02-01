import LookingFor from "./LookingFor";
import MenuButton from "./MenuButton";

function HeaderRight() {
  return (
    <div className="flex-auto w-40">
      <div className="flex-col justify-center pt-28">
        <div className="pb-4 pt-40">
          <p>Menu</p>
        </div>
        <div>
          <MenuButton text={"About Me"} />
          <MenuButton text={"Experience"} />
          <MenuButton text={"Skills"} />
          <MenuButton text={"Project"} />
          <MenuButton text={"Contact Me"} />
        </div>
      </div>
    </div>
  );
}

export default HeaderRight;
