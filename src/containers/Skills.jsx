import React from "react";
import {Leaf1,Leaf2,about} from "../assets";
import { AnimatePresence,motion } from "framer-motion";
import SkillCard from "../components/SkillCard";


const Skills = () => {
  return(
    <section id="skills" className="flex items-center justify-center flex-col gap-12 relative my-16">

      {/* title */}

      <div className="w-full flex justify-center items-center py-24">
        <motion.div 
        initial={{opacity:0,width:0}}
        animate={{opacity:1 ,width:200}}
        transition={{delay:0.4}}
        className="flex justify-around items-center w-40">
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r text-2xl font-semibold from-primary to-secondary ">Skills</p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt=""/>
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className='flex flex-col px-6 my-auto'>
          <h2 className='text-primary'>My Skills & Work Experience :</h2>
        <div><p className='my-5 text-white text-base text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis itaque maxime quas? Accusamus rerum nisi 
            voluptatem modi architecto cum recusandae, quasi placeat 
            nemo cupiditate vero animi aliquid ratione deleniti facere?
          </p></div>
         <div><p className='my-5 text-white text-base text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis itaque maxime quas? Accusamus rerum nisi 
            voluptatem modi architecto cum recusandae, quasi placeat 
            nemo cupiditate vero animi aliquid ratione deleniti facere?
          </p></div>
         <div><p className='my-5 text-white text-base text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis itaque maxime quas? Accusamus rerum nisi 
            voluptatem modi architecto cum recusandae, quasi placeat 
            nemo cupiditate vero animi aliquid ratione deleniti facere?
          </p></div>
        </div>

        {/* image section */}
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
          <SkillCard skill={"HTML 5"} percentage={"95%"} color={"#FF3F3F"} move={true}/>
          <SkillCard skill={"CSS 3"} percentage={"85%"} color={"#008FFF"} />
          <SkillCard skill={"Bootstrap"} percentage={"90%"} color={"#7610F6"} move={true} />
          <SkillCard skill={"Tailwind"} percentage={"90%"} color={"#38BDF8"} />
          <SkillCard skill={"Java script"} percentage={"75%"} color={"#E8D44D"} move={true} />
          <SkillCard skill={"React"} percentage={"85%"} color={"#00FFF3"} />
          <SkillCard skill={"Next js"} percentage={"80%"} color={"#FFFFFF"} move={true} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
