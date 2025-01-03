import  { useState , useEffect} from "react";
import { navLinks } from "../constants";
import Aos from "aos";
import "aos/dist/aos.css";
const NavItems = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li" >
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
export const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  return (
    <header className="text-white fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 hover:text-white font-bold text-xl transition-colors"
            data-aos="slide-down"
          >
           Galexy Fabrication
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none  sm:hidden flex"
            aria-label="toggle menu"
          >
            <img
              src={isopen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden ">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isopen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};
