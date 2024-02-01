import portfolio from "../../../assets/portfolio.json";
import Icon from "../../shared/Icon";

const EducationCard = ({
  header,
  school,
  yearRange,
  grade,
  iconName,
  iconPaths,
}) => {
  return (
    <div className="shadow-2xl rounded-md-3 mb-5 mt-5 p-4 w-4/5 m-auto hover:w-5/6 hover:text-yellow border border-white border-r-4 rounded-md">
      <div className="grid grid-rows-2 grid-flow-col">
        <div className="row-span-2 my-auto">
          <Icon
            name={iconName}
            colorClass="yellow"
            paths={iconPaths}
            size={30}
          />
        </div>
        <div className="row-span-2 p-2 ml-4">
          <div className="flex flex-col justify-start items-start">
            <div className="font-bold tracking-widest text-base font-sans mb-1 ">
              {header}
            </div>
            <div className="font-medium tracking-widest text-sm font-sans">
              {school}
            </div>
            <div className="font-light tracking-widest text-sm font-sans">
              {yearRange}
            </div>
            <div className="font-bold tracking-widest text-sm font-sans mt-1">
              {grade}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function EducationCardContainer() {
  const { educationList } = portfolio;
  return (
    <div className="w-full p-4">
      <h2 className="font-bold font-sans text-2xl mb-4 tracking-widest">
        My Education...
      </h2>
      {educationList.map(
        ({ header, school, yearRange, grade, iconName, iconPaths }, index) => (
          <EducationCard
            header={header}
            school={school}
            yearRange={yearRange}
            grade={grade}
            iconName={iconName}
            iconPaths={iconPaths}
            key={index}
          />
        )
      )}
    </div>
  );
}

export default EducationCardContainer;
