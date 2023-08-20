import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../assets/data";
import { useState } from "react";
const Nav = () => {
  // eslint-disable-next-line no-unused-vars
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [ulClassName, setUlClassName] = useState(
    "hidden max-lg:hidden flex flex-col gap-4"
  );

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
    setUlClassName((prevState) =>
      prevState === "hidden max-lg:hidden flex flex-col gap-4"
        ? "block max-lg:block flex flex-col gap-4"
        : "hidden max-lg:hidden flex flex-col gap-4"
    );
  };
  return (
    <header className="padding-x py-8 z-10 w-full sticky top-3 sm:top-2">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={132} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks?.map((nav) => (
            <li key={nav.id}>
              <a
                href={nav.href}
                className="text-lg font-montserrat leading-normal text-slate-gray"
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <div className="flex items-center gap-16">
            <button
              onClick={toggleNav}
              className="text-lg font-montserrat leading-normal text-slate-gray focus:outline-none "
            >
              <img
                src={hamburger}
                alt="hamburger_menu"
                width={25}
                height={25}
                style={{ display: isNavOpen ? "none" : "block" }}
              />
            </button>
          </div>
        </div>
      </nav>
      <>
        <ul
          className={`max-lg:block flex flex-col gap-4 z-40 ${ulClassName}`}
          style={{
            position: "absolute",
            top: "80%",
            right: "20px",
            transition: "opacity 0.5s ease-in-out",
            opacity: isNavOpen ? 1 : 0,
            pointerEvents: isNavOpen ? "auto" : "none",
            cursor: "pointer",
          }}
        >
          {navLinks?.map((nav) => (
            // <li key={nav.id} onClick={toggleNav}>
            <li key={nav.id} onClick={isNavOpen ? toggleNav : undefined}>
              <a
                href={nav.href}
                className="text-lg font-montserrat leading-normal text-slate-gray hover:text-blue-500"
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
      </>
    </header>
  );
};

export default Nav;
