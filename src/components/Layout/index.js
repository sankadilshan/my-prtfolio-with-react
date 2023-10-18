import AboutMe from "../AboutMe";
import TechnicalSkills from "../TechnicalSkills";

function Layout() {
    return ( 
     <>
     <div className="flex flex-col justify-start w-4/5 shadow-2xl h-full pb-4 m-auto relative">
             <AboutMe /> 
             <TechnicalSkills />
        </div>
     </>
        
     );
}

export default Layout;