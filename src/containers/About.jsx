import React from "react";
import {Leaf1,Leaf2,about} from "../assets";
import { AnimatePresence,motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="flex items-center justify-center flex-col gap-12 relative my-16">

      {/* title */}

      <div className="w-full flex justify-center items-center py-24">
        <motion.div 
        initial={{opacity:0,width:0}}
        animate={{opacity:1 ,width:200}}
        transition={{delay:0.4}}
        className="flex justify-around items-center w-40">
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent text-2xl font-semibold bg-clip-text bg-gradient-to-r from-primary to-secondary ">About</p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt=""/>
        </motion.div>

      </div>

      {/* main content */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* image section */}
        <div className="w-full flex justify-center items-center px-8">
          <div className="w-[400px] h-[500px] p-[2px] rounded-md bg-gradient-to-br relative from-primary to-secondary">
              <img className="w-[398px] h-[496px] rounded-md" alt='' src={about}/>
              <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br bg-primary to-secondary rounded-md blur [5px] -z-10"></div>
          </div>
        </div>
        {/* content section */}
        <div className="px-6 my-auto">
          <div><p className="my-5 text-white text-base text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Id eligendi voluptatibus asperiores pariatur 
          sapiente vel esse quis quam, itaque sit? Maiores
          necessitatibus ad laudantium nihil quos debitis quod
          mollitia unde!
          </p></div>
          <div><p className="my-5 text-white text-base text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Id eligendi voluptatibus asperiores pariatur 
          sapiente vel esse quis quam, itaque sit? Maiores
          necessitatibus ad laudantium nihil quos debitis quod
          mollitia unde!
          </p></div>
          <div><p className="my-5 text-white text-base text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Id eligendi voluptatibus asperiores pariatur 
          sapiente vel esse quis quam, itaque sit? Maiores
          necessitatibus ad laudantium nihil quos debitis quod
          mollitia unde!
          </p></div>
        
        </div>
      </div>
    </section>
  )
};

export default About;
