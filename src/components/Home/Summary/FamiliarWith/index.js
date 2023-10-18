import LanguageCard from "./LanguageCard";
import poerfolio from "../../../../assets/portfolio.json";
import Icon from "../../../shared/Icon";

function FamiliarWith() {
  const { topTechnicalSkills } = poerfolio;
  return (
    <div className="h-64 w-1/2 flex flex-col flex-start items-start shadow-2xl rounded-md m-3 shadow-purple">
      <div className="font-semibold w-full bg-dark-current bg-yellow shadow-2xl p-2">
        I'm More Familiar with
      </div>
      <div className="p-2 font-serif flex flex-wrap items-end">
        {topTechnicalSkills.map(({ skill, years, order }) => (
          <LanguageCard skill={skill} years={years} key={order} />
        ))}
        <div className="m-4 cursor-pointer shadow-xl shadow-blue">  
          <Icon
            name="more"
            color="yellow"
            paths={[
              "M17,12c0,.553-.448,1-1,1h-3v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-3c0-.553,.448-1,1-1s1,.447,1,1v3h3c.552,0,1,.447,1,1Zm7-7v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default FamiliarWith;
