import AboutMe from "../AboutMe";
import Experience from "../Experience";
import TechnicalSkills from "../TechnicalSkills";

function Layout() {
  return (
    <div className="bg-gradient-to-r from-black from-10% via-[#1a0804] via-60% to-[#1a191e] to-90% mt-5">
      <div className="flex flex-col justify-start w-4/5 shadow-2xl h-full pb-4 m-auto relative">
        <AboutMe />
        <Experience />
        <TechnicalSkills />
      </div>
    </div>
  );
}

export default Layout;
