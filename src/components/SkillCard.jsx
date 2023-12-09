import React from "react";
import { AnimatePresence,motion } from "framer-motion";
import CountUp from "react-countup";

const SkillCard = ({skill,percentage,color,move}) => {
  const number = percentage;
  const newNum = number.replace("%", "");

  return(
    <div className={`border border-[rgba(255,255,255,0.3)] rounded-md px-8
    py-3 cursor-pointer group w-full flex items-center justify-between
    relative gap-2`} 
    style={{boxShadow: "inset 0 0 10px rgba(255,255,255,0.3)" , marginLeft: move ? -30 : 20}}>

    {/* name section */}

    <div className="flex-1 flex-col flex gap-2">
      <div className="flex justify-between">
        <p className="text-base text-white">{skill}</p>
        
        <p className="text-base text-white"><CountUp end={newNum}/>%</p>
      </div>

      <div className="w-full h-1 rounded-md overflow-hidden relative bg-[rgba(255,255,255,0.2)]">
        <motion.div
         initial={{width:0}}
         animate={{width:percentage}}
         transition={{duration:1.5}}
         className="h-full absolute top-0 lef-0"
         style={{background : color}}>
        </motion.div>
      </div>
    </div>

    {/* percentage */}
    {/* <div className="w-16 h-12 rounded-md relative overflow-hidden flex items-center justify-center"
    style={{border: `1px solid ${color}`}}>

      <motion.div
        initial={{height:0}}
        animate={{height:percentage}}
        transition={{duration:1.5}}
        className="w-full absolute bottom-0 lef-0 flex items-center justify-center"
        style={{background : color}}>
          <p className="text-bgPrimary z-10 font-sans font-bold">{percentage}</p>
      </motion.div>
    </div> */}
    
    </div>
  )
};

export default SkillCard;
