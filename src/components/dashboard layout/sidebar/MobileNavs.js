import React from "react";
import SidebarNavs from "./SidebarNavs";

const MobileNavs = () => {
  return <>
 <aside  className="fixed bg-primary-color top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform  border-r border-gray-200 sm:translate-x-0  transform-none">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-primary-color">
     <SidebarNavs />
   </div>
</aside>
  </>;
};

export default MobileNavs;
