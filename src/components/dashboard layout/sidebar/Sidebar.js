import React, {useState} from "react";
import SidebarNavs from "./SidebarNavs";
import {Link} from "react-router-dom";
import pcLogo from "../../../assets/desktop-logo.png";

const Sidebar = () => {
  return (
    <>
      <aside
        id='logo-sidebar'
        className={`fixed top-0 left-0 z-40 w-64  h-screen pt-8 transition-transform  -translate-x-full bg-primary-color border-r  border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label='Sidebar'
      >
        <Link href='/' className=' ms-2 md:me-24   hidden sm:flex'>
          {/* <img src={pcLogo} className='w-52 me-3 logo' alt=' Logo' /> */}
          <h1 className="font-heading-family text-white text-3xl">Your Logo</h1>
        </Link>
        <div className='h-full  bg-primary-color   px-3 pb-4 overflow-y-auto  dark:bg-gray-800'>
          <SidebarNavs />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
