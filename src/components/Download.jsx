import React from "react";
import GoogleIcon from "/PlayStore.png";
import AppStore from "/AppStore.png";
const Download = () => {
  return (
    <div className="flex min-w-screen h-fit justify-center gap-12 mt-20 mb-40 max-md:flex-col max-md:items-center">
      <p className="text-2xl font-medium self-center text-primaryblue max-xs:text-mobileFontLg">
        Download Our App
      </p>
      <div className="flex justify-around">
        <img
          className="max-w-[40%]"
          src={GoogleIcon}
          alt="Google play store download Vajra"
        />
        <img
          className="max-w-[40%]"
          src={AppStore}
          alt="Apple store download Vajra"
        />
      </div>
    </div>
  );
};

export default Download;
