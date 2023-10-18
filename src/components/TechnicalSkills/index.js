import TechnicalSkillCard from "./TechnicalSkillCard.js";
import portfolio from "../../assets/portfolio.json";

const SkillCard = () => {
  const { otherTechnicalSkills } = portfolio;
  return (
    <div className="flex flex-wrap mx-auto">
      {otherTechnicalSkills.map((skill, index) => (
        <div className="shadow-xl m-4 w-32 h-10 flex justify-center items-center" key={index}>
          <span className="font-semibold font-sans text-base">{skill}</span>
        </div>
      ))}
    </div>
  );
};

function TechnicalSkills() {
  const { technicalSkills } = portfolio;
  return (
    <div className="italic h-full w-full p-7 shadow-xl">
      <h2 className="text-4xl font-sans font-bold tracking-widest">
        My Technical Skills...
      </h2>
      <div className="flex flex-wrap justify-center w-full h-full py-10">
        {technicalSkills.map(({skill, companies, years}, index) => (
          <TechnicalSkillCard key={index} skill={skill} years={years} companies={companies} />
        ))}
      </div>
      <div>
        <SkillCard />
      </div>
    </div>
  );
}

export default TechnicalSkills;
