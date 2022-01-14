import React from "react";
const Header = () => {
  return (
    <nav className="space-x-10">
      <ul className="flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin">
        <li>
          <a
            href="#Experience"
            className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Skill"
            className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Skill
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
