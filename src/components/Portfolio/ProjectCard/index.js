import getLogo from "../../../util/LogoUtil";
import githubLogo from "../../../assets/images/svgs/github.svg";
import { Tooltip } from "react-tooltip";

const renderTechStack = (techstack) => {
  return (
    <div className="flex flex-row justify-start flex-wrap">
      {techstack.map((stack, i) => {
        const logo = getLogo(stack);
        return logo ? (
          <>
            <img
              data-tooltip-id="stack-tooltip"
              data-tooltip-content={stack}
              key={i}
              src={getLogo(stack)}
              alt={`{stack} plogo`}
              style={{ width: "3rem", height: "3rem", padding: "10px" }}
              className="hover:w-24 hover:h"
            />
            <Tooltip id="stack-tooltip" key={`t${i}`}  className="bg-white text-darkred"/>
          </>
        ) : (
          <p className="pt-1">,{stack}</p>
        );
      })}
    </div>
  );
};

function ProjectCard({ project }) {
  const { name, description, yearRange, techStack, githubLink, picIdentifier } =
    project;
  return (
    <div
      className={` border border-white hover:shadow-md hover:shadow-white hover:text-yellow cursor-default`}
    >
      <div className="w-full h-2/5 p-3">
        <img src={getLogo(picIdentifier)} alt="online worker" className="" />
      </div>
      <div className="flex items-center">
        <div className="p-10">
          <h2 className="font-bold text-2xl font-sans tracking-widest">
            {name}
          </h2>
          <div>
            <p>{yearRange}</p>
          </div>
          <div className="py-4">
            <p>{description}</p>
          </div>
          <div>
            <p className="text-lg font-bold underline">Tech Stack</p>
            {renderTechStack(techStack)}
          </div>
          <div className="inline">
            <span>repo-link: 
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubLogo}
                alt="github logo"
                style={{ width: "3rem", height: "3rem", padding: "10px" }}
              />
            </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
