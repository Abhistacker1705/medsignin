import React from "react";
import VajraLogo from "/VajraLogo.svg";

const Footer = () => {
  return (
    <footer className="flex max-w-screen bg-featurelightblue justify-between px-16 py-6 shadow-footer max-md:flex-col max-sm:px-4">
      <div className="flex items-center gap-16">
        <img className="max-xs:w-[14%]" src={VajraLogo} alt="Vajra Footer" />
        <p className="text-textblack text-lg max-xs:text-mobileFontSm">
          © 2020 VAJRA, All Rights Reserved
        </p>
      </div>
      <div className="flex items-center gap-1 text-black text-lg max-xs:text-mobileFontSm max-md:self-end">
        <a>Terms & Conditions</a>
        <a>|</a>
        <a>FAQ's</a>
      </div>
    </footer>
  );
};

export default Footer;
