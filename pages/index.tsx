  import type { GetStaticProps } from 'next'
  import Head from 'next/head'
  import Image from 'next/image'
  import {About, Header, Hero, WorkExperience, Skills, Projects, ContactMe } from "../components/Links"
  import { useEffect, useState } from 'react'
  import { Experience, PageInfo, Project, Skill, Social } from "../typings" 
  import { fetchPageInfo, fetchExperiences, fetchProjects, fetchSkills, fetchSocial} from "../utils/Links"


  type Props = {
    pageInfo: PageInfo
    experiences: Experience[]
    skills: Skill[]
    projects: Project[]
    socials: Social[ ]

  }

  const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
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

        <Header socials={socials} />

        <section id='hero' className='snap-start'>
          <Hero pageInfo={pageInfo} />
        </section>

        <section id='about' className='snap-center'>
          <About pageInfo={pageInfo} />
        </section>

        <section id='projects' className='snap-start'>
          <Projects projects={projects} />
        </section>

        <section id='skills' className='snap-start'>
          <Skills/>
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

  export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocial();

    return {
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
        socials,
      },
      // Next.js will attempt to re-generate the page:
      // -when a request comes in
      // - at most once every 10 seconds
      revalidate: 10,
    }
  }
