import React from "react";
import mobile from "../../../assets/mobile.jpg";
import photography from "../../../assets/photography.jpg";
import passion from "../../../assets/passion.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mb-24 w-[90%]   mx-auto">
      <h2 className="text-2xl text-center font-bold py-5 my-5">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card card-compact mx-auto  bg-base-100 shadow-xl">
          <figure>
            <img src={mobile} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mobile Market</h2>
            <div className="card-actions justify-end">
              <a target="_blank " href="https://mobile-market-51c9e.web.app/">
                <button className="btn btn-primary">View Site</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact  mx-auto bg-base-100 shadow-xl">
          <figure>
            <img src={passion} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Passion Chasers</h2>
            <div className="card-actions justify-end">
              <a
                target="_blank "
                href="https://learning-app-auth.firebaseapp.com/"
              >
                <button className="btn btn-primary">View Site</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact  mx-auto bg-base-100 shadow-xl">
          <figure>
            <img src={photography} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Paradise Photography</h2>
            <div className="card-actions justify-end">
              <a target="_blank " href="https://paradise-photography.web.app/">
                <button className="btn btn-primary">View Site</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
