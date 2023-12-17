import React from "react";
import {Link, useLocation} from "react-router-dom";
import {IoIosAddCircleOutline} from "react-icons/io";
import {LuTally3} from "react-icons/lu";
import {TiHomeOutline} from "react-icons/ti";

const navsList = [
  {name: "Dashboard", path: "/", icon: <TiHomeOutline />},
  {name: "Add Blog", path: "/add-blog", icon: <IoIosAddCircleOutline />},
  {name: "All Blog", path: "/all-blog", icon: <LuTally3 />},
];

const SidebarNavs = () => {
  const path = useLocation().pathname;
  return (
    <>
      <ul class='space-y-2 font-medium text-white mt-16 '>
      {navsList.map((currElm , index) => {
        return (
          <li key={index}>
          <Link
            to={currElm.path}
            class={`${
              path === currElm.path && "active"
            } flex  items-center p-2  rounded-lg transition ease-out duration-700   hover:bg-white hover:text-blue-color  group`}
          >
          <span className='flex-shrink-0 w-5 h-5  transition duration-75 text-xl  group-hover:text-blue-color dark:group-hover:text-white'>{currElm.icon}</span>
            <span className='flex-1 ms-3 whitespace-nowrap'>{currElm.name}</span>
          </Link>
        </li>
        )
      })}
      
      </ul>
    </>
  );
};

export default SidebarNavs;
