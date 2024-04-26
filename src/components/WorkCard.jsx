import React from "react";

function WorkCard({ position, company, date, location, content, link }) {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-200 rounded-full -start-3 dark:bg-lime-600"></span>
      <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white">
        {position}
      </h3>
      <div className="mb-2">
        <a
          href={link}
          target="_blank"
          className="text-purple-700 dark:text-lime-400 hover:underline"
        >
          {company}
        </a>
      </div>
      <div className="block text-sm mb-3 text-gray-400 dark:text-gray-500">
        {date} | {location}
      </div>
      <p className="mb-4 text-gray-500 dark:text-gray-400">
        {content.split("\n").map((item, index) => (
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>
        ))}
      </p>
    </li>
  );
}

export default WorkCard;
