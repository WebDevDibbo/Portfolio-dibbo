import React from "react";
import './Banner.css'
import dev from '../../../Layout/Main/dev.json';
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="mb-20">
      <div className="hero-content py-5 lg:py-10 flex-col lg:flex-row-reverse">
       <div className=" w-full  lg:w-1/3 ">
       <Lottie classID="md:w-1/3" animationData={dev} loop={true} />
       </div>
        <div className="w-full pl-8 md:pl-12  lg:w-2/5 mt-10 lg:mr-20 md:p-5 ">
          <h3 className="text-2xl font-bold">Hey there!</h3>
          <h1 className="text-4xl mt-5 mb-5 font-bold">I AM <span className="name">DIBBO DAS</span></h1>
          <h4 className="mb-5 font-semibold text-2xl">FRONTEND WEB DEVELOPER</h4>
          <a className="" target='_blank ' href="https://drive.google.com/file/d/1SxQ9Qz5HbkJF0BmgnX4l5BROLeBUEAnC/view?usp=sharing"><button className="btn border-none downloadbtn  bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r from-secondary to-primary">DOWNLOAD CV</button></a>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
