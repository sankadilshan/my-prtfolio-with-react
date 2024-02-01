import portfoloio from "../../assets/portfolio.json";
import homeImg from "../../assets/images/home.jpg";
import EducationCard from "./EducationCard";

function AboutMe() {
  return (
    <div className="h-full w-full text-white hover:shadow-lg hover:shadow-darkred border-b-darkred mb-4">
      <div className="flex gap-5 p-7 justify-start">
        <div className="basis-2/5">
        <img src={homeImg} alt="about me" className="w-fit h-[37rem]" />
        </div>
        <div className="basis-3/5 padding-10 italic">
          <h2 className="text-4xl font-sans font-bold tracking-widest">About Me...</h2>
          <div className="block pt-6">{portfoloio.dummyText}</div>
          <EducationCard />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
