import Head from 'next/head'
import {HeaderSection} from '../components/header'
import { Navbar } from '../components/navbar'
import { useContext, useEffect,useState } from 'react'
import { PageContext } from '../components/ContextProvider'
import { Projects } from '../components/projects'
import { ContactUs } from '../components/contact'

export default function Home() {
  const [color,setColor]= useState('')
 const {  isActive } = useContext(PageContext)
 const [title,setTitle] = useState('Hey, its Bharath')
  useEffect(() => {
    const timer = setTimeout(() => {
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
      
    }, 1000);

  }, [isActive])


   return (
     <div className='relative'>
       <Head>
         <title>{title}</title>
         <link rel='shortcut icon' href='..//head.png' />
         <base target='_blank' />
       </Head>

       <div className={color}>
         <Navbar />
         {isActive?.home && <HeaderSection />}
         {isActive?.project && <Projects />}
         {isActive?.contact && <ContactUs />}

         {/* <HeaderSection />
          */}
       </div>
     </div>
   )
}
