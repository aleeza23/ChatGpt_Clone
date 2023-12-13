import React from "react";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const Signup = () => {
  return <>
    <FormContainer heading='Glad to see you'>
      
      <h1 className="font-bold text-3xl mb-2 ">Let's Signup!</h1>
      <p className=" mb-3">Sign up to create your account , Or already have an account. <Link to={'/log-in'} className="text-blue-color underline">Login</Link></p>
      <form className="max-w-md mx-auto font-text-family">
       
    <div className="grid md:grid-cols-2 md:gap-6">
       <div className="relative z-0 w-full mb-5 mt-3 group">
          <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-blue-color peer" placeholder=" " required />
          <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-blue-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
       </div>
          <div className="relative z-0 w-full mb-5 mt-3 group">
          <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-blue-color peer" placeholder=" " required />
          <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-blue-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
       </div>
    </div>
        <div className="relative z-0 w-full mb-5 mt-3 group">
          <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-blue-color peer" placeholder=" " required />
          <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-blue-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-5 mt-3 group">
          <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-blue-color peer" placeholder=" " required />
          <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-blue-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <button type="submit" className= "w-full bg-primary-color py-1 px-5 text-white rounded-full mt-5 hover:opacity-90">Submit</button>
      </form>
      
          </FormContainer>
  </>;
};

export default Signup;
