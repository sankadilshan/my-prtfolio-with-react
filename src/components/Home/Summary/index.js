import DatePicker from "./DatePicker";
import CurrentTime from "./CurrentTime";
import ExperienceCard from "./ExperienceCard";
import LookingFor from "./LookingFor";
import portfolio from "../../../assets/portfolio.json";
import FamillierWith from "./FamiliarWith";
import DownloadMyCV from "./DownloadMyCV";

function Summary() {
  const {
    features: {
      isDatetimeEnabled,
      isExperinceEnabled,
      isLookingForEnabled,
      isFamillierWith,
      isDownloadMyCvEnabled,
    },
  } = portfolio;
  return (
    <div className="relative top-28 w-7/8 h-4/5 p-4 shadow-2xl rounded-md mx-auto">
      <div className="flex justify-between items-start align-top">
      {isDatetimeEnabled && (
          <div className="flex justify-start">
            <DatePicker />
            <CurrentTime />
          </div>
      )}
      </div>
      <div className="flex flex-wrap">
        {isExperinceEnabled && <ExperienceCard />}
        {isLookingForEnabled && <LookingFor />}
        {isDownloadMyCvEnabled && <DownloadMyCV />}
        {isFamillierWith && <FamillierWith />}
      </div>
    </div>
  );
}

export default Summary;
