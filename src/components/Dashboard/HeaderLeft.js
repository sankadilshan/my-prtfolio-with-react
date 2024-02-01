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
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
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
