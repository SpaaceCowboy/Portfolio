import React from 'react'
import { motion } from "framer-motion"
import { urlFor } from '../sanity'
import {myskill} from "../constants"
 
type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <section className='grid grid-cols-4 gap-5'>
    {myskill.map((myskill) => (
    <div className='relative flex cursor-pointer'>
        <motion.img 
        initial= {{
            x: directionLeft ? -200 : 200,
            opacity: 0 
        }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x:0 }}
        src = {myskill.img}
        className='rounded-full border border-gray-500  w-24 h-24 
        md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale 
        transition duration-300 ease-in-out bg-white '
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition 
        duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        rounded-full z-1'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{myskill.content}</p>
            </div>
        </div>
    </div>
    ))}
    </section>
  )
}

export default Skill