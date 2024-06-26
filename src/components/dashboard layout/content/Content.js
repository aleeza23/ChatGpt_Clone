import React from "react";

const Content = ({children}) => {
  return (
    <>
     
      <div className=' sm:ml-64 mt-auto  '>
        <div className=' content '>
          {children}
        </div>
      </div>
    </>
  );
};

export default Content;
