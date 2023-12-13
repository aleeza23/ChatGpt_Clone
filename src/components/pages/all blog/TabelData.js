import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const TabelData = ({index,currElm}) => {
  return <>
     <tr key={index} className='odd:bg-white  border-b '>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
                >
                  {currElm.productName}
                </th>
                <td className='px-6 py-4'>{currElm.color}</td>
                <td className='px-6 py-4'>{currElm.category}</td>
                <td className='px-6 py-4'>${currElm.price}</td>
                <td className='px-6 py-4'>
                  <button className='text-xl text-blue-color'>
                    <FaEdit />
                  </button>
                </td>
                <td className='px-6 py-4'>
                  <button className='text-xl text-blue-color'>
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
  </>;
};

export default TabelData;
