import {motion} from "framer-motion";


const DashboardLayout = ({children, setopen, open}) => {
  

  return (
    <>
     
      
     {children}
     
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
