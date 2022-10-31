import React from 'react';
/* react Social-icon library */
import { SocialIcon } from "react-social-icons";
/* react motion library */
import { motion } from "framer-motion";

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }} 
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className="flex flex-row item-center">
            {/* Social Icons */}
            <SocialIcon 
            url="https://twitter.com" 
            fgColor="gray" 
            bgColor="transparent" 
            />
            <SocialIcon 
            url="https://twitter.com" 
            fgColor="gray" 
            bgColor="transparent" 
            />
            <SocialIcon 
            url="https://twitter.com" 
            fgColor="gray" 
            bgColor="transparent" 
            />          
        </motion.div>
        <a href="#contactme">
        <motion.div
         initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
         }}
         animate={{
            x: 0,
            opacity: 1,
            scale:1,
         }}
         transition={{
            duration: 1.5
         }}
         className='flex flex-row item-center text-gray-300 cursor-pointer'>
        <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor="gray" 
            bgColor="transparent" 
             />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400 pt-4'>
            Get In Touch
            </p>
        </motion.div>
        </a>
    </header>
  )
}

export default Header
