import React from "react";

const Content = ({children}) => {
  return (
    <>
     
      <div className='p-4 mt-3 sm:ml-64'>
        <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
          {children}
        </div>
      </div>
    </>
  );
};

export default Content;
