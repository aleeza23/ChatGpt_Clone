import React, {useState} from "react";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";
import {motion} from "framer-motion";
import Header from "./header/Header";
import MobileNavs from "./sidebar/MobileNavs";

const DashboardLayout = ({children}) => {
  const [open, setopen] = useState(false);

  return (
    <>
      <Header open={open} setopen={setopen} />
      <Sidebar open={open} />
      {open && <MobileNavs open={open} />}
      <Content>{children}</Content>
      {open && (
        <motion.div
          initial={{opacity : 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
          onClick={() => setopen(false)}
          drawer-backdrop=''
          className='bg-gray-900/50 sm:hidden fixed inset-0 z-30'
        ></motion.div>
      )}
    </>
  );
};

export default DashboardLayout;
