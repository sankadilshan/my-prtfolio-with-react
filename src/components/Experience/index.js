import ExperienceCard from "./ExperienceCard";
import ExperiencePlaces from "./ExperiencePlace";

function EXperience() {
  return (
    <div className="italic h-full w-full p-7 hover:shadow-lg hover:shadow-darkred mt-2 text-white">
      <div className="flex flex-row justify-evenly items-center">
        <div className="flex-initial w-10 mr-32">
          <ExperienceCard />
        </div>
        <div className="flex-initial w-3/5">
          <ExperiencePlaces />
        </div>
      </div>
    </div>
  );
}

export default EXperience;
