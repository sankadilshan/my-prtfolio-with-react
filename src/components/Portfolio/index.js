import ProjectSwiper from "./ProjectSwiper";

function Portfolio() {
  return (
    <div className="italic h-full w-full p-7 hover:shadow-lg hover:shadow-darkred mt-2 text-white">
      <h2 className="text-4xl font-sans font-bold tracking-widest">
        Portfolio..
      </h2>
      <div>
        <ProjectSwiper />
      </div>
    </div>
  );
}

export default Portfolio;
