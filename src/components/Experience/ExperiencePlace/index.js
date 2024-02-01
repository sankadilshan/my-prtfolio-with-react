import Icon from "../../shared/Icon";
import portfolio from "../../../assets/portfolio.json";

const ExCompany = ({ company, country, yearRange, position, experience, iconPaths, id, isYears }) => {
  const isOdd = id % 2 !== 0;
  const margin = isOdd ? "" : "8rem";
  return (
    <div
      className="shadow-2xl rounded-md-3 mb-5 mt-5 p-4 w-4/5 m-auto hover:w-5/6 hover:text-yellow border border-white border-r-4 rounded-md text-white"
      style={{ marginLeft: margin }}
    >
      <div className="flex flex-row justify-between">
        <div>
          <div className="grid grid-rows-2 justify-start grid-flow-col">
            <div className="row-span-2 my-auto">
              <Icon
                name="experience"
                colorClass="yellow"
                paths={iconPaths}
                size={30}
              />
            </div>
            <div className="row-span-2 p-2 ml-4">
              <div className="flex flex-col justify-start items-start">
                <div className="font-bold tracking-widest text-base font-sans mb-1 ">
                  {position}
                </div>
                <div className="font-bold tracking-widest text-sm font-sans mt-1">
                  {yearRange}
                </div>
                <div className="font-medium tracking-widest text-sm font-sans">
                  {company}
                </div>
                <div className="font-light tracking-widest text-sm font-sans">
                  {country}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="m-auto font-serif mr-6">
            <div className="w-22 flex flex-col justify-between">
              <span className="font-extrabold text-7xl">{experience}</span>
              <span className="self-end ml-6 -mt-2 text-base">{isYears? 'years': 'months'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function ExperiencePlaces() {
  const { experienceCompanies } = portfolio;
  return (
    <>
      {experienceCompanies.map((c, i) => (
        <ExCompany
          key={i}
          company={c.company}
          country={c.country}
          yearRange={c.yearRange}
          position={c.position}
          experience={c.experience}
          iconPaths={c.paths}
          id={c.id}
          isYears={c.isYears}
          
        />
      ))}
    </>
  );
}

export default ExperiencePlaces;
