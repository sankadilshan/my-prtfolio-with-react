import TechnicalSkillCard from "./TechnicalSkillCard.js";
import portfolio from "../../assets/portfolio.json";
import Skills from "./Skills.js";

function TechnicalSkills() {
  const { technicalSkills, otherTechnicalSkills1, otherTechnicalSkills2, softSkills } =
    portfolio;
  return (
    <div className="italic h-full w-full p-7 hover:shadow-lg hover:shadow-darkred mt-2 text-white">
      <h2 className="text-4xl font-sans font-bold tracking-widest">
        My Skills...
      </h2>
      <div className="flex flex-wrap justify-center w-full h-full py-10">
        {technicalSkills.map(({ skill, companies, years }, index) => (
          <TechnicalSkillCard
            key={index}
            skill={skill}
            years={years}
            companies={companies}
          />
        ))}
      </div>
      <div>
        <Skills otherTechnicalSkills={otherTechnicalSkills1} />
      </div>
      <div className="mt-6">
        <Skills otherTechnicalSkills={otherTechnicalSkills2} />
      </div>
      <div className="mt-6">
        <Skills otherTechnicalSkills={softSkills} />
      </div>
    </div>
  );
}

export default TechnicalSkills;
