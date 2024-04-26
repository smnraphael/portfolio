import { useState } from "react";
import certificationsData from "../data/certifications.json";
import CertificationCard from "./CertificationCard";

function Certifications() {
  const [certifications, setCertifications] = useState(certificationsData);

  return (
    <section
      id="certifications"
      className="flex flex-col justify-center items-start gap-16 py-24 px-12 sm:px-16 md:px-24 lg:px-36"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-700 dark:text-lime-400">
        ~/Certifications
      </h1>
      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((certification) => {
            return (
              <CertificationCard
                key={certification.course}
                course={certification.course}
                school={certification.school}
                date={certification.date}
                link={certification.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
