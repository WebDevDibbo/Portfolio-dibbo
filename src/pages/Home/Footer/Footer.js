import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
   
      <footer className="p-4 bg-black text-white">
      <div className="flex justify-center gap-5 my-5">
          <a
            target="_blank "
            href="https://www.facebook.com/dibbo.das.353/"
            className="text-xl "
          >
            <FaFacebookF></FaFacebookF>
          </a>
          <a
            target="_blank "
            href="https://www.linkedin.com/in/dibbo-das/"
            className="text-xl"
          >
            <FaLinkedinIn></FaLinkedinIn>
          </a>
          <a
            target="_blank "
            href="https://github.com/dibbodas12"
            className="text-xl"
          >
            <FaGithub></FaGithub>
          </a>
        </div>
        <div className="text-center py-4">
         <p>Copyright © 2022 - All right reserved.</p>
        </div>
        
      </footer>
    
  );
};

export default Footer;
