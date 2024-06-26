import React from "react";
import { Link, useLocation } from "react-router-dom";
import gptLogo from '../../../assets/chatgpt-logo-02AFA704B5-seeklogo.com.png'
import exploreGpt from '../../../assets/pngtree-menu-dots-interface-line-vector-single-icon-png-image_5184363.jpg'
import { FaRegPenToSquare } from "react-icons/fa6";
import { TbSquareToggle } from "react-icons/tb";
import dummyChats from "../../../data/ChatsData";



const navsList = [
  { name: "ChatGpt", path: "", img: gptLogo },
  { name: "Explore GPTs", path: "", img: exploreGpt, },

];

const SidebarNavs = ({ chats, onSelectChat }) => {
  const path = useLocation().pathname;
  return (
    <>
      <div className="flex justify-between text-2xl mt-5 text-gray-500 cursor-pointer">
        <TbSquareToggle />
        <FaRegPenToSquare />

      </div>
      <ul class=' font-sm text-black mt-14 '>
        {navsList.map((currElm, index) => {
          return (
            <li key={index}>
              <Link
                to={currElm.path}
                class={`${path === currElm.path && "active"
                  } ${currElm.class} flex mb-1 text-sm  items-center px-2 py-1  rounded-lg transition ease-out duration-700   hover:bg-hover-bg hover:text-blue-color  group`}
              >
                {currElm.img && <img className='flex-shrink-0 w-7 h-7 bg-white p-1 rounded-full border  transition duration-75 text-sm  group-hover:text-blue-color dark:group-hover:text-white' src={currElm.img} alt="logo" />}
                <span className='flex-1 ms-2 whitespace-nowrap'>{currElm.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
      <ul className="text-sm mt-8">
        {chats?.map((currElm, index) => {
          return (
            <li key={index}>
              <Link
                to={currElm.path}
                class={`${path === currElm.path && "active"
                  } ${currElm.class} flex mb-1 text-sm  items-center px-2 py-1  rounded-lg transition ease-out duration-700   hover:bg-hover-bg hover:text-blue-color  group`}
              >
                <span onClick={() => onSelectChat(currElm.id)} className='flex-1 ms-2 whitespace-nowrap'>{currElm.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default SidebarNavs;
