import  { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between px-10 pt-6 text-white md:items-center md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>
      <ul
        className={`${
          menu ? "block" : "hidden"
        } gap-6 px-2 mx-24 mt-4 font-semibold text-center rounded-xl py-2 md:mt-5 bg-opacity-30 md:border-none md:bg-transparent md:static md:mx-0 md:flex`}
      >
        <a href="About">
          <li className="p-1 transition duration-300 text-md-all md:p-0">About</li>
        </a>
        <a href="Technologies">
          <li className="p-1 transition duration-300 text-md-all md:p-0">
            Technologies and frameworks
          </li>
        </a>
        <a href="#Project">
          <li className="p-1 transition duration-300 text-md-all md:p-0">Projects</li>
        </a>
        <a href="Contact">
          <li className="p-1 transition duration-300 text-md-all md:p-0">Contacts</li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={38}
          className="absolute transition-all duration-300 md:hidden right-10 top-6"
          onClick={() => {
            setMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="absolute transition-all duration-300 md:hidden right-10 top-6"
          onClick={() => {
            setMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default NavBar;
