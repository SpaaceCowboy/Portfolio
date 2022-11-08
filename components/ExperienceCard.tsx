import React from 'react'
import { motion } from "framer-motion"
import {Experience} from "../typings"
import { urlFor } from '../sanity'
import Image from 'next/image'

type Props = {
    experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <div>
    <article className='flex flex-col mt-10 rounded-lg items-center space-y-7 flex-shrink-0 
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
        src={urlFor(experience.companyImage).url()}
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Web Developer</h4>
            <p className='font-bold text-2xl mt-1'>Felorida</p>
            <div className='flex space-x-2 my-2'>
                {experience.technologies.map(technology => (
                  <div key={technology._id} className='relative h-10 w-10 rounded-full'>
                    <Image  src={urlFor(technology.image).url()}
                     alt="" 
                     layout='fill'/>
                  </div>
                ))}
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
    
    </div>
  )
}

export default ExperienceCard