import React, {useState} from "react";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";
import {Link} from "react-router-dom";
import Header from "./header/Header";
import MobileNavs from "./sidebar/MobileNavs";

const DashboardLayout = ({children}) => {
  const [open, setopen] = useState(false);

  return (
    <>
      <Header open={open} setopen={setopen}/>
     {!open ? <Sidebar open={open} /> : <MobileNavs /> } 
      <Content>{children}</Content>
     {open &&  <div onClick={() => setopen(false)} drawer-backdrop="" className="bg-gray-900/50  fixed inset-0 z-30"></div> } 
    </>
  );
};

export default DashboardLayout;
