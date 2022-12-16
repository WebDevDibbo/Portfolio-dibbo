import React from 'react';
import photo1 from '../../assets/photo1.png'
import photo2 from '../../assets/photo2.png'
import photo3 from '../../assets/photo3.png'

const ProjectDetails3 = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
            <div className="card card-compact mx-auto  bg-base-100 shadow-xl">
            <figure>
            <img src={photo1} alt="Shoes" />
          </figure>
            </div>
            <div className="card card-compact mx-auto  bg-base-100 shadow-xl">
            <figure>
            <img src={photo2} alt="Shoes" />
          </figure>
            </div>
            <div className="card card-compact mx-auto  bg-base-100 shadow-xl">
            <figure>
            <img src={photo3} alt="Shoes" />
          </figure>
            </div>
            </div>
           <div className='mt-10 my-4 border border-black py-4 pl-4'>
            <h2 className='text-2xl underline mb-2'>Features : </h2>
            <p>•1.Sigle Page Application.</p>
            <p>•2.It has many service topics.</p>
            <p>•3.It has blog Routes.</p>
            <p>•4.It has my review Route.</p>
            <p>•5.You can post your review.</p>
            <p>•6.You can delete your review.</p>
           </div>
           <div className='flex justify-center items-center mb-10'>
           <div className='mr-2'>
           <a target="_blank " href="https://github.com/dibbodas12/Paradise-Photography">
                <button className="btn btn-primary">Github Client</button>
              </a>
           </div>
           <div className='mr-2'>
           <a target="_blank " href="https://github.com/dibbodas12/Paradise-Photography-Server">
                <button className="btn btn-primary">Github Server</button>
              </a>
           </div>
           <div>
           <a target="_blank " href="https://paradise-photography.web.app/">
                <button className="btn btn-primary">View Site</button>
              </a>
           </div>
           </div>
        </div>
    );
};

export default ProjectDetails3;