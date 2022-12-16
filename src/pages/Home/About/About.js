import React from 'react';
import photo from '../../../assets/profile.png'
import black from '../../../assets/blackbg.jpg'
import './About.css'

const About = () => {
    return (

            <div className="hero mb-24">
  <div className="hero-content flex-col lg:flex-row gap-10">
    <div className=' w-full  lg:w-1/3'>
    <img src={photo} className="mx-auto rounded-lg shadow-2xl" alt='' />
    </div>
    <div className='pl-5 md:pl-0 md:w-4/5 lg:w-2/5'>
        <p className='font-semibold text-2xl mb-4 text-secondary underline'>About Me</p>
      <p className='mb-3 font-semibold'>Hi! My name is Dibbo Das. I am a Web Developer from Bangladesh, and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success.</p>
      <div>
        <ul><li className='mb-2 font-semibold'><span className='font-semibold'>Name</span> : Dibbo Das</li></ul>
        <ul><li className='mb-2 font-semibold'><span className='font-semibold'>Date of Birth</span> : January 01, 1990</li></ul>
        <ul><li className='mb-2 font-semibold'><span className='font-semibold'>Address</span> : Chattagram, Bangladesh</li></ul>
        <ul><li className='mb-2 font-semibold'><span className='font-semibold'>Interest</span> : Sports,Travelling</li></ul>
        <ul><li className='mb-2 font-semibold'><span className='font-semibold'>Email</span> : dibbodas228@gmail.com</li></ul>
        <ul><li className='font-semibold'><span className='font-semibold'>Phone</span> : +1-2234-5678-9-0</li></ul>
      </div>
    </div>
  </div>
</div>
    );
};

export default About;