import face from '../assets/cartoonHead.png'
import Image from 'next/image'
import { ContactSection } from '../components/contact_us'
import { useContext } from 'react'
import { PageContext } from '../components/ContextProvider'

export const HeaderSection = () => {

     const { isActive } = useContext(PageContext)

  return (
    <header >
      <main
        className={
          isActive.lastPage
            ? 'justify-evenly items-center flex md:flex-row flex-col relative AnimateLeft contactWindow p-24 bg-primary'
            : 'justify-evenly items-center flex md:flex-row flex-col relative AnimateUp contactWindow p-24 bg-primary'
        }
        id='header'
      >
        <div className='imageContain animateRotate pl-8 md:pl-24 xl-pl-128 lg-pl-64 max-w-4xl '>
          <p className='text-dark font-extralight text-4xl py-4 '>Hey,</p>
          <h2 className='text-dark font-extralight text-8xl py-4 '>
            I'm{' '}
            <span className='text-light font-light delayAnimate '>Bharath</span>{' '}
          </h2>
          <span className='text-dark font-extralight text-4xl '>
            Web Designer
          </span>
          <p className='text-dark font-extralight text-4xl '>
            MERN Stack Developer
          </p>
          <p className='text-dark font-extralight text-4xl '>Photoshop*</p>
          <p className='text-dark font-extralight text-2xl mt-4'>From India</p>
        </div>
        <div className='slideRight max-w-xl max-h-1/2 mr-16'>
          <Image src={face} alt='face' className='animateHead' />
        </div>
        <ContactSection />
      </main>
    </header>
  )
}
