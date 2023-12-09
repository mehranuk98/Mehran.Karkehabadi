import React, { useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import {Leaf1,Leaf2} from "../assets";
import { useNavigate } from "react-router-dom";
const Contact = () => {

  const navigate = useNavigate();
  const routeChange = () =>{ 
    window.location.replace('https://google.com')
  }
 
  
  return(
    <section id="contact" className="flex items-center justify-center flex-col gap-12 relative my-16">
      {/* title */}

      <div className="w-full flex justify-center items-center pt-20 pb-10">
        <motion.div 
        initial={{opacity:0,width:0}}
        animate={{opacity:1 ,width:200}}
        transition={{delay:0.4}}
        className="flex justify-around items-center w-40">
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-2xl font-semibold">Contact Me</p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt=""/>
        </motion.div>
      </div>

      {/* main content */}
      <div className="w-full flex flex-col items-center justify-start gap-4">
        {/* <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          
            <input name="firstName" type="text" value={data.firstName} onChange={handleTextChange} placeholder="First Name" className="w-full rounded-md px-4 py-3 border border-[rgba(255,255,255,0.3)]
            bg-transparent focus:border-primary outline-none text-white" />
            
            <input name="lastName" type="text" value={data.lastName} onChange={handleTextChange} placeholder="Last Name" className="w-full rounded-md px-4 py-3 border border-[rgba(255,255,255,0.3)]
            bg-transparent focus:border-primary outline-none text-white" />

          </div>

            <input name="email" type="email" value={data.email} onChange={handleTextChange} placeholder="Email" className="w-full rounded-md px-4 py-3 border border-[rgba(255,255,255,0.3)]
              bg-transparent focus:border-primary outline-none text-white" />

            <textarea name="message" type="text" value={data.message} onChange={handleTextChange} placeholder="Message here..." cols='0' rows="10" className="w-full rounded-md px-4 py-3 border border-[rgba(255,255,255,0.3)]
            bg-transparent focus:border-primary outline-none text-white" />

            <div className="w-full flex items-center justify-center lg:justify-end">
              <button className="w-full lg:w-auto px-12 py-3 bg-gradient-to-br border border-primary from-primary to-secondary rounded-md
              hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary
              hover:text-primary" onClick={sendMessage}>Send</button>
            </div>
        </div> */}

        <form className="w-full flex flex-col items-center justify-start gap-4" method='POST' action="https://getform.io/f/962e8e88-ee4d-4b2c-b867-cad00aafd310">
              
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
            
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input name="firstName" type="text" placeholder="First Name" className="w-full rounded-md px-4 py-3 border border-[rgba(255,255,255,0.3)]
          bg-transparent focus:border-primary outline-none text-white" />
          
          <input name="lastName" type="text"  placeholder="Last Name" className="w-full rounded-md px-4 py-3 border border-[rgba(255,255,255,0.3)]
          bg-transparent focus:border-primary outline-none text-white" />
          </div>

          <input name="email" type="email" placeholder="Email" className="w-full rounded-md px-4 py-3 border border-[rgba(255,255,255,0.3)]
            bg-transparent focus:border-primary outline-none text-white" />
          
          <textarea name="message" type="text" placeholder="Message here..." cols='0' rows="10" className="w-full rounded-md px-4 py-3 border border-[rgba(255,255,255,0.3)]
          bg-transparent focus:border-primary outline-none text-white" />
            <div className="w-full flex items-center justify-center lg:justify-end">
              <button onClick={()=>navigate("/")} className="w-full lg:w-auto px-12 py-3 bg-gradient-to-br border border-primary from-primary to-secondary rounded-md
              hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary
              hover:text-primary font-semibold">Send
              </button>
            </div>
        </div>
        </form>
      </div>
    
    </section>
  )
};

export default Contact;
