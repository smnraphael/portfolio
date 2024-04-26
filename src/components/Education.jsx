import React, { useState } from "react";
import educationData from "../data/education.json";
import EducationCard from "./EducationCard";

function Education() {
  const [education, setEducation] = useState(educationData);

  return (
    <section
      id="education"
      className="flex flex-col justify-center items-start gap-16 py-24 px-12 sm:px-16 md:px-24 lg:px-36"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-700 dark:text-lime-400">
        ~/Education
      </h1>
      <div className="md:px-16">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {education.map((oneEducation) => {
            return (
              <EducationCard
                key={oneEducation.degree}
                degree={oneEducation.degree}
                school={oneEducation.school}
                date={oneEducation.date}
                location={oneEducation.location}
                content={oneEducation.content}
                link={oneEducation.link}
              />
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Education;
