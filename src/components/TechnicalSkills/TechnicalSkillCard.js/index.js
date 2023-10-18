import bg from "../../../assets/images/bg2.jpg";
import "./styles.scss";

function TechnicalSkillCard({skill,years, companies}) {
  const bgcolor= "light-green";

  return (
    <div className={`w-[22rem] h-[30rem] shadow-2xl rounded-xl mb-4 mr-6 [&:nth-child(odd)]:mt-6 hover:h-[31rem] hover:w-[23rem] bg-${bgcolor}`}>
      <div className="w-full h-2/5 p-2">
        <img src={bg} alt="technical skill" className="w-fit h-fit" />
      </div>
      <div className="flex items-center">
        <div className="p-10">
          <h2 className="font-bold text-2xl font-sans tracking-widest">{skill}</h2>
          <div>
            <h2 className="font-semibold text-base font-sans tracking-widest mt-4 mb-2">
              Experience in
            </h2>
            <ul className="list-decimal list-inside pl-1">
            {companies.map((company, index)=> <li className="shadow-none -tracking-normal" key={index}>{company}</li>)}
            </ul>
          </div>
        </div>
        <div className="justify-self-center">
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
