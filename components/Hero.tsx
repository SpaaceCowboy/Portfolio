import React from 'react'
/* React-simple-typewriter */
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

/* React-simple-typewriter */

type Props = {}

/* Simple-typewriter hooks => Docs */
function Hero({}: Props) {
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
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover' 
        src="/shayan-shoeibzadeh.jpeg" alt="" 
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software Engineer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
            <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>  

            <div className='pt-5'>
                <a href='#about'>
                <button className='heroButton'>About</button>
                </a>
                <a href='#experience'>
                <button className='heroButton'>Experience</button>
                </a>
                <a href='#skills'>
                <button className='heroButton'>Skills</button>
                </a>
                <a href='#projects'>
                <button className='heroButton'>Project</button>
                </a>

            </div>
        </div>

    </div>
  )
}

export default Hero