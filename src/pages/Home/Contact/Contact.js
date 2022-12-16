import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";

const Contact = () => {
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zsxvnbs', 'template_58yzg5s', e.target, 'MKnwQrktFaWognh0d')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
          toast.success('Message send Successfully');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
   
      <div className="card py-10 text-center shadow-xl">
        <p className="text-xl font-bold text-secondary">Contact Me</p>
        {/* <h2 className="text-4xl text-black">Stay connected with us</h2> */}
        <div>
        
        </div>
        <form action="" onSubmit={sendEmail}>
        <div className="card-body mx-auto w-full md:w-1/2 lg:w-1/2 text-center">
        <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered "
            required
          />
          <textarea
            className="textarea textarea-bordered h-24 "
            name="message"
            placeholder="Your message"
            required
          ></textarea>
        

          <div className="card-actions justify-center mt-8">
            <button className="btn btn-outline font-bold border-none  bg-gradient-to-r from-primary to-secondary text-white">
              Submit
            </button>
          </div>
        </div>
        </form>
      </div>
    
  );
};

export default Contact;
