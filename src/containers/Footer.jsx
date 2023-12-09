import { AnimatePresence } from "framer-motion";
import React from 'react'
import HomeSocialLinks from '../components/HomeSocialLinks'
import { Socials } from '../utils/helper'

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center justify-start mt-32'>
        <p className='text-3xl tracking-wide text-white'>Mehran Karkehabadi</p>
        <div className="flex items-center justify-center gap-16 mt-16">
            <AnimatePresence>
                {Socials && Socials.map((item,index)=>(
                    <HomeSocialLinks key={index} data={item} index={index}/>
                ))}
            </AnimatePresence>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12 gap-3">
            <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Iste quibusdam odio
            unde temporibus eveniet incidunt, laudantium
            molestiae praesentium ratione voluptatum!
            </p>
            <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Iste quibusdam odio
            unde temporibus eveniet incidunt, laudantium
            molestiae praesentium ratione.
            </p>
            <div className="w-full flex flex-col items-center justify-center gap-3">
                <p className="text-white text-center">+98 937 207 9101</p>
                <p className="text-white text-center">Mehran.karkehabadi98@gmail.com</p>
            </div>       
        </div>
    </div>
  )
}

export default Footer