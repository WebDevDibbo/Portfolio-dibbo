import React from "react";
import profile from "../../../assets/profile.png";

const Banner = () => {
  return (
    <div className="mb-24">
      <div className="hero-content py-5 lg:py-20 flex-col lg:flex-row-reverse">
        <img
          src={profile}
          className="w-full md:w-1/3 rounded-lg shadow-2xl"
          alt=""
        />
        <div className="mt-10 mr-20 p-5 ">
          <h3>Hey there !</h3>
          <h1 className="text-4xl mt-5 mb-5 font-bold">I AM DIBBO DAS</h1>
          <h4 className="mb-5">FRONTEND WEB DEVELOPER</h4>
          <a target='_blank ' href="https://drive.google.com/file/d/1SxQ9Qz5HbkJF0BmgnX4l5BROLeBUEAnC/view?usp=sharing"><button className="btn btn-outline">DOWNLOAD CV</button></a>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
