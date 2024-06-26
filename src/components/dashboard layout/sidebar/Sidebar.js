import React  from "react";
import SidebarNavs from "./SidebarNavs";

const Sidebar = ({chats, onSelectChat}) => {


  return (
    <>
      <aside
        id='logo-sidebar'
        className={`fixed top-0 left-0 z-40 w-64  h-screen  transition duration-1000 ease-out  -translate-x-full bg-primary-color border-r  border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label='Sidebar'
      >
    
        <div className='h-full  bg-primary-color   px-3 pb-4 overflow-y-auto  '>
          <SidebarNavs chats={chats} onSelectChat={onSelectChat} />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
