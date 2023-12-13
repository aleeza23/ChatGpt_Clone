import React from "react";
import DashboardLayout from "../../dashboard layout/DashboardLayout";
import TabelData from "./TabelData";

const AllBlog = () => {
  const tabelHead = ['Product name', 'Color' , 'Category', 'Price' , '' , '']

  const tableData = [
    {
      productName: "Apple MacBook Pro 17\"",
      color: "Silver",
      category: "Laptop",
      price: 2999,
    },
    {
      productName: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: 1999,
    },
    {
      productName: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: 99,
    },
    {
      productName: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: 799,
    },
    {
      productName: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: 999,
    },
  ];
  
  
  return (
    <>
      <DashboardLayout>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full tabel text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>            
              <tr>
              {tabelHead.map((curElm, index) => <th key={index} scope='col' className='px-6 py-3 font-bold text-xl'>
                 {curElm}
                </th>
              )}               
              </tr>
            </thead>

            <tbody>
            {tableData.map((currElm,index) => <TabelData currElm={currElm} index={index} />)}             
            </tbody>
          </table>
        </div>
      </DashboardLayout>
    </>
  );
};

export default AllBlog;
