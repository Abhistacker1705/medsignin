import React from "react";
import VajraLogo from "/VajraLogo.svg";
import HomeIcon from "/HomeIcon.svg";

const Navbar = () => {
  return (
    <nav className="flex max-w-screen h-fit justify-end items-center py-6 px-16 bg-featurelightblue mb-9 shadow-nav max-sm:justify-center max-sm:px-5">
      <div className="drop flex basis-[40%] justify-self-center items-center max-md:basis-full">
        <img
          className="me-20 max-sm:me-0 max-xs:w-[18%]"
          src={VajraLogo}
          alt="Vajra for Biomedical operations tracking"
        />
        <a className="text-primaryblue font-medium text-lg max-md:hidden">
          HOME
        </a>
      </div>
      <p className="text-primaryblue min-w-fit font-medium text-lg max-md:hidden">
        +91 89715 80265
      </p>
      <img className="md:hidden max-xs:w-[7%]" src={HomeIcon} />
    </nav>
  );
};

export default Navbar;
