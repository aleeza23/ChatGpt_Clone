import React from "react";

const FormContainer = ({children, heading}) => {
  return (
    <>
      <div className='h-screen grid lg:grid-cols-3'>
        <div className='left-side lg:col-span-2 h-screen  bg-gray-100'>
          <div className='grid grid-cols-1 lg:grid-cols-4 p-3 lg:p-0 items-center h-screen justify-center  '>
            <div className='box w-full h-fit p-12  lg:col-start-2 lg:col-span-2  bg-white shadow-lg border- border-black rounded'>
              {children}
            </div>
          </div>
        </div>
        <div className='right-side bg-primary-color hidden px-8 lg:flex flex-col justify-center items-center text-white '>
          <h1 className='font-heading-family text-3xl mb-4 '>{heading}!</h1>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            porro adipisci sapiente quae praesentium, tempore deleniti sequi
            magnam veniam dolorem dicta eius, perferendis necessitatibus
            temporibus.
          </p>
        </div>
      </div>
    </>
  );
};

export default FormContainer;
