import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'

import { PageContext } from '../helper/ContextProvider'
import Projects from './projects'
import ContactUs from './contact'
import { Navbar } from '../components/navbar'
import  HomeSection  from './home'



export default function Home() {
    const [color, setColor] = useState('')
    const { isActive } = useContext(PageContext)
    const [title, setTitle] = useState('Hey, its Bharath')
    useEffect(() => {
      setTimeout(() => {
        if (isActive?.home) {
          setColor('homeColor')
          setTitle('Hey, its Bharath')
        } else if (isActive?.project) {
          setColor('projectColor')
          setTitle('My Projects')
        } else {
          setColor('contactColor')
          setTitle('Reach Me')
        }
      }, 1000)
    }, [isActive])
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Portfolio of BharathThirumavalavan' />
        <link rel='shortcut icon' href='..//head.png' />
        <meta charSet='utf-8' />
        <base target='_blank' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>

      <div className={color}>
        <Navbar />
        {isActive?.home && <HomeSection />}
        {isActive?.project && <Projects />}
        {isActive?.contact && <ContactUs />}
      </div>

      {/* <Navbar />
      <HomeSection /> */}
      {/* <Projects /> */}
      {/* <ContactUs /> */}
    </div>
  )
}
