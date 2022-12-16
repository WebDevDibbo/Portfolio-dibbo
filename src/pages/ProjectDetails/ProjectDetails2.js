import React from 'react';
import learn1 from '../../assets/learn1.png'
import learn2 from '../../assets/learn2.png'
import learn3 from '../../assets/learn3.png'

const ProjectDetails2 = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
            <div className="card card-compact mx-auto  bg-base-100 shadow-xl">
            <figure>
            <img src={learn1} alt="Shoes" />
          </figure>
            </div>
            <div className="card card-compact mx-auto  bg-base-100 shadow-xl">
            <figure>
            <img src={learn2} alt="Shoes" />
          </figure>
            </div>
            <div className="card card-compact mx-auto  bg-base-100 shadow-xl">
            <figure>
            <img src={learn3} alt="Shoes" />
          </figure>
            </div>
            </div>
           <div className='mt-10 my-4 border border-black py-4 pl-4'>
            <h2 className='text-2xl underline mb-2'>Features : </h2>
            <p>•1.Sigle Page Application.</p>
            <p>•2.It has many course topics.</p>
            <p>•3.It has blog Routes.</p>
            <p>•4.It has courses Route.</p>
            <p>•5.It can download pdf format file.</p>
            <p>•6.firebase authentication added.</p>
           </div>
           <div className='flex justify-center items-center mb-10'>
           <div className='mr-2'>
           <a target="_blank " href="https://github.com/dibbodas12/Passion-Chasers">
                <button className="btn btn-primary">Github Client</button>
              </a>
           </div>
           <div className='mr-2'>
           <a target="_blank " href="https://github.com/dibbodas12/Passion-Chasers-Server">
                <button className="btn btn-primary">Github Server</button>
              </a>
           </div>
           <div>
           <a target="_blank " href="https://learning-app-auth.firebaseapp.com/">
                <button className="btn btn-primary">View Site</button>
              </a>
           </div>
           </div>
        </div>
    );
};

export default ProjectDetails2;