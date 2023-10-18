function LanguageCard({skill, years}) {
    return (
      <div className="h-40 w-56 flex flex-col flex-start items-start shadow-2xl rounded-md m-3">
        <div className="font-semibold w-full bg-dark-current bg-green shadow-2xl p-2">
          Top Skill
        </div>
        <div className="m-auto font-serif">
          <div className="w-22 flex flex-col justify-between">
          <span className="font-extrabold text-4xl">{skill}</span>
          <span className="self-end -mr-2 -mt-2 text-lg font-bold">{years} years</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default LanguageCard;
  