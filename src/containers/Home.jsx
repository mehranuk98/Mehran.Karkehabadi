import React from "react";
import { AnimatePresence,motion } from "framer-motion";
import { Me } from "../assets";
import Typed from 'react-typed';
import {Socials} from '../utils/helper'
import HomeSocialLinks from "../components/HomeSocialLinks";
const Home = () => {
  return (
    <section id="home" className="flex items-center justify-center flex-col gap-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">

        {/* content section */}
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
            <h2 className="text-3xl text-white">
              Hello,It's me
              <span className="block tracking-wider text-4xl lg:text-5xl mt-4 text-white"> Mehran Karkeh abadi</span>
            </h2>
            {/* typewritter */}
        <h2 className="text-2xl text-white ">And i have experience working with : <Typed className='md:text-3xl text-2xl text-primary'
              strings={['Next js','React Js','Bootstrap' ,'Tailwind']}
              typeSpeed={120} 
              backSpeed={140} 
              loop
          /></h2>
        
          <p className="text-base text-white mt-2 lg:text-start text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Illum fugiat voluptates porro odit blanditiis dicta.
          </p>

          {/* social media links */}
          
            <div className="flex items-center justify-center gap-16 mt-16">
              <AnimatePresence>
                {Socials && Socials.map((item,index)=>(
                  <HomeSocialLinks key={index} data={item} index={index}/>
                ))}
              </AnimatePresence>
            </div>
        </div>

        {/* hero image */}
        <div className="w-full h-full flex items-start justify-center lg:items-center">
          <motion.img 
          initial={{y:0}}
          animate={{y:[-10,10,-10]}}
          transition={{
            repeat:Infinity,
            duration:2,
            ease: "linear"
          }}
          src={Me} className="w-[700px] h-[600px] object-contain"/>
        </div>
      </div>
    </section>
  )
  
};

export default Home;
