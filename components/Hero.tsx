import React from 'react'
/* React-simple-typewriter */
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import { PageInfo } from '../typings'
import Image from 'next/image'

/* React-simple-typewriter */

type Props = {
    pageInfo: PageInfo
}

/* Simple-typewriter hooks => Docs */
function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Shayan",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <div className='relative h-32 w-32 mx-auto object-cover '>
           <Image 
           src="/shayan.jpeg" 
           className='rounded-full'
           alt=""
           layout='fill' /> 
        </div>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                {pageInfo?.role}
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
            <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>  

            <div className='pt-5'>
                <a href='#about'>
                <button className='heroButton'>About</button>
                </a>
                <a href='#project'>
                <button className='heroButton'>Projects</button>
                </a>
                <a href='#skills'>
                <button className='heroButton'>Skills</button>
                </a>
                <a href='#contactme'>
                <button className='heroButton'>Contact me </button>
                </a>

            </div>
        </div>

    </div>
  )
}

export default Hero