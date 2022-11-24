import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <div className="sticky bg-[#250618] h-16 sm:h-20 z-[100] top-0">
      <div className=" sm:hidden absolute top-0 w-full flex justify-between ">
        <Link to="/">
          {" "}
          <div className="logo m-4 text-3xl font-bold">Saif</div>{" "}
        </Link>

        <div
          className={
            togglerNav
              ? "flex flex-col gap-4 sm:flex bg-white w-40 h-52 mt-16 absolute right-0 text-[#190410] font-bold text-center z-50"
              : "hidden sm:flex"
          }>
          <a
            href="https://github.com/Saif045"
            target="_blank"
            className=" mt-8 "
            onClick={clickHandler}>
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/saif-osama"
            target="_blank"
            className="p-2 m-2  "
            onClick={clickHandler}>
            Linkedin
          </a>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={clickHandler}>
            CONTACT
          </ScrollLink>
        </div>
        <button
          className=" inline sm:hidden self-start nav-link"
          onClick={clickHandler}>
          {togglerNav ? (
            <AiOutlineClose className="mr-4 mt-5 " size={30} />
          ) : (
            <FaBars className="mr-4 mt-5 " size={30} />
          )}
        </button>
      </div>

      <div className="hidden sm:flex absolute top-0 w-full  justify-between ">
        <Link to="/">
          {" "}
          <div className="logo m-5 text-4xl font-bold">Saif</div>
        </Link>

        <div className={" mt-8   "}>
          <a
            href="https://github.com/Saif045"
            target="_blank"
            className="p-2 m-2  ">
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/saif-osama"
            target="_blank"
            className="p-2 m-2  ">
            Linkedin
          </a>

          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="py-2 m-2  mr-4 px-4 font-semibold text-[#190410] bg-white sm:rounded-3xl ">
            CONTACT
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
