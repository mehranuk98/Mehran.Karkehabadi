import React, { useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
const MenuItem = ({menu,item}) => {

  const[isHoverred,setIsHoverred]=useState(false)

  return (
    <a href={menu.uri} className="w-12 lg:w-8 h-12 lg:h-8 flex items-center justify-center group cursor-pointer 
    hover:bg-gradient-to-br rounded-full hover:from-primary hover:to-secondary"
    onMouseEnter={()=>setIsHoverred(true)}
    onMouseLeave={()=>setIsHoverred(false)}
    >
        
      <menu.Icon className={`text-texlight group-hover:text-bgPrimary text-xl`}/>
      {/* tool tip */}
      <AnimatePresence>
        {isHoverred && (
          <motion.div
          initial={{opacity:0, x:-25}}
          animate={{opacity:1, x:0}}
          exit={{opacity:0 ,x:-25}}
          className="hidden lg:block absolute bg-white rounded-md px-6 py-2 -left-[130px] after:absolute after:-right-1 after:top-3 after:w-3 after:h-3 after:bg-white after:rotate-45" 
          style={{boxShadow:"inset 0px 0px 10px rgba(0,0,0,0.4)"}}>

          <p className="text-bgPrimary font-bold">{menu?.name}</p>
        </motion.div>
        )}
      </AnimatePresence>
    </a>
    );
};

export default MenuItem;
