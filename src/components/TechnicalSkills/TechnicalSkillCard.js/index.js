import "./styles.scss";
import getLogo from "../../../util/LogoUtil" 

function TechnicalSkillCard({ skill, years, companies }) {
  const bgcolor = "light-green";
  const logo = getLogo(skill);
  return (
    <div
      className={`w-[22rem] h-[30rem] shadow-2xl rounded-xl mb-4 mr-6 [&:nth-child(odd)]:mt-6 hover:h-[31rem] hover:w-[23rem] border border-white hover:shadow-md hover:shadow-white bg-${bgcolor} hover:text-yellow`}
    >
      <div className="w-full h-2/5 p-6">
        {logo && <img src={logo} alt={`${skill} logo`} className="w-32 " />}
      </div>
      <div className="flex items-center">
        <div className="p-10">
          <h2 className="font-bold text-2xl font-sans tracking-widest">
            {skill}
          </h2>
          <div>
            <h2 className="font-semibold text-base font-sans tracking-widest mt-4 mb-2">
              Experience in
            </h2>
            <ul className="list-disc list-inside pl-1">
              {companies.map((company, index) => (
                <li className="shadow-none -tracking-normal" key={index}>
                  {company}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="justify-self-center mr-8">
          <div className="w-22 flex flex-col justify-between">
            <span className="font-extrabold text-7xl">{years}</span>
            <span className="self-end -mr-2 -mt-2 text-base">years</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkillCard;
