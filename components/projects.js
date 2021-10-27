import { useContext} from 'react'
import { PageContext } from './ContextProvider'
import {Pokemon} from '../components/pokemon'
import {RITE} from '../components/rite'
import {PasswordAuth} from '../components/password'
import { Redux } from '../components/reduxCounter'
import {JavaGUI} from '../components/javaBall'
import {RandomProjects} from '../components/randomJS'

export const Projects = () => {
   const {  isActive } = useContext(PageContext)

   return (
    <>
      <div
        className={
          isActive.lastPage === 'home'
            ? 'AnimateRight projects'
            : 'AnimateLeft  projects'
        }
      >
        <section className='lg-p-32 xl-p-64 pt-16'>
          <p className=' text-dark font-extralight text-6xl p-16  slideDown'>
            Projects
          </p>
          <div className='flex flex-row flex-wrap justify-center items-center animateRotate'>
            <Pokemon />
            <RITE/>
            <PasswordAuth />
            <Redux />
            <JavaGUI />
            <RandomProjects/>

          </div>
        </section>
      </div>
    </>
  )
}
