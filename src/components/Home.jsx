import Certifications from "./Certifications";
import Education from "./Education";
import Projects from "./Projects";
import Work from "./Work";
import { FaArrowDown } from "react-icons/fa";

function Home() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col bg-stone-50 dark:bg-gray-900">
      <section
        id="header"
        className="flex justify-center items-center pt-16 pb-12 px-12 sm:px-16 md:px-24 lg:px-36 h-screen"
      >
        <div className="flex flex-col text-3xl sm:text-5xl md:text-7xl font-bold dark:text-gray-200">
          <div
            onClick={() =>
              window.open("https://github.com/smnraphael", "_blank")
            }
            className="flex flex-col gap-4 cursor-pointer"
          >
            <h1>Hi there 👋</h1>
            <h1>I'm Raphaël,</h1>
            <h1>Front-End Engineer</h1>
          </div>
          <FaArrowDown
            onClick={scrollToProjects}
            className="self-center mt-36 animate-bounce text-3xl cursor-pointer"
          />
        </div>
      </section>
      <Projects />
      <Work />
      <Education />
      <Certifications />
    </div>
  );
}

export default Home;
