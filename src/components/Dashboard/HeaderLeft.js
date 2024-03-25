import LookingFor from "./LookingFor";
import MenuButton from "./MenuButton";
import portfolio from "../../assets/portfolio.json";

function HeaderLeft() {
    const {
        features: {
          isLookingForEnabled,
        },
      } = portfolio;
  return (
    <div className="flex-auto w-64">
      <div className="flex-col justify-center p-32">
        <div>
          <p className="text-8xl">Welcome.</p>
          <p>I'm Sanka Dilshan.</p>
          <p>Full stack developer</p>
        </div>
        <div>
          <p>I build things for the Web.</p>
        </div>
        <div className="py-4">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          </p>
        </div>
        <div>
          {isLookingForEnabled && <LookingFor />}
        </div>
        <div className="mt-4">
          <MenuButton text={'Resume'} />
        </div>
      </div>
    </div>
  );
}

export default HeaderLeft;
