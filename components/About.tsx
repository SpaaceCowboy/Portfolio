import React from 'react'
import { motion } from "framer-motion";
import { PageInfo } from '../typings';


type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{duration: 3.5}}
    className='relative flex flex-col h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <motion.img 
        initial={{
            x: -200,
        }}
        transition={{
            duration: 1.5
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        src="/shayan.jpeg"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
        object-cover md:rounded-lg md:w-64 md:h-10 xl:w-[300px] xl:h-[400px]'
        />

        <div className='space-y-10 px-10 md:px-10'>
            <h4
            className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
            </h4>
            <p className='text-base text-justify'>
            Web Developer with more than 2-years professional experience focused on web-technologies, backend services, Interface Design, aiming to use my proven programming skills to effectively Design and develop your 
            desired website.
            </p>
        </div>

    </motion.div>
  )
}

export default About