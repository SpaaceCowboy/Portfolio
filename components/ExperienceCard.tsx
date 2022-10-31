import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col xl:mt-20 rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity:1, y:0}}
        viewport={{once:true}}
        className='w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px]
        object-cover object-center' 
        src="shayan-shoeibzadeh.jpeg" alt="" 
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Web Developer</h4>
            <p className='font-bold text-2xl mt-1'>Felorida</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-8 w-8 rounded-full'
                 src="/next-js-seeklogo.com.svg" alt="" />
                 <img className='h-8 w-8 rounded-full'
                 src="/next-js-seeklogo.com.svg" alt="" />
                 <img className='h-8 w-8 rounded-full'
                 src="/next-js-seeklogo.com.svg" alt="" />
                 <img className='h-8 w-8 rounded-full'
                 src="/next-js-seeklogo.com.svg" alt="" />
            </div>
           
            <p className='uppercase py-5 text-gray-300'>Started work ... - ended...</p>
            
            <ul className='list-disk space-y-4 ml-5 text-lg'>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>

            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard