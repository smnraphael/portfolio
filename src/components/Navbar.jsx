import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import resume from "../assets/resumepdf.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full flex justify-between items-center h-16 px-10 backdrop-blur-sm dark:bg-gray-900 dark:text-gray-200 z-50">
      <div>
        <a
          href="#header
        "
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Raphaël Simon
          </h1>
        </a>
      </div>
      <ul className="gap-3 font-medium hidden md:flex">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li>
          <a href={resume} target="_blank" className="font-semibold">
            Resume
          </a>
        </li>
      </ul>
      <div className="block w-auto md:hidden">
        <div className="relative inline-block text-left z-50">
          <GiHamburgerMenu
            onClick={openMenu}
            className="cursor-pointer text-2xl text-purple-700 dark:text-lime-400"
          />
          {isOpen && (
            <div className="absolute right-0 mt-10 w-48 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-600">
              <div className="py-1">
                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Projects
                </a>
                <a
                  href="#work"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Work
                </a>
                <a
                  href="#education"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Education
                </a>
                <a
                  href="#certifications"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Certifications
                </a>
                <a
                  href={resume}
                  target="_blank"
                  className="block cursor-pointer px-4 py-2 text-md font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
