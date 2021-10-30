import face from '../assets/cartoonHead.png'
import Image from 'next/image'
import { ContactSection } from '../components/contact_us'
import { useContext } from 'react'
import { PageContext } from '../helper/ContextProvider'

export default function HomeSection () {
  const { isActive } = useContext(PageContext)

  return (
    <header>
      <main
        className={
          isActive.lastPage
            ? ' AnimateLeft mainWindow  bg-primary projectTitle'
            : ' AnimateUp mainWindow  bg-primary projectTitle'
        }
        id='header'
      >
        <div className='justify-center items-center flex md:flex-row flex-col relative py-24 p-6 '>
          <div className='lg-px-64 max-w-6xl py-32 px-2'>
            <p className='text-dark font-light text-4xl py-4 RotateToPlace'>
              Hey,
            </p>
            <h2 className='text-dark font-light text-8xl py-4 RotateToPlace'>
             I am <span className='text-light flickingAnimation '>Bharath</span>
            </h2>
            <p className='text-dark font-normal text-4xl rotate360'>
              Web Designer
            </p>
            <p className='text-dark font-normal text-4xl rotate360 '>
              MERN Developer
            </p>
            <p className='text-dark font-normal text-4xl rotate360'>
              Photoshop
            </p>
            <p className='text-dark font-bold text-xl mt-4 RotateToPlace'>
              From India
            </p>
          </div>
          <div className='animateScale max-w-xl '>
            <Image src={face} alt='face' className='animateHead' />
          </div>
          <ContactSection />
        </div>
      </main>
    </header>
  )
}
