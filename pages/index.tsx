  import type { NextPage } from 'next'
  import Head from 'next/head'
  import Header from "../components/Header"
  import Hero from "../components/Hero"
  import About from "../components/About"
  import Experience from "../components/Experience"
  import Skills from "../components/Skills"
  import Projects from "../components/Projects"
  import ContactMe from "../components/ContactMe"
  import { useEffect, useState } from 'react'

  const Home: NextPage = () => {
    const [domLoaded, setDomLoaded] = useState(false)

    useEffect(() => {
      setDomLoaded(true)
    }, [])

    return (
      <>
      {domLoaded && ( 
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
      overflow-y-scroll z-0 overflow-x-hidden  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin'>
        <Head>
          <title>Portfolio</title>
        </Head>

        <Header />

        <section id='hero' className='snap-start'>
          <Hero />
        </section>

        <section id='about' className='snap-center'>
          <About />
        </section>

        <section id='experience' className='snap-center'>
          <Experience />
        </section>

        <section id='skills' className='snap-start'>
          <Skills />
        </section>

        <section id='projects' className='snap-start'>
          <Projects />
        </section>

        <section id='contactme' className='snap-start'>
          <ContactMe />
        </section>

      <a href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
            cursor-pointer'
            src="https://i.imgur.com/e2yvD6A.png" alt="" />
          </div>
        </footer>
      </a>

      </div>
      )}
      </>
    )
  }

  export default Home

  export 
