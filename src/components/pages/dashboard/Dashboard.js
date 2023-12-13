import React from "react";
import DashboardLayout from "../../dashboard layout/DashboardLayout";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
       
            <div className='grid grid-cols-3 gap-4 mb-4'>
          {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((currElm, index) => {
            return(
              <div key={index} className='flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800'>
                <p className='text-2xl text-gray-400 dark:text-gray-500'>
                  <svg
                    className='w-3.5 h-3.5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 18 18'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M9 1v16M1 9h16'
                    />
                  </svg>
                </p>
              </div>
            )
          })}
          </div>
         
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
