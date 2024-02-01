import getLogo from "../../util/LogoUtil"

function Skills({otherTechnicalSkills}) {
  
  return (
    <div className="flex flex-wrap mx-auto">
      {otherTechnicalSkills.map((skill, index) => {
        const logo = getLogo(skill);
        return (
          <div
            className="shadow-xl m-1 w-44 h-12 flex justify-center items-center border border-r-4 border-white rounded-md"
            key={index}
          >
            <div className="flex flex-row gap-2 justify-evenly items-center">
              <div>
                {logo && (
                  <img
                    src={logo}
                    alt={`${skill} logo`}
                    className="w-fit h-fit"
                  />
                )}
              </div>
              <div>
                <span className="font-semibold font-sans text-base">
                  {skill}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
