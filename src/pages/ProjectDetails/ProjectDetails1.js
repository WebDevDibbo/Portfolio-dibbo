import React from 'react';
import { Link } from 'react-router-dom';
import mobile1 from '../../assets/mobile1.png'
import mobile2 from '../../assets/mobile2.png'
import mobile3 from '../../assets/mobile3.png'

const ProjectDetails1 = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
            <div className="card card-compact mx-auto  bg-base-100 shadow-xl">
            <figure>
            <img src={mobile1} alt="Shoes" />
          </figure>
            </div>
            <div className="card card-compact mx-auto  bg-base-100 shadow-xl">
            <figure>
            <img src={mobile2} alt="Shoes" />
          </figure>
            </div>
            <div className="card card-compact mx-auto  bg-base-100 shadow-xl">
            <figure>
            <img src={mobile3} alt="Shoes" />
          </figure>
            </div>
            </div>
           <div className='mt-10 my-4 border border-black py-4 pl-4'>
            <h2 className='text-2xl underline mb-2'>Features : </h2>
            <p>•1.Sigle Page Application.</p>
            <p>•2.It has advertise options.</p>
            <p>•3.It has blog section</p>
            <p>•4.It has 3 categories of mobile.</p>
            <p>•5.Admin can access all users.</p>
            <p>•6.Buyer can order products and can also paid money using stripe.</p>
            <p>•7.Buyer can also delete his/her orders.</p>
           </div>
           <div className='flex justify-center items-center mb-10'>
           <div className='mr-2'>
           <a target="_blank " href="https://github.com/dibbodas12/Mobile-Market">
                <button className="btn btn-primary">Github Client</button>
              </a>
           </div>
           <div className='mr-2'>
           <a target="_blank " href="https://github.com/dibbodas12/Mobile-Market-Server">
                <button className="btn btn-primary">Github Server</button>
              </a>
           </div>
           <div>
           <a target="_blank " href="https://mobile-market-51c9e.web.app/">
                <button className="btn btn-primary">View Site</button>
              </a>
           </div>
           </div>
        </div>
    );
};

export default ProjectDetails1;