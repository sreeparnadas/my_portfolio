import Contact from "./Contact";
import Header from "./Header";
import Projects from "./projects";
import SkillSet from "./SkillSet";

function MasterComponent(){
  return (
    <> 
      <Header />
      <SkillSet />
      <Projects/>
      <Contact/>
    </>
  )
}


export default MasterComponent;