function  ExperienceCard() {
  return (
    <div className="h-48 w-56 flex flex-col flex-start items-start shadow-lg shadow-white rounded-md m-3 border border-white">
      <div className="font-semibold w-full bg-dark-current bg-transparent shadow-2xl p-2 border border-white">
        Experince
      </div>
      <div className="m-auto font-serif">
        <div className="w-22 flex flex-col justify-between">
        <span className="font-extrabold text-7xl">3+</span>
        <span className="self-end -mr-2 -mt-2 text-base">years</span>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
