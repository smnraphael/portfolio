import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, date, content, stack, link }) {
  return (
    <div className="max-w-sm p-6 bg-white border border-stone-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
              {title}
            </p>
            <div className="flex gap-2">
              {link.deployed !== "" ? (
                <FaLink
                  onClick={() => window.open(link.deployed, "_blank")}
                  className="cursor-pointer dark:text-white"
                />
              ) : null}
              <FaGithub
                onClick={() => window.open(link.github, "_blank")}
                className="cursor-pointer dark:text-white"
              />
            </div>
          </div>
          <p className="text-xs dark:text-gray-300 mb-2">{date}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {content}
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {stack.map((techno, index) => (
            <p
              key={index}
              className="px-2 text-sm text-black bg-blue-100 dark:text-white dark:bg-blue-600 rounded-lg"
            >
              {techno}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
