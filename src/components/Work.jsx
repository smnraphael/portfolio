import { useState } from "react";
import workData from "../data/work.json";
import WorkCard from "./WorkCard";

function Work() {
  const [work, setWork] = useState(workData);

  return (
    <section
      id="work"
      className="flex flex-col justify-center items-start gap-16 py-24 px-12 sm:px-16 md:px-24 lg:px-36"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-700 dark:text-lime-400">
        ~/Work Experience
      </h1>
      <div className="sm:px-12">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {work.map((oneWork) => {
            return (
              <WorkCard
                key={oneWork.position}
                position={oneWork.position}
                company={oneWork.company}
                date={oneWork.date}
                location={oneWork.location}
                content={oneWork.content}
                link={oneWork.link}
              />
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Work;
