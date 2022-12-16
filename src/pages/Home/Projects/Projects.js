import React from "react";
import { Link } from "react-router-dom";
import mobile from '../../../assets/mobile.jpg'
import passion from '../../../assets/passion.jpg'
import photography from '../../../assets/photography.jpg'

const Projects = () => {
  return (
    <div className="mb-24 w-4/5 mx-auto">
      <h2 className="text-2xl text-center text-secondary font-bold py-5 my-5">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="card card-compact mb-10 md:mb-0 mx-auto border border-black  bg-base-100 shadow-xl">
          <figure>
            <img src={ mobile} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mobile Market</h2>
            <p>•This a mobile resell market that users can buy their mobiles.Sellers can add their selling product.Admin can control both sellers and Buyers.</p>
            <div className="card-actions justify-end">
              
                <Link to='/projectdetails1'><button className="btn btn-primary">Details</button></Link>
              
              <a target="_blank " href="https://mobile-market-51c9e.web.app/">
                <button className="btn btn-primary">View Site</button>
              </a>
            </div>
          </div>
        </div>
      <div className="card card-compact mx-auto mb-10 md:mb-0  border border-black bg-base-100 shadow-xl">
          <figure>
            <img src={passion} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Passion Chasers</h2>
            <p>•This a learning based website where you can learn many skills.You can also download the course details as pdf format.</p>
            <div className="card-actions justify-end">
              
                <Link to='/projectdetails2'><button className="btn btn-primary">Details</button></Link>
              
              <a target="_blank " href="https://mobile-market-51c9e.web.app/">
                <button className="btn btn-primary">View Site</button>
              </a>
            </div>
          </div>
        </div>
      <div className="card card-compact mx-auto border border-black  bg-base-100 shadow-xl">
          <figure>
            <img src={photography} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Paradise Photography</h2>
            <p>•This is a photography based application.You can get six type of services from this site.You can also post your review after getting service.</p>
            <div className="card-actions justify-end">
              
                <Link to='/projectdetails3'><button className="btn btn-primary">Details</button></Link>
              
              <a target="_blank " href="https://mobile-market-51c9e.web.app/">
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
